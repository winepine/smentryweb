import { Button, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";

const RightHalf = () => {
  return (
    <Stack p={8} align="center" w="50%">
      <Text fontSize="2xl" fontWeight="semibold">
        Visitor Info Form
      </Text>
      <HStack py={6} minW="100%" align="start">
        <Stack minW="50%">
          <Input placeholder="Name" />
          <Input placeholder="CNIC" />
          <Input placeholder="Numberplate (Optional)" />
        </Stack>
        <Stack minW="50%">
          <HStack>
            <Input placeholder="Where" />
            <Select>
              <option value="">A</option>
              <option value="">B</option>
              <option value="">C</option>
            </Select>
          </HStack>
          <Input placeholder="Additional Information" />
        </Stack>
      </HStack>
      <Button colorScheme="green" fontWeight="normal" w="100%" mt={16}>
        Request Visitor Pass
      </Button>
    </Stack>
  );
};
export default RightHalf;
