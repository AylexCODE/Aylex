import React, { useState } from 'react';

import BurgerMenu from "./components/menu/BurgerMenu";
import SideBar from "./components/sideBar/SideBar";
import { Outlet } from 'react-router-dom';

function Home(){
    const [navState, setNavState] = useState(false);

    function pageHandler(){
        setNavState(false);
    }
    
    return (
        <main className="h-dvh w-dvw font-textFont select-none text-textColor text-base overflow-scroll bg-bgColor">
            <header className="h-[4rem] w-dvw bg-bgColor sticky top-0 px-[1rem] shadow-[var(--color-navShadowColor)_0px_2px_8px] flex flex-row justify-between items-center z-10 md:hidden">
                <img src="%PUBLIC_URL%/../favicon.svg" alt="logo" className="overflow-hidden rounded-full h-[2.2rem] w-[2.2rem]"></img>
                <button className="w-[2rem] h-[1.5rem]" onClick={() => { navState === false ? setNavState(true) : setNavState(false) }}>
                    <BurgerMenu state={navState} />
                </button>
            </header>
            <div className={"w-[70%] h-dvh flex flex-col fixed top-0 left-0 bg-bgColor rounded-r-2xl z-20 transition-all duration-300 md:hidden " +(navState ? "opacity-100" : "opacity-0")}>
                <SideBar setPage={pageHandler} />
            </div>
            <div onClick={() => setNavState(!navState)} className={"fixed top-0 w-dvw h-dvh z-15 bg-sideBarCover transition-all duration-300 ease-in-out md:hidden " +(navState ? "left-0" : "left-[-100dvw]")}></div>
            <aside className="max-md:hidden">
                <SideBar setPage={()=>false} />
            </aside>
            <section className="h-[100dvh] w-[100dvw]">
                <Outlet />
            </section>
        </main>
    );
}

export default Home;