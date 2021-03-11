import React from 'react'
import { WrapBanner } from "./OurRatesElements"
import { Layout } from '../Layout/Index'
import { Row, Col } from 'react-bootstrap'
import { BiSupport } from "react-icons/bi"

export const OurRates = () => {
    return (
        <WrapBanner>
            <div class="parallax"></div>

            <Layout>
                <div className="innertxt">
                    <Row>
                        <Col xs={6} lg={3} className="coluna">
                            <div className='icone'>
                                <BiSupport />
                            </div>
                            <h5>+100</h5>
                            <p>Projetos</p>
                        </Col>

                        <Col xs={6} lg={3} className="coluna">
                            <div className='icone'>
                                <BiSupport />
                            </div>
                            <h5>+102</h5>
                            <p>Colaboradores</p>
                        </Col>

                        <Col xs={6} lg={3} className="coluna">
                            <div className='icone'>
                                <BiSupport />
                            </div>
                            <h5>+12</h5>
                            <p>Escritórios</p>
                        </Col>

                        <Col xs={6} lg={3} className="coluna">
                            <div className='icone'>
                                <BiSupport />
                            </div>
                            <h5>+400</h5>
                            <p>Clientes</p>
                        </Col>
                    </Row>
                </div>
            </Layout>
        </WrapBanner>
    )
}
