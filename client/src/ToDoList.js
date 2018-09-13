import React, {Component} from 'react'

class ToDoList extends Component{
    render() {
        var forEachItem = this.props.arr.map(
            eachItem => {
                return (
                    <div>
                        <p>{eachItem.username}</p>
                        <p>{eachItem.todo}</p>
                        <p>{eachItem.isDone.toString()}</p>
                        <p>{eachItem.username} has to {eachItem.todo} which is {eachItem.isDone.toString()}</p>
                        <hr/>
                    </div>

                )
            }
        );

        return (
            <div>
                <h2> {forEachItem}</h2>
            </div>
        );
    }
}

export default ToDoList;