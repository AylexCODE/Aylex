import { NavLink } from "react-router-dom";

export default function SideBar(props){
    return (
        <div className={"h-[100%] w-[100%] flex flex-col bg-componentsColor border border-borderColor rounded-xl" +(props.bp <= 640 ? " border-none" : "")}>
            <div className="flex flex-col gap-[1.25rem] p-[1.25rem]">
                <img src="%PUBLIC_URL%/../favicon.svg" alt="logo" className="w-[6rem] h-[6rem] rounded-full bg-bgColorClear"></img>
                    <div className="flex flex-col gap-[0.25rem] text-textColor">
                    <h1 className="text-lg font-bold text-ellipsis text-nowrap whitespace-nowrap overflow-x-hidden">Alexander I. Jala</h1>
                    <p className="text-sm text-ellipsis text-nowrap whitespace-nowrap overflow-x-hidden">Trainee Developer</p>
                </div>
            </div>
            <ul className="flex flex-col [&>li>a]:flex [&>li>a]:flex-row [&>li>a]:px-[1.25rem] [&>li>a]:py-[0.75rem] [&>li>a]:items-center [&>li>a]:gap-[0.65rem]">
                 <li onClick={() => props.setPage()}>
                       <NavLink to="/" replace className={({isActive}) => isActive ? "bg-componentsColorClear" : "bg-componentsColor"}>
                        <svg height="16px" width="16px" viewBox="0 0 24 24" className="stroke-textColor in-[.bg-componentsColorClear]:stroke-sideTextColorActive" fill="none" strokeWidth="2.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        <p className="text-textColor in-[.bg-componentsColorClear]:text-sideTextColorActive">Home</p>
                    </NavLink>
                </li>
                <li onClick={() => props.setPage()}>
                    <NavLink to="/about" replace className={({isActive}) => isActive ? "bg-componentsColorClear" : "bg-componentsColor"}>
                        <svg height="16px" width="16px" viewBox="0 0 24 24" className="stroke-textColor in-[.bg-componentsColorClear]:stroke-sideTextColorActive" fill="none" strokeWidth="2.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>
                        <p className="text-textColor in-[.bg-componentsColorClear]:text-sideTextColorActive">About</p>
                    </NavLink>
                </li>
                <li onClick={() => props.setPage()}>
                    <NavLink to="/projects" replace className={({isActive}) => isActive ? "bg-componentsColorClear" : "bg-componentsColor"}>
                        <svg height="16px" width="16px" viewBox="0 0 24 24" className="stroke-textColor in-[.bg-componentsColorClear]:stroke-sideTextColorActive" fill="none" strokeWidth="2.0" strokeOpacity="1" strokeMiterlimit="10" strokeLinecap="round">
                            <path d="M1.82,18.07C1.82,9.87,1.81,9.2,1.82,5.01C1.83,3.27,3.05,2.84,3.69,2.84C6.41,2.81,4.7,2.81,8.76,2.84C10.56,2.85,10.49,5.96,12.24,5.96C16.59,5.97,16.12,5.97,19.68,5.96C21.84,5.96,21.95,7.61,21.95,8.08C21.93,11.54,21.95,12.99,21.95,18.07C21.95,18.19,21.89,19.78,20.18,19.78C15.88,19.78,12.32,19.78,3.74,19.78C3.5,19.78,1.82,19.78,1.82,18.07Z" />
                        </svg>
                        <p className="text-textColor in-[.bg-componentsColorClear]:text-sideTextColorActive">Projects</p>
                    </NavLink>
                </li>
            </ul>
            <div className="flex justify-between mt-auto mx-[1rem] mb-[1rem] rounded-lg p-[0.75rem] bg-componentsColorClear">
                <p>Testing</p>
                <input type="checkbox" />
            </div>
            <div className="flex flex-col gap-[0.15rem] pt-[0px] pb-[1.25rem] px-[1.25rem] opacity-60 [&>small]:text-xs">
                <small className="text-ellipsis text-nowrap whitespace-nowrap overflow-x-hidden">Built With ReactJS & Tailwind CSS</small>
                <small className="text-ellipsis text-nowrap whitespace-nowrap overflow-x-hidden">&#169; 2025 AylexCODE, All Rights Reserved.</small>
            </div>
        </div>
    )
}