import React, { useEffect, useState } from "react";
import { Button } from "@blueprintjs/core";

import '../styles/Registration.scss';
import { createUserWithEmailAndPassword,onAuthStateChanged, signOut,  } from "firebase/auth";
import { auth } from "../../firebase.config";

export default function Registration(){
    const [user,setUser] = useState(null);
    const [loginEmail,setLoginEmail] = useState();
    // const [loginNickname,setLoginNickname] = useState();
    const [loginPassword,setLoginPassword] = useState();
    const [loginError,setLoginError] = useState();    
    const [haveAcc,setHaveAcc] = useState(false);

    
    async function login() {
        try {
            await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
        } catch (error) {
            setLoginError(error)
        }
    }

    async function logout() {
        await signOut(auth)
    }

    useEffect(() =>{
        onAuthStateChanged(auth,user => {
            setUser(user)
        })
        console.log(haveAcc)
    },[])

    return (
        <> 

           
            
                 <div className="registration login">
                   
                    <div className="registration__wrapper login__wrapper flex flex-col justify-center mx-auto ">
                    <h3 className="text-6xl text-center pb-20 uppercase">Log in</h3>
                        {/* <input type="email" name="email" className="mb-10 email form pl-2"  placeholder="Enter email"  onChange={e => setLoginEmail(e.target.value)}/> */}
                        <div class="bp5-input-group {{.modifier}}   pb-10" aria-disabled='false'>
                            <input type="email" class="bp5-input {{:modifier}} form"  placeholder="Enter your email... "  onChange={e => setLoginEmail(e.target.value)}/>
                           
                        </div>

                        <div class="bp5-input-group {{.modifier}}   " aria-disabled='false'>
                            <input type="password" class="bp5-input {{:modifier}} form"  placeholder="Enter your password... "  onChange={e => setLoginPassword(e.target.value)}/>
                            <button class="bp5-button bp5-minimal bp5-intent-warning bp5-icon-lock {{:modifier}}" ></button>
                        </div>
                      
                        {/* <input type="password" className="password form mb-5  pl-2" placeholder="Enter password"  onChange={e => setLoginPassword(e.target.value)}/>  */}
                    
                        
                        {/* <Button intent="success" text="button content"  />; */}
                        <div>{loginError?.message}</div>
                        <div className="flex justify-center mt-20"><button formAction="submit" className="submit button " onClick={login}>Login</button></div>
                    </div>
                 </div>
         
           

            
        
        </>
    )
}