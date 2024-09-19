import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  Textarea,
  Button,
  Container,
} from "@chakra-ui/react";
import Footer from "./Footer";

function Contact() {
  return (
    <Container maxW="container.md" py={10} style={{ marginTop: "100px" }}>
      <Box textAlign="center" mb={10}>
        <Heading as="h1" size="2xl" mb={4}>
          Contact Us
        </Heading>
        <Text fontSize="lg" color="gray.600">
          We'd love to hear from you! Fill out the form below and we’ll get back
          to you as soon as possible.
        </Text>
      </Box>

      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="flex-start"
        gap={8}
      >
        {/* Contact Form */}
        <Box flex="1">
          <Stack spacing={4}>
            <Input
              placeholder="Your Name"
              size="lg"
              focusBorderColor="teal.500"
              isRequired
            />
            <Input
              placeholder="Your Email"
              type="email"
              size="lg"
              focusBorderColor="teal.500"
              isRequired
            />
            <Textarea
              placeholder="Your Message"
              size="lg"
              rows={5}
              focusBorderColor="teal.500"
              isRequired
            />
            <Button colorScheme="teal" size="lg" type="submit">
              Send Message
            </Button>
          </Stack>
        </Box>

        {/* Contact Information */}
        <Box flex="1" bg="gray.50" p={6} borderRadius="md" shadow="md">
          <Heading as="h3" size="lg" mb={4}>
            Get In Touch
          </Heading>
          <Stack spacing={3}>
            <Text>
              <strong>Address:</strong> 1234 Faizpur, India
            </Text>
            <Text>
              <strong>Email:</strong> contact@LookToBuy .com
            </Text>
            <Text>
              <strong>Phone:</strong> +123 456 7890
            </Text>
            <Text>
              <strong>Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
            </Text>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
}

export default Contact;
