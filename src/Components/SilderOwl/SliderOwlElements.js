import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 80px;

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

    .owl-theme{
        text-align: center;
        h2, p{
            width: 80%;
            margin: 0 auto;
        }
    }
`