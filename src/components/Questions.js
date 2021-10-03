import "../css/questionPage.css"
import MainContent from "./MainContent"
import SideBar from "./SideBar"
import Header from "./Header"
import Footer from "./Footer"
export default function Questions({ history }) {
    return (
        <div className="col-lg-12 noPadding">
            <Header/>
                <div className="noPadding">            
                    <SideBar history={history} />
                    <MainContent history={history} />
                </div>
            <Footer/>
        </div>
    )
}