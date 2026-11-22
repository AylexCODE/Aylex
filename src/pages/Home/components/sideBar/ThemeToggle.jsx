import { useState, useEffect, useRef } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");
    const first = useRef(true);

    useEffect(() => {
        const root = document.documentElement;

        if (!first.current) {
            root.classList.add("theme-transition");
            const t = setTimeout(() => root.classList.remove("theme-transition"), 350);
            first.current = false;
            root.dataset.theme = dark ? "dark" : "light";
            try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
            return () => clearTimeout(t);
        }

        first.current = false;
        root.dataset.theme = dark ? "dark" : "light";
        try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
    }, [dark]);

    return (
        <div className="theme-toggle flex justify-between items-center mt-auto mx-[1rem] mb-[1rem] rounded-lg p-[0.75rem] bg-componentsColorClear">
            <span className="grid overflow-hidden">
                <p className={"col-start-1 row-start-1 transition-all duration-300 " + (dark ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100")}>
                    Light mode
                </p>
                <p className={"col-start-1 row-start-1 transition-all duration-300 " + (dark ? "translate-y-0 opacity-100" : "translate-y-full opacity-0")}>
                    Dark mode
                </p>
            </span>

            <button type="button" role="switch" aria-checked={dark} aria-label="Toggle dark mode" onClick={() => setDark(d => !d)} className="group relative w-[44px] h-[24px] rounded-max cursor-pointer transition-colors duration-300 bg-borderColor">
                <span className={"absolute top-[2px] left-[2px] h-[20px] w-[20px] rounded-max bg-white grid place-items-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-active:w-[26px] " + (dark ? "translate-x-[20px] group-active:translate-x-[14px]" : "translate-x-0")}>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={"absolute size-[12px] stroke-black transition-all duration-300 " + (dark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100")}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></svg>
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={"absolute size-[12px] stroke-black transition-all duration-300 " + (dark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50")}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                </span>
            </button>
        </div>
    );
}
