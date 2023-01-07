import { Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";
import DeliveryActions from "../requests/DeliveryActions";
import HousesActions from "./HousesActions";
//import ActionsForApprovals from "./Actions";

export const HousesColumns: ColumnDef<any>[] = [
  {
    header: "House No",
    accessorKey: "house_no",
    cell: props => <>{props.renderValue()}</>,
  },
  {
    header: "Block",
    accessorKey: "block",
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Owner Name",
    accessorKey: "owner_name",
   
    cell: (props: any) => <>{props.renderValue()}</>,
  }
  ,
  {
    header: "Owner Contact",
    accessorKey: "owner_contact",
  
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Status",
    accessorKey: "status",
  
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Actions",
    accessorKey: "",

    cell: (props: any) => (
      <>
        <HousesActions house={props.row.original} />
      </>
    ),
  },
];
