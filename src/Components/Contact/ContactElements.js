import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;

    h1{
        font-size: clamp(3rem, 3vw, 4rem);
        font-family:${props => props.theme.font_secundaria};
        margin: 20px auto;
        text-transform: uppercase;
        margin-top: 50px;
    }
    hr{
        width: 20%;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    p{
        width: 70%;
        margin: 0 auto;
        margin-bottom: 30px;
    }

    form{
        width: 100%;
        margin: 0 auto;

        @media (min-width: 1100px){
        width: 80%;
        margin: 0 auto;
        margin-top: 40px;
    }



        input{
            width: 100%;
            height: 50px;
            margin: 10px;
            padding: 10px;
            outline-color: ${props=> props.theme.secundary_color};
        }
    }

    textarea{
        width: 100%;
        margin: 10px auto;
        margin-left: 10px;
        padding: 10px;
        outline-color: ${props=> props.theme.secundary_color};
    }
    button{
        padding: 10px 50px;
        margin-top: 10px;
        margin-bottom: 30px;
        background-color: transparent;
        color: ${props=> props.theme.secundary_color};
        border: 3px solid ${props=> props.theme.secundary_color};
        font-size: 1.2rem;
        outline: none;

        &:hover{
            background: ${props=> props.theme.secundary_color};
            color: #fff;
        }
        
    }
`
