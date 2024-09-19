import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Box,
  Image,
  Grid,
  GridItem,
  Heading,
  Text,
  Button,
  Flex,
  Stack,
  Container,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Footer from "./Footer";
import About from "./About";

// Local food images from your assets directory
const food_list = [
  {
    _id: "1",
    name: "Greek salad",
    image: "/src/assets/Assets/food_1.png",
    price: 12,
    description: "Delicious Greek salad with fresh ingredients.",
  },
  {
    _id: "2",
    name: "Veg salad",
    image: "/src/assets/Assets/food_2.png",
    price: 18,
    description: "A healthy veg salad with crisp veggies.",
  },
  {
    _id: "3",
    name: "Veg salad",
    image: "/src/assets/Assets/food_3.png",
    price: 18,
    description: "A healthy veg salad with crisp veggies.",
  },
  {
    _id: "4",
    name: "Clover Salad",
    image: "/src/assets/Assets/food_4.png",
    price: 16,
    description: "Clover Salad packed with nutrients.",
  },
  {
    _id: "5",
    name: "Clover Salad",
    image: "/src/assets/Assets/food_5.png",
    price: 16,
    description: "Clover Salad packed with nutrients.",
  },
  {
    _id: "6",
    name: "Clover Salad",
    image: "/src/assets/Assets/food_6.png",
    price: 16,
    description: "Clover Salad packed with nutrients.",
  },
  {
    _id: "7",
    name: "Clover Salad",
    image: "/src/assets/Assets/food_7.png",
    price: 16,
    description: "Clover Salad packed with nutrients.",
  },
  {
    _id: "8",
    name: "Clover Salad",
    image: "/src/assets/Assets/food_8.png",
    price: 16,
    description: "Clover Salad packed with nutrients.",
  },
];

// Local banner images for the slider
const bannerImages = [
  "/src/assets/Assets/header_img.png",
  "/src/assets/Assets/food_1.png",
  "/src/assets/Assets/food_2.png",
];

function Home() {
  const navigate = useNavigate();

  // Function to handle click on a product
  const handleProductClick = (productId) => {
    navigate(`/product`);
  };

  return (
    <Container
      maxW="container.xl"
      p={4}
      style={{ position: "relative", top: "100px" }}
    >
      <Box>
        {/* Banner Slider */}
        <Box mb={10}>
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            renderArrowPrev={(onClickHandler) => (
              <Button
                onClick={onClickHandler}
                bg="white"
                borderRadius="50%"
                h="40px"
                w="40px"
                position="absolute"
                top="50%"
                left="15px"
                transform="translateY(-50%)"
                zIndex="2"
                _hover={{ bg: "gray.300" }}
                style={{
                  border: "2px solid lightgray",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "0",
                    height: "0",
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderRight: "8px solid black",
                    margin: "auto",
                  }}
                />
              </Button>
            )}
            renderArrowNext={(onClickHandler) => (
              <Button
                onClick={onClickHandler}
                bg="white"
                borderRadius="50%"
                h="40px"
                w="40px"
                position="absolute"
                top="50%"
                right="15px"
                transform="translateY(-50%)"
                zIndex="2"
                _hover={{ bg: "gray.300" }}
                style={{
                  border: "2px solid lightgray",
                }}
              >
                <span
                  style={{
                    display: "block",
                    width: "0",
                    height: "0",
                    borderTop: "6px solid transparent",
                    borderBottom: "6px solid transparent",
                    borderLeft: "8px solid black",
                    margin: "auto",
                  }}
                />
              </Button>
            )}
          >
            {bannerImages.map((image, index) => (
              <Box position="relative" key={index}>
                <Image
                  src={image}
                  alt={`Banner ${index + 1}`}
                  objectFit="cover"
                  height="500px"
                  width="100%"
                />
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  justifyContent="center"
                  alignItems="center"
                  bg="rgba(0, 0, 0, 0.5)"
                >
                  <Stack textAlign="center" color="white" p={8} maxW="lg">
                    <Heading fontSize="4xl">
                      Order your favorite food here
                    </Heading>
                    <Text fontSize="lg">
                      Choose from a diverse menu featuring a delectable array of
                      dishes crafted with the finest ingredients and culinary
                      expertise.
                    </Text>
                  </Stack>
                </Flex>
              </Box>
            ))}
          </Carousel>
        </Box>

        {/* Products Section */}
        <Box>
          <Heading mb={6}>Featured Products</Heading>
          <Grid templateColumns="repeat(4, 1fr)" gap={6}>
            {food_list.slice(0, 8).map((food) => (
              <GridItem
                key={food._id}
                p={4}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
                <Image src={food.image} alt={food.name} mb={4} />
                <Heading as="h3" size="md" mb={2}>
                  {food.name}
                </Heading>
                <Text mb={4}>Price: ${food.price}</Text>
                <Text mb={4} p={2}>
                  {food.description}
                </Text>
                <Button
                  colorScheme="teal"
                  onClick={() => handleProductClick(food._id)}
                >
                  View Product
                </Button>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
