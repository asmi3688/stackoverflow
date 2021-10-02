export default function TopQuestions({ history }) {
    return (
        <div className="col-lg-12 questionTab">
            <div className="col-lg-6 mainLeft">
                <label className="pageTitle">Top Questions</label>
            </div>
            <div className="col-lg-6 mainRight">
                <button className="btn btn-primary">Ask Question</button>
            </div>
            <div className="col-lg-12 pills">
                <ul className="nav nav-pills tabs">
                    <li className="activePill subPills"><a href="#">Interesting</a></li>
                    <li className="subPills"><a href="#"><button className="btn btn-primary countBtn">321</button> Bountied</a></li>
                    <li className="subPills"><a href="#">Hot</a></li>
                    <li className="subPills"><a href="#">Week</a></li>
                    <li className="subPills"><a href="#">Month</a></li>
                </ul>
            </div>
        </div>
    )
}