import React from 'react'
import ReactDom from 'react-dom'
import Hello from './components/Hello';

const root = document.getElementById('app')
ReactDom.render(<Hello/>, root)