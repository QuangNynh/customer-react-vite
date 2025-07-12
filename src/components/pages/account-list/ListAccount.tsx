import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataListAccount } from "./data-list";

export type Payment = {
  id: string;
  status: string;
  email: string;
  amount: number;
  accountType: string;
  username: string;
  parentAgent: string;
  loginName: string;
  introduction: string;
  totalPlayers: number;
  vip: boolean;
  cardName: string;
  state: string;
  paused: boolean;
  currency: string;
  wantsToDeposit: boolean;
  firstDepositTime: string;
  firstDepositAmount: number;
  lastName: string;
  firstName: string;
  fullName: string;
  userBankName: string;
  userBankAccount: string;
  bankOption: string;
  phone: string;
  emailRepeated: string;
  createdAt: string;
  lastLoginTime: string;
  registeredIp: string;
  lastLoginIp: string;
  nationality: string;
  domainRegister: string;
};

// eslint-disable-next-line react-refresh/only-export-components
export const columns: ColumnDef<Payment>[] = [
  { accessorKey: "accountType", header: "Loại tài khoản" },
  { accessorKey: "username", header: "Tên người dùng" },
  { accessorKey: "parentAgent", header: "Đại lý tuyển trên" },
  { accessorKey: "loginName", header: "Tên đăng nhập" },
  { accessorKey: "introduction", header: "Giới thiệu" },
  { accessorKey: "totalPlayers", header: "Tổng số người chơi" },
  {
    accessorKey: "vip",
    header: "VIP",
    cell: ({ row }) => (row.getValue("vip") ? "✓" : "✗"),
  },
  { accessorKey: "cardName", header: "Tên thẻ" },
  { accessorKey: "state", header: "Trạng thái" },
  {
    accessorKey: "paused",
    header: "Tạm dừng",
    cell: ({ row }) => (row.getValue("paused") ? "✓" : "✗"),
  },
  { accessorKey: "currency", header: "Tiền tệ" },
  {
    accessorKey: "wantsToDeposit",
    header: "Có muốn nạp tiền không?",
    cell: ({ row }) => (row.getValue("wantsToDeposit") ? "✓" : "✗"),
  },
  { accessorKey: "firstDepositTime", header: "Thời gian gửi tiền lần đầu" },
  { accessorKey: "firstDepositAmount", header: "Số Tiền Gửi Đầu Tiên" },
  { accessorKey: "lastName", header: "Họ" },
  { accessorKey: "firstName", header: "Tên" },
  { accessorKey: "fullName", header: "Họ và tên" },
  {
    accessorKey: "userBankName",
    header: "Tên tài khoản ngân hàng của người chơi",
  },
  {
    accessorKey: "userBankAccount",
    header: "Tài khoản ngân hàng của người chơi",
  },
  { accessorKey: "bankOption", header: "Tùy chọn ngân hàng" },
  { accessorKey: "phone", header: "Điện thoại" },
  { accessorKey: "emailRepeated", header: "Email" },
  { accessorKey: "createdAt", header: "Tạo thời gian" },
  { accessorKey: "lastLoginTime", header: "Thời gian đăng nhập lần cuối" },
  { accessorKey: "registeredIp", header: "Đăng ký Ip" },
  { accessorKey: "lastLoginIp", header: "IP đăng nhập lần cuối" },
  { accessorKey: "nationality", header: "Uyruk" },
  { accessorKey: "domainRegister", header: "Đăng ký miền" },
];

export function ListAccount() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: dataListAccount,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="max-w-[78vw]">
      <div className="flex items-center py-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Cột <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.columnDef.header as string}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className="whitespace-nowrap">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="whitespace-nowrap">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  Không có kết quả.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Trước
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Tiếp
          </Button>
        </div>
      </div>
    </div>
  );
}
