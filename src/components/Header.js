import React, { useEffect } from 'react'
import NetflixLogo from '../Images/Netflix_Logo.png'
import userIcon from '../Images/user_icon.jpg'
import { useNavigate } from 'react-router-dom'
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';  
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth'
import { addUser, removeUser } from '../utils/userSlice'

function Header() {

  const navigate=useNavigate();
  const user= useSelector((store)=> store?.user)
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      // Sign-out successful. navigation done by onAuthChange in below useEffect
    }).catch((error) => {
      // An error happened.
    });

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
    <div className=' w-full z-20 absolute pl-5 pt-1  bg-gradient-to-b from-black flex justify-between'>

      <img src={NetflixLogo}  alt='netflix logo' className={`${!user &&"h-20"}  ${user &&"h-16 "} brightness-200 saturate-200 contrast-200`}/>
      
      {user && (
      <div className=' m-4'>
      <img src={userIcon} alt="usericon" className=' h-9 rounded-md'/>
      <button className=' mt-1 -ml-3 font-semibold text-sm text-white' onClick={handleSignOut} >Sign Out</button>
      </div> )}
    
    </div>
  )
}

export default Header