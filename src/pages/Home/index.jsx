import React from "react";
import { HStack, Stack, Text, Box, Avatar, Flex } from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import DashboardLayout from "../../Layout/DashboardLayout";
import StatsCard from "../../components/StatsCard";
import { stats, customers } from "../../utils/data";
import { customerColumns } from "../../utils/datatable";

export default function Home() {
  return (
    <DashboardLayout>
      <Flex w="100%" justifyContent="space-between" alignItems="center">
        <Box>
          <Text fontWeight="semibold" fontSize="1.8rem">
            Dashboard
          </Text>
        </Box>
        <>
          <Avatar name="John Doe" bg="teal.400" size="lg" />
        </>
      </Flex>
      <HStack mt="4">
        <Box>
          <Text color="teal.400" fontWeight="semibold" fontSize="1.8rem">
            Welcome Back John
          </Text>
        </Box>
      </HStack>
      <Stack
        mt="4rem"
        w="100%"
        spacing="4rem"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", md: "row", xl: "row" }}
      >
        {stats &&
          stats.map((stat, idx) => (
            <StatsCard
              label={stat.label}
              numbers={stat.numbers}
              type={stat.type}
              percent={stat.percent}
            />
          ))}
      </Stack>
      <Box mt="4rem">
        <div>
          <DataTable
            title="All Customers"
            columns={customerColumns}
            data={customers}
            pagination
            paginationPerPage={15}
          />
        </div>
      </Box>
    </DashboardLayout>
  );
}
