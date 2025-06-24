import React, { useState } from 'react';

import LoadingScreen from '../../components/Loader/LoadingScreen';

function ClashofClans(){
    const [isLoading, setIsLoading] = useState(true);

    setTimeout(() =>{
        setIsLoading(false);
    }, 2000);

    return (
        <main>
        {isLoading === false ? (
            <>
            <p>Hello World!</p>
            </>
        ) : (
            <LoadingScreen />
        )}
        </main>
    );
}

export default ClashofClans;