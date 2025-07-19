// src/components/ControlledForm.tsx
import React, { useState } from 'react';

export const ControlledForm: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Text: ${text}\nChecked: ${checked}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Form</h2>
      <div>
        <label>
          Text:
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Checkbox:
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
