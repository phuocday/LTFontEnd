import { useDispatch } from 'react-redux'
import { add } from '../reducers/task_slice';
import { useRef } from 'react';

function FormAddTask() {
    const taskName = useRef()
    const dispatch = useDispatch();

    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <>
        <div className='wrapper'>
            <h1 class="text-center">TODO LIST APP</h1>
            <div className="form-add-task">
                <label>Task name:</label>
                <input type="text" placeholder="Input name of task" ref={taskName} />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
        </>
    );
}

export default FormAddTask;