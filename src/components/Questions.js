import "../css/questionPage.css"
import MainContent from "./MainContent"
import SideBar from "./SideBar"
export default function Questions({ history }) {
    return (
        <div className="row">
            <SideBar history={history} />
            <MainContent history={history} />
        </div>
    )
}