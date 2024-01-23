import { HStack, List, ListItem, Image, Skeleton, Text } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem paddingY={'5px'}>
        <HStack>
          <Skeleton height='32px'>
          <Text>hello</Text>
          </Skeleton>
          <Skeleton height='32px' width='32'>
            <Image/>
          </Skeleton>
        </HStack>
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;
