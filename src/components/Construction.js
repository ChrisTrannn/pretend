import Navbar from './Navbar'
import constructionGIF from '../assets/manof.gif'
import pcCharacter from '../assets/logos/pcCharacter.png'

const Construction = () => {
    return (
        <div>
            <div className='title'>
                <h3>Welcome to the Construction</h3>
                <img src={pcCharacter}></img>
            </div>
            <img className="constructiongif" src={constructionGIF}></img>
            <div className='cardContainer'>
                <div className='card'>
                    <h4>Science Concepts</h4>
                    <p>When you stack blocks on top of each other, you're using the concept of gravity. 
                    Gravity is a force that pulls everything towards the center of the Earth.
                    When you build structures, you're learning about engineering.
                    </p>
                </div>
                <div className='card'>
                    <h4>Museum Activities</h4>
                    <p>Visit the "Construction Challenge" exhibit and find the building block station. Look for the crane nearby.
                    Use the building blocks to create a structure that is at least two feet tall. Use the crane to lift the blocks into place.
                    </p>
                </div>
                <div className='card'>
                    <h4>Fun Facts</h4>
                    <p>The tallest building in the world is the Burj Khalifa in Dubai, which is over 828 meters tall.
                    The Great Wall of China is the longest wall in the world, stretching over 21,000 kilometers.
                    The Eiffel Tower in Paris was built in 1889 and was the tallest structure in the world until 1930.
                    </p>
                </div>
                <div className='card'>
                    <h4>Activities at Home</h4>
                    <p>Use paper and tape to build a paper airplane, then experiment with different designs to see which one can fly the farthest or the longest.
                    Build a simple machine like a lever or pulley using household items like a ruler, string, and a book, then try to lift something heavy like a can of food.
                    </p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
};

export default Construction;