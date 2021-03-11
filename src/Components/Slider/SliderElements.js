import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 0px;

    .slider{
        .itemSlider{
            .item:after {
                content:"";
                position:absolute;
                top:0;
                bottom:0;
                left:0;
                right:0;
                background:rgba(0,0,0,0.4);
                }
        
            .info-txt-slider{
                h3{
                    width: 55%;
                    font-size: clamp(1.5rem, 5vw, 8rem);
                    color: #fff;
                    margin: 0 auto;

                    span{
                        color: ${props => props.theme.secundary_color};
                    }
                }
                button{
                    outline: none;
                    padding: 5px 20px;
                    font-size: clamp(1rem,2.5vw, 1.5rem);
                    border: none;
                    color: #fff;
                    margin-top: 20px;

                    &:first-of-type{
                        margin-right: 10px;
                        background: ${props => props.theme.secundary_color};
                    }

                    &:last-of-type{
                        margin-right: 10px;
                        background: #333;
                    }
                }
                }
            }
    }
`