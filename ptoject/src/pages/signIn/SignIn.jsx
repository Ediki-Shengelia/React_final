import React from 'react'
import SignInForm from '../../components/signIn/SignInForm'
import {useLocation} from 'react-router-dom'
const SignIn = () => {
    const location=useLocation()
  return (
    <div>
      <h1 style={{
        color:'red',
        fontSize:35,
        fontWeight:'bold'
      }}>Sign In</h1>
      {location?.state?.success&&<h1>Congratulation</h1>}
      <SignInForm/>
    </div>
  )
}

export default SignIn
