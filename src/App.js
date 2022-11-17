
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routers/Route/Router';

function App() {
  return (
   <div className='container max-w-[1480px] mx-auto'>
    <RouterProvider router={router}></RouterProvider>
   </div>
  );
}

export default App;
