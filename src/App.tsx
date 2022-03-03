import React from 'react';
import { Outlet } from "react-router-dom";

import './App.css';
import {Navbar} from "./widgets"


function App() {
 return <main>
          <Navbar></Navbar>
          <Outlet />
        </main>
}

export default App;