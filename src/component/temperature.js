import React, {useState} from "react";
import '../stylesheets/temperature.css';


function Temperature(){

    const [temperature, setTemperature] = useState(20);
    const [temperatureColour, setTemperatureColour] = useState('neutral');

    const increaseTemperature = () => {
        const newTemperature = temperature + 1;
        if(newTemperature > 10){
            setTemperatureColour('neutral'); 
        }
        if(newTemperature >= 30){
            setTemperatureColour('hot');
        }
        if(newTemperature >= 35){
            setTemperatureColour('ultra-hot');
        }
        setTemperature(newTemperature);
    }

    const decreaseTemperature = () => {
        const newTemperature = temperature - 1;
        
        if(newTemperature <= 10){
            setTemperatureColour('cold');
        }
        
        if(newTemperature <= 5){
            setTemperatureColour('ultra-cold');
        }
        setTemperature(newTemperature);
    }
    return(
        <div className='container'>
            <div className={`grades ${temperatureColour}`}>
                <p>{temperature}ºC</p>
            </div>
            <div className='button-container'>
                <button onClick={() => increaseTemperature()}>+</button>
                <button onClick={() => decreaseTemperature()}>-</button>
            </div>
        </div>
    );
};

export default Temperature;