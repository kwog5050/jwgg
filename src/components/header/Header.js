import React, { useState } from 'react';

import * as Stlye from './style.js';
import { getUserProfile } from 'apis/riotApi/user.js';

const Header = ({ setUserProfile }) => {
    const [summonerName, setSummonerName] = useState('');

    const searchUser = () => {
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
        <Stlye.Header>
            <div className="wrap">
                <div className="flexBox">
                    <h1>JWGG</h1>

                    <div className="searchBox">
                        <input type="text" name='summonerName' placeholder='소환사명을 입려해주세요' onChange={onChange} onKeyPress={onKeyPress} />
                        <button onClick={searchUser}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </div>
        </Stlye.Header>
    );
};

export default Header;