import useFetch from '@/Hooks/useFetch';
import  { createContext, PropsWithChildren, useContext } from 'react'
import { IDataContext, IVenda } from '@/Types/Data';


const DataContext = createContext <IDataContext | null> (null);

export const useData = () =>  {
    const context = useContext(DataContext);
    if(!context) throw new Error('useData precisa ser usado dentro de um DataContextProvider');
    return context;
} ;


export const  DataContextProvider = ({children}: PropsWithChildren) => {

  const {data, loading, error} =   useFetch<IVenda[]>('https://data.origamid.dev/vendas/');

    return <DataContext.Provider value={{data, loading, error}}>{children}</DataContext.Provider>
}
