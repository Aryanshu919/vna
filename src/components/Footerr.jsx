import React from 'react'
import vnalogo from "../assets/vnalogo-ar.png"
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



export const Footerr = () => {
  return (
    <div>
    <div className='bg-[#1f1f1f] text-white pt-20 pb-20'>
        <div className='flex flex-row w-11/12 justify-around'>
            <div className='flex flex-col gap-2 '>
                <h2 className='text-xl font-bold pb-2'>VNA Hospitals</h2>
                <div className='flex flex-row gap-3 cursor-pointer'>
                    <FaSquareFacebook className='w-8 h-8'/>
                    <FaYoutube className='w-8 h-8'/>
                    <FaInstagramSquare className='w-8 h-8'/>
                </div>
              

            </div>
           
            <div>
                <h2 className='text-xl font-bold pb-2'>Essentials I</h2>
                <ul className='flex flex-col gap-3 text-[#BABABA] no-bullets cursor-pointer'>
                    <li className='hover:text-[#007bff]'>Clinic Appointments</li>
                    <li className='hover:text-[#007bff]'>Online Appointments</li>
                    <li className='hover:text-[#007bff]'>International Patients</li>
                    <li className='hover:text-[#007bff]'>Covid-19 Situation</li>
                </ul>
                
            </div>
            <div className=''>
                <h2 className='text-xl font-bold pb-2'>Essentials II</h2>
                <ul className='flex flex-col gap-2 text-[#BABABA] no-bullets text-sm gap-3'>
                    <li className='hover:text-[#007bff]'>Terms & Conditons</li>
                    <li className='hover:text-[#007bff]'>Sitemap</li>
                </ul>
            </div>
            <div className=''>
                <h2 className='text-xl font-bold pb-2'>Address & Contacts</h2>
                <ul className='flex flex-col gap-2 text-[#BABABA] no-bullets text-sm gap-3'>
                    <li className='hover:text-[#007bff] w-64 whitespace-nowrap overflow-hidden text-ellipsis'>1, Navjivan Vihar, Geetanjali Enclave
Landmark, Opposite HDFC Bank
Malviya Nagar, New Delhi - 110017</li>
                    <li>+91 80 681 66666</li>
                    <li>+91 81 304 45232 ( 24x7)</li>
                    <li>+91 11 411 81318</li>
                </ul>
            </div>
        </div>

    </div>
    <div className='flex bg-black items-center text-white pt-5 pb-5 justify-center'>
       Copyright ©2025 All rights reserved | This template is made with love
    </div>
    </div>
  )
}


// +91 80 681 66666
// +91 81 304 45232 ( 24x7)
// +91 11 411 81318
// +91 11 411 81319