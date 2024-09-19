import React, { useContext } from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Flex,
  Image,
  Container,
} from "@chakra-ui/react";
import Footer from "./Footer";

function About() {
  return (
    <Container
      maxW="container.xl"
      p={4}
      style={{
        position: "relative",
        top: "100px",
        width: "100%",
        margin: "auto",
      }}
      // Adjust the top margin if needed
    >
      <Flex
        direction={{ base: "column", md: "row" }} // Stack items vertically on smaller screens
        align="center"
        justify="center"
        // textAlign="center"
        mb={10}
      >
        <Box flex="1" pr={{ base: 0, md: 5 }} mb={{ base: 6, md: 0 }}>
          <Heading as="h1" size="2xl" mb={4}>
            About Us
          </Heading>
          <Text fontSize="lg" color="gray.600" mb={8}>
            Committed to excellence in service and quality.
          </Text>

          <Stack spacing={5} textAlign="left">
            <Box>
              <Heading as="h2" size="lg" mb={2}>
                Our Mission
              </Heading>
              <Text>
                To provide exceptional products and create delightful shopping
                experiences.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={2}>
                What We Offer
              </Heading>
              <Text>
                A curated selection of gourmet food items and unique kitchen
                gadgets for all.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" mb={2}>
                Our Values
              </Heading>
              <Text>
                We prioritize integrity, quality, and innovation in everything
                we do.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box flex="1" maxW="400px">
          <Image
            src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
            alt="About Us"
            borderRadius="md"
            objectFit="cover"
            width="100%" // Ensure the image scales with the container
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default About;
