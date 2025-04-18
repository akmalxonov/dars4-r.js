import React, { useState } from 'react';
import '../card/card.scss';

const Card = ({ name,desc,price,img, id, deleteTodo, editTodo }) => {
    const [edit, setEdit] = useState(false); 
    const [input, setInput] = useState(name);
    const handleEdit = () => {
        if (edit) {
            editTodo(id, input); 
        }
        setEdit(!edit);
    };

    return (
        <div className='card'>
            {edit ? (
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            ) : (
                <div className="all">
                    <p>{name}</p>
                    <p>{desc}</p>
                    <p>{price}</p>
                    <img src={img} alt="img" />
                </div>
                
            )}

            <div className="btns">
                <button onClick={handleEdit}>{edit ? "save" : "edit"}</button> ||
                <button onClick={() => deleteTodo(id)}>delete</button>
            </div>
        </div>
    );
};

export default Card;