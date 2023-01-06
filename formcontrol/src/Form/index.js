import React, { useState } from 'react'
import { useForm } from "react-hook-form";

const Forms = () => {
    //const {watch, register, handleSubmit, formState: { errors } } = useForm();
    const methodsTheming = useForm({
        defaultValues: {},
        mode: "all", 
      });
    
    const [data, setData] = useState("");

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }
    console.log(methodsTheming.watch())
    console.log(methodsTheming.formState.errors);

const {errors} = methodsTheming.formState;
    return (
        <form onSubmit={methodsTheming.handleSubmit((data) => setData(JSON.stringify(data)))}>
            {data}
            <input type="text" placeholder="First name" {...methodsTheming.register("Firstname", { required: true, maxLength: 80 })} />
            <input type="text" placeholder="Last name" {...methodsTheming.register("Lastname", { required: true, maxLength: 100 })} />
            <input type="text" placeholder="Email" {...methodsTheming.register("Email", { required: true, pattern: /^\S+@\S+$/i })} />

            {errors.Email && errors.Email.type === "required"  && <span>This is required</span>}
            {errors.Email && errors.Email.type === "pattern"  && <span>This is pattern required</span>}

            <input type="tel" placeholder="Mobile number" {...methodsTheming.register("Mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />
            <select {...methodsTheming.register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>

            <input {...methodsTheming.register("Developer", { required: true })} type="radio" value="Yes" />
            <input {...methodsTheming.register("Developer", { required: true })} type="radio" value="No" />

            <select {...methodsTheming.register("category", { required: true })}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
            </select>
            <textarea {...methodsTheming.register("aboutYou")} placeholder="About you" />
            <p>{data}</p>
            <input type="submit" />
        </form>
    )
}

export default Forms