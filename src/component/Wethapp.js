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
                                Min: {city.temp_min}°Cel || Max:{city.temp_max}°Cel
                            </h3>
                        </div>

                        <div className="wave">
                        <div className="wave-one"></div>
                        <div className="wave-Two"></div>
                        <div className="wave-Three"></div>
                        </div>
                    </>
                    )
                }
            </div  >
        </>
    )
}

export default Wethapp