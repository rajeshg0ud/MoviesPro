import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MPLogo from '../Images/MPLogo.png'
import userIcon from '../Images/user_icon.jpg';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { falseToggleSearch } from '../utils/movieSlice';
const Watch = () => {
    
  const user= useSelector((store)=> store?.user)

  window.scrollTo({
    top: 0,
    behavior: 'smooth' // optional, adds smooth scrolling
  });

  const navigate=useNavigate()
  
  const dispatch=useDispatch();
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful. navigation done by onAuthChange in below useEffect
      dispatch(removeUser());
    }).catch((error) => {
      // An error happened.
    });

  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{ //its same like an eventlisteners tracks whether user is changed/ signed in / signout, so we need to clear that
     if(user){
      const {uid, email, displayName}= auth.currentUser;;
      dispatch(addUser({uid: uid, email: email, displayName: displayName})); 
      navigate('/watch')
    }
    else{
      dispatch(removeUser());
      navigate('/')
    } })

    return ()=> unsubscribe(); //clearing above one

  }, [])

  return (
    <>  
    <div className=' h-[62px] absolute w-full z-20 pl-5 pt-1 flex justify-between bg-gradient-to-b from-black bg-gray-950'>
    <img src={MPLogo}  alt='netflix logo' className="h-10 brightness-200 saturate-200 contrast-200 cursor-pointer mt-4" onClick={()=>{navigate("/browse"); dispatch(falseToggleSearch())}}/>
    <div className=' m-4'>
    <button className=' mt-1 -ml-3 font-semibold text-xs md:text-sm text-white bg-red-600 p-2 rounded-md px-3' onClick={handleSignOut} >Sign Out</button>
    </div> 
    </div>

    <div>
      <Outlet />
    </div>
    </>
  )
}

export default Watch