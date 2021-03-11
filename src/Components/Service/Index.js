import React from 'react'
import {
    Container,
    GridItem
} from "./ServiceElements"
import { Layout } from "../../Components/Layout/Index"
import { Row, Col } from "react-bootstrap"
import { GiComputing } from "react-icons/gi"
import { MdSend } from "react-icons/md"
import celular from "../../img/celular.jpg"
import { FaCalendarAlt } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { BiSupport } from "react-icons/bi"

export const Service = () => {
    return (
        <Container>
            <Layout>
                <Row>
                    <Col sm={{ span: 12 }}>
                        <GridItem>
                            <h1>O que fazemos</h1>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>
                    </Col>

                    <Col sm={12} md={4}>

                        <GridItem>
                            <div className="box-icon">
                                <GiComputing />
                            </div>
                            <h2>Desenvolvimento Web</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>


                        <GridItem>
                            <div className="box-icon">
                                <MdSend />
                            </div>
                            <h2>Web Designing</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>


                        <GridItem>
                            <div className="box-icon">
                                <MdSend />
                            </div>
                            <h2>Nossa Missão</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>

                    </Col>

                    <Col sm={12} md={4}>
                        <GridItem>
                            <img src={celular} alt="device" />
                        </GridItem>
                    </Col>


                    <Col sm={12} md={4}>
                        <GridItem>
                            <div className="box-icon">
                                <FaCalendarAlt />
                            </div>
                            <h2>Nossos valores</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>

                        <GridItem>
                            <div className="box-icon">
                                <MdLocationOn />
                            </div>
                            <h2>Nossa Localização</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>

                        <GridItem>
                            <div className="box-icon">
                                <BiSupport />
                            </div>
                            <h2>Suporte 24/7</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>
                    </Col>

                </Row>
            </Layout>
        </Container>
    )
}
