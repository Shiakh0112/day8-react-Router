import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

function SignUp() {
  let URL =
    "https://food-order-2e6a8-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";
  let username = useRef(null);
  let userEmail = useRef(null);
  let password = useRef(null);
  let navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      username: username.current.value,
      email: userEmail.current.value,
      password: password.current.value,
    };
    axios.post(URL, obj).then((res) => {
      alert("User account created successfully");
      navigate("/login");
    });
  };
  return (
    <Container
      maxW="sm"
      py={12}
      mt={10}
      style={{ position: "relative", top: "100px" }}
    >
      <Box textAlign="center" mb={6}>
        <Heading as="h1" size="xl" mb={2}>
          Sign Up
        </Heading>
        <Text fontSize="md" color="gray.600">
          Welcome back! Please enter your details.
        </Text>
      </Box>

      <Box p={6} boxShadow="lg" borderRadius="md" bg="white">
        <Stack spacing={4}>
          {/* Email Input */}
          <form onSubmit={HandleSubmit}>
            <FormControl isRequired>
              <FormLabel>User Name</FormLabel>
              <Input
                ref={username}
                type="text"
                placeholder="Enter your username"
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                ref={userEmail}
                type="email"
                placeholder="Enter your email"
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>

            {/* Password Input */}
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                ref={password}
                type="password"
                placeholder="Enter your password"
                focusBorderColor="teal.500"
                size="lg"
              />
            </FormControl>

            {/* Forgot Password Link */}
            <Box textAlign="right">
              <Link color="teal.500" fontSize="sm">
                Forgot password?
              </Link>
            </Box>

            {/* Sign Up Button */}
            <Button type="submit" colorScheme="teal" size="lg">
              Sign Up
            </Button>
          </form>
        </Stack>
      </Box>

      {/* Sign Up Prompt */}
      <Box textAlign="center" mt={4}>
        <Text fontSize="md">
          You have already account
          <Link to="/login" style={{ color: "#319795", margin: "10px" }}>
            Login
          </Link>
        </Text>
      </Box>
    </Container>
  );
}

export default SignUp;
