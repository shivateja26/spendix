import React, {useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input.jsx';
import { Link } from 'react-router-dom';
import { validateEmail, validatePassword } from '../../utils/helper.js';

const signup = () => {
  const [profilePic,setProfilePic]=useState(null);
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  const navigate =useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
  }
  

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Ready to begin? Create your account and let’s go!</p>

      <form onSubmit={handleSignUp}>
        <profilePhotoSelector image={profilePic} setImage={setProfilePic}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Input
          value={fullName}
          onChange={({target}) =>setFullName(target.value)}
          placeholder={"Shivateja Amalakanti"}
          label="Full Name"
          type='text'
          />
      
          <Input
          value={email}
          onChange={({target})=> setEmail(target.value)}
          label="Email Id"
          placeholder='shivateja@example.com'
          type='text'
          />
         
          <div className='col-span-2'>
          <Input
          value={password}
          onChange={({target})=> setPassword(target.value)}
          label="Password"
          placeholder='Min 8 Characters'
          type='password'
          />
          </div>
        </div>
      </form>
      </div>
    </AuthLayout>
  )
}

export default signup