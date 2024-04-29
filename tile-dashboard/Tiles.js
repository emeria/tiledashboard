import React, { useState, useEffect } from 'react';
import { Grid, Paper, Link } from '@mui/material';

function Tiles() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    fetch('/tiles.json')  // Adjust the path as needed
      .then(response => response.json())
      .then(data => setTiles(data))
      .catch(error => console.error('Error loading the tiles:', error));
  }, []);

  return (
    <Grid container spacing={2} style={{ padding: 20 }}>
      {tiles.map((tile, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Link href={tile.url} style={{ textDecoration: 'none' }}>
            <Paper style={{ padding: 20, backgroundColor: tile.color, color: '#fff' }} elevation={3}>
              {tile.title}
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default Tiles;
