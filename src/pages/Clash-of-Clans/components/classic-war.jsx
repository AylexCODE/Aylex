import { useQuery } from '@tanstack/react-query';

function ClassicWar(){
    const getWarData = useQuery({
        queryKey: ["warData"],
        queryFn: () => { return fetch("https://discord-bot-g423.onrender.com/clashofclans", { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: 'war' }) }).then(res => res.json() )}
    });

    // if(ClashofClansWarData.isFetching){
    //     return (
    //         <p>Getting war data...</p>
    //     )
    // }

    // if(ClashofClansWarData.isError){
    //     return (
    //         <p>An error occured while getting war data. {ClashofClansWarData.error}</p>
    //     )
    // }

    // const getWarData = function(){
    //     ClashofClansWarData.refetch().then((response) => {
    //         const warDataArray = Object.entries(response.data);
    //         const warDataMap = new Map(warDataArray);

    //         updateWarData(
    //             <>
    //             {warDataMap.forEach(war => 
    //                 <span>{war.startTime}</span>
    //             )}
    //             </>
    //         );
            
    //         console.log(warData);

    //         return (
    //             <>
    //             {warDataMap.forEach(war => 
    //                 <span>{war.startTime}</span>
    //             )}
    //             </>
    //         )
    //     });
    // }

    return (
        <>
        {getWarData.isFetching && (
            <div key={"ss"}>Getting war data...</div>
        )}
        {getWarData.isError && (
            <div key={"asadads"}>An error occured while getting war data. {getWarData.error}</div>
        )}
        {getWarData.data && Object.entries(getWarData.data).length > 0 && Object.entries(getWarData.data).map((war) => (
            <div key={war[0]}>{war[1].startTime}</div>
        ))}
        </>
    );
}

export default ClassicWar;