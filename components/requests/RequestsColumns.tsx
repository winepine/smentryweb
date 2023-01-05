import { Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
import DeliveryActions from "./DeliveryActions";
//import ActionsForApprovals from "./Actions";

export const RequestsColumns: ColumnDef<any>[] = [
  {
    header: "Store Name",
    accessorKey: "store_name",
    cell: props => <>{props.renderValue()}</>,
  },
  {
    header: "House No.",
    accessorKey: "house_no",
    accessorFn: d => d.house_no.house + " - " + d.house_no.block,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Status",
    accessorKey: "status",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Actions",
    accessorKey: "",

    cell: (props: any) => (
      <>
        <DeliveryActions request={props.row.original} />
      </>
    ),
  },
];
