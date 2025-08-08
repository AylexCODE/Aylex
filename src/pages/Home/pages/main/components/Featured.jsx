export default function Featured(props){
    return (
        <div className="pt-[1rem] w-full">
            <ul className="w-full snap-x snap-mandatory h-[20rem] overflow-x-scroll flex flex-row gap-[0.5rem] [&>li]:snap-center [&>li]:block [&>li]:h-full [&>li]:w-[20rem] [&>li]:border [&>li]:border-borderColor [&>li]:rounded-xl [&>li>span]:block [&>li>span]:p-[0.5rem] [&>li>div]:h-[15rem] [&>li>div]:w-[20rem] [&>li>div]:rounded-t-xl [&>li>div]:overflow-hidden [&>li>div>img]:h-full [&>li>div>img]:w-full [&>li>span>p]:first:font-medium">
                <li>
                    <div><img src="%PUBLIC_URL%/../DiscordBOT-Handle.webp" alt="project handle"></img></div>
                    <span>
                        <p>Discord BOT</p>
                        <p>Preview available soon...</p>
                    </span>
                </li>
                <li>
                    <div><img src="%PUBLIC_URL%/../OnlineKaraoke-Handle.webp" alt="project handle"></img></div>
                    <span>
                        <p>Online Karaoke</p>
                        <p>Preview available soon...</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}