import React, { Component } from 'react'

class Counter extends Component {
  
  constructor(props) {
      super(props)
  
      this.state = {
           count:0
      }
  }
//code only after the state has been updated.

  increment(){
      this.setState({
        count : this.state.count + 1
      },
     () => {
         console.log('Callback Value', this.state.count)
        }
         )
      
  }
  
  
    render() {
        return (
            <div>
              <div> <p>Count - {this.state.count} </p> </div>
              <button onClick= {()=>this.increment()}> Increment</button>
            </div>
        )
    }
}

export default Counter
