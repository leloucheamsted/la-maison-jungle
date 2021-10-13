import { plantList } from '../datas/planList'
import PlantItem from './plantItem'
import '../styles/ShoppingList.css'
function ShoppingList({ cart, updateCart }) {
    // Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.

    const categories = plantList.reduce(
        (acc, elem) =>
            acc.includes(elem.category) ? acc : acc.concat(elem.category),
        []
    )

    return (
        <div className='lmj-shopping-list'>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
                    <div key={id}>
                        <PlantItem cover={cover} name={name} water={water} light={light} />
                        <button onClick={() => updateCart(cart + 1)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}


export default ShoppingList