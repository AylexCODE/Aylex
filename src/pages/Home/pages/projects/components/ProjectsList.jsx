import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const PROJECTS = [
    { title: "Vision (Discord BOT)", date: "May 2025", tags: ["Bot", "Private"] },
    { title: "Number Lock (Web)", date: "October 2025", to: "/games/numberlock", tags: ["Game", "Web", "Public"] },
    { title: "Cloud Clipboard (Web)", date: "October 2025", to: "/tools/clipboard", tags: ["Web", "Public"] },
    { title: "Chatbot (NLP)", date: "March 2026", to: "/chatbots/vision", tags: ["Web", "Public"] },
    { title: "Cloud Clipboard (VS Code)", date: "March 2026", to: "https://marketplace.visualstudio.com/items?itemName=AylexCODE.cloud-clipboard", tags: ["Extension", "Public"] },
    { title: "PocketRein: Finance Manager", date: "November 2026", to: "https://pocketrein.onrender.com", tags: ["Application", "Android", "Public"] }
];

const CalendarIcon = (
    <svg width="16px" height="16px" viewBox="0 0 16 16" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeMiterlimit="10" className="stroke-textColor"><path d="M1.5,13.83C1.54,14.42,2.08,15.0,2.62,15.0C2.62,15.0,13.42,15.0,13.42,15.0C13.96,15.0,14.5,14.42,14.5,13.83C14.5,13.83,14.5,3.92,14.5,3.92C14.5,3.33,13.96,2.75,13.42,2.75C13.42,2.75,2.62,2.75,2.62,2.75C2.08,2.75,1.54,3.33,1.54,3.92C1.54,3.92,1.5,13.83,1.5,13.83M1.54,5.67C1.54,5.67,14.5,5.67,14.5,5.67C14.5,5.67,1.54,5.67,1.54,5.67M5.32,1.0C5.32,1.0,5.32,4.5,5.32,4.5C5.32,4.5,5.32,1.0,5.32,1.0M10.72,1.0C10.72,1.0,10.72,4.5,10.72,4.5C10.72,4.5,10.72,1.0,10.72,1.0Z" /></svg>
);

export default function ProjectsList(props) {
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        props.project?.(PROJECTS.length);
        // eslint-disable-next-line
    }, []);

    const tags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort((a, b) => a.localeCompare(b));
    const visible = [...(filter ? PROJECTS.filter(p => p.tags.includes(filter)) : PROJECTS)].reverse();

    return (
        <div className="pt-[1rem] w-full">
            <div className="flex flex-row flex-wrap gap-x-[1rem] gap-y-[0.25rem] pb-[1rem] text-[0.85rem]">
                {[null, ...tags].map(tag => {
                    const active = filter === tag;
                    return (
                        <button
                            key={tag ?? "all"}
                            type="button"
                            aria-pressed={active}
                            onClick={() => setFilter(tag)}
                            className={"cursor-pointer border-b transition-opacity duration-300 " +
                                (active ? "border-textColor opacity-100" : "border-transparent opacity-50 hover:opacity-80")}
                        >
                            {tag ?? "All"}
                        </button>
                    );
                })}
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] max-h-[26rem] overflow-y-auto pr-[0.5rem]">
                {visible.map(p => {
                    const cardClass = "flex flex-col gap-[0.75rem] h-full p-[1rem] rounded-xl border border-borderColor";
                    const body = (
                        <>
                            <h3 className="font-medium">{p.title}</h3>
                            <span className="flex flex-row flex-wrap gap-[0.35rem]">
                                {p.tags.map(t => (
                                    <span key={t} className="rounded-2xl border border-borderColor px-[0.5rem] text-[0.8rem] opacity-70 text-nowrap">
                                        {t}
                                    </span>
                                ))}
                            </span>
                            <p className="mt-auto pt-[0.5rem] flex flex-row gap-[0.5rem] items-center text-[0.85rem] opacity-60">
                                {CalendarIcon} {p.date}
                            </p>
                        </>
                    );
                    return (
                        <li key={p.title}>
                            {p.to ? <NavLink to={p.to} target="_blank" className={cardClass + " transition-colors duration-300 hover:bg-componentsColorClear"}>{body}</NavLink> : <div className={cardClass}>{body}</div> }
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
