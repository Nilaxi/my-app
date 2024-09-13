import React from 'react'
import IUser from './types/IUser'
import data from './data'

export default function Users() {
  return (
<div>
    {data.map((v:IUser,index : number) =>{
        return(<div>{v.firstName}{v.lastName}</div>)
    })}
   </div> 
  )
}
