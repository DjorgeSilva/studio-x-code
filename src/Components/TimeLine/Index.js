import React, { useState } from 'react'
import { Container, WrapBanner } from "./TimeLineElements"
import { Layout } from '../Layout/Index'
import { Row, Col } from 'react-bootstrap'

export const History = () => {
    const [isHover, setIsHover] = useState(false);
    const hover = () => {
        setIsHover(!isHover)
    }

    return (
        <Container>
            <WrapBanner>
                <div class="parallax"></div>

                <div className="innertxt">
                    <Layout>
                            <div class="container">
                                <div class="timeline">
                                    <h5>2020</h5>

                                    <div class="timeline-container primary">
                                        <div class="timeline-icon">
                                            <i class="far fa-grin-wink"></i>
                                        </div>
                                        <div class="timeline-body">
                                            <h4 class="timeline-title"><span class="badge">Lorem</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                            <p class="timeline-subtitle">02/04/2020</p>
                                        </div>
                                    </div>
                                    <div class="timeline-container danger">
                                        <div class="timeline-icon">
                                            <i class="far fa-grin-hearts"></i>
                                        </div>
                                        <div class="timeline-body">
                                            <h4 class="timeline-title"><span class="badge">Lorem</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                            <p class="timeline-subtitle">02/04/2020</p>
                                        </div>
                                    </div>
                                    <div class="timeline-container success">
                                        <div class="timeline-icon">
                                            <i class="far fa-grin-tears"></i>
                                        </div>
                                        <div class="timeline-body">
                                            <h4 class="timeline-title"><span class="badge">Lorem</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                            <p class="timeline-subtitle">02/04/2020</p>
                                        </div>
                                    </div>
                                    <div class="timeline-container warning">
                                        <div class="timeline-icon">
                                            <i class="far fa-grimace"></i>
                                        </div>
                                        <div class="timeline-body">
                                            <h4 class="timeline-title"><span class="badge">Lorem</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                            <p class="timeline-subtitle">02/04/2020</p>
                                        </div>
                                    </div>
                                    <div class="timeline-container">
                                        <div class="timeline-icon">
                                            <i class="far fa-grin-beam-sweat"></i>
                                        </div>
                                        <div class="timeline-body">
                                            <h4 class="timeline-title"><span class="badge">Lorem</span></h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                            <p class="timeline-subtitle">02/04/2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Layout>
                </div>
            </WrapBanner>
        </Container>
    )
}
