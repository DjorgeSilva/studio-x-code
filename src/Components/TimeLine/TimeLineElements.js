import styled from 'styled-components'
import ratesbanner from "../../img/rates.jpg"


export const Container = styled.div`
    width: 100%;
    height: fit-content;

    @media (max-width: 400px){
        display: none;
    }
`

export const WrapBanner = styled.div`
    height: 210vh;

    .parallax {
        background-image: url(${ratesbanner});
        min-height: 210vh; 
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .innertxt{
        width: 100%;
        height: 210vh;
        position: relative;
        top: -2080px;
        padding: 50px 0;
        text-align: center;

        .container {
            max-width: 850px;
            margin: 50px auto;

            h5{
                margin: 20px auto;
                width: fit-content;
                font-size: 3rem;
                background-color: red;
                padding: 0 20px;
                border-radius: 5px;
            }
        }


        p {
            font-weight: 300;
            line-height: 1.5;
            font-size: 14px;
            opacity: .8;
        }

        // timeline style
        .timeline {
            position: relative;
            padding-left: 4rem;
            margin: 0 0 0 30px;
            color: white; 

            &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 4px;
                height: 100%;
                background: #fff;
            }

            .timeline-container {
                position: relative;
                margin-bottom: 2.5rem;;

                .timeline-icon {
                    position: absolute;
                    left: -88px;
                    top: 4px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    text-align: center;
                    font-size: 2rem;
                    background: red;

                    i {
                        position: absolute;
                        left: 50%;
                        top: 50%;
                        transform: translate(-50%, -50%);
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                }

                .timeline-body {
                    cursor: pointer;
                    background: #7BB532;
                    border-radius: 3px;
                    padding: 20px 20px 15px;
                    box-shadow: 1px 3px 9px rgba(0,0,0, .1);

                    &:hover{
                        background-color: red;
                    }

                    &:before {
                        content: '';
                        background: inherit;
                        width: 20px;
                        height: 20px;
                        display: block;
                        position: absolute;
                        left: -10px;
                        transform: rotate(45deg);
                        border-radius: 0 0 0 2px;
                    
                    }


                    .timeline-title {
                        margin-bottom: 1.4rem;

                        .badge {
                            background: red;
                            padding: 4px 20px;
                            border-radius: 3px;
                            font-size: clamp(1.5rem, 2.5vw, 2rem);
                            font-weight: bold;
                        }
                    }

                    p{
                        font-size: clamp(1rem, 2.5vw, 1.1rem)
                    }

                    .timeline-subtitle {
                        font-weight: 500;
                        font-style: italic;
                        opacity: .4;
                        margin-top: 16px;
                        font-size: 1.2rem;
                    }
                }
                
                &.primary {
                    .timeline-icon {
                        background:red !important;
                    }
                }

                &.info {
                    .timeline-icon {
                        background: red !important;
                    }
                }

                &.success {
                    .timeline-icon {
                        background:red !important;
                    }
                }

                &.warning {
                    .timeline-icon {
                        background: red !important;
                    }
                }

                &.danger {
                    .timeline-icon {
                        background: red !important;
                    }
                }

            }
        }

        }
        `