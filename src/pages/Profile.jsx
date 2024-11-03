import React from "react";
import '../styles/Profile.scss';
import ava from '../assets/80178693d1d0c7e0ec688707b02ecc0b.jpg'

export default function Profile(){
    return (
        <>
            <div className="profile_wrapper">
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
                    <div className="total_missions">
                        <img src="" alt="" />
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                    <div className="level">
                    <img src="" alt="" />
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                    <div className="daily_missions">
                    <img src="" alt="" />
                        <p className="text-3xl font-medium text-center">Total Missions</p>
                        <p className="text-6xl font-bold text-center">500</p>
                    </div>
                </div>
            </div>
            

        </>
    )
}