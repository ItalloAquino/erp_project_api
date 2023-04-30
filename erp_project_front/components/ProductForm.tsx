// components/ProductForm.tsx
'use client';
import { useState, FormEvent } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/products/list/', { name, price });
      console.log(response.data);
      setName('');
      setPrice('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm font-semibold text-gray-600 mb-1">Nome:</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <div className="flex flex-col">
        <label htmlFor="price" className="text-sm font-semibold text-gray-600 mb-1">Preço:</label>
        <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-500" />
      </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">Enviar</button>
    </form>
  );
};

export default ProductForm;
