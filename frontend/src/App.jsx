import AllComponents from "./components/AllComponents.jsx"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { context, globalReducer, initialState } from "./components/store"
import { useReducer } from "react"


function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition:Bounce/>
      <BrowserRouter>
        <context.Provider value={{ state, dispatch }}>
          <AllComponents />
        </context.Provider>
      </BrowserRouter>
    </>
  )
}

export default App