export interface MenuItem {
  name: string;
  url?: string;
}
export interface MenuGroup {
  name: string;
  url?: string;
  items?: MenuItem[];
}

export const menu: MenuGroup[] = [
  {
    name: "Bảng điều khiển",
    url: "/dashboard",
  },
  {
    name: "Tài khoản phụ",
    url: "/sub-account",
  },
  {
    name: "Thành viên",
    items: [
      {
        name: "Danh sách tài khoản",
        url: "/member/account-list",
      },
      {
        name: "Số dư tài khoản",
        url: "/member/account-balance",
      },
      {
        name: "Cài đặt thẻ",
        url: "/member/card-settings",
      },
    ],
  },
];
