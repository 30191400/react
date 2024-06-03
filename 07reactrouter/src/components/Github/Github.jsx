import React from 'react'
import { useEffect,useState } from 'react'
import { useLoaderData } from 'react-router-dom'//2nd way


function Github() {
    const data=useLoaderData()//2nd way

    //1st way
    // const [data,setData]=React.useState([])
    // useEffect(()=>{fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={'src/assets/68.jpeg'} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
//2nd way
export const GitHubInfoFolder=async()=>{
   const response=await fetch('https://api.github.com/users/hiteshchoudhary')
   return response.json()
}