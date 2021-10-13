import CareScale from './CareScale'
import '../styles/plantItem.css'

function plantItem({ id, cover, name, water, light }) {
    return (
        <li key={id} className='lmj-plant-item' onClick={() => (handleClick())}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(e) {
    console.log('Vous avez acheter ', e)
}
export default plantItem