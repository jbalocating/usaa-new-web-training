import React, {Component} from 'react';
import PostField from './post-section.js';

export default class App extends Component{

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            post: "My initial state",
            list: []
        }
    }

    handleSubmit(e) {
        this.setState({
           post: e
        });
        this.state.list.push(e)
        console.log(this.state.list)
    }

    render(){
        return(
            <div>
                <PostField
                    submit={this.handleSubmit}
                    myArray={this.handleSubmit}
                />
                <p>Output here : {this.state.post}</p>
                <p>Output here : {this.state.list.map(function() {
                    
                })}</p>
            </div>
        )
    }
}