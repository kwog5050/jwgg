import styled from "styled-components";

export const Profile = styled.div`
    padding: 30px 0px;
    display: flex;
    gap: 20px;
    img{
        width: 100px;
        height: 100px;
        border-radius: 15px;
    }
    .info{
        h2{
            font-size: 24px;
            font-weight: bold;
            line-height: 1.2;
        }
        h3{
            font-size: 20px;
            font-weight: bold;
            line-height: 1.2;
        }
        h4{
            line-height: 1.5;
        }
    }
`

export const scoreList = styled.ul`
    li{
        display: flex;
        flex-direction: column;
        margin: 10px 0px;
        .champingImage{
            width: 80px;
            height: 80px;
            border-radius: 100px;
            overflow: hidden;
            position: relative;
            img{
                position: absolute;
                top: 50%;
                left: 50%;
                width: 120%;
                height: 120%;
                transform: translate(-50%,-50%);
            }
        }
    }
    .win{
        background-color: #5383e8ad;
    }
    .lose{
        background-color: #e84057ad;
    }
`