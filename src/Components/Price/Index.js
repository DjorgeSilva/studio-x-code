import React from 'react'
import { Layout } from '../Layout/Index'
import { Container, GridItem } from "./PriceElements"
import {Row, Col} from "react-bootstrap"

export const Price = () => {
    return (
        <Container>
            <Layout>
                <Row>
                    <Col sm={{ span: 12 }}>
                        <GridItem>
                            <h1>Tabela de Preços</h1>
                            <hr />
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>
                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }} md={6} lg={3}>
                        <GridItem>
                           <div className="body-price">
                               <div className="price-box">R$ 29</div>

                               <h1>STATER</h1>
                               <h2>Plano mensal</h2>
                               <p>24/7 suporte ao cliente</p>
                               <ul>
                                   <li>10GB Armazenamento</li>
                                   <li>10 Emails</li>
                                   <li>10 Domains</li>
                                   <li>1GB Lagura da Banda</li>
                                   <li>Assine</li>
                               </ul>
                           </div>

                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }} md={6} lg={3}>
                        <GridItem>
                           <div className="body-price">
                               <div className="price-box">R$ 49</div>

                               <h1>PREMIUM</h1>
                               <h2>Plano mensal</h2>
                               <p>24/7 suporte ao cliente</p>
                               <ul>
                                   <li>10GB Armazenamento</li>
                                   <li>10 Emails</li>
                                   <li>10 Domains</li>
                                   <li>1GB Lagura da Banda</li>
                                   <li>Assine</li>
                               </ul>
                           </div>

                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }} md={6} lg={3}>
                        <GridItem>
                           <div className="body-price">
                               <div className="price-box">R$ 79</div>

                               <h1>PROFESSIONAL</h1>
                               <h2>Plano mensal</h2>
                               <p>24/7 suporte ao cliente</p>
                               <ul>
                                   <li>10GB Armazenamento</li>
                                   <li>10 Emails</li>
                                   <li>10 Domains</li>
                                   <li>1GB Lagura da Banda</li>
                                   <li>Assine</li>
                               </ul>
                           </div>

                        </GridItem>
                    </Col>

                    <Col sm={{ span: 12 }} md={6} lg={3}>
                        <GridItem>
                           <div className="body-price">
                               <div className="price-box">R$ 99</div>

                               <h1>MAXIMUM</h1>
                               <h2>Plano mensal</h2>
                               <p>24/7 suporte ao cliente</p>
                               <ul>
                                   <li>10GB Armazenamento</li>
                                   <li>10 Emails</li>
                                   <li>10 Domains</li>
                                   <li>1GB Lagura da Banda</li>
                                   <li>Assine</li>
                               </ul>
                           </div>

                        </GridItem>
                    </Col>


                </Row>
            </Layout>
        </Container>
    )
}
