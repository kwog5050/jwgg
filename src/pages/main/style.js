import styled from "styled-components";

export const Profile = styled.div`
    padding: 30px 0px;
    display: flex;
    gap: 20px;
    margin-top: 70px;
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
        gap: 15px;
        margin: 10px 0px;
        padding: 15px;
        border-radius: 15px;
        .gameInfo{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            padding-right: 15px;
            > div{
                h3{
                    font-size: 20px;
                }
                h4{
                    line-height: 1.5;
                }
            }
        }
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
        .detailInfo{
            display: flex;
            flex-direction: column;
            border-left: 1px solid #ddd;
            padding: 0px 15px;
            h5{
                display: flex;
                font-size: 18px;
                font-weight:bold;
                .red{
                    font-size: 18px;
                    font-weight: bold;
                    color: red;
                    padding: 0px 3px;
                }
            }
            h6{
                font-size: 18px;
                line-height: 1.5;
            }
            .itemList{
                display: flex;
                gap: 2px;
                img{
                    width: 30px;
                    height: 30px;
                    border-radius: 5px;
                }
            }
        }
    }
    .win{
        background-color: #0052ff52;
    }
    .lose{
        background-color: #ff002347;
    }
`

export const More = styled.div`
    width: 100%;
    background-color: #ddd;
    text-align: center;
    padding: 10px 0px;
    border-radius: 15px;
    cursor: pointer;
    i{
        line-height: 40px;
        font-size: 30px;
    }
`