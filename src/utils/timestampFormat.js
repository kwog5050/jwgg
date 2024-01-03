/**
 * 타임스탬프 변환
 * 
 * @param {int} timestamp // 라이엇타임스탬프 
 * @param {string} type // yymmddhh or hh
 * @returns 
 */
export const timestampFormat = (timestamp, type) => {
    const date = new Date(timestamp);

    const year = date.getFullYear() % 100;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    if (type === "yymmddhh") {
        return `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분`;
    } else if (type === "hh") {
        return `${hours}시 ${minutes}분 ${seconds}초`;
    }

}