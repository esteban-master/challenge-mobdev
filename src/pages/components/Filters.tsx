import { Autocomplete, Grid, TextField } from "@mui/material"
import { useDogContext } from "../../context/dogContext"
import { Breeds } from "../../types/api"
import { capitalize } from "../../utils/capitalize"

const Filters = (props: { breeds: Breeds }) => {
  const { selectedBreeds, addToSelected } = useDogContext()  
  
  const breeds = Object.keys(props.breeds);
  const subBreeds = selectedBreeds.reduce<string[]>((acc, item) => {
    const subBreedsNames = props.breeds[item].map(subBreedItem => `${capitalize(subBreedItem)} ${capitalize(item)}`)
    return acc.concat(subBreedsNames)
  }, [])

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Autocomplete
          multiple
          id="breeds"
          options={breeds}
          getOptionLabel={(option) => capitalize(option)}
          defaultValue={[]}
          onChange={(_, selected) => addToSelected(selected, 'breed')}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Razas"
              placeholder="Filtrar"
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Autocomplete
          multiple
          id="breeds"
          options={subBreeds}
          getOptionLabel={(option) => option}
          defaultValue={[]}
          onChange={(_, selected) => addToSelected(selected, 'subBreed')}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Sub razas"
              placeholder="Filtrar"
            />
          )}
        />
      </Grid>
    </Grid>
  )
}

export default Filters