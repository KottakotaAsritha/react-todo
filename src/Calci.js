import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react';

const Calci = () => {
    const [input,setInput] = useState('');
    return (
        <div style={{textAlign:'center'}}>
            <h1 style={{color:'rgb(86, 74, 242)'}}>Calculator App</h1>
            {/* <TextField id="filled-basic" label="Filled" variant="filled" size='small' margin='normal' value={input}/> */}
            <div style={{border:'2px solid rgb(112, 108, 108)',borderRadius:'7px', width:'300px', padding:'10px 10px', margin:'auto'}}>
                <Box sx={{display: 'flex',flexDirection: 'column',textAlign:'right', width:'260px', height:'40px', borderRadius:'7px', border: '3px solid rgb(85, 83, 83)', margin:'0 auto', marginBottom:"10px"}}>
                    {input}
                </Box>
                <Box sx={{display: 'flex',flexDirection: 'column',alignItems: 'center'}}>
                    <ButtonGroup variant="contained" aria-label="Basic button group" sx={{marginBottom:"7px"}}>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput("")}>AC</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input.slice(0,-1))}>DE</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ e.target.innerText)}>*</Button>
                            <Button sx={{width:'60px'}} onClick={(e) => setInput(input+ e.target.innerText)}>/</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="contained" aria-label="Basic button group" sx={{marginBottom:"7px"}}>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 7)}>7</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 8)}>8</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 9)}>9</Button>
                            <Button sx={{width:'60px'}} onClick={(e) => setInput(input+ e.target.innerText)}>+</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="contained" aria-label="Basic button group" sx={{marginBottom:"7px"}}>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 4)}>4</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 5)}>5</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 6)}>6</Button>
                            <Button sx={{width:'60px'}} onClick={(e) => setInput(input+ e.target.innerText)}>-</Button>
                    </ButtonGroup>
                    <ButtonGroup variant="contained" aria-label="Basic button group" sx={{marginBottom:"7px"}}>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 1)}>1</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={(e) => setInput(input+ 2)}>2</Button>
                            <Button sx={{width:'60px', marginRight:'5px'}} onClick={e => setInput(input+ 3)}>3</Button>
                            <Button sx={{width:'60px'}} onClick={e => setInput(eval(input))}>=</Button>
                    </ButtonGroup>
                </Box>
            </div>
        </div>
    )

}

export default Calci;