import { Box, Button, HStack, Text } from "@chakra-ui/react";

const PaginationButtons = ({ table }: any) => {
  return (
    <Box>
      <Button
        onClick={() => {
          table.setPageIndex(0);
        }}
        disabled={!table.getCanPreviousPage()}
      >
        {"<<"}
      </Button>
      <Button
        onClick={() => {
          table.previousPage();
        }}
        disabled={!table.getCanPreviousPage()}
      >
        {"<"}
      </Button>
      <Button
        onClick={() => {
          table.nextPage();
        }}
        disabled={!table.getCanNextPage()}
      >
        {">"}
      </Button>
      <Button
        onClick={() => {
          table.setPageIndex(table.getPageCount() - 1);
        }}
        disabled={!table.getCanNextPage()}
      >
        {">>"}
      </Button>
      <HStack>
        <Text>Page </Text>
        <Text>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}{" "}
          |
        </Text>
        <Box>
          Go to page:
          {/* <Input
          inputOption={{
              type: "number",
              value: table.getState().pagination.pageIndex + 1,
              onChange: e => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  table.setPageIndex(page);
                },
                style:
                "bg-white border-gray-300 text-gray-900 text-xs rounded-md focus:ring-gray-300 focus:border-gray-300 block w-[60px] p-2 outline-none transition duration-200",
            }}
            widthProp=" "
        /> */}
        </Box>
      </HStack>
    </Box>
  );
};
export default PaginationButtons;
