
import './App.css';

function App() {

const nome = "Proano" 

function sub(a,b){
  return a - b

}


  return (
    <div className="App">
      <header className="App-header">

      <h1> Olá {nome}! Bem-vindo. </h1> 
      <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGoI0pcfImnmw/company-logo_200_200/0?e=2159024400&v=beta&t=xg4GfttG0Npb4GLghuheXdTKMWttbcWIqBlDlZHrtbg"></img>
      <p> O PROA está ativo há {sub(2022,2007)} anos.</p>

  
        
       

      </header>
    </div>
  );
}


export default App;
