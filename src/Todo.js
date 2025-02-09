//import logo from './logo.svg';
import { TextField, Button } from '@mui/material';
import './App.css';
import {  useState } from 'react';
// import { TiTick } from "react-icons/ti";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import dayjs, { unix } from 'dayjs';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { format } from 'date-fns';


function Todo() {
  const [item,setItem] = useState("");
  const [description, setDescription] = useState("");
  const [duedate,setDuedate] = useState('');
  const [list,setList] = useState([]);
  const [completedTodos, setCompletedtodos] = useState([])
  const theme = useTheme();
  const [buttonEnable,setButtonenable] = useState([]);
  const [value, setValue] = useState(0);

  const handleAddButton = () => { 
    //const res = handleDuedate(duedate)
    setList(prevList => ([...prevList, { id: Date.now(), value:item, isCompleted:false,description:description,duedate:duedate }]));
    setItem("");
    setDescription("")
    //console.log("list",list)
    }
  const handleDuedate = (duedateparam) => {
    let currentTimestamp = Math.floor(Date.now() / 1000);
    return dayjs(duedateparam).unix()<currentTimestamp
  }
  const handleToggle = (index) => {
    const todos = [...list];
    const newArray =[]
    const newArray1 = [...buttonEnable]
    todos[index].isCompleted = !todos[index].isCompleted;
    if(todos[index].isCompleted === true) 
    {
      newArray1.push(todos[index])
      console.log('newarray1',newArray1)
      setButtonenable(newArray1)
    }
    else {
      buttonEnable.forEach((eachtask) => {
        console.log('button false')
        if( todos[index].id !== eachtask.id) {
          newArray.push(eachtask)
        }  
        else 
          return;  
      })
      console.log('newarray',newArray)
      setButtonenable(newArray)
    }   
    // setButtonenable(newArray1)
    // setButtonenable(newArray)
    
    setList(todos);
    //setButtonenable(buttonEnable)
  }

  const handleSubmit = () => {
    const todos = [...list]
    const newcompletedarray = [...completedTodos]
    const pendingArray = []
    todos.forEach(eachtodo => {
        if(eachtodo.isCompleted === true)
            newcompletedarray.push(eachtodo)
        else
            pendingArray.push(eachtodo)
    })
    setList(pendingArray)
    setCompletedtodos(newcompletedarray)
    setButtonenable([])
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const handleChange = (event, newValue) => {
    console.log("newvalue",newValue)
    setValue(newValue);
  };

//   let currentTimestamp = Math.floor(Date.now() / 1000);
//   console.log("current",currentTimestamp);
console.log("list",list)
//  console.log('given date',dayjs(duedate).unix())
//  console.log("result",dayjs(duedate).unix()>currentTimestamp)
  return (
    <div className="App">
      <Box component="section" sx={{ p: 2, margin:'0 auto', border: '2px solid Grey', width:'700px',height:'auto', marginTop:'100px'}}>
        <h1 style={{color:'Blue'}}>Welcome to To-Do App</h1>
        <div>
            <div>
                <Stack direction="column" spacing={1} alignItems="center" justifyContent="center">
                    {/* <input type='text' placeholder='Enter the item' value={item} onChange={(e) => setItem(e.target.value)}></input> */}
                    <TextField color='primary' size='small' id="outlined-basic" autoFocus='true' label="Enter the task" variant="outlined" margin='dense' value={item} onChange={(e) => setItem(e.target.value)} />
                    <TextField color='primary' size='small' id="outlined-basic" label="Enter the description" variant="outlined" margin='dense' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="date" id="date" name="date" value={duedate} onChange={e=>setDuedate(e.target.value)}/>
                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DemoContainer components={['DatePicker', 'DatePicker']}>
                        <DatePicker
                          label="Controlled picker"
                          size='small'
                          value={duedate}
                          onChange={(newValue) => setDuedate(format(newValue,'dd-MM-yyyy'))}
                        />
                      </DemoContainer>
                    </LocalizationProvider> */}
                    <Button size='medium' variant='contained' onClick={handleAddButton}>Add Task</Button>
                </Stack>
            </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}>
        <Box sx={{ bgcolor: 'background.paper', width: 500, border: '2px solid Grey', margin:'0 auto', height:'auto',minHeight:'300px'}}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab sx={{border:'1px solid white'}} label="Pending tasks" {...a11yProps(0)} />
          <Tab sx={{border:'1px solid white'}} label="Completed Tasks" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
      {
        list.length !==0 ? 
      <ul>
            {
                list?.map((eachitem,index) => {
                return(
                  <div style={{textAlign:'LEFT'}}>
                    <li style={{listStyle:"none"}} key={eachitem.id}>
                    {/* <input type='checkbox' onClick={e => handleToggle(index)}/> */}
                    <Checkbox color='primary' onClick={e => handleToggle(index)} checked={eachitem.isCompleted}></Checkbox>
                    <span>{eachitem.value}</span>
                    {
                      handleDuedate(eachitem.duedate) && <span style={{color:'red'}}> - Overdue</span>
                    }
                    </li>
                  </div>
                )
                })
            }
            <Button disabled={buttonEnable.length === 0} variant='outlined' onClick={handleSubmit}>Done</Button> 
            </ul>
            : <><h3>There are no pending tasks</h3></> }
            
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
      {  completedTodos.length !== 0 ?
            <div>
            <h3>Completed Tasks</h3>
            <ul style={{listStyle:"none"}}>
            {
                completedTodos?.map(eachItem => {
                    return(
                        <div>
                            <Stack key={eachItem.id} direction="row" spacing={2} alignItems="left" marginBottom='7px'>
                                    <CheckCircleOutlineSharpIcon size='small' color='primary' margin='5px 5px' /> {eachItem.value}
                            </Stack>
                        </div>
                    )
                })
            }
            </ul>
            </div>
            : <h3>There are no Completed tasks</h3>
        }
      </TabPanel>
    </Box>
        </div>   


              
        </div>
      </Box>
    </div>
  );
}


export default Todo;
