import React, { StrictMode } from 'react';
import {RecoilRoot} from "recoil"
import {BrowserRouter} from "react-router-dom"
import { createRoot } from 'react-dom/client';
import {Route,Routes} from "react-router-dom"
import App from './App';
import Home from './Home/Home';
import Registration from './Registration/Registration';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
    <RecoilRoot>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path ="/registration" element = {<Registration/>}/>

      </Routes>
    </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);
