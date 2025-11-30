import { useEffect, useState } from "react";
import { format } from "date-fns";

function Clock() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 20000);

        return () => clearInterval(timer);
    }, []);

    const dayMonth = format(now, "EEE d MMM");
    const time = format(now, "HH:mm");

    return (
        <div className="flex flex-row gap-2 items-center">
            <p>{dayMonth}</p>
            <p className="font-bold">{time}</p>
        </div>
    );
}

export function NavBar() {
    return (
        <div className="top-0 fixed h-[40px] w-full bg-background-alt border-b-1 border-border px-4 py-2 flex flex-row items-center justify-between">
            <div className="flex flex-row gap-2 items-center">
                <img src="./monitor image.svg" className="h-6 w-auto" />
                <p className="font-bold text-lg" >Tom Fullylove</p>
            </div>
            <Clock />
        </div>
    );
}
