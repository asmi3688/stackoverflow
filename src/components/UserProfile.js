import "../css/questionPage.css"
import Footer from "./Footer"
import Header from "./Header"
import ProfileContent from "./ProfileContent"
import SideBar from "./SideBar"
export default function UserProfile({history}) {
    return (
        <div className="col-lg-12 noPadding">
            <Header/>
                <div className="noPadding">            
                    <SideBar history={history} />
                    <ProfileContent history={history} /> 
                </div>
            <Footer/>
        </div>
    )
}

