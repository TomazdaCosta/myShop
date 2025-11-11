import React from 'react'
import MyShopContext from './MyShopContext'

const MyShopContextProvider = ({children}: React.PropsWithChildren) => {
  return (
    <MyShopContext.Provider value='teste'>
      {children}
    </MyShopContext.Provider>
  )
}

export default MyShopContextProvider
