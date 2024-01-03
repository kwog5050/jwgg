import React, { useEffect, useState } from 'react';

import { getUserScoreList } from 'apis/riotApi/user.js';

import * as Style from './style.js';

const Main = ({ userProfile }) => {
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

    // 본인이 플레이한 챔피언이름 가져오기
    const getChampionImage = (gameInfo) => {
        for (let i = 0; i < gameInfo.info.participants.length; i++) {
            if (userProfile?.name === gameInfo.info.participants[i].riotIdGameName) {
                return gameInfo.info.participants[i].championName;
            }
        }
    }

    // 시간 포맷
    const dateFormat = (timestamp) => {
        const date = new Date(timestamp);

        const year = date.getFullYear() % 100;
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
    }

    useEffect(() => {
        setScoreList([]);
        getUserScoreList(userProfile?.puuid, 5, setScoreList);
    }, [userProfile]);

    return (
        <>
            <div className="wrap">
                <Style.Profile>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/profileicon/${userProfile?.profileIconId}.png`} alt="" />
                    <div className="info">
                        <h2>소환사명 : {userProfile?.name}</h2>
                        <h3>레벨 : {userProfile?.summonerLevel}</h3>
                        <h4>마지막접속일 : {dateFormat(userProfile?.revisionDate)}</h4>
                    </div>
                </Style.Profile>
                <Style.scoreList >
                    {
                        scoreList.length > 0 &&
                        scoreList?.map((list, i) => {
                            return (<li key={i} className={victoryCheck(list)}>
                                <div className="gameInfo">
                                    <h4>{victoryCheck(list) === "win" ? "승리" : "패배"}</h4>
                                    <h4>{dateFormat(list.info.gameEndTimestamp)}</h4>
                                </div>
                                <div className="champingImage">
                                    <img className='' src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/champion/${getChampionImage(list)}.png`} alt="" />
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
            </div>
        </>
    );
};

export default Main;