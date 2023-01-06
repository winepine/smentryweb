import { Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
// import ActionsForApprovals from "./Actions";

export const InvitesColumns: ColumnDef<any>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: props => <>{props.renderValue()}</>,
  },
  {
    header: "House No.",
    accessorKey: "house_no",
    accessorFn: d => d.house_no.house + " - " + d.house_no.block,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "NumnerPlate",
    accessorKey: "numberplate",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  
  {
    header: "Actions",
    accessorKey: "",

    cell: (props: any) => (
      <>
        {/* <ActionsForApprovals approval={props.row.original} /> */}
      </>
    ),
  },
];
