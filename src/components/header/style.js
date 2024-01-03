import styled from "styled-components";

export const Header = styled.div`
    padding: 15px 0px;
    background-color: #caa9ff;
    h1{
        font-family: 'DNFBitBitv2';
        font-size: 24px;
        color: #fff;
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