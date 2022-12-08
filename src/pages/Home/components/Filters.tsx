import { Autocomplete, Grid, Paper, Stack, TextField, Typography } from "@mui/material"
import TuneIcon from '@mui/icons-material/Tune';
import { useDogContext } from "../../../context/dogContext"
import { capitalize } from "../../../utils/capitalize"

const Filters = () => {
  const { addToSelected, breedList } = useDogContext()
  const { breeds, subBreeds } = Object.entries(breedList).reduce<{ breeds: string[], subBreeds: string[] }>((acc, item) => {
    const [breed, subs] = item;
    acc.breeds.push(breed)

    subs.forEach(sub => acc.subBreeds.push(`${capitalize(sub)} ${capitalize(breed)}`))
    return acc;
  }, { breeds: [], subBreeds: [] });

  return (
    <Grid container spacing={2}>
        <Grid item>
          <Stack direction="row" spacing={1} alignItems="center">
            <TuneIcon />
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Filtros</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="breeds"
            options={breeds}
            defaultValue={['bulldog']}
            getOptionLabel={(option) => capitalize(option)}
            onChange={(_, selected) => addToSelected(selected, 'breed')}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Razas"
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Autocomplete
            multiple
            id="breeds"
            options={subBreeds}
            getOptionLabel={(option) => option}
            onChange={(_, selected) => addToSelected(selected, 'subBreed')}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                label="Sub razas"
              />
            )}
          />
        </Grid>
      </Grid>
  )
}

export default Filters