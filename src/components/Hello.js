import React , { Component}  from 'react';
// import './Hello.css'
import 'tachyons'

// class base components 
// class Hello extends Component{    // class bas ecomponents
//     render(){
//   return (
//     <div className="Hello">
//       <h1 className='tc'> Hello this is ketan</h1>
//       <p>{ this.props.greeting }</p>
//     </div>
//   );
// }
// }
                        //  or 

// function base components 
const Hello  = (props) => {    // class bas ecomponents
  return (
    <div className="Hello">
      <h1 className='tc'> Hello this is ketan</h1>
      <p>{ props.greeting }</p>
    </div>
  );
}

export default Hello;
