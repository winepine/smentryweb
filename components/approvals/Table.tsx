import { Container, Table } from "@chakra-ui/react";
import {
  getCoreRowModel,
  Table as tableType,
  useReactTable,
} from "@tanstack/react-table";
import { TableHeaders } from "./TableHeaders";
import { TablesValues } from "./TableValues";

const ApprovalsTable = ({ data, columns }: any) => {
  const table = useReactTable({
    data,
    columns,
    state: {},
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Container minW="100%">
      <Table>
        <TableHeaders table={table} />
        <TablesValues table={table} />
      </Table>
    </Container>
  );
};
export default ApprovalsTable;
