import React, { useState } from 'react';

export default function VehicleLookup() {
  const [plate, setPlate] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (plate.trim()) {
      setResult({
        modelo: 'Fiat Toro Ranch 2021',
        preco: 'R$ 162.000,00',
        estado: 'Excelente'
      });
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-xl font-bold mb-4">Consulta Veicular</h1>
      <input
        type="text"
        placeholder="Digite a placa"
        className="border p-2 w-full mb-4"
        value={plate}
        onChange={e => setPlate(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        onClick={handleSearch}
      >
        Consultar
      </button>
      {result && (
        <div className="mt-4 text-left">
          <p><strong>Modelo:</strong> {result.modelo}</p>
          <p><strong>Preço Ideal:</strong> {result.preco}</p>
          <p><strong>Estado:</strong> {result.estado}</p>
        </div>
      )}
    </div>
  );
}
