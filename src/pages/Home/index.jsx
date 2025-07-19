function Home(){
    return (
        <main className="h-dvh w-dvw select-none text-textColor text-base">
            <nav className="fixed top-0 flex flex-row justify-between items-center h-[40px] w-full px-[5px] shadow-[0px_1px_10px_0px] shadow-navShadowColor bg-navBg backdrop-blur-xs">
                <span className="flex flex-column gap-[5px] items-center">
                    <img src="%PUBLIC_URL%/../favicon.svg" height="30" width="30" className="rounded-sm overflow-hidden"></img>
                    <p className="font-bold text-iconTextColor">Aylex</p>
                </span>
                <span className="flex flex-row gap-[10px] h-fit">
                    <p>Projects</p>
                    <p>About</p>
                    <p>Home</p>
                </span>
            </nav>
            <section id="home" className="h-dvh w-dvw flex flex-col items-center bg-bgOdd pt-[45px]">
                <p>Home</p>
            </section>
            <section className="h-dvh w-dvw flex flex-col items-center bg-bgEven pt-[45px]">
                <p>About</p>
            </section>
            <section className="h-dvh w-dvw flex flex-col items-center bg-bgOdd pt-[45px]">
                <p className="font-bold text-xl">Projects</p>
                <div className="h-[90%] w-[90%] p-[10px] flex flex-row gap-[10px]">
                    <span className="h-[200px] w-[200px] flex flex-col rounded-sm border border-white p-[5px]">
                        <p>Online Karaoke</p>
                        <a href="https://github.com/AylexCODE/Karaoke" className="underline">Source Code</a>
                        <a href="jkaraoke.42web.io" className="underline">Demo</a>
                    </span>
                    <span className="h-[200px] w-[200px] flex flex-col rounded-sm border border-white p-[5px]">
                        <p>Discord BOT</p>
                        <a href="">Source Code</a>
                    </span>
                </div>
            </section>
        </main>
    );
}

export default Home;