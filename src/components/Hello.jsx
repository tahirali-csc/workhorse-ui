import React from 'react'
import EmpList from '../services/list'
import Button from '@material-ui/core/Button';

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
        message: res
      })
    } catch (e) {
      console.log(e)
    }
  }
  render() {
    return (<div>
      {this.state.message} <br/>
      <Button variant="contained" color="primary">
        Hello World
    </Button>
    </div>)
  } 
}