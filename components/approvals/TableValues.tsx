import { Tbody, Td, Tr } from "@chakra-ui/react";
import { flexRender } from "@tanstack/react-table";

export function TablesValues({ table }: any) {
  return (
    <Tbody>
      {table.getRowModel().rows.map((row: any, index: any) => {
        return (
          <Tr   key={index}>
            {row.getVisibleCells().map((cell: any, index: any) => (
              <Td key={index}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Td>
            ))}
          </Tr>
        );
      })}
    </Tbody>
  );
}
