import CardCustom from "@/components/common/CardCustom";
import { PaginationCustom } from "@/components/common/PaginationCustom";
import FormSearch from "@/components/pages/account-balance/FormSearch";
import { fakeUsers } from "@/components/pages/account-balance/list-data-fake";
import ListAccount from "@/components/pages/account-balance/ListAccount";

const AccountBalance = () => {
  return (
    <div className="flex flex-col gap-4">
      <CardCustom title="Lọc">
        <FormSearch />
      </CardCustom>
      <CardCustom title="Danh sách người dùng chơi tiền mặt">
        <ListAccount listAccount={fakeUsers} limit={10} isLoading={false} />
        <div className="flex justify-center">
          <PaginationCustom
            page={1}
            totalCount={fakeUsers.length}
            pageSize={15}
            onPageSizeChange={(newPageSize) => {
              //   setPageSize(newPageSize);
              //   setPageNumber(0);
            }}
            onPageChange={(page) => {
              // setPageNumber(page - 1)
            }}
            rowsPerPageOptions={[15, 30, 50]}
          />
        </div>
      </CardCustom>
    </div>
  );
};

export default AccountBalance;
