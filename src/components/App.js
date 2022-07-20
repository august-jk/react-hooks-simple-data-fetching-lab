// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [dogs, setDogs] = useState()
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(r => r.json())
        .then((data) => {
            setDogs(data)
            setIsLoaded(true)
        })
    }, [])
    if(!isLoaded)return <p>Loading...</p>;
    return(
        <img src={dogs.message} alt="A Random Dog"/>
    )
}
export default App;