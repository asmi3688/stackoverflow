import Communities from "./Communities"

export default function Badges({ userData }) {
    const badges = userData && userData.owner && userData.owner.badge_counts
    return (
        <div className="col-lg-12">
            <div className="col-lg-3">
           <Communities/>
            </div>
            <div className="col-lg-3">
                <div className="col-lg-12 statCount">
                    <div className="trophy col-lg-3">
                        <img className="trophyImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1YLnXrDLvsvCy9ZkljOYlANPEwQa3E72etK5x7P8TffOFUGb-2BTZjqwpKbpv5IDOQTo&usqp=CAU" />
                    </div>
                    <div className="col-lg-5">
                        <div className="col-lg-12 countBoxTrophy">
                            <div className="col-lg-12 noPadding countValue count">{badges && badges.gold || 0}</div>
                            <div className="col-lg-12 noPadding countTitle">gold badges</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Electrolate</div>

                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 1'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Great Answer</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 2'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft noPaddingRight">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Famous Question</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 10'18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="col-lg-12 statCount">
                    <div className="trophy col-lg-3">
                        <img className="trophyImg" src="https://c8.alamy.com/comp/KPA9CY/riveted-silver-shield-with-laurel-branchs-and-gold-crown-and-swords-KPA9CY.jpg" />
                    </div>
                    <div className="col-lg-5">
                        <div className="col-lg-12 countBoxTrophy">
                            <div className="col-lg-12 noPadding countValue count">{badges && badges.silver || 0}</div>
                            <div className="col-lg-12 noPadding countTitle">silver badges</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Electrolate</div>

                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 1'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Great Answer</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 2'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft noPaddingRight">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Famous Question</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 10'18</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="col-lg-12 statCount">
                    <div className="trophy col-lg-3">
                        <img className="trophyImg" src="https://i.etsystatic.com/7696549/r/il/460351/1842212233/il_fullxfull.1842212233_op1l.jpg" />
                    </div>
                    <div className="col-lg-5">
                        <div className="col-lg-12 countBoxTrophy">
                            <div className="col-lg-12 noPadding countValue count">{badges && badges.bronze || 0}</div>
                            <div className="col-lg-12 noPadding countTitle">bronze badges</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Electrolate</div>

                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 1'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Great Answer</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 2'18</div>
                        </div>
                    </div>
                    <div className="col-lg-12 badgeStat">
                        <div className="col-lg-8 noPaddingLeft noPaddingRight">
                            <div className="badgePill col-lg-12">
                                <div className="col-lg-2 noPadding">
                                    <div className="badge1 noPadding">.</div>
                                </div>
                                <div className="col-lg-10 noPadding">Famous Question</div>
                            </div>
                        </div>
                        <div className="col-lg-4 noPadding badgeDate">
                            <div className="badgeDate"> May 10'18</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}