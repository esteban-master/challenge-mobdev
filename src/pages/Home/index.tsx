import { Grid } from "@mui/material"
import { useQuery } from "@tanstack/react-query"
import { BreedsResponse } from "../../types/api"
import Filters from "../components/Filters"


const Home = () => {
  const { data, isSuccess } = useQuery<BreedsResponse>({ queryKey: ['breeds'], queryFn: async () => {
    const res = await fetch('https://dog.ceo/api/breeds/list/all')
    return await res.json()
  }})

  return <Grid container>
    {
      data && isSuccess ? <>
        <Filters breeds={data.message}/>
      </> : null
    }
  </Grid>
}

export default Home