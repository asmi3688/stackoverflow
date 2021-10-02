export default function Communities() {
    const communityArray = [{
        communityLogo: "https://cdn.worldvectorlogo.com/logos/stack-overflow.svg",
        communityName: "Stack Overflow",
        communityMember: "7.8k"
    },
    {
        communityLogo: "https://cdn.freebiesupply.com/logos/large/2x/superuser-logo-png-transparent.png",
        communityName: "Super User",
        communityMember: "991"
    },
    {
        communityLogo: "https://pbs.twimg.com/profile_images/1487174289/apple-touch-icon_400x400.png",
        communityName: "Server Fault",
        communityMember: "513"
    },
    {
        communityLogo: "https://cdn.sstatic.net/Sites/english/Img/apple-touch-icon.png?v=5979aff4e7a9",
        communityName: "English Language And Usage",
        communityMember: "315"
    }]
    return (
        <>
            <div className="col-lg-12 topTagBoxTitle">
                Communities (36)
            </div>
            {communityArray.map((community, index) => {
                return (
                    <div className="col-lg-12 noPadding">
                        <div className="col-lg-10 noPadding">
                            <div className="col-lg-12 questionText noPadding">
                                <div className="communityLogoBox col-lg-2 noPadding">
                                    <img src={community.communityLogo} className="communityLogoBox"></img>
                                </div>
                                <a className="questioLink communityText">
                                    {community.communityName}
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-2 time noPadding">
                            <label className="answerTime">
                                {community.communityMember}
                            </label>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}