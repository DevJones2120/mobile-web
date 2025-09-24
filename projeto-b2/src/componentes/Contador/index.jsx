import "./Contador.css";

import { useState } from "react";

const Contador = () => {
    // Inicializar o estado com valor 0
    const [count, setCount] = useState(0);

    const aumentar = () =>  {
        setCount(count + 1);
    }

    const diminuir = () => {
       setCount(count - 1);
    }

    return (
        <main className="container">
            <h1>{count}</h1>

            <section>
                <h2>Resultado</h2>
                <button className="aumentar"onClick={aumentar} style={{ marginRight: "10px" }}>Aumentar</button>
                <button className="diminuir"onClick={diminuir}>Diminuir</button>
            </section>
        </main>
    )
}

export default Contador;