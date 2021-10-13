import { useState } from "react";
import '../styles/Footer.css'
function Footer() {
    const [InputValue, setInputValue] = useState('')

    // retrourner la valeur saisir dans l'input
    function handleInput(e) {
        setInputValue(e.target.value)
    }

    // s'il manque @ 
    function handleBlur() {
        if (!InputValue.includes('@')) {
            alert('il manque @ dans votre mail');
        }
    }
    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={InputValue}
                onBlur={handleBlur} // si un espace vide  
            />
        </footer>
    )
}

export default Footer;