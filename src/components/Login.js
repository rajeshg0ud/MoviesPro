import React, { useRef, useState } from 'react'
import LoginBackground from '../Images/MoviesPro-bg.png'
import Header from './Header'
import CheckValidateData from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

function Login() {

    const dispatch=useDispatch();

    const [isSignInNow, setisSignInNow]=useState(true);
    const [error, setError]=useState("");

    const name= useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const handleClick=()=>{
        const message= CheckValidateData(email.current.value, password.current.value);
        setError(message);

        if(message== null){
            //signup
            if(!isSignInNow){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user)
                    // ...

                    updateProfile(user, {
                        displayName: name.current.value
                      }).then(() => {
                        // Profile updated!
                        const {uid, email, displayName}= auth.currentUser;
                        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
                      }).catch((error) => {
                        // An error occurred // ...
                      });
                      
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setError(errorCode)
                  });
            }
            else{
                 //Sign In
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {  // Signed in 
                      const user = userCredential.user;  
                      console.log(user)
                    })
                     .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setError("Incorrect mail id or password. Please try again.")
                    });
            }
        }
    }

  return (
    <div className=' m-0'>
        <Header />
        <div className=' absolute h-full w-full object-cover'>
            <img src={LoginBackground} alt='Login-background' className='m-0 object-cover h-full w-full' />
        </div>
        <div className=' bg-black absolute z-20 h-[100%] w-full bg-opacity-35'> 
             <form className='absolute text-white bg-black bg-opacity-80 my-28 w-[29%] h-4/6 flex flex-col mx-auto right-0 left-0 justify-start rounded-md min-w-72 max-h-[427px] sm:min-w-80 sm:min-h-[430px] md:min-w-[400px] md:min-h-[550px]' onSubmit={(e)=> 
        e.preventDefault()}>
                <h1 className=' font-semibold text-xl sm:text-2xl md:text-3xl mx-14 sm:mx-16 my-2 mt-8 md:mt-16 mb-5'>{ isSignInNow ? "Sign In": "Sign Up"}</h1>
                {
                    !isSignInNow&& <input type='text' placeholder='Full Name' className=' bg-zinc-700 py-2 md:py-3 rounded-md px-5 m-12 sm:mx-16 my-2 ' ref={name}/>
                }
                <input type='text' placeholder='Email or phone number' className=' bg-zinc-700 py-2 md:py-3 rounded-md px-5 m-12 sm:mx-16 my-2 focus:outline-none' ref={email}/>
                <input type='password' placeholder='Password'  className=' bg-zinc-700 py-2 md:py-3 rounded-md px-5 m-12 sm:mx-16 my-2 ' ref={password}/>
                
                <p className=' text-red-500 mx-14 sm:mx-16 my-0 font-semibold'>{error}</p>
                <button className=' bg-red-600 text-white py-2 md:py-3 rounded-md px-5 m-12 sm:mx-16 my-2 mt-7  sm:mt-12' onClick={handleClick}>{isSignInNow ? "Sign In" : "Sign Up"}</button>
                {
                    isSignInNow? 
                    <p className='m-16 my-2 mt-1 sm:mt-3 text-sm sm:text-base'><a className=' text-zinc-500'>New to MoviesPro?</a> <a onClick={()=> setisSignInNow(false)} className='cursor-pointer'>Sign Up now</a></p>:

                    <p className='m-16 my-2 mt-1 sm:mt-3 text-sm sm:text-base'><a className=' text-zinc-500 '>Already have a MoviesPro account?</a> <a onClick={()=> setisSignInNow(true)} className='cursor-pointer' >Sign In now</a></p>
                }
            </form>
        </div>
        
    </div>
  ) 
}

export default Login
