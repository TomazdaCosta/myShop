import React from 'react'
import MyShopContext from '../context/MyShopContext'

const Teste = () => {
  const valor = React.useContext(MyShopContext)

  return (
    <div>
      <p>Esse é o valor: {valor}</p>
    </div>
  )
}

export default Teste
