import { useState } from 'react';

function Todo(props) {

    const [completed, setCompleted] = useState(props.data.completed);

    const changeStatus = () => setCompleted(!completed);

    return (
        <div className="todo">
            <div className='id'>{props.data.id}</div>
            <div className="title">{props.data.title}</div>
            <div className="status" style={
                {backgroundColor: completed === false ? 'red' : 'green'}
                } onClick={changeStatus}></div>
        </div>
    );
}

export default Todo;