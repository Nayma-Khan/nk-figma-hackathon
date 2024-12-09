import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Topheader = () => {
  return (
  
      
      <div className=" flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-black">
<Image src="/Frame.png" alt="logo" width={24} height={24}/>

<div className="flex md:gap-4 sm:gap-3 gap-2">
  <Link href="#" className="hover:text-gray-800">Find Link Store  </Link>
  <Link href="#" className="hover:text-gray-800">Help  |</Link>
  <Link href="#" className="hover:text-gray-800">Join Us  |</Link>
  <Link href="/Login" className="hover:text-gray-800">Sign In  |</Link>
</div>
</div>
        


    ) 
}

export default Topheader


