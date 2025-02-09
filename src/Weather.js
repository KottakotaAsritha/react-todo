import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";

const Weather = () => {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState("");
    const [searchedCity, setSearchedcity] = useState("")
    const [error, setError] = useState("");
    const handleSubmit = async () => {
        setTemperature('')
        setError('')
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=be6c89fe8917ab9970ac8469946ba460`)
            const kelvin = response.data.main.temp
                const celsius =  kelvin - 273.15
                setTemperature((celsius).toFixed(2))
                setSearchedcity(city);
                setCity('');
        }
        catch(error)
        {
            setError(error.message)
            setCity('')
        }
    }
    
    return (
            <Box component="section" sx={{ p: 2, border: '2px solid grey',borderBlockColor:'rgb(199, 24, 199)', margin:'0 auto', width:'300px', marginTop:'100px'}}>
                <h3 style={{textAlign:'center', color:'rgb(199, 24, 199)'}}>Weather App</h3>
                <TextField id="outlined-basic" label="City" variant="outlined" margin="normal" color="secondary" autoFocus='true' value={city} onChange={e => setCity(e.target.value)}/>
                <Button disabled = {city === '' ? true : false} variant="outlined" color="secondary" onClick={handleSubmit}>Get Temperature</Button>
                { 
                    temperature && <p style={{fontSize:'25px', color:'rgb(199, 24, 199)'}}>Temperature at {searchedCity} is {temperature} °C</p>
                }
                {
                    error && <p style={{fontSize:'25px', color:'rgb(199, 24, 199)'}}>{error}</p>
                }
            </Box>
    )
}

export default Weather;