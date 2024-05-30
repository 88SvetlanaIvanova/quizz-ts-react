import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export function Score(p: { history: boolean[], onNext: () => void }) {
  const rightAnswers = p.history.filter(
    (isValisAnswer: boolean) => isValisAnswer === true
  ).length;

  const renderMessage = () => {
    const rightAnswersPercentage = (rightAnswers * 100) / p.history.length;
    if (rightAnswersPercentage < 30) {
      return "You need more practice.";
    } else if (rightAnswersPercentage < 50) {
      return "Not bad! Keep training, you're getting better.";
    } else if (rightAnswersPercentage < 75) {
      return "Good Job!";
    } else {
      return "Whoa ! You did amazing !";
    }
  };
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Heading fontSize={"3xl"}>Score</Heading>
      <Heading fontSize={"xl"} mt={"5"}>
        {rightAnswers}/{p.history.length}
      </Heading>
      <Text fontWeight={"bold"} mt={20}>
        {renderMessage()}
      </Text>
      <Button position="absolute" top={"80%"} right={"10%"} onClick={p.onNext}>
        New game
      </Button>
    </Flex>
  );
}
