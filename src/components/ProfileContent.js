import "../css/main.css"
import QuestionList from "./QuestionList"
import TopQuestions from "./TopQuestions"
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from 'react-router-dom';
import "../css/profile.css"
import "../css/topTag.css"
import moment from "moment"
import Badges from "./Badges"
import TopTags from "./TopTags"

export default function MainContent({ history }) {
    const [userData, setUserData] = useState(null);
    const { userId } = useParams()
    const getQuestionList = async () => {
        const apiUrl = `https://api.stackexchange.com/2.3/users/${userId}`
        const queryParam = `?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow`
        const tagParam = `/tags?key=U4DMV*8nvpm3EOpvf69Rxw((&order=desc&sort=popular&site=stackoverflow`
        const questionParam = `/questions?key=U4DMV*8nvpm3EOpvf69Rxw((&order=desc&sort=activity&site=stackoverflow`
        let urls = [
            `${apiUrl}${queryParam}`,
            `${apiUrl}${tagParam}`,
            `${apiUrl}${questionParam}`
        ];
        // map every url to the promise of the fetch
        let requests = urls.map(url => axios(url));
        // Promise.all waits until all jobs are resolved
        const result = await Promise.all(requests)
            .then(responses => { return responses }
            );

        const finalRes = result.reduce(function (acc, x) {
            const { data } = x
            const { items } = data;
            if (items.length == 1) {
                acc = { ...acc, ...{ owner: items[0] } };
            } else if (items[0] && items[0].has_synonyms) {
                acc = { ...acc, ...{ tags: items } };
            }
            acc = { ...acc, ...{ questions: items } };

            return acc;
        }, {});


        setUserData(finalRes)
    }

    useEffect(() => {
        getQuestionList();
    }, [])
    return (
        <div className="col-lg-9 main">
            <div className="mainBox">
                <div className="col-lg-12 mainHeader">
                    <div className="col-lg-12 questionPanel">
                        <div className="col-lg-2 profileImageBox">
                            <div className="col-lg-12 profileImage">
                                <img className="image" src={userData && userData.owner.profile_image} />
                            </div>
                        </div>
                        <div className="col-lg-10 profileTitle">
                            <div className="profileName">{userData && userData.owner.display_name}</div>
                            <div className="col-lg-12 profileSubTitle noPadding">
                                <div className="socialLinks">
                                    <span>{userData && userData.owner.website_url ? (userData.owner.website_url).replace("http://www.", "") : ""}</span>
                                    <span>{userData && userData.owner.location}</span>
                                    <span>{userData && moment(userData.owner.creation_date).fromNow()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 questionPanel">
                        <div className="col-lg-1 profilePill">
                            Profile
                        </div>
                        <div className="col-lg-1 activityPill">
                            Activity
                        </div>
                    </div>
                    <div className="col-lg-12 questionPanel">
                        <div className="col-lg-2 statsBox">
                            <span className="col-lg-12 stackTitle">Stats</span>
                            <div className="col-lg-12 statCount">
                                <div className="col-lg-12 noPadding">
                                    <div className="col-lg-6 noPadding">
                                        <div className="col-lg-12 countBox">
                                            <div className="col-lg-12 noPadding countValue count">{userData && userData.owner.reputation || 0}</div>
                                            <div className="col-lg-12 noPadding countTitle">reputation</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 noPadding">
                                        <div className="col-lg-12 countBox">
                                            <div className="col-lg-12 noPadding countValue count">{userData && userData.owner.accept_rate || 0}</div>
                                            <div className="col-lg-12 noPadding countTitle">reached</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 noPadding">
                                    <div className="col-lg-6 noPadding">
                                        <div className="col-lg-12 countBox">
                                            <div className="col-lg-12 noPadding countValue count">226</div>
                                            <div className="col-lg-12 noPadding countTitle">answers</div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 noPadding">
                                        <div className="col-lg-12 countBox">
                                            <div className="col-lg-12 noPadding countValue count">10</div>
                                            <div className="col-lg-12 noPadding countTitle">questions</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 topPercent">
                                    <span className="glyphicon glyphicon-tower"></span>
                                    <div className="col-lg-12 countTitle noPadding">top <span className="count">5%</span> overall</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-10 aboutBox">
                            <span className="col-lg-12 stackTitle">About</span>
                            <p className="aboutText col-lg-12">
                                Senior Developer at the UK's largest online fire safety organisation. Web development and server architecture when I am forced to, automation and API when I'm allowed and game development when I have spare time.

                                #SOreadytohelp - just like so many of you have been with me. 10 millllllllion questions! Give me an awesome answer and you're likely to receive a nice bounty :)
                            </p>
                        </div>
                    </div>

                    <Badges userData={userData && userData || {}} />
                    <TopTags userData={userData && userData || {}} />
                </div>
            </div>
        </div>
    )

}