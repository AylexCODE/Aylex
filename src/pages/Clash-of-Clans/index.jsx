import React, { useState } from 'react';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import ClassicWar from './components/classic-war';

function ClashofClans(){
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() =>{
        setIsLoading(false);
    }, 250);

    return (
        <main className="h-dvh w-dvw grid place-items-center">
        {isLoading === false ? (
            <>
            <ClassicWar />
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default ClashofClans;