import { Container, Grid, Typography } from '@mui/material'

const Header = () => {
  return (
    <Grid container sx={{ bgcolor: 'black' }} padding={1}>
      <Container>
        <Grid item>
        <Typography variant='h2' color="white">Challenge Mobdev</Typography>
          <Typography variant='h5' color="white">Dog Api</Typography>
        </Grid>
      </Container>
    </Grid>
  )
}

export default Header