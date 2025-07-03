"use client";
import Link from "next/link";
import FormInput from "../../../components/ui/formInput"
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function register () {
    const {register, handleSubmit, formState: { errors }} = useForm({
        shouldFocusError: false
    });

    const onSubmit =(userData) => {
        toast.success("User registered successfully!");
    }
    const onError = (errors: [Error]) => {
        Object.values(errors).forEach((error:Error) => {
            toast.error(error.message);
        })
    };
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col md:w-xl py-6 px-14 border-2 border-gray-300 rounded-lg mt-14">
                <h1 className="text-center font-bold text-2xl">Create an acount</h1>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit, onError)}>
                    <FormInput
                    id="name"
                    name="Name"
                    className=" flex-col"
                    formhook={register("name",{
                        required: {
                            value: true,
                            message: "Name is required"
                        },
                        pattern: {
                            value: /^[a-zA-Z\s]+$/,
                            message: "Name must contain only letters and spaces"
                        },
                        minLength: {
                            value: 3,
                            message: "Name must be at least 3 characters long"
                        },
                        maxLength: {
                            value: 10,
                            message: "Name must be at most 10 characters long"
                        }
                    })}
                    />

                    <FormInput
                    id="username"
                    name="Username"
                    className=" flex-col"/>
                    
                    <FormInput
                    id="email"
                    name="Email"
                    className=" flex-col"/>
                    
                    <FormInput
                    id="password"
                    name="Password"
                    className=" flex-col"/>
                    
                    <FormInput
                    id="repearPassword"
                    name="Repeat password"
                    className=" flex-col"/>

                    <button type="submit" className="text-white bg-gray-900 rounded-md">Create acount</button>
                </form>
                <div className="flex justify-center gap-2 pt-1.5">
                    <p className=" text-gray-500 text-sm">Already have an account?</p>
                    <Link href={"/login"}
                    className="text-gray-500 text-sm hover:underline hover:text-gray-800">Sign in</Link>
                </div>
            </div>
        </div>
    )
}