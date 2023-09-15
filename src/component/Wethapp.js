import "./css/style.css"
import React, { useEffect, useState } from 'react'

const Wethapp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Pune")

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=6986ad4a0c830c4c7c7af8f95e81fd6a`
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);

        }
        fetchApi()
    }, [search])

    const renderTemperatureMessage = () => {
        if (city.temp < 10) {
            return (
                <h4>
                    The world takes on a crisp and refreshing charm, as if nature itself is taking a deep breath.
                </h4>
            );
        } else if(city.temp > 10 && city.temp < 20){
            return (
                <h4>
                    The perfect balance is struck, where the air is comfortably cool, and the world seems to beckon for outdoor adventures.
                </h4>
            );
        }
        else if(city.temp > 20 && city.temp < 30){
            return (
                <h4>
                    life blooms and thrives, and the world is painted in the vibrant hues of summer.
                </h4>
            );
        }
        else {
            return (
                <h4>
                    the sun reigns supreme, casting its fiery glow upon the earth, and the world sizzles with the intensity of summer's embrace.
                </h4>
            );
        }
    };

    return (
        <>
            <div className="box">
                <div className="inputdata">
                    <input type="search" className="inputfield" onChange={(event) => { setSearch(event.target.value) }} />
                </div>

                {!city ? (
                    <h1 className="hari">city not fount</h1>
                ) :
                    (<>
                        <div className="info">
                            <h2 className="location">
                                <i className="fa-solid fa-street-view"></i>{search}
                            </h2>
                            <h1 className="temp">
                                {city.temp}°Cel
                            </h1>

                            <h3 className="tempmain">
                            <i class="fa-solid fa-temperature-low mine"></i>Min: {city.temp_min -7}°Cel
                            </h3>
                            <h3 className="tempmain">
                            <i class="fa-solid fa-temperature-high mine"></i>Max:{city.temp_max +4}°Cel
                            </h3>

                            <div className="render">
                                {renderTemperatureMessage()}
                            </div>
                        </div>
                        
                        
                        
                    </>
                    )
                }
            </div  >
        </>
    )
}

export default Wethapp