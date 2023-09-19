 import { useRoutes, BrowserRouter } from 'react-router-dom'
 import Home from '../Home/Home.jsx'
 import MyAccount from '../MyAccount/MyAccount.jsx'
 import MyOrder from '../MyOrder/MyOrder.jsx'
 import MyOrders from '../MyOrders/MyOrders.jsx'
 import NotFound from '../NotFound/NotFound.jsx'
 import SignIn from '../SignIn/SignIn.jsx'
 import './App.css'
 
const AppRoutes = () => {
    let routes = useRoutes([
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> } , 
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/Sign-in', element: <SignIn /> },
      { path: '/*', element: <NotFound /> } //  =>  /*  <=  esto significa cualquier otra ruta
    ])
  return routes
}

const App = () => {  
  return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>   
  )
}
// npm run dev

export default App
