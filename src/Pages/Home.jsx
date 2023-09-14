import React from 'react';
import "../Styles/Home.css"
import "../../public/avatar-ali.png"
import "../../public/avatar-anisha.png"
import "../../public/avatar-richard.png"
import "../../public/avatar-shanai.png"
import "../../public/illustration-intro.svg"
import "../../public/logo.svg"
import "../../public/icon-facebook.svg"
import "../../public/icon-instagram.svg"
import "../../public/icon-pinterest.svg"
import "../../public/icon-twitter.svg"
import "../../public/icon-youtube.svg"
import "../../public/bg-simplify-section-mobile.svg"
import "../../public/bg-simplify-section-desktop.svg"

const Home = () => {
  return (
    <div>
      <main>
        <section id="first_section">
            <div className="first_sec_wrapper">
                <div className="fs_content">
                    <h1>Bring everyone together to build better products.</h1>
                    <h2>Manage makes it simple for software teams to plan day-to-day takes while keeping the larger team
                        goal in view</h2>
                    <p className="first_sec_btn">Get Started</p>
                </div>

                <div className="fs_img_wrapper">
                    <div className="dynamic_image"></div>
                    <img src="./illustration-intro.svg" alt=""/>
                </div>
            </div>
        </section>

        <section id="second_section">
            <div className="ss_wrapper">
                <div className="ss_first_cont_wraper">
                    <h1>What's different about Manage?</h1>
                    <h2>Manage provides all the functionality your team needs, without the complexity. Our software is
                        tailor-made for modern digital product teams.</h2>
                </div>
                <div className="list_section_two">
                    <div className="first_list">
                        <div className="number">
                            <p>01</p>
                        </div>
                        <div className="list_fs_header">
                            <h1>Track company-wide progress</h1>
                            <h2>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
                                the milestone level all the way done to the smallest of details. Never lose sight of the
                                bigger picture again.</h2>
                        </div>
                    </div>

                    <div className="first_list">
                        <div className="number">
                            <p>02</p>
                        </div>
                        <div className="list_fs_header">
                            <h1>Advanced built-in reports</h1>
                            <h2>Set internal delivery estimates and track progress toward company goals. Our
                                customisable dashboard helps you build out the reports you need to keep key stakeholders
                                informed.</h2>
                        </div>
                    </div>

                    <div className="first_list">
                        <div className="number">
                            <p>03</p>
                        </div>
                        <div className="list_fs_header">
                            <h1> Everything you need in one place</h1>
                            <h2>Stop jumping from one service to another to communicate, store files, track tasks and
                                share documents. Manage offers an all-in-one team productivity solution</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="third_section" >
            <div className="section_wrapper">
                <div className="header_3">
                    <h1>What they've said</h1>
                </div>
                <div id="quotes" >
                    <div id="quote_wraper" >
                        <div className="name_quote">
                            <img src="./avatar-anisha.png" alt=""/>
                            <h1>Anisha Li</h1>
                            <h2>“Manage has supercharged our team's workflow. The ability to maintain visibility on
                                larger
                                milestones at all times keeps everyone motivated.”</h2>
                        </div>
                    </div>

                    <div id="quote_wraper" >
                        <div className="name_quote">
                            <img src="./avatar-ali.png" alt=""/>
                            <h1> Ali Bravo</h1>
                            <h2> “We have been able to cancel so many other subscriptions since using Manage. There is
                                no more cross-channel confusion and everyone is much more focused.”</h2>
                        </div>
                    </div>

                    <div id="quote_wraper" >
                        <div className="name_quote">
                            <img src="./avatar-richard.png" alt=""/>
                            <h1>Richard Watts</h1>
                            <h2> “Manage allows us to provide structure and process. It keeps us organized and focused.
                                I can't stop recommending them to everyone I talk to!”</h2>
                        </div>
                    </div>

                    <div id="quote_wraper"  >
                        <div className="name_quote">
                            <img src="./avatar-shanai.png" alt=""/>
                            <h1>Shanai Gough</h1>
                            <h2> “Their software allows us to track, manage and collaborate on our projects from
                                anywhere. It keeps the whole team in-sync without being intrusive.”</h2>
                        </div>
                    </div>
                    <div className="dynamic_image2"></div>

                </div>
                <p className="quotes_btn">Get Started</p>
            </div>
        </section>

        <section id="last_section">
            <div className="ls_wrapper">
                <div className="ls_content">
                    <h1>Simplify how your team works today.</h1>
                </div>
                <p className="ls_btn">Get Started</p>
            </div>
        </section>
    </main>
    </div>
  );
}

export default Home;
