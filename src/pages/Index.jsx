import { Box, Flex, Heading, Text, Image, SimpleGrid, VStack } from "@chakra-ui/react";
import { FaTrophy, FaNewspaper, FaImage } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex direction="column" align="center" mb={10}>
        <Image borderRadius="full" boxSize="150px" src="/venus-williams.jpg" alt="Venus Williams" />
        <Heading as="h1" size="xl" mt={5}>Venus Williams</Heading>
        <Text fontSize="lg">Professional Tennis Player</Text>
      </Flex>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg"><FaTrophy /> Career Highlights</Heading>
          <Text mt={4}>
            Venus Williams has won seven Grand Slam singles titles, including five at Wimbledon.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg"><FaNewspaper /> Recent News</Heading>
          <Text mt={4}>
            Recently, Venus Williams announced her collaboration with a major sports brand to launch a new line of tennis apparel.
          </Text>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg">
          <Heading as="h2" size="lg"><FaImage /> Gallery</Heading>
          <SimpleGrid columns={3} spacing={5}>
            <Image src="/venus-action1.jpg" alt="Venus playing tennis" />
            <Image src="/venus-action2.jpg" alt="Venus at a tournament" />
            <Image src="/venus-action3.jpg" alt="Venus with a trophy" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;