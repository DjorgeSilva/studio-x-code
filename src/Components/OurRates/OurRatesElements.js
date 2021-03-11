import styled from "styled-components"
import ratesbanner from "../../img/rates.jpg"

export const WrapBanner = styled.div`
    height: 50vh;

    .parallax {
        background-image: url(${ratesbanner});
        min-height: 50vh; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .innertxt{
        width: 100%;
        height: 50vh;
        position: relative;
        top: -480px;
        padding: 80px 0;
        text-align: center;
        

        @media (min-width: 500px){
            top: -525px;
        }

        @media (min-width:1050px){
            top: -475px;
        }

        .coluna{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-bottom: 20px;
            background-color: rgba(122, 181, 49,.5);

            .icone{
                width: 80px;
                height: 80px;
                background-color: rgba(255, 255, 255, 0);
                color: #fff;
                border: 3px solid #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: clamp(2rem, 2.5vw,3rem);
                margin-bottom: 20px;
                margin-top: 10px;
        }

        h5{
            font-size: clamp(1.5rem, 2.5vw,3rem);
            color: #fff;
        }
        p{
            font-size: clamp(1.2rem, 2.5vw, 2rem);
            color: #fff;
        }

        }

        @media (min-width: 950px){
            padding: 130px 0;
        }
    }
`