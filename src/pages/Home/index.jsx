import React, { useState } from 'react';

import BurgerMenu from "./components/menu/BurgerMenu";

function Home(){
    const [navState, setNavState] = useState(false);
    
    return (
        <main className="h-dvh w-dvw select-none text-textColor text-base">
            <header className="h-[4rem] w-[100dvw] px-[1rem] shadow-[var(--color-navShadowColor)_0px_2px_8px] flex flex-row justify-between items-center">
                <img src="%PUBLIC_URL%/../favicon.svg" alt="logo" className="overflow-hidden rounded-full h-[2.2rem] w-[2.2rem]"></img>
                <button className="w-[2rem] h-[1.5rem]" onClick={() => { navState === false ? setNavState(true) : setNavState(false) }}>
                    <BurgerMenu state={navState} />
                </button>
            </header>
            <div></div>
            <aside></aside>
            <section className="h-[100dvh] w-[100dvw]"></section>
        </main>
    );
}

export default Home;