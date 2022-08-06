import { useState } from "react";
import CaracterContainer from "./components/CaracterContainer";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {

  const [ characters, setCharacters ] = useState(null);
  
  const reqApi = async() => {
    const api = await fetch("https://simpsons-quotes-api.herokuapp.com/quotes?count=3");
    const frase = await api.json();
    setCharacters(frase);
    
  }


  return (

      <Container>
        <Header/>
        {!characters ? (
          <Welcome reqApi={reqApi}/>
        ) : (
          <CaracterContainer characters={characters} reqApi={reqApi}/>
        )
        }
          
      </Container> 

  );
}



export default App;


