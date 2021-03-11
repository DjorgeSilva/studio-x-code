import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: fit-content;
    text-align: center;
    margin-top: 100px;

    .coluna{
        cursor: pointer;
        margin: 20px auto;

        &:hover{
            color: ${props=> props.theme.secundary_color};
        }
        .icone{
            font-size: 2rem;
        }
        p{
            margin: 30px auto;
            font-size: 1.2rem;
        }
    }

    .box-rede-social{
        background: ${props=> props.theme.secundary_color};
        color: #fff;
    }

    .box-rede-social{
        height: fit-content;

        .wrapper{
            width: 50%;
            margin: 0 auto;
            padding: 30px 0;

            @media (min-width: 950px){
                width: 25%;
            }

            .coluna-rede-social{
                cursor: pointer;
                width: 40px;
                height: 40px;
                border: 3px solid #fff;
                border-radius: 50%;
                font-size: 1.3rem;

                &:hover{
                    border: 3px solid #000;
                    color: #000;
                }
            }
        }

        p{
            margin-bottom: 0;
            padding-bottom: 20px;
        }
    }
`