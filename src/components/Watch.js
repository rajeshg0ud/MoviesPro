import React from 'react'
import { useSelector } from 'react-redux'
import NetflixLogo from '../Images/Netflix_Logo.png'
import userIcon from '../Images/user_icon.jpg';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';
const Watch = () => {
    
  const user= useSelector((store)=> store?.user)

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // optional, adds smooth scrolling
  });
  

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful. navigation done by onAuthChange in below useEffect
    }).catch((error) => {
      // An error happened.
    });

  }

  const navigate=useNavigate();


  return (
    <>  
    <div className=' h-[82px] absolute w-full z-20 pl-5 pt-1 flex justify-between bg-gradient-to-b from-black'>
    <img src={NetflixLogo}  alt='netflix logo' className={`${!user &&"h-20"}  ${user &&"h-16 "} brightness-200 saturate-200 contrast-200 cursor-pointer`} onClick={()=>navigate("/browse")}/>
    <div className=' m-4'>
    <img src={userIcon} alt="usericon" className=' h-9 rounded-md'/>
    <button className=' mt-1 -ml-3 font-semibold text-sm text-white ' onClick={handleSignOut} >Sign Out
    </button>
    </div> 
    </div>

    <div>
      <Outlet />
    </div>
    </>
  )
}

export default Watch