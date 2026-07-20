import React from 'react'

const Generate = () => {
    return (
        <div className='bg-[#225AC0] min-h-screen grid grid-cols-2'>
            <div className="col1 flex justify-center items-center flex-col">
                <h1 className='font-bold text-4xl'>Join Linktree</h1>
                <div className='flex flex-col gap-5 my-8'>
                    <h2 className='font-semibold text-2xl'>Step 1: Claim your handle</h2>
                    <div className='mx-4'>
                        <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-blue-500 rounded-4xl' type="text" placeholder="Choose a handle"></input>
                    </div>
                    <h2 className='font-semibold text-2xl'>Step 2: Add links</h2>
                    <div className='mx-4'>
                        <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-blue-500 rounded-4xl' type="text" placeholder="Enter link text"></input>
                        <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-blue-500 rounded-4xl' type="text" placeholder="Enter link"></input>
                        <button className='p-5 py-2 mx-2 bg-slate-900 text-white font-bold cursor-pointer rounded-3xl'>Add Link</button>
                    </div>
                    <h2 className='font-semibold text-2xl'>Step 3: Add a profile picture, and you are done</h2>
                    <div className='mx-4'>
                        <input className='bg-white px-4 py-2 mx-2 my-2 focus:outline-blue-500 rounded-4xl' type="text" placeholder="Enter link to your picture"/>
                        <button className='p-5 py-2 mx-2 bg-slate-900 text-white font-bold cursor-pointer rounded-3xl'>Create your Linktree</button>
                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen">
                <img src="/generate.webp" alt="" className="h-full object-contain" />
            </div>
        </div>
    )
}

export default Generate
