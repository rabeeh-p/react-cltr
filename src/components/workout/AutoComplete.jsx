import { useState } from 'react';

const AutoComplete = () => {
  const [suggest, setSuggest] = useState([]); 
  const [inputValue, setInputValue] = useState(''); 

  const listItems = ['hello', 'hai', 'good', 'help', 'halo', 'growth'];

  const handleSuggestion = (e) => {
    const input = e.target.value.toLowerCase();
    setInputValue(input); 

    if (input) {
        const result = listItems.filter((item) =>
        item.toLowerCase().includes(input)
      );
      setSuggest(result); 
    } else {
      setSuggest([]); 
    }
  };

  const handleSelectSuggestion = (value) => {
    setInputValue(value);  
    setSuggest([]);  
  };

  return (
    <div>
      <h1>Autocomplete Example</h1>
      <label htmlFor="autocomplete-input">Search: </label>

      <input
        id="autocomplete-input"
        type="text"
        value={inputValue}
        onChange={handleSuggestion}
        autoComplete="off"
      />

       
      {suggest.length > 0 && (
        <ul style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
          {suggest.map((item, index) => (

            <li
              key={index}
              style={{
                cursor: 'pointer',
                padding: '5px 0',
                listStyle: 'none',
              }}
              onClick={() => handleSelectSuggestion(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoComplete;
