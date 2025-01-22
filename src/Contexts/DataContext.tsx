import useFetch from '../Hooks/useFetch';
import  { createContext, PropsWithChildren, useContext, useState } from 'react'
import { IDataContext, IVenda } from '../Types/Data';


const DataContext = createContext <IDataContext | null> (null);

export const useData = () =>  {
    const context = useContext(DataContext);
    if(!context) throw new Error('useData precisa ser usado dentro de um DataContextProvider');
    return context;
} ;


//Pega o dia de hoje formata para o padrao yyyy-mm-dd e subtrai 30 dias
function getDate (n:number){
  const date = new Date();
  date.setDate(date.getDate() - n);
  const dd =  String(date.getDate()).padStart(2, '0');
  const mm =  String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`
}



export const  DataContextProvider = ({children}: PropsWithChildren) => {

  const [inicio, setInicio]= useState(getDate(30));
  const [final, setFinal]= useState(getDate(0));

  const {data, loading, error} =   useFetch<IVenda[]>('https://data.origamid.dev/vendas/');

    return <DataContext.Provider value={{data, loading, error, inicio, setInicio, final, setFinal}}>{children}</DataContext.Provider>
}