import React from "react";
import AppNavbar from "../Navbar/Navbar";
import TextScroller from "../Components/TextScroller";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './Home.css';
import Papers from "../Components/Papers/Papers";
import Schedule from "../Components/Schedule/Schedule";
import Submission from "../Components/Submission/Submission";
import Registration from "../Components/Registration/Registration";
import Proceeding from "../Components/Proceeding/Proceeding";
import Committees from "../Components/Committees/Committees";
import Speakers from "../Components/Speakers/Speakers";
import Sponsors from "../Components/Sponsors/Sponsors";
import Venue from "../Components/Venue/Venue";
import Conferences from "../Components/Conferences/Conferences";
import Contact from "../Components/Contact/Contact";

const Home = () => {
    return (
        <div className="home">
            <img className="banner" src="banner_conference.jpg" alt="banner" />
            <AppNavbar />
            <div className="text-scroller">
                <TextScroller text="13th International Conference CSNT 2024" />
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="0">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="1">Call for Papers</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="2">Important Dates/Schedule</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="3">Paper Submission</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="4">Registration</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="5">Proceedings</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="6">Committees</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="7">Keynote Speakers</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="8">Sponosrs</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="9">Venue/Accommodation</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="10">Past Conferences</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="11">Tours</Nav.Link>
                            </Nav.Item><Nav.Item>
                                <Nav.Link eventKey="12">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="0">
                                <div className="home-heading">
                                    The International Conference on Communication Systems and Network Technologies (CSNT2025)
                                </div>
                                <div className="home-subheading">
                                    Schedule is available: check important dates tab
                                </div>
                                <br />
                                <p className="home-content">
                                    Welcome to CSNT 2025
                                    The International Conference on Communication Systems and Network Technologies (CSNT-2025) is organized IEEE Madhya Pradesh Section as its Flagship and hosted by VIT Bhopal University, KotriKalan, with technical support of IETE Gwalior and IEEE Computer society chapter to address various issues to prosper the creation of intelligent solutions in future. The aim is to bring together worldwide leading researchers, developers, practitioners and educators interested in advancing the state of the art in computational intelligence and communication Networks for exchanging knowledge that encompasses a broad range of disciplines among various distinct communities. It is expected that researchers will bring new prospect for collaboration across disciplines and gain idea facilitating novel breakthrough. The theme for this conference is Innovating and Inspiring the researchers to adopt the outcome for implementation.
                                    <br /> <br />
                                    The conference will provide an exceptional platform to the researchers to meet and discuss the utmost solutions, scientific results and methods in solving intriguing problems with people that actively involved in these evergreen fields. The 2-day conference commencing from 07 March, will feature prominent keynote speakers, tutorials, Pannel Discussion, Workshops. All accepted and presented papers will submitted to Conference Publishing Services (CPS) for publication in IEEE CPS.
                                    <br /> <br />
                                    CSNT 2025 will no doubt be proven to be exciting and educative. The General Chairs, along with the entire team cordially invite you to take part in this upcoming event and together we flourish it into a most memorable experience.
                                </p>
                                <p className="home-contact">
                                    Prof. RV Kshirsagar,<br />
                                    Dr. Deepak Singh Tomar,<br />
                                    General Chairs, CSNT-2025
                                </p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="1">
                                <Papers id="paper" />
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                                <Schedule />
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                                <Submission />
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                                <Registration />
                            </Tab.Pane>
                            <Tab.Pane eventKey="5">
                                <Proceeding />
                            </Tab.Pane>
                            <Tab.Pane eventKey="6">
                                <Committees />
                            </Tab.Pane>
                            <Tab.Pane eventKey="7">
                                <Speakers />
                            </Tab.Pane>
                            <Tab.Pane eventKey="8">
                                <Sponsors />
                            </Tab.Pane>
                            <Tab.Pane eventKey="9">
                                <Venue />
                            </Tab.Pane>
                            <Tab.Pane eventKey="10">
                                <Conferences />
                            </Tab.Pane>
                            <Tab.Pane eventKey="12">
                                <Contact />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
};

export default Home;