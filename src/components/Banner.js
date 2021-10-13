import '../styles/Banner.css';
import logo from "../assets/logo.png";
function Banner() {
    const title = "La maison Jungle"
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5
    console.log(currentMonth)
    return (
        <div className="Imj-banner">
            <div className='Imj-banner-row'>
                <img src={logo} alt="La maison jungle" className="Imj-logo"></img>
                <h1 className='Imj-title'>{title}</h1>
            </div>
            {isSpring ? (
                <div>C'est le printemps, remportez</div>
            ) : (
                <div>Ce n'est pas le moment de remporter</div>
            )}
        </div>
    )
}
export default Banner;