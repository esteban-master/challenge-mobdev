import { Grid, ImageList, ImageListItem, ImageListItemBar, Pagination, Typography } from "@mui/material"
import {  useState } from "react"
import { useDogContext } from "../../../context/dogContext";

const ImagesDogList = () => {
  const { breedImages } = useDogContext()
  const [page, setPage] = useState(1);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Imagenes</Typography>
      </Grid>
      <Grid item xs={12}>
        <ImageList variant="masonry" cols={2} gap={8}>
          { breedImages
            .slice(page * 10, page * 10 + 10)
            .map((item) => 
              <ImageListItem key={item.image}>
                <img src={item.image} alt="" loading="lazy" srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}/>
                <ImageListItemBar
                  title={item.title}
                />
              </ImageListItem>)}
        </ImageList>
        
      </Grid>
      {
        breedImages.length ? <Grid item xs={12}>
          <Pagination style={{
            display: 'flex',
            justifyContent: 'center'
          }} count={Math.ceil(breedImages.length / 10)} color="primary" onChange={(_, value: number) => setPage(value - 1)}/>
          
        </Grid> : null
      }
    </Grid>
  )
}

export default ImagesDogList