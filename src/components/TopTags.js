import QuestionList from "./QuestionList"
import TopQuestions from "./TopQuestions"

export default function TopTags({ userData }) {
    const badges = userData.owner.badge_counts
    const questionList = userData.questions
    const tags = userData.tags
    return (
        <div className="col-lg-12">
            <div className="col-lg-3">
                <div className="col-lg-12"></div>
            </div>
            <div className="col-lg-9 topTagBox">
                <div className="col-lg-12 topTagBoxTitle">
                    Top tags (265)
                </div>
                <div className="tabPanel col-lg-12 noPadding">
                    <div className="col-lg-6 tabPanel1">
                        <div className="tagPanelPill col-lg-2">
                            php
                        </div>
                        <div className="col-lg-2 noPadding">
                            <div className="badge1 badge2 noPadding col-lg-1"></div>
                        </div>
                    </div>
                    <div className="col-lg-6 scoreTab">
                        <div className="col-lg-offset-1 col-lg-11">
                            <div className="col-lg-4 noPadding">
                                <div className="col-lg-6 noPadding">SCORE</div>
                                <div className="col-lg-6 noPadding">&nbsp;&nbsp;183</div>
                            </div>
                            <div className="col-lg-4 noPadding">
                                <div className="col-lg-6 noPadding">POSTS</div>
                                <div className="col-lg-6 noPadding">&nbsp;&nbsp;144</div>
                            </div>
                            <div className="col-lg-4 noPadding">
                                <div className="col-lg-6 noPadding">POSTS</div>
                                <div className="col-lg-6 noPadding">&nbsp;&nbsp;%51</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2nd line */}
                <div className="col-lg-6">
                    <div className="tabPanel col-lg-12 noPadding">
                        <div className="col-lg-3 tabPanel1">
                            <div className="tagPanelPill1 col-lg-2">
                                .net
                            </div>
                            <div className="col-lg-2 noPadding">
                                <div className="badge1 badge2 noPadding col-lg-1"></div>
                            </div>
                        </div>
                        <div className="col-lg-9 scoreTab noPadding">
                            <div className="col-lg-12 noPadding">
                                <div className="col-lg-4 noPadding scoreCount">
                                    <div className="col-lg-6 noPadding">SCORE</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;123</div>
                                </div>
                                <div className="col-lg-4 noPadding scoreCount">
                                    <div className="col-lg-6 noPadding">POSTS</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;114</div>
                                </div>
                                <div className="col-lg-4 noPadding">
                                    <div className="col-lg-6 noPadding">POSTS</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;%60</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="tabPanel col-lg-12 noPadding">
                        <div className="col-lg-3 tabPanel1">
                            <div className="tagPanelPill1 col-lg-2">
                                c
                            </div>
                            <div className="col-lg-2 noPadding">
                                <div className="badge1 badge2 noPadding col-lg-1"></div>
                            </div>
                        </div>
                        <div className="col-lg-9 scoreTab noPadding">
                            <div className="col-lg-12 noPadding">
                                <div className="col-lg-4 noPadding scoreCount">
                                    <div className="col-lg-6 noPadding">SCORE</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;73</div>
                                </div>
                                <div className="col-lg-4 noPadding scoreCount">
                                    <div className="col-lg-6 noPadding">POSTS</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;84</div>
                                </div>
                                <div className="col-lg-4 noPadding">
                                    <div className="col-lg-6 noPadding">POSTS</div>
                                    <div className="col-lg-6 noPadding">&nbsp; &nbsp;%81</div>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="viewTags col-lg-12"><a href="#">view all tabs &nbsp; <span class="glyphicon glyphicon-arrow-right"></span></a></div>

                <div className="col-lg-12 topTagBoxTitle top">
                    Top posts (284)
                </div>
                {
                    questionList && questionList.length > 0 ?
                        questionList.map((questions, index) => {
                            return (<QuestionList questionData={questions} key={questions.question_id} />)
                        })

                        :
                        <div className="col-lg-offset-5">No record found</div>
                }

            </div>

        </div>
    )
}