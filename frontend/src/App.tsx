import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <div className="content-section">
                <h1>Welcome to the Solo Roleplaying Experience</h1>
            </div>

            <div className="content-section">
                <h2>Unleash Your Imagination with AI-Driven Solo Roleplaying</h2>
                <p>The Solo Roleplaying Experience is your ultimate nexus into solo tabletop roleplaying games. Powered
                    by cutting-edge AI technology, our platform provides an immersive and dynamic gaming experience
                    tailored just for you.</p>
            </div>

            <div className="content-section">
                <h2>Why Choose the Solo Roleplaying Experience?</h2>
                <ul>
                    <li><strong>AI-Driven Gameplay:</strong> Experience a new level of storytelling with our intelligent
                        AI, designed to adapt and respond to your actions in real-time.
                    </li>
                    <li><strong>Compatible with Any TTRPG:</strong> Whether you're a fan of fantasy, science fiction,
                        horror, or superhero genres, the Solo Roleplaying Experience supports any tabletop roleplaying
                        game system.
                    </li>
                    <li><strong>Perfect for Solo Gamers:</strong> No need for a game master or a group of players. Dive
                        into thrilling adventures anytime, anywhere, and at your own pace.
                    </li>
                </ul>
            </div>

            <div className="content-section">
                <h2>Key Features</h2>
                <ul>
                    <li><strong>Dynamic Storytelling:</strong> Our AI creates rich, detailed narratives that evolve based on your decisions.
                    </li>
                    <li><strong>Comprehensive Rule Integration:</strong> Easily incorporate the rules of your favorite TTRPG systems.
                    </li>
                    <li><strong>Interactive World:</strong> Explore vibrant settings, encounter unique characters, and face challenging quests.
                    </li>
                    <li><strong>Personalized Experience:</strong> Customize your adventures to match your playstyle and preferences.
                    </li>
                    <li><strong>Support for Published Adventures:</strong> Import PDF adventures and let our AI guide you through them seamlessly.
                    </li>
                </ul>
            </div>

            <div className="content-section cta">
                <h2>Join the Adventure</h2>
                <p>Embark on epic quests, uncover hidden secrets, and shape your destiny with the Solo Roleplaying Experience. Whether you're a seasoned roleplayer or new to the world of TTRPGs, our platform is designed to provide endless hours of solo gaming excitement.</p>
                <a href="#signup">Get Started Now</a>
            </div>
        </div>
    );
}

export default App;
