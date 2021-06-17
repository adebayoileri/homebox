import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormControl,
  Image,
  FormLabel,
  Button,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HiEyeOff, HiEye } from "react-icons/hi";
import Logo from "../../logo.png";

export default function Login() {
  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        bg={"#FFFFFF"}
        w={{ base: "95%", xl: "45%" }}
        h="500px"
        borderWidth="1px"
        borderColor="#43B287"
        boxShadow="md"
        borderRadius="md"
      >
        <Stack spacing={4} width="70%">
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box w="250px">
              <Image width="100%" src={Logo} alt="homebox logo" />
            </Box>
          </Box>
          <FormControl id="email">
            <FormLabel textColor="#000">Email Address</FormLabel>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type="email"
                colorScheme="white"
                focusBorderColor="#43B287"
                placeholder="Enter Email Address"
              />
            </InputGroup>
          </FormControl>
          <FormControl id="password">
            <FormLabel textColor="#000">Password</FormLabel>
            <InputGroup size="md">
              <Input
                colorScheme="white"
                pr="4.5rem"
                type={show ? "text" : "password"}
                focusBorderColor="#43B287"
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <IconButton
                  h="1.75rem"
                  size="sm"
                  aria-label="show_password"
                  icon={!show ? <HiEyeOff /> : <HiEye />}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            my="4"
          >
            <Checkbox colorScheme="teal"> Remember me</Checkbox>
            <Text color="#000">Forgot Password</Text>
          </Box>
          <Button
            as={Link}
            to="/dashboard"
            textColor="white"
            borderRadius="xl"
            p="3"
            height="67px"
            _hover={{ bg: "#43B287" }}
            bg={"#43B287"}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}
