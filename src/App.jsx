// import {} from './features/themes/theme.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import {} from "./features/color/colours.css";

import PageNotFound from './pages/Error/page-not-found';
import Home from './pages/Home/index';
import ClashofClans from './pages/Clash-of-Clans/index';
import Minecraft from './pages/Minecraft/index';

function App(){
    return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound /> } />
        <Route path="/" element={<Home />} />
        <Route path="/clash-of-clans" element={<ClashofClans />} />
        <Route path="/minecraft" element={<Minecraft />} />
      </Routes>
    </HashRouter>
    );
}

export default App;