import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
    let colour = score > 75 ? 'green' : score > 60 ? 'yellow' : score > 40 ? 'red' : '';
  
    return (
    <Badge colorScheme={colour} fontSize={"14px"} paddingX={2} borderRadius={"4px"}>
      {score}
    </Badge>
  );
};

export default CriticScore;
