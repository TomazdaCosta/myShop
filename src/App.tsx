import { RouterProvider } from "react-router-dom"
import MyShopContextProvider from "./context/MyShopContextProvider"
import { router } from "./router"

const App = () => {
  return (
    <MyShopContextProvider>
      <RouterProvider router={router}/>
    </MyShopContextProvider>
  )
}

export default App
