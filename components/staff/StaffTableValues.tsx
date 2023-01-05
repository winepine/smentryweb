import { Tbody, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { flexRender } from "@tanstack/react-table";
import StaffModal from "./StaffModal";

export function StaffValues({ table }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Tbody>
      {table.getRowModel().rows.map((row: any, index: any) => {
        return (
          <Tr key={index} _hover={{ bg: "gray.100" }} onClick={onOpen}>
            <StaffModal
              isOpen={isOpen}
              onOpen={onOpen}
              onClose={onClose}
              data={row.getVisibleCells()}
            />
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
