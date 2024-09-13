import React, { useState } from 'react'
import IUser from './types/IUser'

export default function MyUser() {
    const [data,setData] = useState<IUser>({
      
        lastName : ""
    })
  return (
    <div>MyUser</div>
  )
}
