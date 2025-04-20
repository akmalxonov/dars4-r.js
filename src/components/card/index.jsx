import React, { useState } from 'react';
import '../card/card.scss';

const Card = ({ name, desc, price, img, id, deleteTodo, editTodo }) => {
    const [edit, setEdit] = useState(false);
    const [newName, setName] = useState(name);
    const [newPrice, setPrice] = useState(price);
    const [newDesc, setDesc] = useState(desc);
    const [newImg, setImg] = useState(img);
    const handleEdit = () => {
        if (edit) {
            editTodo(id, newName);
            editTodo(id, newPrice);
            editTodo(id, newDesc);
            editTodo(id, newImg);
        }
        setEdit(!edit);
    };

    return (
        <div className='card'>
            {edit ? (
                <>
                    <input
                        type="text"
                        value={newName}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newPrice}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newDesc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <input
                        type="text"
                        value={newImg}
                        onChange={(e) => setImg(e.target.value)}
                    />
                </>
            ) : (
                <div className="all">
                    <p>{newName}</p>
                    <p>{newPrice}</p>
                    <p>{newDesc}</p>
                    <img src={newImg} alt="img" />
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