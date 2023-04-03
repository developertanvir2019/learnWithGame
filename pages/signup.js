const styles = {
    backgroundImage:
        "url('/images/logIng.png')",
};
const Signup = () => {
    return (
        <div className="flex h-screen w-full items-center justify-center bg-gray-100 bg-cover bg-no-repeat" style={styles}>
            <div className="rounded-xl bg-gray-400 bg-opacity-20 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
                <div className="text-white">
                    <div className="mb-8 flex flex-col items-center">
                        <h1 className="mb-2 text-3xl text-primary font-semibold">SignUP</h1>
                        <span className="text-gray-300">Enter your details below:</span>
                    </div>
                    <form action="#">
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-xl border-none bg-opacity-50 px-8 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md w-full"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-xl border-none bg-opacity-50 px-8 py-2 text-center text-inherit shadow-lg outline-none backdrop-blur-md w-full"
                                type="email"
                                name="email"
                                placeholder="your@email.com"
                            />
                        </div>

                        <div className="mb-4 text-lg">
                            <input
                                className="rounded-xl border-none bg-opacity-50 px-8 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md w-full"
                                type="password"
                                name="password"
                                placeholder="*********"
                            />
                        </div>
                        <div className="form-control">
                            <label className="flex items-center">
                                <input type="checkbox" className="checkbox checkbox-secondary" />
                                <span className="label-text ml-2 text-white">Remember me</span>
                            </label>
                        </div>
                        <div className="mt-4 flex justify-center text-lg text-white font-semibold">
                            <button
                                type="submit"
                                className="rounded-lg w-full bg-orange-400  py-2"
                            >
                                Login
                            </button>
                        </div>
                        <div className="lg:flex justify-between mt-3">
                            <a className="my-2 btn btn-outline text-white mr-3" href="#">Continue with google</a>
                            <a className="my-2 btn btn-outline text-white ml-3" href="#">Register as a user</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;