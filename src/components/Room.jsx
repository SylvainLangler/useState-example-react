import React, { useState } from 'react';
import './Room.css'

const Room = () => {
  const [isLit, setIsLit] = useState(true);
  const [light, setLight] = useState(false);
  const [temp, setTemp] = useState(22);
;
  return (
    <div className="room">
	 <div id="status" className={isLit ? 'lit' : 'free'}></div>
	 <div>La chambre est {isLit ? 'disponible' : 'occupée'}</div>
	 <div>La lumière est {light ? 'Allumée' : 'éteinte'}</div>
	 <div className={light ? 'light-on' : 'light-off' }></div>
	 <button onClick={() => { setIsLit(oldIsLit => {
	   const newIsLit = !oldIsLit
	   if(newIsLit){
		setTemp(22);
		setLight(false);
	   }
	   return newIsLit;
	 }) } }>
	   Changer l'état de la chambre
	 </button>
	 <button onClick={() => { if(!isLit) setLight(prev => !prev)} }>
	   Changer l'état de la lumière
	 </button>
	 <div class="temp">
	   <div>{ temp }°C</div>
	   <div class="temp-buttons">
		<button onClick={() => { if(!isLit) setTemp(prev => prev+1)} }>+</button>
		<button onClick={() => { if(!isLit) setTemp(prev => prev+1)} }>-</button>
	   </div>
	 </div>
    </div>
  );
};

export default Room;
