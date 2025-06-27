// import {} from './features/themes/theme.css';

import { HashRouter, Routes, Route } from 'react-router-dom';

import {} from "./features/color/colours.css";

import PageNotFound from './pages/Error/pageNotFound';
import Home from './pages/Home/index';
import ClashofClans from './pages/Clash-of-Clans/index';
import Minecraft from './pages/Minecraft/index';

function App(){
    return (
    <HashRouter>
      <Routes>
        <Route path="*" element={<PageNotFound className="background" /> } />
        <Route path="/" element={<Home className="background" />} />
        <Route path="/clash-of-clans" element={<ClashofClans className="background" />} />
        <Route path="/minecraft" element={<Minecraft className="background" />} />
      </Routes>
    </HashRouter>
    );
}

export default App;