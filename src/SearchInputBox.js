import { useState } from "react";
export default function SearchInputBox({ onSearchTermChange }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputValueChange(e) {
    e.preventDefault();
    setInputValue(e.target.value);
  }

  function handleSubmitClick(e) {
    onSearchTermChange(inputValue);
    setInputValue("");
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputValueChange} />
      <button onClick={handleSubmitClick}>Submit</button>
    </div>
  );
}
