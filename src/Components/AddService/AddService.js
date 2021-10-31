import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./AddService.css"

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => console.log(data);

    const onSubmit = data => {
        console.log(data);
        axios.post('https://gentle-beach-61220.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    reset();
                }
            })
    }

    return (
        <div className="add-service p-5">
            <h1 className="fw-bold text-white my-4">Please Add a Service</h1>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-ss" {...register("name", { required: true, maxLength: 20 })} placeholder="Enter a Name" />
                <textarea className="form-ss" {...register("description")} placeholder="Description" />
                <input className="form-ss" type="number" {...register("visit")} placeholder="Price" />
                <input className="form-ss" {...register("img")} placeholder="Image-Url" />
                <input className="btn btn-dark" type="submit" value="Add Service" />
            </form>

        </div>







    );
};

export default AddService;