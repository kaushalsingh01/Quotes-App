import React, { useState, useEffect } from 'react';

export const Navbar = () => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    useEffect(() => {
        const timeInterval = setInterval(() => {
            const now = new Date();
            let hours = now.getHours();
            let minutes = now.getMinutes();
            let period = hours < 12 ? 'AM' : 'PM';
            hours = hours % 12 || 12;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            let timeString = hours + ':' + minutes + ' ' + period;
            setTime(timeString);
        }, 1000);

        const dateInterval = setInterval(() => {
            const currentDate = new Date();
            let date = currentDate.getDate();
            let month = currentDate.getMonth();
            let year = currentDate.getFullYear();
            const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thru', 'Fri', 'Sat']
            const monthNames = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            let dateString;
            date >= 4 ? dateString = monthNames[month]+', '+ date + 'th ' + year : dateString = date + 'rd' + monthNames[month] + ' ' + year;
            setDate(dateString);
            setDay(dayName[currentDate.getDay()]);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
            clearInterval(dateInterval);
        };
    }, []); 

    return (
        <div className="Navbar">
            <p className="date">{date}</p>
            <ul>
                <li>
                    <p>{day}, </p>
                </li>
                <li>
                    <p>{time}</p>
                </li>
            </ul>
        </div>
    );
};
