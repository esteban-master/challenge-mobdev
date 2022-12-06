import { BreedsImagesResponse, BreedsResponse } from "../types/api"
import axios from 'axios';
import { capitalize } from "../utils/capitalize";

export const getBreedListAll = async () => {
  const { data } = await axios.get<BreedsResponse>('https://dog.ceo/api/breeds/list/all')
  return data
} 

export const getBreedImages = async ({ name, isSubBreed }:{ name: string, isSubBreed?: boolean }) => {
  if (isSubBreed) {
    const [sub, breed] = name.split(' ')
    const { data } = await axios.get<BreedsImagesResponse>(`https://dog.ceo/api/breed/${breed.toLowerCase()}/${sub.toLowerCase()}/images`)
    return data.message.map(image => {
      const [firstName, lastName] = image.split('/')[4].split('-')
      return {
        title: `${capitalize(firstName)} ${capitalize(lastName || '')}`,
        image
      }
    })
  }
  const { data } = await axios.get<BreedsImagesResponse>(`https://dog.ceo/api/breed/${name}/images`)
  return data.message.map(image => {
    const [firstName, lastName] = image.split('/')[4].split('-')
    return {
      title: `${capitalize(firstName)} ${capitalize(lastName || '')}`,
      image
    }
  })
} 
