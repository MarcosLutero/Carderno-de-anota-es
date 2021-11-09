/*para fazer a negacao de telas tem que
importar a biblioteca react-router-dom 
assim como a tipagem eas dependencias
*/



import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { NewNotebook } from './pages/NewNotebook';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/caderno/newNotebook" element={<NewNotebook/>}/>
      </Routes>
     
     
    </BrowserRouter>
  );
}

export default App;
