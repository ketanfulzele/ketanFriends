import React from 'react'

// props is pointing to the current commponents so that we can call all child components and all dynamic parameters by . notation 
const Scroll = (props) => {
    return (
        <div style = {{overflow : 'scroll' , border : '5px solid black' , height : '570px'}}>
            {props.children}
        </div>
    )
}


export default Scroll;