import IconExcel from "@/assets/IconExcel";
import CardCustom from "@/components/common/CardCustom";
import { PaginationCustom } from "@/components/common/PaginationCustom";
import { fakeUsers } from "@/components/pages/account-balance/list-data-fake";
import FormSearchAccount from "@/components/pages/account-list/FormSearchListAccount";
import { ListAccount } from "@/components/pages/account-list/ListAccount";
import { DialogCreateCard } from "@/components/pages/card-settings/DialogCreateCard";
import { DialogTagPriority } from "@/components/pages/card-settings/DialogShortCard";
import { Button } from "@/components/ui/button";
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
        <FormSearchAccount />

        <ListAccount />
        {/* <ListCard listCard={fakeCard} limit={10} isLoading={false} /> */}
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
