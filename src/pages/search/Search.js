import React, { useState } from 'react';

import * as Style from './style.js';
import { getUserProfile } from 'apis/riotApi/user';

const Search = ({ setUserProfile, setMore }) => {
    const [summonerName, setSummonerName] = useState('');

    const searchUser = () => {
        setMore(5);
        getUserProfile(summonerName, setUserProfile);
    }

    const onKeyPress = (e) => {
        if (e.code === "Enter") searchUser();
    }

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === 'summonerName') setSummonerName(value);
    }

    return (
        <Style.Search>
            <div className="searchBox">
                <input type="text" name='summonerName' placeholder='소환사명을 입력해주세요' onChange={onChange} onKeyPress={onKeyPress} />
                <button onClick={searchUser}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </Style.Search>
    );
};

export default Search;