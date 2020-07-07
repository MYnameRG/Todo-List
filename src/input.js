import React, { Component, Fragment } from 'react';
//import List from './list';
import './input.css';

export default class Input extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            list: []
        };
    }

    removeTheItems = (e) => {
        e.preventDefault();
        let item_index = e.target.parentNode.parentNode.id;
        if(item_index.length !== 0)
        {
            let new_list = this.state.list;
            new_list.splice(parseInt(item_index),1);
            this.setState({ list: new_list });
            console.log(new_list);
        };
    }

    addOnItems = (e) => {
        e.preventDefault();
        let task = e.target.parentNode.parentNode.childNodes[0].value;
        let array = this.state.list;
        array.push(task);
        e.target.parentNode.parentNode.childNodes[0].value = '';
        this.setState({ list: array });
    };

    render(){
        let data = this.state.list;
        let count = 0;
        return (
            <Fragment>
                <div className="container inpt" >
                <div className="row">
                <div className="col-md-6 offset-md-3">
                <div className="input-group input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter your task.." aria-label="Enter your task.." aria-describedby="button-addon2" id="enter_task" />
                <div className="input-group-append">
                    <button className="btn btn-danger btn-outline-secondary" type="button" id="button-addon2" onClick={this.addOnItems}>Add To List</button>
                </div>
                </div>
                </div>
                </div>
                {
                data.map((item, index) => 
                    <div key={index} className="alert alert-warning alert-dismissible fade show" role="alert" id={count++}>
                        <strong>{item}</strong>
                        <button type="button" onClick={this.removeTheItems} className="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>)
                }
                </div>
            </Fragment>
        );
    }
}
