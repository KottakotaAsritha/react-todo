//import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import ItemCard from './components/ItemCard';
import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import { getProducts } from './api/index';
import { TextField } from '@mui/material';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] =  useState(null);
  const [search, setSearch] = useState('');
  useEffect(() => {
    setLoading(true)
    getProducts(search)
    .then(val => setData(val))
    .catch(err => setError("Something went wrong while fetching products"))
    .finally(() => setLoading(false))
  },[search])

  // if(loading)
  //   return <CircularProgress />
  if(error)
    return <h3>{error}</h3>
  console.log("jdata",data);
  return (
    <div className="App">
        <h1>Products List {`(${data?.length})`}</h1>
        <TextField onChange={(e) => setSearch(e.target.value)} value={search} label="Search..." variant='filled'/>
        <div>
          <Grid container spacing={2} gridAutoRows='1 fr'>
          {
            data?.map(product => {
              return (<Grid sm={12} md={6} lg={3} xl={4} key={product.id}>
                        <ItemCard data={product} />
                     </Grid>
            )
          } )
          }
          </Grid>
        </div>
    </div>
  );
}

export default App;
