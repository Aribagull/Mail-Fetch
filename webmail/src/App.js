import { useState } from 'react';
import './App.css';
import { propsData } from './Data/data';
import Button from './buttons';


function App() {
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);
  const handleButtonClick = (i) => {
    setSelectedEmailIndex(selectedmail === i ? null : i);
  };


 return (
    <div className="App">
      <div className="container">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6Hss0Bo2g8GcMlFXfuq-6wpDWsVTXs9Pzw&s"/>
        </div>


        <div className="buttons-container">
          {propsData.map((_, i) => (
            <Button
              i={i}
              selectedmail={selectedmail}
              handleButtonClick={handleButtonClick}
            />
          ))}
        </div>
       </div>

      { propsData.map((v, i)=>
            <Maildata pitms={v}
            isSelected={selectedmail === i}
            />)}
      </div>
  );
}

export default App;

function Maildata({pitms, isSelected}){
   return(
    <>
        <div className={`row-data ${isSelected ? 'active' : ''}`}>
         
         <h4>{pitms.title}</h4>
         <p>{pitms.Description}</p>
         <div>{pitms.Date}</div>
        </div>
    </>
   )
}