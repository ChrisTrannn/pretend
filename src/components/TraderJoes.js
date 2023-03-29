import Navbar from './Navbar'
import traderjoesGIF from '../assets/traderjoes.gif'
import pcCharacter from '../assets/logos/pcCharacter.png'

const TraderJoes = () => {
    return (
        <div>
            <div className='title'>
                <h3>Welcome to Trader Joes</h3>
                <img src={pcCharacter}></img>
            </div>
            <img className="traderjoesgif" src={traderjoesGIF}></img>
            <div className='cardContainer'>
                <div className='card'>
                    <h4>Science Concepts</h4>
                    <p>When you go grocery shopping, you can learn about food preservation. Some foods are perishable, which means they spoil quickly, while others can last for a long time without going bad.
                    You can also learn about food packaging and how it can help keep food fresh. For example, some fruits and vegetables are packaged with a special film that slows down the process of decay.
                    </p>
                </div>
                <div className='card'>
                    <h4>Museum Activities</h4>
                    <p>Visit the "Trader Joe's" exhibit and pretend to be a shopper. Use a shopping cart to collect items from the shelves and check them off on your shopping list.
                    Participate in a "Price Guessing" game, where you guess the price of different items in the store and learn about the value of money.
                    </p>
                </div>
                <div className='card'>
                    <h4>Fun Facts</h4>
                    <p>The first grocery store in the United States was opened in 1859 by a man named George Gilman in Indiana.
                    Trader Joe's is known for its unique and innovative food products, such as "Everything But the Bagel" seasoning and cauliflower gnocchi.
                    The average supermarket carries around 40,000 different items.
                    </p>
                </div>
                <div className='card'>
                    <h4>Activities at Home</h4>
                    <p>Create a pretend grocery store at home by using items from your pantry and fridge. Have your child use play money to buy items and practice counting and making change.
                    Make your own reusable grocery bags out of old t-shirts or fabric scraps.
                    </p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
};

export default TraderJoes;