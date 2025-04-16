import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data);

    return (
        <>
            <p className="title">Registration Form</p>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("name")} />

                <input type="password" {...register("password")} />
                <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}
export default App;

//<input type="name" {...register("name", { required: true })} />
                //{errors.name && <span style={{ color: "red" }}>
                    //*Username* is mandatory </span>}