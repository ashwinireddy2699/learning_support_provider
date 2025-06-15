
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ProviderContextProvider } from './context/ProviderContextProvider';
import Providers_details from './pages/ProvidersDetails';
import Providers_list from './pages/ProvidersList';

function App() {
  return (
   <ProviderContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Providers_list/>}/>
      <Route path="provider/:id" element={<Providers_details/>}/>
    </Routes>
    </BrowserRouter>

   </ProviderContextProvider>
  );
}

export default App;
