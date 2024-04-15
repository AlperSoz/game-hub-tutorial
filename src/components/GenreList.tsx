import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre } : GenreListProps) => {
  const { data, isLoading, error } = useGenres();
  const skeletons: number[] = Array.from(Array(15).keys());
  if (error) return null;

  return (
    <>
      {isLoading &&
        skeletons.map((skeleton) => <GenreListSkeleton key={skeleton} />)}
        <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit='cover'
                src={getCroppedImageUrl(genre.image_background)}
              />

              <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' }
                onClick={() => onSelectGenre(genre)}
                variant={"link"}
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
