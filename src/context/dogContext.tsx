import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";

type TypeBreed = 'breed' | 'subBreed'

export const DogContext = createContext<{
  selectedBreeds: string[],
  selectedSubBreeds: string[],
  addToSelected: (selected: string[], type: TypeBreed) => void 
}>({
  selectedBreeds: [],
  selectedSubBreeds: [],
  addToSelected: () => {},
});

type Props = {
  children: ReactNode;
};

export const DogContextProvider = ({ children }: Props) => {
  const [selectedBreeds, setSelectedBreeds] = useState<string[]>([]);
  const [selectedSubBreeds, setSelectedSubBreeds] = useState<string[]>([]);

  const addToSelected = useCallback((selected: string[], type: TypeBreed) => {
    if (type === 'breed') {
      setSelectedBreeds(selected)
    } else {
      setSelectedSubBreeds(selected)
    }
  } ,[])
  
  return <DogContext.Provider value={{
    selectedBreeds, addToSelected, selectedSubBreeds
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

