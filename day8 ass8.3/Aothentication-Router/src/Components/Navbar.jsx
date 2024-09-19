import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Flex,
  ButtonGroup,
  Button,
  Heading,
  Box,
  Spacer,
  HStack,
  Badge,
} from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi"; // Import cart icon
import { RouterContext } from "../Context/ContextStore";

function Navbar() {
  const { cart, isLogged, setIsLogged } = useContext(RouterContext);
  let { flag, user } = isLogged;
  let navigate = useNavigate();
  // Calculate total number of items in the cart
  const totalItems = Object.values(cart).reduce((acc, count) => acc + count, 0);
  function HandleNavigate(path) {
    navigate(path);
  }
  return (
    <Box
      py={4}
      px={8}
      boxShadow="md"
      style={{
        width: "100%",
        backdropFilter: "blur(10px)", // Apply the glass effect
        backgroundColor: "rgb(255 216 212 / 60%)", // Semi-transparent background
        borderRadius: "10px",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        zIndex: 10, // Ensure the navbar stays visible even when scrolling
        margin: " auto",
        marginBottom: "",
      }}
    >
      <Flex
        minWidth="max-content"
        alignItems="center"
        style={{ margin: "auto", width: "80%" }}
      >
        {/* Logo or Heading */}
        <Box>
          <Heading size="lg" color="black">
            {" "}
            {/* Updated color to black */}
            LookToBuy
          </Heading>
        </Box>

        {/* Links */}
        <Spacer />
        <HStack spacing={6}>
          <Link to="/" style={{ color: "black", fontSize: "1.1rem" }}>
            {" "}
            {/* Updated color to black */}
            Home
          </Link>
          <Link to="/about" style={{ color: "black", fontSize: "1.1rem" }}>
            {" "}
            {/* Updated color to black */}
            About
          </Link>
          <Link to="/contact" style={{ color: "black", fontSize: "1.1rem" }}>
            {" "}
            {/* Updated color to black */}
            Contact
          </Link>
          <Link to="/product" style={{ color: "black", fontSize: "1.1rem" }}>
            {" "}
            {/* Updated color to black */}
            Product
          </Link>
        </HStack>

        {/* Cart Button with Icon and Badge */}
        <Spacer />
        <ButtonGroup gap="2">
          {flag ? (
            <>
              <Button>Hi , {user}</Button>
              <Button
                colorScheme="orange"
                variant="outline"
                borderColor="orange.300"
                onClick={() => {
                  setIsLogged({ flag: false, user: "" });
                  HandleNavigate("/");
                }}
              >
                Log out
              </Button>
            </>
          ) : (
            <>
              <Button
                colorScheme="orange"
                variant="outline"
                borderColor="orange.300"
              >
                <Link to="/Signup" style={{ color: "black" }}>
                  {" "}
                  {/* Updated color to black */}
                  Sign Up
                </Link>
              </Button>
              <Button
                style={{
                  backgroundColor: "#ff9800", // Matching color for buttons
                  color: "white",
                }}
              >
                <Link to="/login">Login</Link>
              </Button>
            </>
          )}
          {flag ? (
            <>
              <Box position="relative">
                <Button
                  style={{
                    backgroundColor: "#ff9800", // Matching color for the cart button
                    borderRadius: "100%",
                    height: "40px",
                    width: "45px",
                  }}
                >
                  <Link to="/cart">
                    <FiShoppingCart size="20px" color="white" />{" "}
                    {/* Cart icon */}
                  </Link>
                </Button>
                {totalItems > 0 && (
                  <Badge
                    position="absolute"
                    top="-5px"
                    right="-5px"
                    backgroundColor="red"
                    color="white"
                    borderRadius="full"
                    px={2}
                    py={1}
                    fontSize="0.8rem"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Box>
            </>
          ) : (
            <Box position="relative">
              <Button
                style={{
                  backgroundColor: "#ff9800", // Matching color for the cart button
                  borderRadius: "100%",
                  height: "40px",
                  width: "45px",
                }}
              >
                <Link to="/login">
                  <FiShoppingCart size="20px" color="white" /> {/* Cart icon */}
                </Link>
              </Button>
              {totalItems > 0 && (
                <Badge
                  position="absolute"
                  top="-5px"
                  right="-5px"
                  backgroundColor="red"
                  color="white"
                  borderRadius="full"
                  px={2}
                  py={1}
                  fontSize="0.8rem"
                >
                  {totalItems}
                </Badge>
              )}
            </Box>
          )}
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default Navbar;
