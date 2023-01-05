import { Box, Th, Thead, Tr } from "@chakra-ui/react";
import { flexRender, Table } from "@tanstack/react-table";

const TableHeaders = ({ table }: any) => {
  return (
    <Thead>
      {table.getHeaderGroups().map((headerGroup: any) => (
        <Tr key={headerGroup.id}>
          {headerGroup.headers.map((header: any, key: any) => (
            <Th key={key} className="py-4 px-2 font-medium text-left">
              <Box>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </Box>
            </Th>
          ))}
        </Tr>
      ))}
    </Thead>
  );
};
export { TableHeaders };
