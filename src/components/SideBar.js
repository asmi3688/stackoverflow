import "../css/questionPage.css"
export default function SideBar({ history }) {
    return (
        <div className="col-lg-3 sidebar">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 sidebarMenu">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active menuTitle" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menuTitle inActive" href="#">PUBLIC</a>
                        <ul className="subMenu">
                            <li className="menuTitle"><a href="#questions"><span className="glyphicon glyphicon-globe"></span>&nbsp;Questions</a></li>
                            <li className="menuTitle"><a href="#tags">Tags</a></li>
                            <li className="menuTitle"><a href="#users">Users</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menuTitle inActive" href="#">COLLECTIVES</a>
                        <ul className="subMenu">
                            <li className="menuTitle"><a href="#explore">Explore Collectives</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menuTitle inActive" href="#">FIND A JOB</a>
                        <ul className="subMenu">
                            <li className="menuTitle"><a href="#jobs">Jobs</a></li>
                            <li className="menuTitle"><a href="#companies">Companies</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link menuTitle inActive" href="#">TEAMS</a>
                        <ul className="subMenu"><li className="menuTitle"><a href="#team">Create free Team</a></li></ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}