import React,{useEffect, useState} from "react";
import '../styles/Nav.scss'
import ava from '../assets/ava.jpg'
import coin from '../assets/coin.png'
import boost from '../assets/boost.png'
import store from '../assets/shop.png'
import Market from  '../pages/Market'
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

export default function Nav(){
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user);
    console.log(user)
    return (
        <>
            <nav className="nav flex justify-between px-10">
                <div className="profile__section flex">
                    <Link to={'/Profile'}>
                        <img src={ava} alt="pfp" className="avatar" />
                    </Link>
                    <div className="text__section pl-3"> 
                        <p className="nickname text-3xl pb-1">Nickname</p>
                        <p className="title text-2xl font-medium pb-1">Title</p>
                        <p className="lvl text-lg font-medium pb-1">Current level - 1</p>
                        <div className="lvl__bar ">
                    
                            <div className="lvl__bar__fill" style={{width: '30%'}}>
                                <span className="current__xp pl-3">{33} xp</span>
                               
                            </div>
                            <div className="lvl__bar__total">
                                <p className="xp__total pr-3">100 xp</p>
                            </div>
                        </div>
                    </div>  

                </div>
                <div className="recourses__section flex items-center">
                    <div className="money__section flex items-center ">
                        <img src={coin} alt="money" className="pr-5" />
                        <p className="text-black text-3xl font-bold">{user.balance}</p>
                    </div>
                    <div className="boost__section flex items-center">
                        <img src={boost} alt="boost" className="pr-5" />
                        <p className="text-black text-3xl font-bold">12h</p>
                    </div>
                    <div className="store__section flex items-center">
                    <Link to={'/Market'}>
                        
                            <img src={store} alt="store" className="" />
                        
                    </Link>
                    </div>
                </div>

            </nav>
        </>
    )
}