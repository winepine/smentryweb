import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<any>[] = [
  {
    header: "Name",
    accessorKey: "name",
    cell: props => (
      <td>
        <>{props.renderValue()}</>
      </td>
    ),
  },
  {
    header: "House No.",
    accessorKey: "house_no.house",
    cell: (props: any) => (
      <td>
        <>{props.renderValue()}</>
      </td>
    ),
  },
  {
    header: "Status",
    accessorKey: "status",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => (
      <td>
        <>{props.renderValue()}</>
      </td>
    ),
  },
  {
    header: "Actions",
    accessorKey: "status",
    // accessorFn: d => d.billing.first_name,
    cell: (props: any) => (
      <td>
        <>{props.renderValue()}</>
      </td>
    ),
  },
];
