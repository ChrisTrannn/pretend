import Navbar from './Navbar'
import beachGIF from '../assets/beachball.gif'
import pcCharacter from '../assets/logos/pcCharacter.png'

const Beach = () => {
    return (
        <div>
            <div className='title'>
                <h3>Welcome to the Beach</h3>
                <img src={pcCharacter}></img>
            </div>
            <img className="beachgif" src={beachGIF}></img>
            <div className='cardContainer'>
                <div className='card'>
                    <h4>Science Concepts</h4>
                    <p>When you go to the beach, you can learn about erosion. Erosion is the process of the waves and currents slowly wearing away the sand and rocks on the beach.
                    The ocean is made up of saltwater, which is denser than freshwater. This is why you can float more easily in the ocean than in a swimming pool.
                    </p>
                </div>
                <div className='card'>
                    <h4>Museum Activities</h4>
                    <p>Visit the "Beach Ecosystem" exhibit and explore the different habitats found along the beach, such as sand dunes, tide pools, and seagrass beds.
                    Participate in a beach cleanup activity with other visitors to learn about the impact of pollution on marine life and how you can help protect the ocean.
                    </p>
                </div>
                <div className='card'>
                    <h4>Fun Facts</h4>
                    <p>The world's largest beach is Praia do Cassino in Brazil, which is over 150 miles long.
                    Sand on the beach is made up of tiny particles of rocks, shells, and coral that have been broken down by weathering and erosion.
                    The waves at the beach are caused by wind blowing over the surface of the ocean, creating ripples that eventually grow into waves.
                    </p>
                </div>
                <div className='card'>
                    <h4>Activities at Home</h4>
                    <p>Collect seashells from the beach and use them to create a seashell mosaic or necklace.
                    Make your own ocean in a bottle by filling a clear plastic bottle with water, adding blue food coloring and a drop of vegetable oil, and shaking to create waves.
                    </p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
};

export default Beach;