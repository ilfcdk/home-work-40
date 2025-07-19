import React, { useRef } from "react";

export const UncontrolledForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Submitted value: ${inputRef.current?.value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Uncontrolled Form</h2>
      <label>
        Input:
        <input type="text" ref={inputRef} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
