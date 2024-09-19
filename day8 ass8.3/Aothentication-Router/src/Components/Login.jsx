import React, { useRef, useContext } from "react";
import axios from "axios";
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
import { RouterContext } from "../Context/ContextStore";
function Login() {
  let URL =
    "https://food-order-2e6a8-default-rtdb.asia-southeast1.firebasedatabase.app/users.json";

  const { isLogged, setIsLogged } = useContext(RouterContext);
  let username = useRef(null);
  let password = useRef(null);
  let naviGate = useNavigate();
  const HandleLogin = (e) => {
    e.preventDefault();
    let obj = {
      username: username.current.value,
      password: password.current.value,
    };
    axios.get(URL).then((res) => {
      let data = res.data;
      data = Object.entries(data);

      let filterData = data.filter(([id, ele]) => {
        return ele.username === obj.username && ele.password === obj.password;
      });
      if (filterData.length == 0) {
        alert("wrong credentials");
      } else {
        setIsLogged({
          flag: true,
          user: filterData[0][1].username,
        });
        naviGate("/");
      }
    });
  };
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
          <form onSubmit={HandleLogin}>
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

            {/* Log In Button */}
            <Button type="submit" colorScheme="teal" size="lg">
              Log In
            </Button>
          </form>
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
