export default function Featured(props){
    return (
        <div className="pt-[1rem] w-full">
            <ul className="w-[300px] h-[20rem] overflow-x-scroll flex flex-row gap-[0.5rem] [&>li]:inline-block [&>li]:overflow-hidden [&>li]:h-full [&>li]:w-[20rem] [&>li]:border [&>li]:border-borderColor [&>li]:rounded-xl [&>li>span]:block [&>li>span]:p-[0.5rem] [&>li>span>p]:font-medium">
                <li>
                    <div className="h-[15rem] w-[300px] bg-blue-500"></div>
                    <span>
                        <p>Discord BOT</p>
                    </span>
                </li>
                <li>
                    <div className="h-[15rem] w-[20rem] bg-green-500"></div>
                    <span>
                        <p>Online Karaoke</p>
                    </span>
                </li>
            </ul>
        </div>
    )
}