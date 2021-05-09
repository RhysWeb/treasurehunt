import React, { createContext, useState, useContext } from 'react'
import cosmo from './photos/CosmoNeutral.jpg';

const DataContext = createContext()

export const DataProvider = ({children}) => {
  const [data, setData] = useState({photo: cosmo});

  
  return <DataContext.Provider value={{data, setData}}>
    {children}
  </DataContext.Provider>
}

export const useData = () => useContext(DataContext)