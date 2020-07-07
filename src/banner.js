import React, { Component } from 'react'
import './banner.css';

export default class Banner extends Component
{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
            <img src={require('./icons8-todo-list-64.png')} alt='' />
            <b className="navbar-brand">ToDo List</b>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            </nav>
        );
    }
}
