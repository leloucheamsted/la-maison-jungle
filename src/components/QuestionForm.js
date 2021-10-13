import { useState } from "react";

function QuestionForm() {
    const [InputValue, setInputValue] = useState('Posez votre question ici! ')
    return (
        <div>
            <textarea
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)} // fonction callback a OnChange  poour sauvrgarder localement la valeur du state 
            // e.target.value poour acceder a la valeur taper dans l'input
            />
            <button onClick={() => alert(InputValue)}>Alert moi</button>
        </div>
    )
}
export default QuestionForm