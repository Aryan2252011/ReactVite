
import { useState,useEffect } from 'react'
import {useDispatch} from 'react-redux'
import authservice from './appwrite/outh'
import {login,logout} from "./store/authSlice"
import Header from "./components/Header/Header.jsx"
import Footer from './components/Footer/Footer.jsx'
import './App.css'

export default function  App () {
const [loading,SetLoading]= useState(true)
const dispatch = useDispatch()

useEffect(()=>{
  authservice.getCurrentUser()
  .then((userdata)=>{
    if(userdata){
      dispatch( login({userdata}))
    } else {
      dispatch(logout())
    }
  })
  .finally( ()=> SetLoading(false))

},[])



  return  !loading ? (
     <>
     
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
    <div className='w-full block'>
    <Header />
      <main>
        TODO {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
    </div>
    
    </>
  
    
  ): null

   


}
