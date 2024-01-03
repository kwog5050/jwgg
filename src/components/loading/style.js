import styled from 'styled-components';

export const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    z-index: 100;
    p {
        position: absolute;
        top: calc(50% + 100px);
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 24px;
        text-align: center;
        line-height: 1.2;
    }
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
        font-size: 100px;
        animation-name: loading;
        animation-direction: normal;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
        animation-timing-function: linear;
    }
    @keyframes loading {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;