import styled from "styled-components";

export const Header = styled.div`
    padding: 15px 0px;
    background-color: #caa9ff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 101;
    h1{
        font-family: 'DNFBitBitv2';
        font-size: 24px;
        color: #fff;
        cursor: pointer;
    }
    .searchBox{
        position: relative;
        input{
            width: 250px;
            line-height: 40px;
            border: 1px solid #aaa;
            padding: 0px 5px;
        }
        button{
            position: absolute;
            top: 50%;
            right: 1px;
            transform: translateY(-50%);
            width: 38px;
            height: 38px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: #fff;
        }
    }
`