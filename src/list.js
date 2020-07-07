import React from "react";

export default function List(props)
{
    function removeItem(e) {
        let selectedIndex = e.target.parentNode.parentNode.id;
        //let index = e.target.parentNode.parentNode[selectedIndex].getAttribute('data-key');
        //let new_array = this.state.container.splice(selectedIndex,1);
        /*this.setState({
            container: new_array
        });*/ 
        console.log(selectedIndex);
    };

    //let count = props.count;

    const list = props.items.map((item, index) => 
    <div key={index} className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{item}</strong>
        <button type="button" onClick={removeItem} className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>);

    return list;
}