// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './Home';
// import SuperGlam from './SuperGlam';
import NavBar from './NavBar';
import Artists from './Artists';


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
    
    // Fetching MAKEUP LIST from BACKEND 
    useEffect(() => {
      fetch("http://localhost:9292/products") 
        .then(response => response.json())
        .then(fetchedMU => { console.log("From Fetch", fetchedMU)
    
        console.log(fetchedMU)
        setEssMakeup(fetchedMU)
       
       });
      }, []);

      // Fetching USERS from BACKEND 
        
      useEffect(() => {
        fetch("http://localhost:9292/users") 
          .then(response => response.json())
          .then(fetchedUsers => { console.log("From Fetch", fetchedUsers)
      
          console.log(fetchedUsers)
          setUsers(fetchedUsers)
         
         });
        }, []);
          
    
  return (
    <div className="App">
      
      <NavBar/>
      
      {/* <header className="App-header"> MakeUp For Coders </header> */}
      <Switch> 

        <Route path= "/MyMakeup">
           <Home 
           
           prodsToRender = {essMakeup}/>
          </Route>

         <Route path="/Artists">

           <Artists 
           usersToRender = {users}
           />
         
        </Route>

        {/* <SuperGlam/>  */}
      
      </Switch>
      
    </div>
  );
}

export default App;
