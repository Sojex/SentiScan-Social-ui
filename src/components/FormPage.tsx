import { useState } from 'react';
import axios from 'axios';

const defaultForm = {
  name: '',
  age: 0,
};

export default function FormPage() {
  const [formData, setFormData] = useState(defaultForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/your-object', formData);
      alert('Submitted! Response: ' + JSON.stringify(response.data));
    } catch (err) {
      console.error(err);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
      <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
}