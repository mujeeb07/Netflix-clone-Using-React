import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { login, signup } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif';


function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const userAuth = async (event) => {
    event.preventDefault();
    setLoading(true)
    if(signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password)
    }
    setLoading(false)
  }

  return (
    loading ? <div className='w-full h-screen flex items-center justify-center'> 
      <img src={netflix_spinner} alt="Loading" className='w-0.5xl' />
    </div> : 
    <div className='h-screen bg-[linear-gradient(#0000007e,_#0000007e),url("/background_banner.jpg")] py-5 px-8'>
       <img src={logo} alt="Logo" className='w-50 ml-30' />
       <div className='w-full max-w-md bg-black/75 rounded px-12 py-16 mx-auto'>
          <h1 className='text-2xl font-medium mb-7'>{signState}</h1>
          <form>
            {signState === "Sign Up" ? <input value={name} onChange={(e) => {setName(e.target.value)}} 
            type="text" placeholder='Your Name' 
            className="w-full h-[50px] bg-[#333] text-white my-3 border-0 outline-none rounded px-5 py-4 text-base font-medium placeholder:text-base placeholder:font-medium"/> : <></>}

            <input value={email} onChange={(e) => {setEmail(e.target.value)}}
            type="email" placeholder='Email' 
            className="w-full h-[50px] bg-[#333] text-white my-3 border-0 outline-none rounded px-5 py-4 text-base font-medium placeholder:text-base placeholder:font-medium"/>

            <input value={password} onChange={(p) => {setPassword(p.target.value)}}
            type="password" placeholder='Password' 
            className="w-full h-[50px] bg-[#333] text-white my-3 border-0 outline-none rounded px-5 py-4 text-base font-medium placeholder:text-base placeholder:font-medium"/>

            <button className='w-full border-0 outline-none px-4 py-4 bg-[#e50914] text-white rounded text-base font-medium mt-5 cursor-pointer' 
            onClick={userAuth} type='submit'>{signState}</button>

            <div className='flex items-center justify-between text-[#b3b3b3] text-1xl pt-3'>
              <div className='flex items-center gap-2 remember'>
                <input type="checkbox" className='w-4 h-4'/>
                <label htmlFor="">Remember Me?</label>
              </div>
              <p>Need Help?</p>
            </div>
          </form>
          <div className="mt-10 text-[#737373] form-switch">
            {signState === "Sign In" ? <p>New to Netflix? <span className='ml-1.5 text-[#fff] font-medium cursor-pointer' onClick={() => {setSignState("Sign Up")}}>Sign Up Now</span></p> : 
            <p>Already have account? <span className='ml-1.5 text-[#fff] font-medium cursor-pointer' onClick={() => {setSignState("Sign In")}}>Sign In Now</span></p>}
          </div>
       </div>
    </div>
  )
}

export default Login