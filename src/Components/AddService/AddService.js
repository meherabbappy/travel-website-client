import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    reset();
                }
            })
    }

    return (
        <div className="add-service p-5  bg-warning">
            <h1>Please Add a Service</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("visit")} placeholder="price" />
                <input {...register("img")} placeholder="image Url" />
                <input type="submit" />
            </form>

        </div>







    );
};

export default AddService;