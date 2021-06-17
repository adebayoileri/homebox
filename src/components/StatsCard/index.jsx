import React from "react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Box,
} from "@chakra-ui/react";

export default function StatsCard({ numbers, percent, label, type }) {
  return (
    <Box
      boxShadow="md"
      py="2rem"
      borderRadius="4px"
      cursor="pointer"
      px="3rem"
      w={{ base: "100%", xl: "22rem" }}
    >
      <Stat fontSize="2.4rem">
        <StatLabel fontSize="1.8rem" fontWeight="semibold">
          {label}
        </StatLabel>
        <StatNumber fontSize="1.6rem">{numbers}</StatNumber>
        <StatHelpText fontSize="1.6rem">
          <StatArrow type={type} />
          {percent}
        </StatHelpText>
      </Stat>
    </Box>
  );
}
