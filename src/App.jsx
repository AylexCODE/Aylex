// import {} from './features/themes/theme.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PageNotFound from './pages/Error/pageNotFound';
import Home from './pages/Home/index';
import ClashofClans from './pages/ClashofClans/index';
import Minecraft from './pages/Minecraft/index';

function App(){
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<PageNotFound className="background" /> } />
        <Route path="/" element={<Home className="background" />} />
        <Route path="/Clash-of-Clans" element={<ClashofClans className="background" />} />
        <Route path="/Minecraft" element={<Minecraft className="background" />} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;