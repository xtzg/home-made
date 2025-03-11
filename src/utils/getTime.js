import dayjs from 'dayjs';
export const getCurrentTime = () => {
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1 < 10 ? "0" + (time.getMonth() + 1) : time.getMonth() + 1;
    let day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
    let hour = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    let minute = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    let second = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    let currentTime = {
      year,
      month,
      day,
      hour,
      minute,
      second,
      weekday: weekday[time.getDay()],
    };
    return currentTime;
};
//day 星期 
export const getTimeCapsule=()=>{
    const now =dayjs();
    const year = now.year();
    const month = now.month();
    const day = now.date();
    const hour = now.hour();
    const minute = now.minute();
    const second = now.second();
    const set=['minute','hour','date','month','year'];
    const countDiff=(unit)=>{
        if(unit==='day')unit='date';
        const start =now.startOf(set[set.indexOf(unit)+1]);
        const end =now.endOf(set[set.indexOf(unit)+1]);
        const total = end.diff(start,unit==='date'?'day':unit)+1;    
        const pass =unit==='hour'? now.diff(start,unit==='date'?'day':unit):now.diff(start,unit==='date'?'day':unit)+1;
        const remain = total-pass;
        const percentage = (pass/total)*100;
        return{
            total,
            pass,
            remain,
            percentage:percentage.toFixed(2)
        };
        
    }
    return {countDiff};
};