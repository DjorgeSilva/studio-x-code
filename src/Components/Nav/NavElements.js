import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

export const NavMenu = styled.nav`
    width: 100%;
    height: 80px;
    z-index:1000000;
    position: fixed;
    padding: 0 20px;
`;

export const NavWrapper = styled.div`
    width: 100%;
    height: 80px;

    @media (min-width: 950px){
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    @media (min-width: 1300px){
            width:1300px;
            margin:0 auto;
    }
    `

export const NavIconWrap = styled.div`
    width: 20%;
    height: 100%;
    float: right;
    @media (min-width: 950px){
        width:fit-content;
        margin:0 20px;
    }
`;

export const IconMenuLateral = styled(GiHamburgerMenu)`
    display: block;
    float: right;
    cursor: pointer;
    color: ${props=> props.theme.primary_color};;
    font-size: 2.8rem;
    background: ${props=> props.theme.secundary_color};
    margin: 16px 0;
    
    @media (min-width: 950px){
         display: none;
    }
`;

export const NavLogoWrap = styled.div`
    width: 80%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    overflow: hidden;
    img{
        width: 100px;
        float: left;
    }

    @media (min-width: 950px){
        width: 20%;
        overflow: hidden;
        img{
            width: 150px;
        }
    }
`
export const SideBar = styled.div`
    width: 100%;
    height: 100vh;
    background-color: rgba(255, 255, 255,.8);
    position: absolute;
    z-index:1000;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};
    transition: .6s all;
    @media (min-width: 950px){
            display: none;
        }
`
export const IconCloseSideBar = styled(IoClose)`
    cursor: pointer;
    color: ${props => props.theme.secundary_color};
    font-size: 4rem;
    float:right;
    margin: 10px;
    background: ${props => props.theme.primary_color};
`

export const NavSideBar = styled.nav`
    width: 100%;
    height: fit-content;
    
`;

export const SideBarUl = styled.ul`
    width: 100%;
    height: fit-content;
    padding: 150px 0;
    list-style: none;

`

export const SideBarLi = styled.li`
    width: 100%;
    text-align: center;
`

export const LinkSideBar = styled(Link)`
    cursor: pointer;
    display: block;
    width: 100%;
    height: 80px;
    font-size: 2.5rem;
    color: ${props => props.theme.font_color};
    font-weight: 400;
    text-decoration: none;
    outline: none;
`
export const NavMenuDesktop = styled.div`
    width: 80%;
    height: 80px;
    display: flex;
    justify-content:center;
    align-items: center;
    
    @media (max-width: 950px){
        display: none;
    }

`;


export const MenuUl = styled.ul`
    width: fit-content;
    list-style: none;
`

export const MenuLi = styled.li`
    height: 80px;
    display: inline-block;
    margin-top: 20px;
    color: #fff;

    &:hover{
        color: #333;
        background-color: ${props => props.theme.secundary_color};
    }

`

export const LinkMenu = styled(Link)`
    cursor: pointer;
    display: inline-block;
    width: 100%;
    height: 80px;
    font-size: 1rem;
    color: #333;
    font-weight: 600;
    text-decoration: none;
    margin-right: 30px;
    outline: none;
    text-transform: uppercase;
    padding-top: 28px;
    text-align: center;

`

