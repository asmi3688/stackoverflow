import "../css/questionPage.css"
import ProfileContent from "./ProfileContent"
import SideBar from "./SideBar"
export default function UserProfile({history}) {
    return (
        <div className="row">
            <SideBar history={history} />
            <ProfileContent history={history} />           
        </div>
    )
}