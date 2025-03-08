'use client'
import React from 'react'
import Service from './Service'
import { Data } from '../data'

const Home = () => {
  return (
    <main 
    className='min-h-screen w-screen pt-5 overflow-x-hidden '
    >
        <h1 className='w-screen text-center text-3xl py-4'>Parth Panel</h1>
        <div style={{paddingBottom:20}} className="services  mt-8 w-full h-auto flex flex-col justify-start items-center">
            <h1 
            style={{
                paddingInline:5,
                marginTop:16,
                marginBottom:8
            }}
            className='w-full text-start text-3xl '>Services</h1>
            {
                Data.map((item,i) => (
                    <Service idx={i} key={i} {...item} />
                ))
            }
        </div>
    </main>
  )
}

export default Home