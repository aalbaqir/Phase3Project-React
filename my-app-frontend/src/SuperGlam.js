// import React, { useState, useEffect } from 'react';
// //import { Card, Button, div } from "react-bootstrap";



// function superGlam() {
//     console.log()

//     const [ superGlam, setSuperGlam ] = useState([])
//     console.log("State of our favorites[ ", superGlam, " ]")

//     useEffect(()=> {
//     fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
//     .then(response => response.json())
//     .then(fetchedMakeUp => {
//         console.log("From Fetch:", fetchedMakeup)
    
//         setSuperGlam(fetchedMakeup)
//     });
// }, [])

// return (
// <div>
// <br></br>
//     <h2> My Vanity </h2>
//     <br></br>
//     {favePlants.map(eachMProduct =>
//         { console.log(eachMProduct)
//         return(
        
//         <div className="card-columns" >
//             <Card style={{ width: '18rem'}} className="card-deck2">
//                 <div className="makeup card" key={eachMProduct.id}>
                    
//                 <div style={{width:'10rem' , height: '8rem'}} className="image" variant="top">
//                         <img className="pic" src={eachMProduct.img} alt="picture of a makeup" />
//                     </div>
//                     <br>
//                         </br>
//                         <br>
//                         </br>
//                         <br>
//                         </br>
//                     <div className="makeups specs">
//                         <div className="makeup-name">
//                            <h3>{eachMProduct.name} </h3> 
//                         </div>
//                         <div className="makeup-water">
//                             <h4> Water: {eachMProduct.water}</h4>
//                         </div>
//                         <div className="makeup-light">
//                             <h5> Light: {eachMProduct.light} </h5>
//                         </div>
//                         <br>
//                         </br>
//                         <div className="makeup-description">
//                             <p> Description: {eachMProduct.description}</p>
//                         </div>
//                     </div>


//                 </div>
//             </Card>

//         </div>
        
            
            
//         )
        
        
        
//     })}
// </div>
// )
// } 

// export default superGlam;