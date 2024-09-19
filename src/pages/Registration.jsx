import React, { useEffect, useState } from "react";
import '../styles/Registration.scss';
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';
import { createUserWithEmailAndPassword,onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export default function Registration(){
    const [user,setUser] = useState(null);
    const [haveAcc, setHaveAcc] = useState()
    const [passwordsMatching,setPasswordsMatching] = useState();
    const [registerError,setRegisterError] = useState();

    const [registerEmail,setRegisterEmail] = useState();
    const [registerNickname,setRegisterNickname] = useState();
    const [registerPassword,setRegisterPassword] = useState();
    const [registerPassword1,setRegisterPassword1] = useState();

    
    

    
    async function register(){
        if(registerPassword == registerPassword1){
            setPasswordsMatching(true)
            try {
                await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
            } catch (error) {
                setRegisterError(error)
            }
            
        } else{
            setPasswordsMatching(false)
        }
    }

    async function logout() {
        await signOut(auth)
    }

    
    useEffect(() =>{
        onAuthStateChanged(auth,user => {
            setUser(user)
        })
        
    },[])

    return (
        <> 

            <div>
                {!!user && (
                    <div>logged in  { user.email}
                    <button className="button" onClick={logout}>log out</button>
                    </div> )}


                 {!user  && 
                ( 
                <div className="registration ">
                    <div className="registration__wrapper flex flex-col justify-center mx-auto">
                       <h3 className="title flex justify-center text-4xl uppercase pb-10">Register</h3>
                        <input type="email" name="email" className="mb-5 email form pl-2"  placeholder="Enter email"  onChange={e => setRegisterEmail(e.target.value)}/>
                         {/* <input type="text" name="nickname" className="mb-10 email form pl-2"  placeholder="Enter nickname"  onChange={e => setNickname(e.target.value)}/>  */}

                         <div class="bp5-input-group {{.modifier}}   pb-5 " aria-disabled='false'>
                            <input type="password" class="bp5-input {{:modifier}} form"  placeholder="Enter your password... "  onChange={e => setRegisterPassword(e.target.value)}/>
                            <button class="bp5-button bp5-minimal bp5-intent-warning bp5-icon-lock {{:modifier}}" ></button>
                        </div>
                        <div class="bp5-input-group {{.modifier}}   pb-5" aria-disabled='false'>
                            <input type="password" class="bp5-input {{:modifier}} form"  placeholder="Repeat password... "  onChange={e => setRegisterPassword1(e.target.value)}/>
                            <button class="bp5-button bp5-minimal bp5-intent-warning bp5-icon-lock {{:modifier}}" ></button>
                        </div>
                         {/* <input type="password" className="password form mb-5  pl-2" placeholder="Enter password"  onChange={e => setRegisterPassword(e.target.value)}/>
                        <input type="password" className="password form  pl-2" placeholder="Repeat password"  onChange={e => setRegisterPassword1(e.target.value)}/> */}
                        
                        <a href="" className="text-xl uppercase pt-3 inline link hover_disable" onClick={e => setHaveAcc(true) }> <Link to={'/Login'} className="bp5-hover-disable link haveAcc link hover_disable">I have account</Link></a>
                         
                         {passwordsMatching == false && <p className="text-2xl text-red-600 py-2 font-bold"> Passwords does not matching</p> } 
                        <div>{registerError?.message}</div>
                        <div className="flex justify-center"><button formAction="submit" className="submit button mt-5 " onClick={register}>Register</button> </div>
                    </div>              
                </div> )}

             

               
            </div>


            
        
        </>
    )
}