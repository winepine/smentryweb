import { Box, Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";

export const StaffColumns: ColumnDef<any>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: props => <Box>{props.row.original.name}</Box>,
  },
  {
    header: "CNIC",
    accessorKey: "cnic",
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "House Numbers",
    accessorKey: "house_no",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => (
      <>
        {props.row.original.house_no.map((h: any) => (
          <>
            {h.house} - {h.block},
          </>
        ))}
      </>
    ),
  },
  {
    header: "Contact Number",
    accessorKey: "contact_no",
    cell: (props: any) => <>{props.renderValue()}</>,
  },
];
