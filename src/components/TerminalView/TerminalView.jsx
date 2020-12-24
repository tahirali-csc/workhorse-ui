// import 'xterm/lib/xterm.js'
// import 'xterm/css/xterm.css'
import React, { createRef, useEffect, useRef } from 'react'

import 'xterm/css/xterm.css'
import { Terminal } from 'xterm'

class TerminalView extends React.Component {
    constructor(props) {
        super(props)
        this.termRef = createRef()
        this.term = new Terminal()
    }

    componentDidMount(){
        this.term.open(this.termRef.current)
        // this.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ")
    }

    write(msg){
        this.term.writeln(msg)
    }

    render() {
        return (
            <div style={{ padding: '10px' }}>
                <div ref={this.termRef}></div>
            </div>
        )
    }
}
// const TerminalView = ({list}) => {
//     const term = new Terminal()
//     const inputEl = useRef(null)

//     useEffect(() => {
//         // console.log(inputEl)
//         term.open(inputEl.current)
//     })

//     return (
//         <div style={{ padding: '10px' }}>
//             <div ref={inputEl}></div>
//         </div>
//     )
// }

export default TerminalView