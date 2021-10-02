import moment from "moment"

export default function QuestionList({ history, questionData }) {
    const isProfilePage = window.location.pathname.includes("profile")
    return (
        <div className="questionBox col-lg-12">
            {!isProfilePage && (<div className="col-lg-4 noPadding">
                <div className="col-lg-4">
                    <div className="col-lg-12 countBox">
                        <div className="col-lg-12 noPadding countValue">{questionData.score}</div>
                        <div className="col-lg-12 noPadding countTitle">vote</div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className={questionData.answer_count === 0 ? "col-lg-12 countBox" : "col-lg-12 countBox greenBox"}>
                        <div className={questionData.answer_count === 0 ? "col-lg-12 noPadding countValue" : "col-lg-12 noPadding countValue green"}>{questionData.answer_count}</div>
                        <div className={questionData.answer_count === 0 ? "col-lg-12 noPadding countTitle" : "col-lg-12 noPadding countTitle green"}>answer</div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="col-lg-12 countBox">
                        <div className="col-lg-12 noPadding countValue">{questionData.view_count}</div>
                        <div className="col-lg-12 noPadding countTitle">views</div>
                    </div>
                </div>
            </div>)}
            <div className="col-lg-8 noPadding">
                <div className="col-lg-12 questionText noPadding">
                    <a className="questionLink" href={questionData.link}>
                        {questionData.bounty_amount > 0 ?
                            <button className="btn btn-primary countBtn">+{questionData.bounty_amount}</button>
                            :
                            null
                        }
                        &nbsp;{questionData.title}
                    </a>
                </div>
                <div className="col-lg-12 noPadding">
                    <div className="col-lg-12 noPadding">
                        {questionData.tags.map((tag, ind) => {
                            return <button key={tag} className="btn questionPill">{tag}</button>
                        })
                        }
                    </div>
                    {!isProfilePage && (<div className="col-lg-12 time noPadding">
                        <label className="answerTime">
                            {questionData.is_answered ? "answered " : "modified at " || ""}
                            {questionData.is_answered ? moment(questionData.last_edit_date * 1000).fromNow() : moment(questionData.last_activity_date * 1000).format('lll')}
                        </label>
                        <label className="owner">
                            <a className="questionLink" href={`/profile/${questionData.owner.user_id}`}>
                                &nbsp;{questionData.owner.display_name}
                            </a>
                        </label>
                        <label className="score">&nbsp;{questionData.owner.reputation}</label>
                    </div>)}
                </div>
            </div>
            {
                isProfilePage && (
                    <div className="col-lg-4 time noPadding">
                        <label className="answerTime">
                            {questionData.is_answered ? moment(questionData.last_edit_date * 1000).fromNow() : moment(questionData.last_activity_date * 1000).format('lll')}
                        </label>
                    </div>
                )
            }
        </div>
    )
}