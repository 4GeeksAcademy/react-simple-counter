import React from 'react';
import { useState, useEffect } from 'react';

const Counter = () => {
    const [currentSecond, setCurrentSecond] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSecond((currentSecond) => {
                currentSecond++;
                    
                let digitStr = currentSecond.toString();

                for(let i = 0; i < digitStr.length; i++) {
                    document.getElementById("pos" + (digitStr.length -i)).textContent = digitStr[i];
                }
                
                return currentSecond;
            });
        }, 1000);
        return  () => clearInterval(interval);
    }, [currentSecond]);

  return (
    <div>
        <div className="container">
			<div className="row bg-dark text-light h1 p-5 text-center">
				<div className="col" id="logo">
                    <i className="fa-regular fa-clock"></i>
                </div>
				<div className="col" id="pos6">0</div>
				<div className="col" id="pos5">0</div>
				<div className="col" id="pos4">0</div>
				<div className="col" id="pos3">0</div>
				<div className="col" id="pos2">0</div>
				<div className="col" id="pos1">0</div>
			</div>
		</div>
    </div>
  )
}

export default Counter;