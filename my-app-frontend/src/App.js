// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
import MakeUpEsssentials from './MakeUpEsssentials';
// import SuperGlam from './SuperGlam';
import NavBar from './NavBar';


function App() {

  

    const [users, setUsers] = useState([])
    const [essMakeup, setEssMakeup] = useState( [] )

    // console.log ("State of Our MakeUp [", myMakeup, "]")
  
    // const [essentialMakeup, setEsssentialMakeUp] = useState([])
    // console.log ("State of Our Essential MakeUp [", essentialMakeup, "]")
  
    // useEffect(() => {
    // fetch("") 
    //   .then(response => response.json())
    //   .then(fetchedUsers => { console.log("From Fetch", fetchedUsers)
  
    //   setUsers(fetchedUsers)
     
    //  });
    // }, []);
      
    useEffect(() => {
      fetch("http://localhost:9292/products") 
        .then(response => response.json())
        .then(fetchedMU => { console.log("From Fetch", fetchedMU)
    
        console.log(fetchedMU)
        setEssMakeup(fetchedMU)
       
       });
      }, []);
        
  
    
  return (
    <div className="App">
      
      <NavBar/>
      <h3>You've come to the right place: </h3>
      {/* <header className="App-header"> MakeUp For Coders </header> */}
      <Switch> 

        <Route path= "/MyMakeup">
           <Home prodsToRender = {essMakeup}/>
          </Route>

         <Route path="/Artists">
         
        </Route>

        {/* <SuperGlam/>  */}
      
      </Switch>
      
    </div>
  );
}

export default App;
