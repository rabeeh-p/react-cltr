import { useState } from 'react';

const AutoComplete = () => {
  const [suggest, setSuggest] = useState([]); // State to store suggestions
  const [inputValue, setInputValue] = useState(''); // State to store input value

  const listItems = ['hello', 'hai', 'good', 'help', 'halo', 'growth'];

  const handleSuggestion = (e) => {
    const input = e.target.value.toLowerCase();
    setInputValue(input); 



    if (input) {

        const result = listItems.filter((item) =>
        item.toLowerCase().includes(input)
      );
      setSuggest(result); // Update suggestions
    } else {
      setSuggest([]); 
    }
  };

  const handleSelectSuggestion = (value) => {
    setInputValue(value); // Set input value to the selected suggestion
    setSuggest([]); // Clear suggestions
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

      {/* Suggestions dropdown */}
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
