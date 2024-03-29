import React, { useEffect } from 'react'
import MPLogo from '../Images/MPLogo.png' 
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';  
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'
import { addToggleSearch, falseToggleSearch } from '../utils/movieSlice';

function Header() {

  const navigate=useNavigate();

  const user= useSelector((store)=> store?.user)
  
  const search= useSelector((store)=> store?.movie?.toggleSearch)
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful. navigation done by onAuthChange in below useEffect
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleSearch=()=>{
    dispatch(addToggleSearch())
  }
  
  const dispatch= useDispatch();

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{ //its same like an eventlisteners tracks whether user is changed/ signed in / signout, so we need to clear that
     if(user){
      const {uid, email, displayName}= auth.currentUser;;
      dispatch(addUser({uid: uid, email: email, displayName: displayName})); 
      navigate('/browse') 
    }
    else{
      dispatch(removeUser());
      navigate('/')
    } })

    return ()=> unsubscribe(); //clearing above one

  }, [])


  return (
    <div className=' w-full z-20 absolute pl-5 pt-1  bg-gradient-to-b from-black flex justify-between bg-black md:bg-transparent'>

      <img src={MPLogo}  alt='netflix logo' className={`${!user &&"h-10 md:h-12 sm:h-14"}  ${user &&"h-10"}  saturate-200 brightness-200 cursor-pointer mt-4 opacity-100 `} onClick={()=>{navigate("/browse"); dispatch(falseToggleSearch())}}/>
      
      <div className=' flex'>
      {user && (
      <div className=' m-4'>
      <button className=' mt-1 -ml-3 font-semibold text-xs md:text-sm text-white bg-red-600 p-2 rounded-md px-3' onClick={handleSearch} >{search? "Home" : "Search"}</button>
      </div> )}
      {user && (
      <div className=' flex items-center m-3'>
      <button className=' mt-1 -ml-3 font-semibold text-xs md:text-sm text-white bg-red-600 p-2 rounded-md px-3' onClick={handleSignOut} >Sign Out</button>
      </div> )}
      </div>
    
    </div>
  )
}

export default Header