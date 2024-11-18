import React from 'react'
import {useAuthContext} from '../../context/AuthContextProvider'
import MainPage from '../MainPage'
import Laptops from '../Laptops'
import Tabs from '../Tabs'
const Home = () => {
    const {state}=useAuthContext()
  return (
    <div>
      {/* <h1>home</h1> */}
      <MainPage/>
      <Tabs/>
      <Laptops/>
    </div>
  )
}

export default Home
