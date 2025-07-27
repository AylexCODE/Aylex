export default function OverallStats(props){
    return (
        <div className={`py-[1rem] flex ${props.bp >= 992 ? "flex-row" : "flex-col"} gap-[1rem] [&>div]:w-full [&>div>span]:bg-bgColor [&>div>span]:rounded-xl [&>div]:flex [&>div]:flex-row [&>div]:gap-[1rem] [&>div>span]:w-full [&>div>span]:p-[1rem] [&>div>span>span]:flex [&>div>span>span]:flex-row [&>div>span>span]:items-center [&>div>span>span]:gap-[0.75rem] [&>div>span>span]:mb-[1rem]`}>
            <div>
                <span>
                    <span>
                        <div className="h-[48px] w-[48px] rounded-xl bg-black"></div>
                        <p>-</p>
                    </span>
                    <p>Experience</p>
                </span>
                <span>
                    <span>
                        <svg className="rounded-xl" width="48px" height="48px" viewBox="0 0 48 48"><path fill="#F7DF1E" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M0.0,0.0C0.0,0.0,48.0,0.0,48.0,0.0C48.0,0.0,48.0,48.0,48.0,48.0C48.0,48.0,0.0,48.0,0.0,48.0C0.0,48.0,0.0,0.0,0.0,0.0Z" stroke-linecap="round"/><path fill="#000000" fill-opacity="1.0" stroke="#000000" stroke-width="2.0" stroke-opacity="0.0" stroke-miterlimit="10" d="M12.62,40.12C12.62,40.12,16.3,37.88,16.3,37.88C17.0,39.14,17.65,40.21,19.19,40.21C20.68,40.21,21.61,39.62,21.61,37.37C21.61,37.37,21.61,22.03,21.61,22.03C21.61,22.03,26.12,22.03,26.12,22.03C26.12,22.03,26.12,37.44,26.12,37.44C26.12,42.11,23.38,44.23,19.38,44.23C15.78,44.23,13.68,42.36,12.62,40.1M28.57,39.62C28.57,39.62,32.24,37.5,32.24,37.5C33.22,39.08,34.46,40.24,36.7,40.24C38.56,40.24,39.76,39.31,39.76,38.02C39.76,36.47,38.53,35.93,36.47,35.02C36.47,35.02,35.34,34.54,35.34,34.54C32.09,33.16,29.93,31.42,29.93,27.74C29.93,24.36,32.51,21.78,36.53,21.78C39.4,21.78,41.46,22.78,42.95,25.39C42.95,25.39,39.43,27.65,39.43,27.65C38.65,26.26,37.82,25.7,36.53,25.7C35.21,25.7,34.37,26.54,34.37,27.65C34.37,28.99,35.21,29.54,37.14,30.38C37.14,30.38,38.27,30.86,38.27,30.86C42.11,32.51,44.27,34.19,44.27,37.96C44.27,42.01,41.08,44.23,36.79,44.23C32.6,44.23,29.89,42.24,28.57,39.62" stroke-linecap="round"/></svg>
                        <p>JavaScript</p>
                    </span>
                    <p>Primary</p>
                </span>
            </div>
            <div>
                <span>
                    <span>
                        <div className="h-[48px] w-[48px] rounded-xl bg-black"></div>
                        <p>-</p>
                    </span>
                    <p>Projects</p>
                </span>
                <span>
                    <span>
                        <div className="h-[48px] w-[48px] rounded-xl bg-back"></div>
                        <p>-</p>
                    </span>
                    <p>Technologies</p>
                </span>
            </div>
        </div>
    )
}