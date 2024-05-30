import {
  Flex,
  Heading,
  Button,
  RadioGroup,
  Radio,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { QuizDifficulty } from "../types/quiz-type";

export function SetQuizDifficulty(p: { onClickNext: (difficulty: QuizDifficulty)=> void}) {
  const [difficulty, setCurrentDifficulty] = useState<QuizDifficulty>(
    QuizDifficulty.Mixed
  );
  const radioList = Object.values(QuizDifficulty).map(
    (diff: QuizDifficulty) => {
      return (
        <Radio key={diff} value={diff}>
          <span style={{ textTransform: "capitalize" }}>
            {diff === QuizDifficulty.Mixed ? "Mixed" : diff}
          </span>
        </Radio>
      );
    }
  );

  return (
    <>
      <Flex direction={"column"} alignItems={"center"}>
        <Heading as="h1" fontSize={"3xl"} mb={20}>
          Which difficulty ?
        </Heading>
      </Flex>
      <RadioGroup
        value={difficulty}
        onChange={setCurrentDifficulty as (d: string) => void}
      >
        <VStack>{radioList}</VStack>
      </RadioGroup>

      <Button
        onClick={() => p.onClickNext(difficulty)}
        position={"absolute"}
        top={"80%"}
        right={"10%"}
        rightIcon={<ArrowForwardIcon />}
      >
        Play
      </Button>
    </>
  );
}
