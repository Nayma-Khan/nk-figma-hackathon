import Image from 'next/image'
import React, { ReactNode } from 'react'

const Second = ({children}:{children?:ReactNode}) => {
  return (

    <div className="wrapper  flex  items-end">

    <h1>Featured</h1>
    <Image src="/run.png" height={2000} width={600} alt="image"/>

<div className=' h-full flex items-end ml-[1200px]'>
{children}
</div>
    </div>



  )
}

export default Second
