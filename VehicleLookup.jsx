
import React, { useState } from "react";
import axios from "axios";

export default function VehicleLookup() {
  const [plate, setPlate] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePlateSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setData(null);

    try {
      const response = await axios.get(`https://placafipe.com/placa/${plate.replace(/[-\s]/g, "")}`);
      const html = response.data;
      const getText = (label) => html.match(new RegExp(label + ":\\s*<[^>]*>(.*?)<"))?.[1] || "";
      setData({
        marca: getText("Marca"),
        modelo: getText("Modelo"),
        ano: getText("Ano de fabricação"),
        cor: getText("Cor"),
        uf: getText("UF"),
        municipio: getText("Município"),
      });
    } catch {
      setError("Erro ao consultar a placa. Verifique e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white shadow rounded p-6 w-full max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Consulta de Veículo por Placa</h1>
      <form onSubmit={handlePlateSubmit} className="flex gap-2 mb-4">
        <input type="text" value={plate} onChange={(e) => setPlate(e.target.value)} placeholder="Digite a placa" className="border px-2 py-1 w-full" />
        <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">Consultar</button>
      </form>
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {data && (
        <div className="border rounded p-4 bg-gray-50 mt-4">
          <p><strong>Modelo:</strong> {data.modelo}</p>
          <p><strong>Marca:</strong> {data.marca}</p>
          <p><strong>Cor:</strong> {data.cor}</p>
          <p><strong>Ano:</strong> {data.ano}</p>
          <p><strong>Local:</strong> {data.municipio} / {data.uf}</p>
        </div>
      )}
    </div>
  );
}
