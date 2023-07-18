import { Box, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const files = {
  children: [
    {
      name: "node_modules",
      children: [
        {
          name: "chakra-ui",
          children: [
            {
              name: "node_modules",
            },
            {
              name: "package.json",
            },
          ],
        },
      ],
    },
    {
      name: "package.json",
    },
    {
      name: "tsconfig.json",
    },
  ],
};
type TEntry = {
  name: string;
  children?: TEntry[];
};
const Entry = ({ entry, depth }: { entry: TEntry; depth: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  // const handleClick = {}
  return (
    <Box w="fit-content" pl={`${depth * 1.1}rem`}>
      <Flex
        onClick={() => setIsExpanded(!isExpanded)}
        _hover={{ cursor: "pointer" }}
      >
        {entry.children && (
          <Button mr="4" p={0} backgroundColor="transparent" border="none">
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </Button>
        )}
        <Box
          borderRadius="4px"
          backgroundColor={!entry.children ? "transparent" : "gainsboro"}
          p="4px"
          m="4px"
          boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;"
        >
          {entry.name}
        </Box>
      </Flex>
      {isExpanded &&
        entry.children?.map((entry) => (
          <Entry key={entry.name} entry={entry} depth={depth + 1} />
        ))}
    </Box>
  );
};
const Features = () => {
  return (
    <Box>
      <Box m="1rem" p="0.5rem" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" maxW="40vw">
      <h1>
        Tree Browser Component
      </h1>
      {files.children.map((entry) => (
        <Entry key={entry.name} entry={entry} depth={0} />
      ))}
      </Box>
    </Box>
  );
};

export default Features;
