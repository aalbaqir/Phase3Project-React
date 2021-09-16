// Landing Page
import React from 'react';


function Home(props) {
    console.log("These are the props in Home: ",props)

    const essPics = () => {
        let mappedPics = props.prodsToRender.map(eachProd => {
            return(
                <div className="card">
                    <div >
                        <h2 className="prod-name">{eachProd.name}</h2>
                        <h3>✨{eachProd.category}✨</h3>
                        <img src={eachProd.image} alt={eachProd.name}
                             key={eachProd.id} className="center"
                    />
                    <h3>${eachProd.price}</h3>

                </div>
                {/* <div className="prod-image">
                    <img src={eachProd.image} alt={eachProd.name}
                    key={eachProd.id} className="center"
                    />
                    </div>
                <div className="prod-price" >
                    <h3>${eachProd.price}</h3>
                </div> */}

                </div>

            )
        }


        )

        return mappedPics;

    }

    return (
        <>
    
            {/* <h1>Hello</h1>    */}
            {essPics()}


    </> 
    )
}

export default Home; 