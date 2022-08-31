import { useState, useEffect } from "react"


const Contador = () => {

    const [counter, setCounter] = useState(0)
   

    const handleSumar = () => {
        setCounter(counter + 1)
    }

    const handleRestar = () => {
        if (counter > 0 ) {
            setCounter(counter - 1)
        }
    }


    // console.log("Contador Montado!")
    
    useEffect( () => {
        console.log("Contador Montado!")
        
        return () => {
            console.log("Contador Desmontado")
        }
    }, [] )
    
    useEffect(() => {
        if (counter % 2 === 0) {
            console.log(counter)
        }

        
    }, [counter])



    return (
        <div className="container my-5">
            <h2>Contador</h2>
            <hr/>

            <button onClick={handleRestar} className="btn btn-outline-primary">-</button>
            <span className="mx-2">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">+</button>

            <p>Último click: {new Date().toLocaleString()}</p>
            <hr/>

           
        </div>
    )
}

export default Contador