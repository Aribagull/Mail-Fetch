import { useState } from 'react';
import './App.css';
import { propsData } from './Data/data';
import Maildata from './Maildata';

function App() {
  const [selectedEmailIndex, setSelectedEmailIndex] = useState(null);

  const handleButtonClick = (i) => {
    setSelectedEmailIndex(selectedEmailIndex === i ? null : i);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC6Hss0Bo2g8GcMlFXfuq-6wpDWsVTXs9Pzw&s" alt="Logo"/>
        </div>

        <div className="buttons-container">
          {propsData.map((_, i) => (
            <button
              key={i}
              onClick={() => handleButtonClick(i)}
              className={selectedEmailIndex === i ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {propsData.map((v, i) => (
          <Maildata 
            key={i} 
            pitms={v} 
            isSelected={selectedEmailIndex === i} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;
