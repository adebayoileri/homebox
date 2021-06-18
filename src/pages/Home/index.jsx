import React from "react";
import {
  HStack,
  Stack,
  Text,
  Box,
  Avatar,
  Flex,
  useToast,
} from "@chakra-ui/react";
import DataTable from "react-data-table-component";
import axios from "axios";
import DashboardLayout from "../../Layout/DashboardLayout";
import StatsCard from "../../components/StatsCard";
import Loading from "../../components/Loading";
import { stats } from "../../utils/data";
import { customerColumns } from "../../utils/datatable";

export default function Home() {
  const toast = useToast();
  const [isLoading, setIsLoading] = React.useState(true);
  const [customers, setCustomers] = React.useState([]);

  React.useEffect(() => {
    const getAllCustomers = async () => {
      setIsLoading(true);
      await axios
        .get(`https://my.api.mockaroo.com/customers.json?key=4216a200`)
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
            setCustomers(res.data);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          if (error.message && error.message.indexOf("Network Error") !== -1) {
            toast({
              description:
                "Network Error, Kindly check your internet connection and try again",
              status: "error",
            });
          }

          if (error.response && error.response.status === 500) {
            toast({
              description:
                "Unable to reach our servers at this time, Kindly try again.",
              status: "error",
            });
          }
        });
    };
    getAllCustomers();
  }, [toast]);

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
              key={idx}
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
            progressPending={isLoading}
            progressComponent={<Loading />}
            paginationPerPage={15}
          />
        </div>
      </Box>
    </DashboardLayout>
  );
}
