import React from "react";
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
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container maxW="sm" py={12} mt={10}>
      <Box textAlign="center" mb={6}>
        <Heading as="h1" size="xl" mb={2}>
          Log In
        </Heading>
        <Text fontSize="md" color="gray.600">
          Welcome back! Please enter your credentials to log in.
        </Text>
      </Box>

      <Box p={6} boxShadow="lg" borderRadius="md" bg="white">
        <Stack spacing={4}>
          {/* Email Input */}
          <FormControl isRequired>
            <FormLabel>User Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              focusBorderColor="teal.500"
              size="lg"
            />
          </FormControl>

          {/* Password Input */}
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
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

          {/* Log In Button */}
          <Button colorScheme="teal" size="lg">
            Log In
          </Button>
        </Stack>
      </Box>

      {/* Sign Up Prompt */}
      <Box textAlign="center" mt={4}>
        <Text fontSize="md">
          create account
          <Link
            color="teal.500"
            to="/signup"
            style={{ color: "#319795", margin: "10px" }}
          >
            Sign up
          </Link>
        </Text>
      </Box>
    </Container>
  );
}

export default Login;
