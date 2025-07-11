import { EmptyData } from "@/components/common/EmptyData";
import SkeletonTable from "@/components/common/SkeletonTable";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DataCard } from "@/types/card";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { DialogCreateCard, type FormDataCard } from "./DialogCreateCard";
interface Props {
  listCard: DataCard[];
  isLoading: boolean;
  limit: number;
}
const ListCard = ({ listCard, isLoading, limit }: Props) => {
  const [open, setOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState<FormDataCard | null>(null);
  return (
    <>
      <ScrollArea className="w-full">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead>Tên thẻ</TableHead>
              <TableHead className="w-1/3 text-center">Mô tả thẻ</TableHead>
              <TableHead>Số người chơi</TableHead>
              <TableHead>Sự ưu tiên </TableHead>
              <TableHead>Trạng thái</TableHead>
              <TableHead>Sửa đổi</TableHead>
              <TableHead className="text-center">Động thái</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonTable rows={limit} columns={9} />
            ) : listCard.length > 0 ? (
              listCard.map((item, index) => (
                <TableRow key={index} className="h-7">
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.numberPlay}</TableCell>
                  <TableCell>{item.priority}</TableCell>
                  <TableCell className="text-center">{item.status}</TableCell>
                  <TableCell className=" text-center ">
                    {item.createdAt}
                  </TableCell>
                  <TableCell className="text-center" align="center">
                    <div className="flex items-center justify-center gap-2">
                      <SquarePen
                        className="text-blue-500 cursor-pointer"
                        size={14}
                        onClick={() => {
                          setDataDetail(item);
                          setOpen(true);
                        }}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={9} className="text-center">
                  <EmptyData title="Không có tài khoản nhân viên nào" />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <DialogCreateCard
        onClose={() => setOpen(false)}
        open={open}
        data={dataDetail}
      />
    </>
  );
};

export default ListCard;
