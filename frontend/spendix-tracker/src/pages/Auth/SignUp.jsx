import React, {useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import { useNavigate,Link } from 'react-router-dom';
import Input from '../../components/Inputs/Input.jsx';
import { validateEmail, validatePassword } from '../../utils/helper.js';
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector.jsx"
const signup = () => {
  const [profilePic,setProfilePic]=useState(null);
  const [fullName,setFullName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [error,setError] = useState(null);
  const navigate =useNavigate();

  const handleSignUp = async(e) => {
    e.preventDefault();

    let profileImageUrl ="";

    //Validation
    
  }
  

  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full flex flex-col justify-center'>
        <h3 className='text-xl font-semibold text-black'>Create an Account</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Ready to begin? Create your account and let’s go!</p>

      <form onSubmit={handleSignUp}>
      <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
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
         
          <Input
          value={password}
          onChange={({target})=> setPassword(target.value)}
          label="Password"
          placeholder='Min 8 Characters'
          type='password'
          />
        </div>
         {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
        
                  <button type='submit' className='btn-primary'>
                    SignUp
                  </button>
                  <p className='text-[13px] text-slate-800 mt-3'>
                    Do you have an account?{" "}
                  <Link className='font-medium text-primary underline' to="/login">
                  Click here
                  </Link>
                  </p>
      </form>
      </div>
    </AuthLayout>
  )
}

export default signup