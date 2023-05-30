import { Tbody, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { flexRender } from "@tanstack/react-table";
import { useState } from "react";
import StaffModal from "./StaffModal";

export function StaffValues({ table }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedStaff, setSelectedStaff] = useState(null);
  return (
    <Tbody>
      {console.log(table.getRowModel().rows)}
      {table.getRowModel().rows.map((row: any, index: any) => {
        return (
          <Tr
            key={index}
            _hover={{ bg: "gray.100" }}
            onClick={() => {
              // <<<<<<< HEAD
              console.log({ row });
              setSelectedStaff(row.original);
              // =======
              // setSelectedStaff(row.getVisibleCells());
              // >>>>>>> 3d3e3bf82e4810765eb21d2b84eb6782b50b96ff
              onOpen();
            }}
          >
            {console.log(row.getVisibleCells()[0].getValue())}
            {selectedStaff && (
              <StaffModal
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                data={selectedStaff}
              />
            )}
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
