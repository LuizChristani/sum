import React, { useState } from "react";

interface NovoClienteProps {
  nome: string;
  cedula: string;
  email: string;
  telefone: string;
  data_nascimento: string;
  generoCliente: string;
  divida: string;
  codigo_postal: string;
  cidade: string;
  bairro: string;
  rua: string;
  distrito: string;
  provincia: string;
  complemento: string;
  canton: string;
  descricao: string;
}

function DadosNovoCliente() {
  const [formData, setFormData] = useState<NovoClienteProps>({
    nome: "",
    cedula: "",
    email: "",
    telefone: "",
    data_nascimento: "",
    generoCliente: "",
    divida: "",
    codigo_postal: "",
    cidade: "",
    bairro: "",
    rua: "",
    distrito: "",
    provincia: "",
    complemento: "",
    canton: "",
    descricao: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/cliente/novo", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Cliente criado com sucesso:", result);
    } catch (error) {
      console.error("Erro ao criar cliente:", error);
    }
  };

  return (
  
    <form onSubmit={handleSubmit} className="flex flex-col p-10 gap-3">
      {[
        { label: "Nome", name: "nome", type: "text" },
        { label: "Cédula", name: "cedula", type: "text" },
        { label: "Email", name: "email", type: "email" },
        { label: "Telefone", name: "telefone", type: "text" },
        { label: "Data de Nascimento", name: "data_nascimento", type: "date" },
        { label: "Dívida", name: "divida", type: "text" },
        { label: "Código Postal", name: "codigo_postal", type: "text" },
        { label: "Cidade", name: "cidade", type: "text" },
        { label: "Bairro", name: "bairro", type: "text" },
        { label: "Rua", name: "rua", type: "text" },
        { label: "Distrito", name: "distrito", type: "text" },
        { label: "Província", name: "provincia", type: "text" },
        { label: "Complemento", name: "complemento", type: "text" },
        { label: "Cantón", name: "canton", type: "text" },
        { label: "Descrição", name: "descricao", type: "text" },
      ].map((field) => (
        <div key={field.name} className="relative w-full mb-4">
          <label
            htmlFor={field.name}
            className="absolute -top-3 left-5 bg-[#F5F5F5] px-2"
          >
            {field.label}
          </label>
          <input
            id={field.name}
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof NovoClienteProps]}
            onChange={handleChange}
            className="w-full h-[5vh] border-2 border-blue-500 outline-none bg-transparent pl-4"
          />
        </div>
      ))}
       <div className="relative w-full mb-4">
        <label
          htmlFor="generoCliente"
          className="absolute -top-3 left-5 bg-[#F5F5F5] px-2"
        >
          Gênero
        </label>
        <select
          id="generoCliente"
          name="generoCliente"
          value={formData.generoCliente}
          onChange={handleChange}
          className="w-full h-[5vh] border-2 border-blue-500 outline-none bg-transparent pl-4"
        >
          <option value="" disabled>
            Selecione o gênero
          </option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>
      </div>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Criar Cliente
      </button>
    </form>
  );
}

export default DadosNovoCliente;
