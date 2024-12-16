import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Miniclip() {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);  // State to manage popup visibility

  // Function to open the popup with specific content
  const handlePopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };


  return (
    <div className=''>
          <div className="bg-cover bg-center bg-no-repeat h-screen w-screen flex items-center justify-center" 
            style={{
              backgroundImage: "url('8ballpool.webp')",
            }}
            >
            <div
              onClick={() => handlePopup()}
              className=" shadow-2xl mt-[200px] border-transparent border rounded-xl h-[100px] w-[250px] bg-blue-600 text-white font-bold py-2 pl-7 rounded flex items-center gap-4 cursor-pointer"
            >
              <div className="text-xl w-[120px]">Login with Miniclip ID</div>
              <div className="h-[80px] w-[80px]">
              <div
                className="h-full w-full bg-cover bg-right bg-no-repeat rounded-xl"
                style={{
                  backgroundImage: "url('okok.png')",
                }}
              ></div>

              </div>
            </div>

          

          {/* Popup Component */}
          {isPopupOpen && (
            <div
              
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1000,
                    }}
                  >
                      <div
                        style={{
                          backgroundColor: "#1b2631",
                          borderRadius: "10px",
                          padding: "20px",
                          width: "400px",
                          height: "300px",
                          textAlign: "center",
                        }}
                      >
                        <div className='grid grid-cols-10'>
                        <h2 className='text-[30px] text-white col-span-9 pl-[30px] font-bold'  style={{ marginBottom: "10px" }}>LOGIN</h2>
                        <button
                          onClick={closePopup}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="font-bold h-[30px] w-[30px] text-white pb-3 col-span-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={6} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                        </div>
                        <div className='grid grid-cols-1 gap-4 mt-[50px]'> 

                        <button
                            className="mr-2 p-2.5 px-[40px] text-center bg-blue-600 text-white border-none rounded-md cursor-pointer flex items-center"
                            onClick={() => {
                              navigate(`/Facebook`);
                              closePopup();
                            }}
                            aria-label="Sign in with Facebook"
                          >
                            <FaFacebook size={30} className="mr-2" />
                              <div className='ml-[10px] text-xl'>
                                facebook
                              </div>
                          </button>


                            <button
                              className="mr-2 p-2.5 px-[40px] bg-white text-black text-center border-none rounded-md cursor-pointer flex items-center"
                            
                              onClick={() => {
                                navigate(`/Instagram`);
                                closePopup();
                              }}
                            >
                              <FaInstagram size={30} className="mr-2" />
                              <div className='ml-[10px] text-xl'>
                              Instagram
                              </div>
                            </button>
                        </div>


                        
                        
                      </div>
            </div>
          )}
        </div>
    </div>
  );
}
