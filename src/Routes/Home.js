import React, {useState} from 'react'
import { Slider } from "../Components/Slider/Index"
import { Service } from "../Components/Service/Index"
import { OurRates } from "../Components/OurRates/Index"
import { OurTeam } from "../Components/OurTeam/Index"
import { Price } from "../Components/Price/Index"
import { OwlSlider } from "../Components/SilderOwl/Index"
import { Contact } from "../Components/Contact/Index"
import { Footer } from "../Components/Footer/Index"
import { Nav } from "../Components/Nav/Index"


export const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCloseIcon = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Nav isOpen={isOpen} toggleCloseIcon={toggleCloseIcon} />
            <Slider id="section1"/>
            <Service id="section2"/>
            <OurRates id="section3"/>
            <OurTeam id="section4"/>
            {/* <History /> */}
            <Price />
            <OwlSlider />
            <Contact />
            <Footer />
        </>
    )
}
