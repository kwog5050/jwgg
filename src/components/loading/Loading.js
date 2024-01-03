import React, { useState, useEffect } from 'react';

import * as Style from './style.js';

const Loading = () => {
    const [loading, setLoading] = useState(0);

    const text = () => {
        if (loading >= 4) {
            setLoading(0);
        }
        if (loading === 0) {
            return '로딩중입니다';
        } else if (loading === 1) {
            return '로딩중입니다.';
        } else if (loading === 2) {
            return '로딩중입니다..';
        } else if (loading === 3) {
            return '로딩중입니다...';
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLoading((count) => count + 1);
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Style.Div>
            <i className="fa-solid fa-spinner"></i>
            <p>
                {text()} <br /> 잠시만 기다려주세요
            </p>
        </Style.Div>
    );
};

export default Loading;