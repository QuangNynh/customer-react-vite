import IconExcel from "@/assets/IconExcel";
import CardCustom from "@/components/common/CardCustom";
import { PaginationCustom } from "@/components/common/PaginationCustom";
import { fakeUsers } from "@/components/pages/account-balance/list-data-fake";
import { fakeCard } from "@/components/pages/card-settings/data-card-fake";
import { DialogCreateCard } from "@/components/pages/card-settings/DialogCreateCard";
import { DialogTagPriority } from "@/components/pages/card-settings/DialogShortCard";
import ListCard from "@/components/pages/card-settings/ListCard";
import { Button } from "@/components/ui/button";
import { CircleAlert } from "lucide-react";
import { useState } from "react";

const AccountList = () => {
  const [openCreateCard, setOpenCreateCard] = useState(false);
  const [openSortCard, setOpenSortCard] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <CardCustom
        title="Danh sách tài khoản/ cms"
        headerRight={
          <div className="py-2 flex gap-2">
            <Button
              variant="outline"
              className="text-xs px-2 bg-blue-500 text-white"
              onClick={() => setOpenCreateCard(true)}
            >
              Chỉnh sửa hàng loạt
            </Button>
            <Button
              variant="outline"
              className="text-xs px-2"
              onClick={() => setOpenCreateCard(true)}
            >
              <IconExcel />
              Xuất file
            </Button>
          </div>
        }
      >
        <div className="flex items-center justify-between mb-4 w-full">
          <div>
            <div className="flex items-center gap-2 ">
              <CircleAlert className="text-[#3b82f680]" size={14} />
              <span className="text-xs">Ghi chú</span>
            </div>
            <div>
              <ul className="list-disc space-y-1 pl-5 text-sm text-[#596d86]">
                <li>
                  Nếu người chơi được gắn thẻ, tài khoản người chơi sẽ hiển thị
                  dấu màu tương ứng trong các báo cáo, hồ sơ, đánh giá ứng dụng,
                  v.v.
                </li>
                <li>
                  Nếu người chơi được đánh dấu bằng nhiều thẻ, tài khoản người
                  chơi sẽ hiển thị màu có cài đặt ưu tiên nhỏ nhất
                </li>
              </ul>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-xs px-2 py-1"
            onClick={() => setOpenSortCard(true)}
          >
            Ưu tiên thẻ
          </Button>
        </div>

        <ListCard listCard={fakeCard} limit={10} isLoading={false} />
        <div className="flex justify-center">
          <PaginationCustom
            page={1}
            totalCount={fakeUsers.length}
            pageSize={15}
            onPageSizeChange={() => {
              //   setPageSize(newPageSize);
              //   setPageNumber(0);
            }}
            onPageChange={() => {
              // setPageNumber(page - 1)
            }}
            rowsPerPageOptions={[15, 30, 50]}
          />
        </div>
      </CardCustom>
      <DialogCreateCard
        open={openCreateCard}
        onClose={() => setOpenCreateCard(false)}
      />
      <DialogTagPriority
        open={openSortCard}
        onClose={() => setOpenSortCard(false)}
      />
    </div>
  );
};

export default AccountList;
