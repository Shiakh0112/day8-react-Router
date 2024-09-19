import React from "react";
import { Box, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <Box
      bg="#ffd0c7b3"
      color="black"
      py={6}
      textAlign="center"
      style={{ marginTop: "150px" }}
    >
      <Stack spacing={4}>
        <Text>
          &copy; {new Date().getFullYear()} LookToBuy . All rights reserved.
        </Text>

        <Stack direction="row" spacing={4} justify="center">
          <Link href="https://www.facebook.com" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <Icon as={FaTwitter} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </Stack>

        <Text>
          <Link href="mailto:contact@yourcompany.com" color="#4000e3">
            contact@LookToBuy .com
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}

export default Footer;
