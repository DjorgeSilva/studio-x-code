import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
`

export const GridItem = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;

    h1{
        font-size: clamp(3rem, 3vw, 4rem);
        font-family:${props => props.theme.font_secundaria};
        margin: 20px auto;
        text-transform: uppercase;
    }
    hr{
        width: 20%;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    p{
        margin-bottom: 40px;
    }

    .body-price{
        cursor: pointer;
        width: 300px;
        height: fit-content;
        background: #333333;
        margin: 0 auto;
        color: #fff;
        position: relative;
        margin-top: 70px;
        border-top-right-radius: 150px;
        border-top-left-radius: 150px;

        &:hover{
            background: ${props=> props.theme.secundary_color}
        }

        &:hover > .price-box{
            border: 4px solid ${props=> props.theme.secundary_color};
            color: ${props=> props.theme.secundary_color};
        }

        &:hover > ul li{
            border-top: .5px solid #fff;
        }

        @media (min-width: 950px){
            width: 100%;
        }

        .price-box{
            width: 100px;
            height: 100px;
            background: #fff;
            position: absolute;
            top: -50px;
            left: 35%;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2rem;
            color: #333333;
            border: 4px solid #333333;
        
            
        /* @media (min-width: 760px){
            left: 37%;
        } */

        @media (min-width: 	1140px){
            left: 32%;
        }

        }

        h1{
            font-size: clamp(1.8rem, 2.5vw, 1.8rem);
            padding-top: 80px;
        }
        h2{
            font-size: clamp(1.8rem, 2.5vw, 1.8rem);
            padding-top: 0;
            margin-top: 0;
        }

        p{
            text-transform: uppercase;
        }

        ul{
            width: 100%;
            height: fit-content;
            li{
                height: 50px;
                border-top: .5px solid #747474;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
        }
    }
`