import Navbar from './Navbar'
import marinaGIF from '../assets/marina.gif'
import pcCharacter from '../assets/logos/pcCharacter.png'

const Marina = () => {
    return (
        <div>
            <div className='title'>
                <h3>Welcome to the Marina</h3>
                <img src={pcCharacter}></img>
            </div>
            <img className="marinagif" src={marinaGIF}></img>
            <div className='cardContainer'>
                <div className='card'>
                    <h4>Science Concepts</h4>
                    <p>Buoyancy: Learn about the science behind how boats float and how different types of boats stay afloat.
                    Tides: Understand how tides work and how they affect the water level in the marina.
                    Marine Ecosystems: Explore the different types of marine life that can be found in the marina and learn about their habitats and behaviors.
                    </p>
                </div>
                <div className='card'>
                    <h4>Museum Activities</h4>
                    <p>Boat Building: Provide materials and instructions for visitors to build their own mini boats and test them out in a small water tank.
                    Touch Tank: Set up a touch tank with various marine life that can be found in the marina for visitors to interact with and learn from.
                    Navigation Challenge: Have visitors use a map and compass to navigate a small obstacle course set up in the museum.
                    </p>
                </div>
                <div className='card'>
                    <h4>Fun Facts</h4>
                    <p>Did you know that the word "marina" comes from the Latin word "mare", meaning "sea"?
                    Many types of fish and marine life use marinas as a safe haven from predators, making them an important part of the marine ecosystem.
                    Marinas can also serve as a hub for recreational activities such as boating, fishing, and water sports.
                    </p>
                </div>
                <div className='card'>
                    <h4>Activities at Home</h4>
                    <p>Build a Boat: Provide instructions and materials for visitors to build a small boat at home using recycled materials.
                    Marine Life Art: Encourage visitors to create artwork inspired by the marine life they may have seen in the touch tank or while visiting the marina.
                    Tide Experiment: Have visitors conduct a simple experiment at home to understand the science behind tides. They can fill a small container with water and use a flashlight to simulate the sun, observing how the water level rises and falls.
                    </p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
};

export default Marina;