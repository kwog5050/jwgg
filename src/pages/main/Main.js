import React, { useEffect, useState } from 'react';

import { getUserScoreList } from 'apis/riotApi/user.js';

import { timestampFormat } from 'utils/timestampFormat.js';

import Loading from 'components/loading/Loading.js';

import * as Style from './style.js';

const Main = ({ userProfile, more, setMore }) => {
    const [scoreList, setScoreList] = useState([]);

    // 승패 확인
    const victoryCheck = (gameInfo) => {
        let teamType = 0;
        for (let i = 0; i < gameInfo.info.participants.length; i++) {
            if (userProfile?.name === gameInfo.info.participants[i].riotIdGameName) {
                if (i < 5) {
                    teamType = 100;
                    break;
                } else {
                    teamType = 200;
                    break;
                }
            }
        }

        for (let i = 0; i < gameInfo.info.teams.length; i++) {
            if (gameInfo.info.teams[i].win === true) {
                if (teamType === gameInfo.info.teams[i].teamId) {
                    return "win";
                } else {
                    return "lose"
                }
            }
        }
    }

    // 본인이 플레이 정보 가져오기
    const getPlayInfo = (gameInfo) => {
        let palyInfo;
        for (let i = 0; i < gameInfo.info.participants.length; i++) {
            if (userProfile?.name === gameInfo.info.participants[i].riotIdGameName) {
                palyInfo = {
                    championName: gameInfo.info.participants[i].championName,
                    champLevel: gameInfo.info.participants[i].champLevel,
                    kills: gameInfo.info.participants[i].kills,
                    deaths: gameInfo.info.participants[i].deaths,
                    assists: gameInfo.info.participants[i].assists,
                    item0: gameInfo.info.participants[i].item0,
                    item1: gameInfo.info.participants[i].item1,
                    item2: gameInfo.info.participants[i].item2,
                    item3: gameInfo.info.participants[i].item3,
                    item4: gameInfo.info.participants[i].item4,
                    item5: gameInfo.info.participants[i].item5,
                    item6: gameInfo.info.participants[i].item6,
                    cs: gameInfo.info.participants[i].totalMinionsKilled,
                };
                return palyInfo;
            }
        }
    }

    // 게임 플레이시간 계산
    const playTime = (startTime, endTime) => {
        // 주어진 형식의 시간 문자열을 파싱하는 함수
        const parseTimeString = (timeString) => {
            const [year, month, day, hour, minute, second] = timeString.split(/[년월일시분초 ]+/).filter(Boolean).map(Number);
            return new Date(year, month - 1, day, hour, minute, second);
        };

        const date1 = parseTimeString(startTime);
        const date2 = parseTimeString(endTime);

        const timeDifference = date2 - date1;

        const minutes = Math.floor(timeDifference / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return `${minutes}분 ${seconds}초`;
    };

    const getUserGameScoreList = (count) => {
        setScoreList([]);
        getUserScoreList(userProfile?.puuid, count, setScoreList);
    }

    useEffect(() => {
        getUserGameScoreList(more);
    }, [userProfile, more]);

    return (
        <>
            <div className="wrap">
                <Style.Profile>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${userProfile?.profileIconId}.png`} alt="" />
                    <div className="info">
                        <h2>소환사명 : {userProfile?.name}</h2>
                        <h3>레벨 : {userProfile?.summonerLevel}</h3>
                        <h4>마지막접속일 : {timestampFormat(userProfile?.revisionDate, "yymmddhh")}</h4>
                    </div>
                </Style.Profile>
                {
                    scoreList?.length <= 0
                        ? <Loading></Loading>
                        : <>
                            <Style.scoreList >
                                {
                                    scoreList?.map((list, i) => {
                                        return (<li key={i} className={victoryCheck(list)}>
                                            <div className="gameInfo">
                                                <div>
                                                    <h3>{victoryCheck(list) === "win" ? "승리" : "패배"}</h3>
                                                    <h4>{timestampFormat(list.info.gameEndTimestamp, "yymmddhh")}</h4>
                                                </div>
                                                <h5>{playTime(timestampFormat(list.info.gameStartTimestamp, "hh"), timestampFormat(list.info.gameEndTimestamp, "hh"))}</h5>
                                            </div>
                                            <div className="champingImage">
                                                <img className='' src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${getPlayInfo(list)?.championName}.png`} alt="" />
                                            </div>
                                            <div className="detailInfo">
                                                <h5>{getPlayInfo(list)?.kills} / <div className="red"> {getPlayInfo(list)?.deaths} </div> / {getPlayInfo(list)?.assists}</h5>
                                                <h6>cs {getPlayInfo(list)?.cs}</h6>
                                                <div className='itemList'>
                                                    {getPlayInfo(list)?.item0 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item0}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item1 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item1}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item2 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item2}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item3 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item3}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item4 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item4}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item5 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item5}.png`} alt="" />}
                                                    {getPlayInfo(list)?.item6 !== 0 && <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${getPlayInfo(list)?.item6}.png`} alt="" />}
                                                </div>
                                            </div>
                                            {/* {
                                    list.info.participants.map((userInfo, j) => {
                                        return (
                                            <div key={j}>
                                                {
                                                    j < 5
                                                        ? <div className="blue">블루{userInfo.riotIdGameName}</div>
                                                        : <div className="red">레드{userInfo.riotIdGameName}</div>
                                                }
                                            </div>
                                        )
                                    })
                                } */}
                                        </li>)
                                    })
                                }
                            </Style.scoreList>
                            <Style.More onClick={() => { setMore(more + 5) }}>
                                <i className="fa-solid fa-plus"></i>
                            </Style.More>
                        </>
                }

            </div>
        </>
    );
};

export default Main;