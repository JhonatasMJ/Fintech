import { useData } from '@/Contexts/DataContext'
import React from 'react'

const Header = () => {

 const {data} =  useData();

  return (
    <div>
        <h1></h1>
    </div>
  )
}

export default Header