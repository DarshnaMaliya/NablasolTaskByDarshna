import React from 'react';
import { AppBar, Toolbar, Tabs, Tab, Box, Typography, Button, Card, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CardContent from '@mui/material/CardContent';

const Home = () => {
  return (
    <>
      <AppBar sx={{ background: 'white' }}
        position='sticky'
      >
        <Toolbar>
          <Box component={'img'} src='logoimg.png' alt='logo' ml={30}></Box>
          <Tabs sx={{ marginLeft: 'auto' }}>
            <Tab label='Red' sx={{ textTransform: 'none' }}></Tab>
            <Tab label='Blue' sx={{ textTransform: 'none' }}></Tab>
            <Tab label='Green' sx={{ textTransform: 'none' }}></Tab>
            <Tab label='Yellow' sx={{ textTransform: 'none' }}></Tab>
            <Tab label='Pink' sx={{ textTransform: 'none' }}></Tab>
            <Tab label='Purple' sx={{ textTransform: 'none' }}></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ background: '#87cefa' }} display={'flex'} flexDirection={'column'} alignItems={'center'} height={480}>
        <Typography variant='h4' color={'white'} marginTop={10}>I <FavoriteIcon /> Color</Typography>
        <br />
        <Typography color={'white'}>Color really isn't that difficult to get right, if you know where to start.</Typography>
        <Typography color={'white'}>Leran by doing and you will be master in no time. </Typography>
        <br />
        <br />
        <Button type='submit' color='warning' variant='contained' sx={{ borderRadius: '30px', textTransform: 'none'  }}> Over to you</Button>
      </Box>
      <Grid container columnGap={3} sx={{ marginTop: '-130px', justifyContent: 'center' }}>
        <Card sx={{ maxWidth: 250, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }} >
          <br />
          <img src='blue.png' alt='blue'></img>
          <Typography variant='h6' justifyContent={'center'}>
            Blue
          </Typography>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Blue is the color of sky and sea. It is often associated with depth and stability.It symbolizes trust,
              loyalty, wisdom, confidence, intelligence,faith, truth and heaven
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ maxWidth: 250, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <br />
          <img src='green.png' alt='green'></img>
          <Typography variant='h6' justifyContent={'center'}>
            Green
          </Typography>
          <CardContent>

            <Typography variant='body2' color='text.secondary'>
              Green is the color of nature.
              It symbolizes growth, harmony, freshness, and fertility.
              Green has strong emotional corrospondence with safety.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 250, justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <br />
          <img src='red.png' alt='red'></img>
          <Typography variant='h6' justifyContent={'center'}>
            Red
          </Typography>
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default Home;