import axios from "axios";

// 유저 프로필 정보 조회
const getUserProfile = async (summonerName, success) => {
    try {
        const res = await axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_API_KEY}`);

        success(res.data);
    } catch (error) {
        alert('소환사 검색 도중 에러 발생');
    }
}

// 유저 게임전적 조회
const getUserScoreList = async (puuid, count, success) => {
    try {
        const gameCodeResponse = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=${count}&api_key=${process.env.REACT_APP_API_KEY}`);

        let gameInfoListArr = [];

        for (let i = 0; i < gameCodeResponse.data.length; i++) {
            const gameInfoResponse = await axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${gameCodeResponse.data[i]}?api_key=${process.env.REACT_APP_API_KEY}`);

            gameInfoListArr.push(gameInfoResponse.data);
        }

        console.log(gameInfoListArr);
        success(gameInfoListArr);
    } catch (error) {
        alert('조회 할 수 없음');
    }
}

export { getUserProfile, getUserScoreList };