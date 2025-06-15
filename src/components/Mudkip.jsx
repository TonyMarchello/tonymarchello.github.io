import React, { useState, useEffect } from 'react';
import './Mudkip.css';

const Mudkip = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [currentBackground, setCurrentBackground] = useState('');

    const backgroundGifs = [
        '/imgs/mudkip_1.gif',
        '/imgs/mudkip_splash.gif',
        '/imgs/mudkip_talk.gif',
        '/imgs/pokemon-mudkip-2.gif',
        '/imgs/pokemon-mudkip.gif'
    ];

    useEffect(() => {
        // Set random background
        const randomIndex = Math.floor(Math.random() * backgroundGifs.length);
        setCurrentBackground(backgroundGifs[randomIndex]);
    }, []);

    // Mouse and Touch movement handler
    useEffect(() => {
        const handleMove = (e) => {
            // Use clientX/Y for mouse, or first touch for touch events
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            setMousePosition({
                x: clientX,
                y: clientY
            });
        };

        window.addEventListener('mousemove', handleMove);
        window.addEventListener('touchmove', handleMove, { passive: false });

        return () => {
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('touchmove', handleMove);
        };
    }, []);

    return (
        <div className="mudkip-page">
            <div 
                className="mudkip-background"
                style={{
                    backgroundImage: `url(${currentBackground})`,
                }}
            />
            <img 
                src="/imgs/pokeball.png" 
                alt="pokeball cursor" 
                className="pokeball-cursor"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            />
            <div className="mudkip-container">
                <h1>Mudkip</h1>
                
                <div className="mudkip-content">
                    <div className="mudkip-image-container">
                        <img 
                            src="/imgs/mudkip_top.png" 
                            alt="Mudkip" 
                            className="mudkip-image"
                        />
                    </div>

                    <div className="mudkip-header">
                        <div className="pokemon-number">#0258</div>
                        <div className="pokemon-type">Water</div>
                    </div>

                    <div className="info-grid">
                        <div className="info-card stats-card">
                            <h2>Base Stats</h2>
                            <table className="stats-table">
                                <thead>
                                    <tr>
                                        <th>Stat</th>
                                        <th>Base</th>
                                        <th>Min</th>
                                        <th>Max</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HP</td>
                                        <td>50</td>
                                        <td>210</td>
                                        <td>304</td>
                                    </tr>
                                    <tr>
                                        <td>Attack</td>
                                        <td>70</td>
                                        <td>130</td>
                                        <td>262</td>
                                    </tr>
                                    <tr>
                                        <td>Defense</td>
                                        <td>50</td>
                                        <td>94</td>
                                        <td>218</td>
                                    </tr>
                                    <tr>
                                        <td>Sp. Atk</td>
                                        <td>50</td>
                                        <td>94</td>
                                        <td>218</td>
                                    </tr>
                                    <tr>
                                        <td>Sp. Def</td>
                                        <td>50</td>
                                        <td>94</td>
                                        <td>218</td>
                                    </tr>
                                    <tr>
                                        <td>Speed</td>
                                        <td>40</td>
                                        <td>76</td>
                                        <td>196</td>
                                    </tr>
                                    <tr className="total-row">
                                        <td>Total</td>
                                        <td>310</td>
                                        <td colSpan="2">Min / Max</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p className="stats-note">
                                The ranges shown are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 
                                252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.
                            </p>
                        </div>

                        <div className="info-card">
                            <h2>Pokédex Data</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>Species</td>
                                        <td>Mud Fish Pokémon</td>
                                    </tr>
                                    <tr>
                                        <td>Height</td>
                                        <td>0.4 m (1′04″)</td>
                                    </tr>
                                    <tr>
                                        <td>Weight</td>
                                        <td>7.6 kg (16.8 lbs)</td>
                                    </tr>
                                    <tr>
                                        <td>Abilities</td>
                                        <td>
                                            1. Torrent<br/>
                                            Hidden: Damp
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="info-card">
                            <h2>Training</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>EV Yield</td>
                                        <td>1 Attack</td>
                                    </tr>
                                    <tr>
                                        <td>Catch Rate</td>
                                        <td>45 (5.9% with PokéBall, full HP)</td>
                                    </tr>
                                    <tr>
                                        <td>Base Friendship</td>
                                        <td>50 (normal)</td>
                                    </tr>
                                    <tr>
                                        <td>Base Exp.</td>
                                        <td>62</td>
                                    </tr>
                                    <tr>
                                        <td>Growth Rate</td>
                                        <td>Medium Slow</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="info-card">
                            <h2>Breeding</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>Egg Groups</td>
                                        <td>Monster, Water 1</td>
                                    </tr>
                                    <tr>
                                        <td>Gender Ratio</td>
                                        <td>87.5% male, 12.5% female</td>
                                    </tr>
                                    <tr>
                                        <td>Egg Cycles</td>
                                        <td>20 (4,884–5,140 steps)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="info-card">
                            <h2>Game Data</h2>
                            <table className="info-table">
                                <tbody>
                                    <tr>
                                        <td>Generation</td>
                                        <td>3</td>
                                    </tr>
                                    <tr>
                                        <td>Local №</td>
                                        <td>
                                            #007 (Ruby/Sapphire/Emerald)<br/>
                                            #007 (Omega Ruby/Alpha Sapphire)<br/>
                                            #188 (The Indigo Disk)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="evolution-line">
                        <p>Evolution Line: #0257 Blaziken → #0258 Mudkip → #0259 Marshtomp</p>
                    </div>

                    <div className="data-source">
                        <p>Data source: <a 
                            href="https://pokemondb.net/pokedex/mudkip" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            Pokémon Database
                        </a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mudkip; 