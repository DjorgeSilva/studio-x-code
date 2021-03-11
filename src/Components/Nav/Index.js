import React, { useEffect, useState } from 'react'
import { Link } from "react-scroll"
import {
    NavMenu,
    NavWrapper,
    NavIconWrap,
    NavLogoWrap,
    IconMenuLateral,
    SideBar,
    IconCloseSideBar,
    NavSideBar,
    SideBarUl,
    SideBarLi,
    LinkSideBar,
    NavMenuDesktop,
    MenuUl,
    MenuLi,
    LinkMenu
} from "./NavElements.js"
import LogoIMG from "../../img/logo.png";

export const Nav = ({ isOpen, toggleCloseIcon, show }) => {

    // nav transparente quando no topo
    var show = null;

    useEffect(() => {
        const handleScroll = () => {
            var links = document.querySelectorAll(".menu-link");

            show = window.scrollY > 0

            if (show) {
                document.querySelector("#menu").style.background = "#ffffff";
                document.querySelector("#menu").style.boxShadow = "3px 2px 10px #b4b4b4";

                links.forEach(function (el) {
                    el.style.color = "#333";
                });

            } else {
                document.querySelector("#menu").style.background = "transparent";
                document.querySelector("#menu").style.boxShadow = "none";

                links.forEach(function (el) {
                    el.style.color = "#fff";
                });
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    // nav transparente quando no topo

    return (
        <>
            <NavMenu id="menu" >
                <NavWrapper>
                    <NavIconWrap>
                        <IconMenuLateral onClick={toggleCloseIcon} />
                    </NavIconWrap>

                    <NavLogoWrap>
                        <Link to="/">
                            <img src={LogoIMG} alt="Logomarca Constru Service" />
                        </Link>

                    </NavLogoWrap>

                    <SideBar isOpen={isOpen}>
                        <IconCloseSideBar onClick={toggleCloseIcon} />

                        <NavSideBar>
                            <SideBarUl>
                                <SideBarLi>
                                    <LinkSideBar to="/" onClick={toggleCloseIcon}>Home</LinkSideBar>
                                </SideBarLi>

                                <SideBarLi>
                                    <LinkSideBar to="/" onClick={toggleCloseIcon}>Quem somos</LinkSideBar>
                                </SideBarLi>

                                <SideBarLi>
                                    <LinkSideBar to="/servicos" onClick={toggleCloseIcon}>Portfólio</LinkSideBar>
                                </SideBarLi>

                                <SideBarLi>
                                    <LinkSideBar to="/portfolio" onClick={toggleCloseIcon}>Orçamentos</LinkSideBar>
                                </SideBarLi>

                                <SideBarLi>
                                    <LinkSideBar to="/contato" onClick={toggleCloseIcon}>Contato</LinkSideBar>
                                </SideBarLi>
                            </SideBarUl>
                        </NavSideBar>
                    </SideBar>


                    <NavMenuDesktop id="menu">
                        <MenuUl>
                            <MenuLi>
                                <LinkMenu to="section1" onClick={toggleCloseIcon} className="menu-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Home</LinkMenu>
                            </MenuLi>

                            <MenuLi>
                                <LinkMenu to="section2" onClick={toggleCloseIcon} className="menu-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Quem somos</LinkMenu>
                            </MenuLi>

                            <MenuLi>
                                <LinkMenu to="section3" onClick={toggleCloseIcon} className="menu-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Portfólio</LinkMenu>
                            </MenuLi>

                            <MenuLi>
                                <LinkMenu to="section4" onClick={toggleCloseIcon} className="menu-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Orçamentos</LinkMenu>
                            </MenuLi>

                            <MenuLi>
                                <LinkMenu to="section5" onClick={toggleCloseIcon} className="menu-link" activeClass="active" spy={true} smooth={true} offset={-70} duration={500}>Contato</LinkMenu>
                            </MenuLi>

                        </MenuUl>
                    </NavMenuDesktop>
                </NavWrapper>
            </NavMenu>
        </>
    )
}
