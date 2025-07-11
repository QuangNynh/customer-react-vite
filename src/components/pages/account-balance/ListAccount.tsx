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
import type { Account } from "@/types/account-balance";
interface Props {
  listAccount: Account[];
  isLoading: boolean;
  limit: number;
}
const ListAccount = ({ listAccount, isLoading, limit }: Props) => {
  return (
    <>
      <ScrollArea className="w-full">
        <Table>
          <TableHeader className="bg-gray-100">
            <TableRow>
              <TableHead className="w-[50px] text-center">STT</TableHead>
              <TableHead>Tên người dùng</TableHead>
              <TableHead>Tên đăng nhập</TableHead>
              <TableHead>Họ</TableHead>
              <TableHead>Tên</TableHead>
              <TableHead>Tiền tệ</TableHead>
              <TableHead>Số dư tiền mặt</TableHead>
              <TableHead>Cược chưa thanh toán</TableHead>
              <TableHead>Khuyến mãi số dư ví điện tử</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <SkeletonTable rows={limit} columns={9} />
            ) : listAccount.length > 0 ? (
              listAccount.map((item, index) => (
                <TableRow key={index} className="h-7">
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{item.username}</TableCell>
                  <TableCell>{item.loginName}</TableCell>
                  <TableCell>{item.firstName}</TableCell>
                  <TableCell>{item.lastName}</TableCell>
                  <TableCell className="text-center">{item.currency}</TableCell>
                  <TableCell className=" text-center ">
                    {item.cashBalance}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.unpaidBet}
                  </TableCell>
                  <TableCell className="text-center">
                    {item.eWalletPromotion}
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
    </>
  );
};

export default ListAccount;
