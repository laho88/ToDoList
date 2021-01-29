import {useState} from 'react';

function TodoList () {
    const [inputVal, setInputVal] = useState('');
    const [list, setList] = useState([]);

    // console.log('List:', list);
    
    function handleChange(event) {
        setInputVal(event.target.value);
    }
    
    function handleSubmit (event) {
        event.preventDefault();
        const clonedList = list.slice();

        clonedList.push({
            text: inputVal,
            completed: false
        });

        setList(clonedList);
        setInputVal('');
    }

    function handleDelete(index) {
        // const clonedList = list.slice();
        const filtered = list.filter((_, idx) => index !== idx);
        setList(filtered);
    }

    function toggleIt(index) {
        const todo = list[index];
        todo.completed = !todo.completed;

        // if(todo.completed === true) {
        //     todo.completed = false;
        // } else {
        //     todo.completed = true;
        // }
        setList([...list]);
    }

    return(
        <div>
            {inputVal}
            <form onSubmit = {handleSubmit}>
                <input 
                    type="text" 
                    onChange = {handleChange}
                    value = {inputVal}
                 />
                <button>Add</button>
            </form>
            <div>
                {list.map((item, idx) => (
                    <p key={idx}>
                        <span style={{ textDecoration: item.completed ? 'line-through' : 'none'  }}>{item.text}</span>
                        <input type="checkbox" onChange={()=>toggleIt(idx)}></input>
                        <button onClick={()=> handleDelete(idx)}>Delete</button>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default TodoList;