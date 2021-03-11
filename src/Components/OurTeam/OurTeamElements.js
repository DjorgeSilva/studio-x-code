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

    p{
        margin-bottom: 40px;
    }

    img{
        cursor: pointer;
        width: 100%;
        position: relative;

        &:hover + .name-time{
            visibility: visible;
        }

    }
    .first-img + .name-time{
        visibility: visible;
    }

    .name-time{
        visibility: hidden;
        width: 100%;
        background-color: ${props => props.theme.secundary_color};
        color: #fff;
        font-size: clamp(.8rem, 2.5vw, 1.3rem);

        @media (min-width: 955px){
            padding: 20px 0;
            font-size: 1.3rem;
        }
    }

    .info-team{
        width: 100%;
        height: fit-content;
        border: 2px solid #bdbdbd;
        margin: 0 auto;
        padding: 30px 20px;

        @media (min-width: 750px){
            padding-top:50px;
            margin-bottom: 0
        }

        p{
            text-align: left;
            line-height:  35px;
        }

        .rede-social-team{
            width: 50%;
            margin: 0 auto;
            margin-bottom: 40px;

            .wrap-icon{
                width: 50px;
                height: 50px;
                border: 2px solid #bdbdbd;
                border-radius: 5px;

                font-size: 1.5rem;
                color:  ${props => props.theme.secundary_color};

                .big-icon{
                    font-size: 2.1rem;
                }
            }


            @media (min-width: 750px){
                width: 50%;
                float: left;
            }

            @media (min-width: 1100px){
                width: 30%;
                float: left;
            }
        }

        .wordpress-box,
        .photoshop-box,
        .react-box,
        .javascript-box{
            width: 100%;
            height: 50px;
            background: transparent;
            margin: 10px auto;
            border-radius: 5px;
            border: 1px solid #bdbdbd;
            box-shadow: inset 1px 1px 5px #d1d1d1;
            padding: 0 8px; 

            display: flex;
            align-items: center;

            .inner-box{
                width: 65%;
                height: 40px;
                border-radius: 5px;
                background-color: ${props => props.theme.secundary_color};;
                padding-top: 2px;
                padding-left: 10px;
                animation: loading 4s;
                
                p{
                    color: #fff;
                }

                @keyframes loading{
                    0%{
                        width: 0%;
                    }
                    100%{
                        width: 65%
                    }
                }
            }
        }
        .photoshop-box{
            .inner-box{
                width: 97%;
                animation: loadingph 4s;

                @keyframes loadingph{
                    0%{
                        width: 0%;
                    }
                    100%{
                        width: 97%
                    }
                }
            }
            }
        .react-box{
            .inner-box{
                width: 93%;
                animation: loadingjr 4s;

                @keyframes loadingjr{
                    0%{
                        width: 0%;
                    }
                    100%{
                        width: 93%
                    }
                } 
            }
        }
        .javascript-box{
            .inner-box{
                width: 93%;
                animation: loadingjr 4s;
            }
        }  

    
    }
`