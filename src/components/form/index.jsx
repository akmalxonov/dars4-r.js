import React, { useEffect, useState } from 'react';
import Card from '../card';
import axios from 'axios';
import '../form/form.scss'
const Form = () => {
    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then((res) => setData(res.data))
            .catch((err)=>console.log(err));
    }, [])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const [data, setData] = useState([])
    const submit = (e) => {
        e.preventDefault()
        let newData = {
            id: Date.now(),
            name,
            price,
            desc,
            img
        }
        if (data.find(item => item.name === name)) return;
        setData((p) => [newData, ...p])
        setName("")
        setPrice("")
        setDesc("")
        setImg("")
        console.log(data);

    }
    const editTodo = (id, newText) => {
        const updatedData = data.map((item) => {
            if (item.id === id) {
                return { ...item, name: newText , ...item,price:newText };
            }
            return item;
        });
        setData(updatedData);
    };
    const deleteTodo = (id) => {
        let newDate = data.filter((value) => value.id !== id)
        setData(newDate)
    }
    return (
        <div className='container'>
            <h1>salom</h1>
            <form onSubmit={submit} action="" className='form'>
                <input type="name" placeholder='Name' onChange={(e) => setName(e.target.value)} value={name} />
                <input type="price" placeholder='Price' onChange={(e) => setPrice(e.target.value)} value={price} />
                <input type="desc" placeholder='Description' onChange={(e) => setDesc(e.target.value)} value={desc} />
                <input type="img" placeholder='Img' onChange={(e) => setImg(e.target.value)} value={img} />
                <button>click</button>
            </form>
            {data.map((value) => {
                return <Card key={value.id} {...value} deleteTodo={deleteTodo} editTodo={editTodo} />
            })}
        </div>
    );
}

export default Form;
