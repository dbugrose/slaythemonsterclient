import AccountForm from '@/app/components/AccountForm'
import React from 'react'

const page = () => {
  
  return (
    <div className='overflow-hidden flex min-h-screen items-center justify-center bg-[url(/assets/dragon-flying.jpg)] bg-cover'>
        <AccountForm/>
    </div>
  )
}

export default page