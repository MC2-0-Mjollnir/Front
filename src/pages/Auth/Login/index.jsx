const Login = () => {
    return (
        <div className="flex items-center justify-center flex-col p- gap-4 w-[100%] max-w-[550px] bg-white border-4">
            <img src="/Logo.svg" alt="Logo" />
            <div className="flex w-full">
                <div className="w-1/2 flex flex-col justify-center">
                    <label htmlFor="firstname" className="font-unbounded text-lg text-mainColor">First Name</label>
                    <input id="firstname" type="text" className="px-2 py-4 border-2" placeholder="First Name" />
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                    <label htmlFor="lastname" className="font-unbounded text-lg text-mainColor">Last Name</label>
                    <input id="lastname" type="text" className="px-2 py-4 border-2" placeholder="Last Name" />
                </div>
            </div>
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="email" className="font-unbounded text-lg text-mainColor">Email</label>
                <input id="email" type="text" className="px-2 py-4 border-2" placeholder="Email" />
            </div>
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="password" className="font-unbounded text-lg text-mainColor">Password</label>
                <input id="password" type="text" className="px-2 py-4 border-2" placeholder="Password" />
            </div>
            <div className="w-full flex flex-col justify-center">
                <label htmlFor="confirmpassword" className="font-unbounded text-lg text-mainColor">Confirm Password</label>
                <input id="confirmpassword" type="text" className="px-2 py-4 border-2" placeholder="Password" />
            </div>
            
        </div>
    )
}

export default Login