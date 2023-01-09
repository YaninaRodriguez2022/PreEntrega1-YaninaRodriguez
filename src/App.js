import './App.css';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBarP from './Components/NavBarP'
import ItemListContainer from './Components/ItemListContainer'


function App() {
  return (
    <div className="App">
      
   <header className='App-header
   '>

   <NavBarP />

   </header>

<body>
  <div>

   <ItemListContainer greeting= 'Hola'></ItemListContainer>
  </div>
</body>

    



      
    </div>
  );
}

export default App;
