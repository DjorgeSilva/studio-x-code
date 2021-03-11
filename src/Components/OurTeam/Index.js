import React, { useState, useEffect } from 'react'
import { Layout } from "../Layout/Index"
import { Row, Col } from "react-bootstrap"
import {
    Container,
    GridItem
} from "./OurTeamElements"
import team1 from "../../img/team1.jpg"
import team2 from "../../img/team2.jpg"
import team3 from "../../img/team3.jpg"
import team4 from "../../img/team4.jpg"
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa"

export const OurTeam = () => {
    const [activeTeam1, setActiveTeam1] = useState(true)
    const [activeTeam2, setActiveTeam2] = useState(false)
    const [activeTeam3, setActiveTeam3] = useState(false)
    const [activeTeam4, setActiveTeam4] = useState(true)

    useEffect(() => {

    }, [activeTeam1]);
    

    return (
        <Container>
            <Layout>
                <Row>
                    <Col sm={{ span: 12 }}>
                        <GridItem>
                            <h1>Nosso Time</h1>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }}>
                        <GridItem>
                            <Row>
                                <Col xm={3}>
                                    <img src={team1} alt="Time StudioX" className="first-img" onClick={()=>setActiveTeam1(!activeTeam1)}/>
                                    <p className="name-time">Flânelon DJorge</p>
                                </Col>

                                <Col xm={3}>
                                    <img src={team2} alt="Time StudioX" />
                                    <p className="name-time">Flânelon DJorge</p>
                                </Col>

                                <Col xm={3}>
                                    <img src={team3} alt="Time StudioX" />
                                    <p className="name-time">Flânelon DJorge</p>
                                </Col>

                                <Col xm={3}>
                                    <img src={team4} alt="Time StudioX" />
                                    <p className="name-time">Flânelon DJorge</p>
                                </Col>
                            </Row>
                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }}>
                        <GridItem>
                            <div className="info-team">
                                <Row>
                                    <Col xm={12} md={6}>

                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla beatae, tenetur tempore omnis nam, nobis voluptatum et, sed delectus expedita dicta at. Maiores mollitia ipsum assumenda omnis! Maiores est illo nostrum ipsum? Asperiores dignissimos officiis beatae impedit, in provident excepturi voluptatibe.</p>

                                        <div className="rede-social-team">
                                            <Row>
                                                <Col xm={4}>
                                                    <div className="wrap-icon">
                                                        <FaFacebookF />
                                                    </div>
                                                </Col>

                                                <Col xm={4}>
                                                    <div className="wrap-icon">
                                                        <FaTwitter />
                                                    </div>
                                                </Col>

                                                <Col xm={4}>
                                                    <div className="wrap-icon">
                                                        <FaGooglePlusG className="big-icon" />
                                                    </div>
                                                </Col>
                                            </Row>
                                        </div>

                                    </Col>

                                    <Col xm={12} md={6}>
                                        <div className="wordpress-box">
                                            <div className="inner-box">
                                                <p>Wordpress 72%</p>
                                            </div>
                                        </div>

                                        <div className="photoshop-box">
                                            <div className="inner-box">
                                                <p>Photoshop 98%</p>
                                            </div>
                                        </div>

                                        <div className="react-box ">
                                            <div className="inner-box">
                                                <p>React 95%</p>
                                            </div>
                                        </div>

                                        <div className="javascript-box">
                                            <div className="inner-box">
                                                <p>JavaScript 95%</p>
                                            </div>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </GridItem>
                    </Col>
                </Row>
            </Layout>
        </Container>
    )
}
