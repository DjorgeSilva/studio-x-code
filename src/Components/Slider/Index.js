import React from 'react'
import { Container } from "./SliderElements"
import { Carousel } from "react-bootstrap"
import slider1 from "../../img/banner1.jpeg"
import slider2 from "../../img/banner2.jpg"
import slider3 from "../../img/banner3.jpg"


export const Slider = () => {
    return (
        <Container>
            <Carousel className="slider">

                <Carousel.Item interval={1000} style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider1}
                            alt="First slide"
                            style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Nós somos criativos em<span> Codó</span></h3>
                            <button>Mais</button>
                            <button>Começar</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>



                <Carousel.Item interval={500} style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider2}
                            alt="First slide"
                            style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Nós somos criativos em<span> Codó</span></h3>
                            <button>Mais</button>
                            <button>Começar</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item style={{ maxWidth: "100vw", maxHeight: "100vh" }} className="itemSlider">
                    <div className="item">
                        <img
                            className="d-block w-100"
                            src={slider3}
                            alt="First slide"
                            style={{ maxWidth: "100vw", maxHeight: "100vh" }}
                        />
                    </div>
                    <Carousel.Caption style={{ top: "50%", transform: "translateY(-50%)", bottom: "initial" }}>
                        <div className="info-txt-slider">
                            <h3>Nós somos criativos em<span> Codó</span></h3>
                            <button>Mais</button>
                            <button>Começar</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}
