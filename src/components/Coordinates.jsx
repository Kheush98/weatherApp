import React from 'react'

function Coordinates(props) {
  return (
    <div className='w-1/3'>
        <div className='bg-slate-950 text-white p-10 mb-10 rounded-md'>
            <h1 className='text-center text-2xl'>Coordinates</h1>
        </div>
        <div className='flex justify-center items-center border-2 border-slate-900 py-5 rounded-md'>
            <div className='w-1/2 flex flex-col'>
                <label htmlFor='lal'>Latitude: </label>
                <input 
                    type='text' 
                    id='lal' 
                    onChange={props.inputLal} 
                    value={props.laltitude} 
                    className='outline outline-offset-2 outline-1 p-1'
                />
                <label htmlFor='lon'>Longitude: </label>
                <input 
                    type='text' 
                    id='lon' 
                    onChange={props.inputLong} 
                    className='outline outline-offset-2 outline-1 p-1'
                    value={props.longititude}
                />
            </div>
        </div>
    </div>
  )
}

export default Coordinates