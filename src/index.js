import React, { createRef, useEffect, useRef } from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import LearnView from './components/LearnView'
import MiniDrawer from './components/MiniDrawer'
import SideMenu from './components/SideMenu'
import TerminalView from './components/TerminalView/TerminalView'
import LogView from './components/LogViewer/LogView'

// import 'xterm/css/xterm.css'
// import { Terminal } from 'xterm'


// const OutputView = () => {
//     const term = new Terminal()
//     const inputEl = useRef(null)

//     useEffect(() => {
//         console.log(inputEl)
//         term.open(inputEl.current)
//         term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')
//     })

//     return (
//         <div style={{ padding: '10px' }}>
//             <div ref={inputEl}></div>
//         </div>
//     )
// }
// import 'xterm/css/xterm.css'
// import TerminalView from './components/TerminalView/TerminalView'

// var term = new t.Terminal();
// term.open(document.getElementById('terminal'));
// term.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ')

// const TV = () =>{
//     const inputEl = useRef(null)

//     useEffect(()=>{
//         let c = inputEl.current
//         c.write("ghghg")
//     }, [])

//     return (
//         <TerminalView ref={inputEl}/>
//     )
// }

const root = document.getElementById('app')
ReactDom.render(
    <div>
        <BrowserRouter>
            {/* <Header /> */}
            {/* <MiniDrawer/> */}
            <SideMenu/>
            {/* <TerminalView/> */}
            {/* <TV /> */}
            {/* <LearnView/> */}
            {/* <LogView/> */}
        </BrowserRouter>
    </div>, root)