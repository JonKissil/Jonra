import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.name));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Username or Password is not matching with our record");
            }
        } else {
            console.log("Username or Password is not matching with our record");
        }
    };
    return (
        <>
            <p className="title">Login Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="name" {...register("name", { required: true })} />
                {errors.name && <span style={{ color: "red" }}>
                    *Username* is mandatory </span>}
                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default Login;