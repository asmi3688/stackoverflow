import "../css/main.css"
import QuestionList from "./QuestionList"
import TopQuestions from "./TopQuestions"
import { useState, useEffect } from "react"
import axios from "axios"
const apiUrl = "https://api.stackexchange.com/2.3/questions/featured"
const queryParam = `?key=U4DMV*8nvpm3EOpvf69Rxw((&site=stackoverflow&order=desc&sort=activity&filter=default`

export default function MainContent({ history }) {
    const [questionList, setQuestionList] = useState([]);
    const getQuestionList = async () => {
        const questionListResponse = await axios(`${apiUrl}${queryParam}`)
        const { data: responseData } = questionListResponse
        setQuestionList(responseData.items)
    }

    useEffect(() => {
        getQuestionList();
    }, [])
    return (
        <div className="col-lg-9 main">
            <div className="mainBox">
                <div className="col-lg-10 mainHeader">
                    <div className="col-lg-9 questionPanel">
                        <TopQuestions history={history} />
                        {
                            questionList && questionList.length > 0 ?
                                questionList.map((questions, index) => {
                                    return (<QuestionList history={history} questionData={questions} key={questions.question_id} />)
                                })

                                :
                                <div className="col-lg-offset-5">Loading...</div>
                        }
                    </div>
                    <div className="col-lg-3">

                    </div>
                </div>
            </div>
        </div>
    )

}