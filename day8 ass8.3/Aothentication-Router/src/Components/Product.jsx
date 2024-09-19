import React, { useContext } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Flex,
  Heading,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { RouterContext } from "../Context/ContextStore";
import Footer from "./Footer";

const ProductPage = () => {
  const {
    cart,

    handleAddToCart,
    handleRemoveFromCart,
    food_list,
    assets,
  } = useContext(RouterContext);

  return (
    <Container
      maxW="container.xl"
      p={4}
      style={{ position: "relative", top: "100px" }}
    >
      <SimpleGrid columns={4} spacing={10}>
        {food_list.map((food) => (
          <Box key={food._id} boxShadow="md" p="5" rounded="md" bg="white">
            <Image src={food.image} alt={food.name} borderRadius="md" />
            <Flex mt="2" justifyContent="space-between" alignItems="center">
              <Box>
                <Heading size="md">{food.name}</Heading>
                <Text fontWeight="bold" color="gray.500">
                  ${food.price}
                </Text>
                <Text mt="2" fontSize="sm" color="gray.700">
                  {food.description}
                </Text>
              </Box>
            </Flex>

            {/* Add/Remove Icon Buttons */}
            <Flex mt="3" alignItems="center">
              {cart[food._id] ? (
                <>
                  <Button
                    onClick={() => handleRemoveFromCart(food._id)}
                    size="sm"
                    variant="outline"
                    mr="2"
                  >
                    <Image
                      src={assets.remove_icon_red}
                      alt="Remove"
                      boxSize="24px"
                    />
                  </Button>
                  <Text>{cart[food._id]}</Text>
                </>
              ) : null}
              <Button
                onClick={() => handleAddToCart(food._id)}
                size="sm"
                variant="outline"
                ml={cart[food._id] ? "2" : "0"}
              >
                <Image src={assets.add_icon_green} alt="Add" boxSize="24px" />
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProductPage;
