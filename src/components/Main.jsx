import React, { useState } from 'react'
import axios from 'axios'

const Main = (props) => {

    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        // fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
        //     .then(response => response.json())
        //     .then(successResponse => console.log("SUCCESS: ", successResponse)) // * successful response
        //     .catch(errorResponse => console.log("ERROR: ", errorResponse)) // ! unsuccessul response

        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data)
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
    }


    return (
        <div className='main'>
            <h3>Pokemon API</h3>
            <button onClick={eventHandler}>FETCH</button>
            {
                apiState &&
                <>
                    <p>{apiState.results ? apiState.results.map((item, index)=>{
                        return(<div key={index}>{item.name}</div>)
                    }):null}
                    </p>
                </>
            }
        </div>

    )
}

export default Main