import React from 'react'
//functional components are stateless/Dumb/Presentational
// using hooks in  react 16.7.0 for handling state
const Greet = (props) => { 
    
    console.log(props)
return (<div>
<h1>Hello {props.name}} a.ka. {props.heroName}</h1>
{props.children}
</div>
)
}

// export const Greet = () => <h1>Hello Dheeru</h1> // named export

export default Greet