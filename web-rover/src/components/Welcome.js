import React, {Component} from 'react'
//more feature rich
// contains State, maintain their own data
// complex UI logic
//Provide lifecycle Hooks
// Stateful
class Welcome extends Component{
    render(){
    return <h1>Welcome {this.props.name} class {this.props.heroName} Component</h1>
    }
}
export default Welcome