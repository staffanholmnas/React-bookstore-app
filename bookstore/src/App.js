import React, { useState, useEffect } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = () => {
    fetch('https://bookstore-53b08-default-rtdb.europe-west1.firebasedatabase.app/books/.json')
    .then(response => response.json())
    .then(data => setBooks(Object.values(data)))
    .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
            Bookstore
          </Typography>
        </Toolbar>
      </AppBar> 
      <p></p>
      <div className="ag-theme-material" style={ { height: 600, width: 1000, margin: 'auto' } }>
        <AgGridReact rowData={books}>
          <AgGridColumn sortable={true} filter={true} field='author' />
          <AgGridColumn sortable={true} filter={true} field='isbn' />
          <AgGridColumn sortable={true} filter={true} field='price' />
          <AgGridColumn sortable={true} filter={true} field='title' />
          <AgGridColumn sortable={true} filter={true} field='year' />
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;
