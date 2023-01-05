import { Container, Table } from "@chakra-ui/react";
import {
  getCoreRowModel,
  getPaginationRowModel,
  Table as tableType,
  useReactTable,
} from "@tanstack/react-table";
import PaginationButtons from "./PaginationButtons";
import { TableHeaders } from "./TableHeaders";
import { TablesValues } from "./TableValues";

const OurTable = ({
  data,
  columns,
  paginationState,
  onPaginationChange,
  pageCount,
}: any) => {
  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: paginationState,
    },
    getCoreRowModel: getCoreRowModel(),
    onPaginationChange,
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <Container minW="100%">
      <Table mt={8}>
        <TableHeaders table={table} />
        <TablesValues table={table} />
      </Table>
      <PaginationButtons table={table} />
    </Container>
  );
};
export default OurTable;
