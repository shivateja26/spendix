import React from 'react'
import chart from '../../assets/images/chart.png'
import {LuTrendingUpDown} from "react-icons/lu"

const AuthLayout = ({children}) => {
  // Conversion Rate from USD to INR
  const conversionRate = 87;
  
  // Original value in USD (example value)
  const usdValue = 5000;
  
  // Convert to INR
  const inrValue = usdValue * conversionRate;

  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-10'>
            <h2 className='text-lg font-medium text-black'>Spendix Tracker</h2>
            {children}
        </div>
        
        <div className='hidden md:block w-[40vw] h-screen bg-[#5c7ef5]-50 bg-auth-bg-img bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative ' >
            <div className=' w-52 h-52 rounded-[40px] bg-blue-600 absolute -top-5 -left-7'/>
            <div className='w-48 h-56 rounded-[40px] border-[20px] border-sky-600 absolute top-[30%] -right-30'/>
            <div className='w-52 h-52 rounded-[40px] bg-sky-500 absolute -bottom-7 -left-7' />
            <img src={chart} className='rounded-xl lg:w-[90%] absolute bottom-10 shadow-lg shadow-blue-900/15'/>
            
            <div className='grid grid-cols-1 z-20'>
              <StatsInfoCard
                icon={<LuTrendingUpDown />}
                label="Track Salary Income & Spending Expenses"
                value={inrValue.toLocaleString()}  
                color="bg-primary"
              />
            </div>
        </div>
    </div>
  )
}

export default AuthLayout;

const StatsInfoCard = ({icon, label, value, color}) => {
  return (
    <div className='flex gap-6 bg-white p-4 rounded-xl shadow shadow-blue-400/10 border border-gray-200/50 z-10'>
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl`}>
        {icon}
      </div>
      <div>
        <h6 className='text-xs text-gray-500 mb-1'>{label}</h6>
        <span className='text-[20px]'>₹{value}</span>
      </div>
    </div>
  );
}
