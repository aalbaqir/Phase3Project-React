// Landing Page
import React from 'react';


function Home(props) {
    console.log("These are the props in Home: ",props)

    
    const deleteContent =()=>{


        console.log ("Bye-Bye")
        // console.log(props.eachProduct)


        props.deleteThisContent(props.prodsToRender)
        console.log(props.prodsToRender)


    
}




    // const essPics = () => {
    //     let mappedPics = props.prodsToRender.map(eachProd => {
    //     //    console.log (props.prodsToRender)
    return(
                <div className="card">
                    <div >
                        <h2 className="prod-name">{props.prodsToRender.name}</h2>
                        <h3>✨{props.prodsToRender.category}✨</h3>
                        <img src={props.prodsToRender.image} alt={props.prodsToRender.name}
                             key={props.prodsToRender.id} className="center"
                    />
                    <h3>${props.prodsToRender.price}</h3>

                    <button onClick={deleteContent}> Remove Glam Item </button>


                </div>
                {/* <div className="prod-image">
                    <img src={props.prodsToRender.image} alt={props.prodsToRender.name}
                    key={props.prodsToRender.id} className="center"
                    />
                    </div>
                <div className="prod-price" >
                    <h3>${props.prodsToRender.price}</h3>
                </div> */}

                </div>

            )
    


        
}

export default Home; 