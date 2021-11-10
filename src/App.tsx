/*para fazer a negacao de telas tem que
importar a biblioteca react-router-dom 
assim como a tipagem eas dependencias
*/



import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { NewNotebook } from './pages/NewNotebook';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" children={<Home/>} />
        <Route path="/caderno/newNotebook" children={<NewNotebook/>}/>
      </Switch>


    </BrowserRouter>
  );
}

export default App;
