import React, { useState } from 'react';

import LoadingScreen from '../../components/Loader/LoadingScreen';
// import ClassicWar from './components/classic-war';

function ClashofClans(){
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() =>{
        setIsLoading(false);
    }, 250);

    return (
        <main className="h-dvh w-dvw grid place-items-center bg-[#5E5452]">
        {isLoading === false ? (
            <div className="h-95 w-90 bg-[#E8E8E0]">
            </div>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default ClashofClans;
