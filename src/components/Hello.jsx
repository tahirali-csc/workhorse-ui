import React from 'react'
import EmpList from '../services/list'

// const Hello = () => (
//   <div>
//       Relative Hello Control
//   </div>
// )

export default class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Yello"
    }
  }

  async componentDidMount() {
    console.log('exampleComponent mounted');
    let e = new EmpList()
    try {
      let res = await e.GetData()
      this.setState({
        message : res
      })
    } catch (e) {
      console.log(e)
    }
  }  

  render()  { 
    return <h1>{this.state.message}</h1>
  }
}