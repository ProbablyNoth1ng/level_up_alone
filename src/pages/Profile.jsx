import React from "react";
import '../styles/Profile.scss';
import ava from '../assets/ava.jpg'
import trophy from '../assets/trophy.png'
import level from '../assets/level.png'
import { BrowserRouter as Router, Routes, Route , Link} from 'react-router-dom';

export default function Profile(){
    return (
        <>
            <div className="profile_wrapper">
                <div className="btns ">
                    <Link to={'/'} > 
                        <i class="fa-solid fa-arrow-left-long pointer text-xl"></i>
                    </Link>
                    
                </div>
                <p className="his">History</p>
                <div className="profile flex justify-center flex-col items-center pt-10">
                    <img src={ava} alt="" className="ava" />
                    <p className="text-4xl font-bold">Nickname</p>
                    <div className="profile_title text-2xl"><span>Senior pomidor</span></div>
                    <div className="lvl__bar ">
                    
                            <div className="lvl__bar__fill" style={{width: '30%'}}>
                                <span className="current__xp">33 xp</span>
                            </div>
                            <div className="lvl__bar__total">
                                <p className="xp__total pr-3">100 xp</p>
                            </div>
                        </div>
                </div>
                <div className="missions_stats flex justify-center">
                    <div className="total_missions items-center flex flex-col">
                        <img src={trophy} alt="" className="stats_img"/>
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                    <div className="level items-center flex flex-col">
                    <img src={level} alt="" className="stats_img"/>
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                    <div className="daily_missions items-center flex flex-col">
                    <i class="fa-solid fa-bullseye text-9xl"></i>
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                </div>
            </div>
            

        </>
    )
}