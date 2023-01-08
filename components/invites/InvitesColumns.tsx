import { Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
import InvitesActions from "./InvitesActions";
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
    header: "NumberPlate",
    accessorKey: "numberplate",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Status",
    accessorKey: "status",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  // {
  //   header: "Additional",
  //   accessorKey: "additional",
  //   accessorFn:d=>d.additional.substring(0, 25),
  //   // accessorFn: d => d.billing.first_name,
  //   cell: (props: any) => <>{props.renderValue()}</>,
  // },
  
  {
    header: "Actions",
    accessorKey: "",

    cell: (props: any) => (
      <>
      <InvitesActions invite={props.row.original} />
        {/* <ActionsForApprovals approval={props.row.original} /> */}
      </>
    ),
  },
];
