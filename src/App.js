
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ProviderContext } from './context/provider';
import Providers_details from './pages/providers_details';
import Providers_list from './pages/providers_list';

function App() {
  return (
   <ProviderContext>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Providers_list/>}/>
      <Route path="provider/:id" element={<Providers_details/>}/>
    </Routes>
    </BrowserRouter>

   </ProviderContext>
  );
}

export default App;
