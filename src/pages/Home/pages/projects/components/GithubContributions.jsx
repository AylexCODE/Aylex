import GithubGraphQL from '../utilities/githubGraphQL.js';
import { useState, useEffect, useRef } from 'react';

const LEVELS = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

function padYear(days, year){
    const byDate = new Map(days.map(d => [d.date, d]));
    const out = [];
    const y = Number(year);
    for(const d = new Date(Date.UTC(y, 0, 1)); d.getUTCFullYear() === y; d.setUTCDate(d.getUTCDate() + 1)){
        const date = d.toISOString().slice(0, 10);
        out.push(byDate.get(date) ?? { date, weekday: d.getUTCDay(), contributionCount: 0, contributionLevel: "NONE", empty: true });
    }
    return out;
}

function longestStreak(days){
    let best = 0, run = 0;
    for(const day of days){
        run = day.contributionCount > 0 ? run + 1 : 0;
        if(run > best) best = run;
    }
    return best;
}

function getMonth(n){
    const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return names[parseInt(n) - 1] ?? "N/A";
}

export default function GithubContributions(){
    const [years, setYears] = useState();
    const [contributions, setContributions] = useState();
    const [stats, setStats] = useState({ total: 0, streak: 0 });
    const [activeYear, setActiveYear] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const cache = useRef({});
    const latest = useRef(null);

    useEffect(() => {
        (async function(){
            try{
                const list = await new GithubGraphQL().getYears();
                setYears(["Last Year", ...list.map(String)]);
                showYear("Last Year");
            }catch{
                setError("Could not load contributions.");
            }
        })();
        // eslint-disable-next-line
    }, []);

    async function showYear(label){
        latest.current = label;
        const key = label === "Last Year" ? "last" : label;

        try{
            if(!cache.current[key]){
                setLoading(true);
                cache.current[key] = await new GithubGraphQL().getYear(key);
            }
        }catch{
            if(latest.current === label){ setLoading(false); setError("Could not load contributions."); }
            return;
        }
        if(latest.current !== label) return;

        const res = cache.current[key];
        buildCalendar(key === "last" ? res.days : padYear(res.days, label));
        setStats({ total: res.totalContributions, streak: longestStreak(res.days) });
        setError(null);
        setLoading(false);
    }

    function buildCalendar(data){
        let currentMonth = null, currentWeek = 0, monthForLatest = 0;
        const months = [];

        for(const day of data){
            const monthInData = parseInt(day.date.split("-")[1]);

            if((currentMonth === monthInData || day.weekday !== 0) && currentMonth){
                if(day.weekday === 0){
                    months[monthForLatest][++currentWeek] = [day];
                }else{
                    months[monthForLatest][currentWeek].push(day);
                }
            }else{
                currentMonth = monthInData; monthForLatest++;
                currentWeek = 0;
                months[monthForLatest] = [];
                months[monthForLatest][currentWeek] = [day];
            }
        }

        setContributions(months);
    }

    return (
        <div className="h-fit w-full p-[16px] overflow-scroll text-[14px] border border-borderColor rounded-2xl">
        {years && contributions ? (
        <div className="w-fit">
            <div className="w-[935px] flex flex-row gap-[16px]">
                <div className={`w-[844px] overflow-hidden flex flex-row gap-[4px] [&>span]:flex [&>span]:flex-col [&>span]:gap-[4px] [&>span>p]:text-center [&>span>span]:flex [&>span>span]:flex-row [&>span>span]:gap-[4px] [&>span>span]:justify-end [&>span>span]:last:justify-start [&>span]:first:[&>span]:items-end [&>span>span>ul]:flex [&>span>span>ul]:flex-col [&>span>span>ul]:gap-[4px] [&>span>span>ul>li]:size-[12px] [&>span>span>ul>li]:inset-shadow-[0px_0px_0px_1px_var(--color-navShadowColor)] [&>span>span>ul>li]:rounded-xs transition-opacity duration-300 ${loading ? "opacity-50" : ""}`}>
                    {contributions.map((months) => (
                        <span key={'c'+months[0][0].date}>
                            <p>{getMonth(months[0][0].date.split("-")[1])}</p>
                            <span key={'t'+months[0][0].date}>
                            {months.map((week) => (
                                <ul key={'d'+week[0].date}>{
                                week.map(day => (
                                    <li key={day.date} title={day.empty ? undefined : `${day.contributionCount} contributions in ${day.date}`} data-level={day.contributionLevel} style={{backgroundColor: `var(--gh-${LEVELS[day.contributionLevel] ?? 0})`}}></li>
                                ))}</ul>
                            ))}
                            </span>
                        </span>
                    ))}
                </div>
                <div className="h-[160px] py-[8px]">
                    <ul className="h-full w-[75px] flex flex-col overflow-scroll gap-[8px] text-[12.8px] [&>li]:border [&>li]:border-borderColor [&>li]:p-[4px] [&>li]:rounded-lg [&>li]:text-center [&>li]:shadow-[0px_2px_0px_var(--color-navShadowColor)] [&>.active]:shadow-[0px_2px_0px_var(--color-activeBtnShadowColor)] [&>.active]:bg-activeBtnColor [&>.active]:border-activeBtnColor [&>.active]:text-componentsColor [&>.active]:font-medium">{years.map((year, index) => (
                        <li className={activeYear === index ? "active" : "inactive" } key={year}><button onClick={() => { setActiveYear(index); showYear(year); }}>{year}</button></li>
                    ))}</ul>
                </div>
            </div>
            <div className="w-full flex flex-col gap-[16px] h-[0px]">
                <span className="w-[calc(100%-90px)] h-[16px] relative top-[-20px] flex flex-row justify-between items-center gap-[8px] [&>span>ul]:flex [&>span>ul]:flex-row [&>span>ul]:gap-[2px] [&>span>ul>li]:rounded-xs [&>span>ul>li]:size-[12px]">
                    <span className="flex flex-row gap-[16px]">
                        <p>Total Contributions {stats.total}</p>
                        <p>Longest Streak {stats.streak} {stats.streak === 1 ? "day" : "days"}</p>
                        {error && <p className="opacity-60">{error}</p>}
                    </span>
                    <span className="flex flex-row justify-between items-center gap-[8px]">
                        <p>Less</p>
                        <ul>{[0, 1, 2, 3, 4].map((i) => (
                            <li key={i} style={{backgroundColor: `var(--gh-${i})`}}></li>
                        ))}</ul>
                        <p>More</p>
                    </span>
                </span>
            </div>
        </div>
        ) : (
        <div className="h-[160px] grid place-items-center">
            {error
                ? <p className="opacity-60">{error}</p>
                : <span className="flex animate-ping rounded-max size-[1rem] bg-textColor"></span>}
        </div>
        )}
        </div>
    )
}
