import Teste from "./components/Teste"
import MyShopContextProvider from "./context/MyShopContextProvider"

const App = () => {
  return (
    <MyShopContextProvider>
      <Teste />
    </MyShopContextProvider>
  )
}

export default App
