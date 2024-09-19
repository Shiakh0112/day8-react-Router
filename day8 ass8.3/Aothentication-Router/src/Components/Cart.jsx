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
  Divider,
} from "@chakra-ui/react";
import { RouterContext } from "../Context/ContextStore";
import Footer from "./Footer";

const CartPage = () => {
  const { cart, handleAddToCart, handleRemoveFromCart, food_list, assets } =
    useContext(RouterContext);

  // Filter food_list to get only the items present in the cart
  const cartItems = food_list.filter((food) => cart[food._id]);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, food) => total + food.price * cart[food._id],
    0
  );

  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb="4">Your Cart</Heading>
      {cartItems.length === 0 ? (
        <Text>No items in the cart.</Text>
      ) : (
        <>
          <SimpleGrid columns={4} spacing={10}>
            {cartItems.map((food) => (
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
                  <Button
                    onClick={() => handleRemoveFromCart(food._id)}
                    size="sm"
                    variant="outline"
                    mr="2"
                    disabled={cart[food._id] === 1} // Disable if quantity is 1
                  >
                    <Image
                      src={assets.remove_icon_red}
                      alt="Remove"
                      boxSize="24px"
                    />
                  </Button>
                  <Text mx="2">{cart[food._id]}</Text>
                  <Button
                    onClick={() => handleAddToCart(food._id)}
                    size="sm"
                    variant="outline"
                  >
                    <Image
                      src={assets.add_icon_green}
                      alt="Add"
                      boxSize="24px"
                    />
                  </Button>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>

          {/* Divider and Total Price */}
          <Divider my="4" />
          <Flex justify="flex-end" mt="4">
            <Box>
              <Heading size="md">Total Price</Heading>
              <Text fontWeight="bold" fontSize="lg">
                ${totalPrice.toFixed(2)}
              </Text>
            </Box>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default CartPage;
