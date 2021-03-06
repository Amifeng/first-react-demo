import React, { Component } from 'react'
import './JSXLiveCompiler.css'


export class JSXLiveCompiler extends Component {

    constructor() {
        super();
        this.state = {
            input: '/* add your jsx here */',
            output: '',
            err: ''
        }
    }

    update = (e) => {
        let code = e.target.value;
        try {
            this.setState({
                output: window.Babel.transform(code, { presets: ['es2015', 'react'] }).code,
                err: ''
            })
        } catch (error) {
            this.setState({ err: error.message })
        }
    }

    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea
                        onChange={this.update}
                        defaultValue={this.state.input} />
                    <pre>{this.state.output}</pre>
                </div>
            </div>
        )
    }
}

export default JSXLiveCompiler
