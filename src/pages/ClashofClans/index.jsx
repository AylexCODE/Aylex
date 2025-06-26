import React, { useState } from 'react';

import LoadingScreen from '../../components/Loader/LoadingScreen';
import ClassicWar from './components/ClassicWar';

function ClashofClans(){
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() =>{
        setIsLoading(false);
    }, 2000);

    return (
        <main>
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