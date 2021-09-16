import React from 'react';


function Artists(props){ 
    console.log("These are my props in ARTISTS: ", props)

    const userList = () => {
        let mappedUsers = props.usersToRender.map(eachUser => {



            return (


                <div className="card">
                    <h2>{eachUser.name}</h2>


                    <div className="pics">

                         <img src={eachUser.artist_img} alt="Picture of: {eachProd.name}"
                             key={eachUser.id} className="center"
                        />


                    </div>


                </div>
            )
        })

        return mappedUsers;
    }

    return(
        <>
        {userList()}
        </>
    )
}

export default Artists;