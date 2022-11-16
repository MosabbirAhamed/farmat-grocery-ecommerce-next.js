import React from 'react'
import { AppForm, FormBtn, FormInput, } from "../shared/Form"
import * as Yup from "yup"
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const validationSchema = Yup.object().shape({
    password: Yup.string().required().label("Password"),
    email: Yup.string().email().required().label("Email"),
});


const Auth = () => {

    const [isLogin, setIsLogin] = React.useState(true);

    const HandleLoginSignup = (values) => {
        console.log(values)
    }

    return (
        <div className="p-5">
            <div className="mx-auto max-w-[350px] p-5 rounded-md bg-gray-200 my-10 ">
                <div className="flex items-center gap-5 text-2xl font-semibold justify-center uppercase pb-4 border-b border-gray-300">
                    <h1 className={`${isLogin ? "text-gray-700" : "text-gray-400"}  cursor-pointer  `} onClick={() => setIsLogin(true)}>Login</h1>
                    <h1 className={`${!isLogin ? "text-gray-700" : "text-gray-400"} cursor-pointer `} onClick={() => setIsLogin(false)}>Register</h1>
                </div>
                <div className="py-5">
                    <p className="text-center mb-5">{isLogin ? "Log In To Your Account" : "Create a new account"}</p>
                    <AppForm
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={HandleLoginSignup}
                        validationSchema={validationSchema}
                    >

                        <FormInput
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <FormInput
                            name="password"
                            placeholder="Password"
                            type="password"
                        />
                        <FormBtn title={isLogin ? "Login" : "Register"} />

                    </AppForm>
                    <div className="">
                        <p className="text-center mt-5">Or</p>
                        <div className="flex items-center justify-center gap-5 mt-5 ">
                            <button className="bg-[#88a0ff] flex items-center gap-2 text-white px-4 py-2 rounded-md "><FcGoogle />Google</button>
                            <button className="bg-[#394594] flex items-center gap-2 text-white px-4 py-2 rounded-md "><FaFacebookF />Facebook</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth