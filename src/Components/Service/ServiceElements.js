import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    padding: 40px 0;
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

    h2{
        font-size: clamp(2rem, 2.5vw, 2.5rem);
        font-family:${props => props.theme.font_secundaria};
        margin: 20px auto;
    }

    .box-icon{
        cursor: pointer;
        display: block;
        width: 50px;
        height: 50px;
        background: ${props => props.theme.secundary_color};
        border-radius: 50%;
        margin: 40px auto;
        display: flex;
        justify-content: center;
        align-items: center;

        color: #fff;
        font-size: 2rem;

        &:hover{
            transform: translateY(-20px);
            transition: all .5s;
            background: ${props => props.theme.font_color};
        }
   }

        img{
            width: 250px;
            height: 400px;
            margin: 50px auto;

            @media (min-width: 750px){
                margin-top:270px; 
                margin-left: -20px;

            }
        }


    
`