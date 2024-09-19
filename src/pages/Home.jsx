import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/Home.scss';
import Nav from '../components/Nav'
import Main from '../components/Main'
import AsideBar from '../components/AsideBar'

export default function Home(){
    return (
        <>
            <Nav/>
            <div className='flex'>
                <AsideBar/>
            
                <Main/>
            </div> 
            
        </>
    )
}