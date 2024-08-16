export default function Button ({i, handleButtonClick, selectedmail}){
    return(
        <button onClick={() => handleButtonClick(i)}
        className={selectedmail === i ? 'active' : ''}>
       {i+1}
      </button>
    )
  
  }