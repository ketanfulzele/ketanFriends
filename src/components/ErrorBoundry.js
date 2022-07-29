import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(){
        super();
        this.state = {
            hasError : false 
        }
    }

    // same as that of try catch 
    componentDidCatch(error , info){
        this.setState({hasError : true});
    }
    render(){
        if (this.state.hasError){
            return <h1> Oops . Something Wend Wrong </h1>
        }
        else {
            return this.props.children ;     // children means jisse ye component wrap krega vo 
        }
    }
}

export default ErrorBoundry;