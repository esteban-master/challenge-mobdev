import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { getBreedImages, getBreedListAll } from "../api/dogApi";
import { Breeds } from "../types/api";

type TypeBreed = 'breed' | 'subBreed'

export const DogContext = createContext<{
  selectedBreeds: string[],
  selectedSubBreeds: string[],
  addToSelected: (selected: string[], type: TypeBreed) => void,
  breedList: Breeds,
  breedImages: { title: string, image: string }[],
  page: number,
  setPage: (value: number) => void
}>({
  selectedBreeds: [],
  selectedSubBreeds: [],
  addToSelected: () => {},
  breedList: {},
  breedImages: [],
  page: 0,
  setPage: () => {},
});

type Props = {
  children: ReactNode;
};

export const DogContextProvider = ({ children }: Props) => {
  const [breedList, setBreedList] = useState<Breeds>({})
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>(['bulldog']);
  const [selectedSubBreeds, setSelectedSubBreeds] = useState<string[]>([]);
  const [breedImages, setBreedImages] = useState<{ title: string, image: string }[]>([]);
  const [page, setPage] = useState(0)

  useEffect(() => {
    getBreedListAll().then((res) => {
      setBreedList(res.message)
    })
  }, [])

  useEffect(() => {
    Promise.all([
      ...selectedBreeds.map(item => getBreedImages({ name: item })),
      ...selectedSubBreeds
        .filter((subBreed) => !selectedBreeds.includes(subBreed.split(' ')[1].toLowerCase()))
        .map(item => getBreedImages({ name: item, isSubBreed: true })),
    ]).then(values => {
      setPage(0)
      setBreedImages(values.flat())
    })
  }, [selectedBreeds.length, selectedSubBreeds.length]) 

  const addToSelected = useCallback((selected: string[], type: TypeBreed) => {
    if (type === 'breed') {
      setSelectedBreeds(selected)
    } else {
      setSelectedSubBreeds(selected)
    }
  } ,[])
  
  return <DogContext.Provider value={{
    selectedBreeds, addToSelected, selectedSubBreeds, breedList, breedImages, page, setPage
  }}>
    {children}
  </DogContext.Provider>
};

export const useDogContext = () => {
  const context = useContext(DogContext);
  if (!context) {
    throw new Error("Uninitialized context");
  }
  return context;
};

