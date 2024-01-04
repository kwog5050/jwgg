import styled from "styled-components";

export const Search = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    .searchBox{
        position: relative;
        input{
            width: 500px;
            line-height: 60px;
            border: 1px solid #aaa;
            padding: 0px 10px;
            border-radius: 10px;
            font-size: 20px;
        }
        button{
            position: absolute;
            top: 50%;
            right: 1px;
            transform: translateY(-50%);
            width: 58px;
            height: 58px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            background-color: #fff;
            border-radius: 10px;
            i{
                font-size: 20px;
            }
        }
    }
`