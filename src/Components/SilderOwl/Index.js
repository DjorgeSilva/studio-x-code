import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import client1 from '../../img/client1.jpeg'
import client2 from '../../img/client2.jpeg'
import client3 from '../../img/client3.jpeg'
import client4 from '../../img/client4.jpeg'
import client5 from '../../img/client5.jpeg'
import client6 from '../../img/client6.jpeg'
import { Container } from "./SliderOwlElements.js"

const options = {
    margin: 10,
    responsiveClass: true,
    nav: true,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 2,
        },
        800: {
            items: 3,
        },
        1000: {
            items: 4,

        }
    },
};

export const OwlSlider = () => {
    return (
        <Container>

            <h1>Relatos de Clientes</h1>
            <hr />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, nesciunt. Doloribus officia qui cupiditate nihil! Minima delectus nam alias quas.</p>

            <OwlCarousel style={{ marginTop: "80px" }} className="owl-theme" loop {...options}>
                <div className="item">
                    <img src={client1} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>

                <div class="item">
                    <img src={client2} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>

                <div class="item">
                    <img src={client3} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>

                <div class="item">
                    <img src={client4} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>

                <div class="item">
                    <img src={client5} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>

                <div class="item">
                    <img src={client6} alt="client StudioX" />
                    <h2>Lorem</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nostrum!</p>
                </div>
            </OwlCarousel>
        </Container>
    )
}