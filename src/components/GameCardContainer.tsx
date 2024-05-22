import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameCardContainerProps {
  children: ReactNode;
}

const GameCardContainer = ({ children }: GameCardContainerProps) => {
  return (
    <Box borderRadius={10} _hover={{transform: 'scale(1.04)', transition: 'transform .1s ease-in'}} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
