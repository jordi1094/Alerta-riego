import Link from "next/link";
import FormInput from "../../../components/ui/formInput";

export default function register () {
    return (
        <div className="w-full flex justify-center">
            <div className="flex flex-col md:w-xl py-6 px-14 border-2 border-gray-300 rounded-lg mt-14">
                <h1 className="text-center font-bold text-2xl">Create an acount</h1>
                <form className="flex flex-col gap-5">
                    <FormInput
                    id="name"
                    name="Name"
                    required
                    className=" flex-col"/>

                    <FormInput
                    id="username"
                    name="Username"
                    required
                    className=" flex-col"/>
                    
                    <FormInput
                    id="email"
                    name="Email"
                    required
                    className=" flex-col"/>
                    
                    <FormInput
                    id="password"
                    name="Password"
                    required
                    className=" flex-col"/>
                    
                    <FormInput
                    id="repearPassword"
                    name="Repeat password"
                    required
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