import React from 'react'

function WeatherInfo({weather}) {
    let dateRise = null
    let dateSet = null
    let background = 'bg-gray-300'

    if(weather){
        dateRise = new Date(weather.sys.sunrise * 1000)
        dateSet = new Date(weather.sys.sunset * 1000)
        if(weather.weather[0].main === 'Rain'){
            background = 'bg-slate-400'
        } else if(weather.weather[0].main === 'Clouds'){
            background = 'bg-gray-300'
        } else if(weather.weather[0].main === 'Clear'){
            background = 'bg-cyan-300'
        }
    }
  return (
    <div className='w-1/2'>
        <div className='bg-slate-950 text-white p-10 mb-10 rounded-md'>
            <h1 className='text-center text-2xl'>Weather Information</h1>
        </div>
        <div className={'rounded-md p-5 '+background}>
            {weather ? 
            
            (
                <>
                    <table className='w-full'>
                        <tbody>
                            <tr>
                                <td className='font-bold py-5'>City:</td>
                                <td className=''>{weather.name}</td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Temperature:</td>
                                <td className=''>{(weather.main.temp / 10).toFixed(2)}°C</td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Main:</td>
                                <td className=''>{weather.weather[0].main}</td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Description:</td>
                                <td className=''>{weather.weather[0].description}</td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Illustration:</td>
                                <td className=''>
                                    <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt='weather'/>
                                </td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Sunrise:</td>
                                <td className=''>{dateRise.getHours()}h:{dateRise.getMinutes()}mn:{dateRise.getSeconds()}s </td>
                            </tr>
                            <tr>
                                <td className='font-bold py-5'>Sunset:</td>
                                <td className=''>{dateSet.getHours()}h:{dateSet.getMinutes()}mn:{dateSet.getSeconds()}s</td>
                            </tr>
                        </tbody>
                    </table>
                    {/* <h2 className='pb-6'><span className='font-bold mr-10'>City:</span> {weather.name}</h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Temperature:</span> </h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Main:</span> </h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Description:</span> </h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Illustration:</span></h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Sunrise:</span> </h2>
                    <h2 className='pb-6'><span className='font-bold mr-10'>Sunset:</span> </h2> */}
                </>
            )
             : 
                <h2 className='text-center'>Chargement...</h2>}
        </div>
    </div>
  )
}

export default WeatherInfo