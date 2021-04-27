import React, { useEffect, useCallback, useState } from "react";
import { Slide } from "react-awesome-reveal";

export default function TimeCounter() {
    const [time, setTime] = useState([0, 0, 0, 0]);

    const renderItem = (time, value) => (
        <div className="countdown_item">
            <div className="countdown_time">{time}</div>
            <div className="countdown_tag">{value}</div>
        </div>
    );

    const getTimeUntil = useCallback((deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());

        if (time > 0) {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor(time / (1000 * 60 * 60 * 24));

            setTime([days, hours, minutes, seconds]);
        }
    }, []);

    useEffect(() => {
        setInterval(() => getTimeUntil("Jun, 20, 2021, 01:20:00"), 1000);
    }, [getTimeUntil]);

    return (
        <Slide left delay={300}>
            <div className="countdown_wrapper">
                <div className="countdown_top">Events start in</div>
                <div className="countdown_bottom">
                    {renderItem(time[0], "Days")}
                    {renderItem(time[1], "Hs")}
                    {renderItem(time[2], "Min")}
                    {renderItem(time[3], "Sec")}
                </div>
            </div>
        </Slide>
    );
}
