import React from "react";
import { Skeleton } from "@/components/ui/skeleton"; // Điều chỉnh theo thư viện của bạn
import { TableCell } from "../ui/table";
import { TableRow } from "../ui/table";

interface SkeletonTableProps {
  rows: number; // Số lượng hàng
  columns: number; // Số lượng cột (không tính cột hành động)
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ rows, columns }) => {
  // Tạo mảng để lặp qua số hàng và số cột
  const rowArray = Array.from({ length: rows }, (_, index) => index);
  const columnArray = Array.from({ length: columns }, (_, index) => index);

  return (
    <>
      {rowArray.map((row) => (
        <TableRow key={row}>
          {/* Các cột thông thường */}
          {columnArray.map((col) => (
            <TableCell key={col} className="text-center h-[20px]">
              <div className="w-full flex items-center justify-center">
                <Skeleton className="w-full h-[20px] rounded-md" />
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default SkeletonTable;
