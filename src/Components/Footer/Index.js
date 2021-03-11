import React from 'react'
import { Container } from './FooterElements'
import { Row, Col } from 'react-bootstrap'
import { FaPhoneVolume } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { GrMail } from 'react-icons/gr'
import { Layout } from "../Layout/Index"
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa'

export const Footer = () => {
    return (
        <Container>
            <Layout>
                <Row>
                    <Col sm={12} md={4} className="coluna">
                        <FaPhoneVolume className="icone" />
                        <p>(99) 98144 - 4269</p>
                    </Col>

                    <Col sm={12} md={4} className="coluna">
                        <IoLocationSharp className="icone" />
                        <p>Travessa Teresina, 2404</p>
                    </Col>

                    <Col sm={12} md={4} className="coluna">
                        <GrMail className="icone" />
                        <p>flanelon18@gmail.com</p>
                    </Col>
                </Row>
            </Layout>

            <div className="box-rede-social">
                <div className="wrapper">
                    <Layout>
                        <Row>
                            <Col xs={3}>
                                <div className="coluna-rede-social">
                                    <FaFacebookF />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="coluna-rede-social">
                                    <FaTwitter />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="coluna-rede-social">
                                    <FaGooglePlusG />
                                </div>
                            </Col>
                            <Col xs={3}>
                                <div className="coluna-rede-social">
                                    <FaInstagram />
                                </div>
                            </Col>
                        </Row>
                    </Layout>
                </div>
                <p>DESENVOLVIDO POR AGÊNCIA GREAT IDEAS © 2020 | ALL RIGHTS RESERVED</p>
            </div>
        </Container>
    )
}
