import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MiniDrawer from './components/MiniDrawer'
import SideMenu from './components/SideMenu'

const root = document.getElementById('app')
ReactDom.render(
    <div>
        <BrowserRouter>
            {/* <Header /> */}
            {/* <MiniDrawer/> */}
            <SideMenu/>
        </BrowserRouter>
    </div>, root)