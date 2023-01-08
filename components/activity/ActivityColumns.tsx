import { Td } from "@chakra-ui/react";
import { ColumnDef } from "@tanstack/react-table";

export const ActivityColumns: ColumnDef<any>[] = [
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
    header: "CNIC",
    accessorKey: "cnic",
    accessorFn:(d)=>{if(d.cnic=='') {return '-'}else return d.cnic},
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Numberplate",
    accessorKey: "numberplate",accessorFn:(d)=>{if(d.numberplate=='') {return '-'}else return d.numberplate},
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Type",
    accessorKey: "type",
    cell: (props: any) => <>{props.renderValue()}</>,
  },
  {
    header: "Additional Info",
    accessorKey: "additional",
    cell: (props: any) => <>{props.renderValue()}</>,
  },
];
