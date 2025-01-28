import VendaItem from "../Components/VendaItem";
import { useData } from "../Contexts/DataContext";
import React from "react";

const Vendas = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          {" "}
          <VendaItem venda={venda} />{" "}
        </li>
      ))}
    </ul>
  );
};

export default Vendas;
