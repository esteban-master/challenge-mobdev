import { Grid } from "@mui/material"
import Filters from "./components/Filters"
import ImagesDogList from "./components/ImagesDogList"

const Home = () => {
  return <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
      <Filters />
    </Grid>
    <Grid item xs={12} sm={6} md={8}>
      <ImagesDogList />
    </Grid>
  </Grid>
}

export default Home