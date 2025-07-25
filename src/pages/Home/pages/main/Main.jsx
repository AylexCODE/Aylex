import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import TechStack from "../../components/techStack/TechStack";

export default function Main(){
    const [dateTime, setDateTime] = useState(moment(new Date()).format("ddd, MMMM Do YYYY, hh:mm:ss A"));
    const [date, setDate] = useState(moment(new Date()).format("DD"));

    useEffect(() => {
        const d = setInterval(() => {
            setDateTime(moment(new Date()).format("ddd, MMMM Do YYYY, hh:mm:ss A"));
            setDate(moment(new Date()).format("DD"));
        }, 1000);

        return () => clearInterval(d);
    }, [date]);

    const breakpoint = useOutletContext();

    return (
        <>
        <div className="h-full w-full flex flex-col">
            <div>
                <div className="w-[calc(100%-2rem)] h-[13rem] flex flex-col p-[1.2rem] m-[1rem] mb-[0.5rem] rounded-xl text-componentsColor bg-[#123456]">
                    <span className="flex flex-row items-start justify-start gap-[0.5rem]">
                        <span className="relative">
                            <svg height="24px" width="24px" viewBox="0 0 24 24" stroke="var(--color-componentsColor)" fill="none" strokeWidth="1.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                                <path d="M16.18,2.43C16.18,2.43,16.18,1.0,16.18,1.0C16.18,1.0,14.63,1.0,14.63,1.0C14.63,1.0,14.63,2.43,14.63,2.43C14.63,2.43,9.37,2.43,9.37,2.43C9.37,2.43,9.37,1.0,9.37,1.0C9.37,1.0,7.82,1.0,7.82,1.0C7.82,1.0,7.82,2.43,7.82,2.43C7.82,2.43,1.0,2.43,1.0,2.43C1.0,2.43,1.0,23.0,1.0,23.0C1.0,23.0,23.0,23.0,23.0,23.0C23.0,23.0,23.0,2.43,23.0,2.43C23.0,2.43,16.18,2.43,16.18,2.43M7.82,4.14C7.82,4.14,7.82,5.57,7.82,5.57C7.82,5.57,9.37,5.57,9.37,5.57C9.37,5.57,9.37,4.14,9.37,4.14C9.37,4.14,14.63,4.14,14.63,4.14C14.63,4.14,14.63,5.29,14.63,5.29C14.63,5.29,16.18,5.29,16.18,5.29C16.18,5.29,16.18,4.14,16.18,4.14C16.18,4.14,21.45,4.14,21.45,4.14C21.45,4.14,21.45,7.0,21.45,7.0C21.45,7.0,2.55,7.0,2.55,7.0C2.55,7.0,2.55,4.14,2.55,4.14C2.55,4.14,7.82,4.14,7.82,4.14M2.55,21.29C2.55,21.29,2.55,8.71,2.55,8.71C2.55,8.71,21.45,8.71,21.45,8.71C21.45,8.71,21.45,21.29,21.45,21.29C21.45,21.29,2.55,21.29,2.55,21.29Z" />
                            </svg>
                            <p className="w-[1.25rem] text-[0.7rem] text-center absolute top-[7px] left-[2px] font-extrabold">{date}</p>
                        </span>
                        <p className="text-ellipsis text-nowrap whitespace-nowrap overflow-x-hidden">{dateTime}</p>
                    </span>
                    <p className="mt-auto text-[1.7rem] font-black">Programming for Fun</p>
                </div>
            </div>
            <div>
                <div className="bg-componentsColor p-[1rem]">
                    <span>
                        <p className="font-bold text-[1.35rem]">Tech Stack</p>
                    </span>
                    <div>
                        <span className="h-[calc(40px+2rem)] w-[calc(100%-2rem)] absolute block inset-shadow-[10px_0px_10px_var(--color-componentsColor)] z-15"></span>
                        <TechStack bp={breakpoint} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
