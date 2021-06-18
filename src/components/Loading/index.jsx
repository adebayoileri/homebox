import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Flex w="100%" h="40vh" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="#43B287" thickness="5px" />
      </Flex>
    </>
  );
}
