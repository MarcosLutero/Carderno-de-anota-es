import logo from '../assets/img/logo.svg';
import background from '../assets/img/background.svg';
import googleIcon from '../assets/img/google-icon.svg';

import '../styles/page-all.scss';
export function Home(){

async function createNewNotebook(){
  
}

  return (
    <div className='background'
        style={{backgroundImage:`url(${background})`}}
        > 
      <div id='page-all'>
        <main className= 'main-content'>
          <img src={logo} alt='logo' />
          <button 
          onClick={createNewNotebook}
          className="create_room">
            <img src={googleIcon}/>
            Crie sua anotação com o Google
            </button>
          <div className="separator">Ou entre nas suas anotações</div>
          <form>
            <input type="text" 
            placeholder = "digite o seu codigo"
            />
            <button>
              Entrar nas anotações
            </button>
          </form>
        </main>
        </div>
      </div>
  );
}