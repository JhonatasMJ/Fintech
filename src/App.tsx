
import Resumo from './Pages/Resumo'
import Header from './Components/Header'
import SideNav from './Components/SideNav'
import { DataContextProvider } from './Contexts/DataContext'

const App = () => {
  return (
    <DataContextProvider>
    <div className='container'>
      <SideNav/>
      <main>
      <Header/>
      <Resumo/>

      </main>
    </div>
    </DataContextProvider>
  )
}

export default App
