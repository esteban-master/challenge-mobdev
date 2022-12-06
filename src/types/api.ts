type Status = {
  status: 'success' | 'error'
}

export type Breeds = { [key: string]: string[] }
export type BreedsResponse = { message: Breeds } & Status
export type BreedsImagesResponse = { message: string[] } & Status