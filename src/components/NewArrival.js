import React from 'react';
import image from '../banners-image/arrival.jpg';
import './Buttons.css'
import { useState, useEffect } from 'react';

let arrivalData = [
    {
    "src": image,
    "name": "News and Inspiration",
    "days": 10,
    "hours": 24,
    "minutes": 500,
    "actualPrice": '$1200',
    "discountPrice":'$800'

},
{
    "src": image,
    "name": "News and Inspiration",
    "days": 103,
    "hours": 243,
    "minutes": 5200,
    "actualPrice": '$1200',
    "discountPrice":'$800'

},
{
    "src": image,
    "name": "News and Inspiration",
    "days": 0,
    "hours": 4,
    "minutes": 50,
    "actualPrice": '$1200',
    "discountPrice":'$800'

}
]


const NewArrival = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % arrivalData.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    // const handlePrev = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    // };
  
    // const handleNext = () => {
    //   setCurrentIndex((prevIndex) => (prevIndex + 1) % date.length);
    // };

    return (
        <div>
            <div className='banner'>
            
                {arrivalData.map((data, index) => (
                <div key={index} className={`bannerImage ${index === currentIndex ? "active" : ""}`}>
                    <img src={data.src} style={{ width: '100%', height: '35rem'  }} className='mb-5' alt='hello'></img>
                    <div className='banner-content'>
                        <h3 className='prod-name'>{data.name}</h3>
                        
                        <div className='time-div'>
                            <p className='time-box'><span className='time'>{data.days}</span>days</p>
                            <p className='time-box'><span className='time'>{data.hours}</span>Hours</p>
                            <p className='time-box'><span className='time'>{data.minutes}</span>mins</p>
                        </div>
                        <span className='actual-pric'>{data.actualPrice}</span>
                        <span className='disc-pric'>{data.discountPrice}</span>

                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}

export default NewArrival