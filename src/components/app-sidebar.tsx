import { CircleQuestionMark, GalleryVerticalEnd } from "lucide-react";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { menu } from "@/router/menu";
import { NavMain } from "./nav-main";
import { TooltipCustom } from "./common/TooltipCustom";
import { SidebarSelect } from "./sidebar-select";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">CMS</span>
                  <span className="">(công ty con)</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="mt-2 flex flex-col items-center gap-2">
          <div className="w-full text-xs px-3 flex items-center gap-2">
            Múi giờ
            <TooltipCustom
              side="right"
              content="Việc chọn múi giờ chỉ thay đổi thời gian hiển thị, chẳng hạn như thời gian đăng ký của người chơi, thời gian rút tiền, v.v. Múi giờ của hệ thống là GMT-4, do đó mọi điều kiện truy vấn và tính toán giới thiệu cũng như khuyến mãi vẫn giữ nguyên theo GMT-4 ."
            >
              <CircleQuestionMark size={14} />
            </TooltipCustom>
          </div>
          <SidebarSelect />
          <SidebarInput placeholder="Tìm kiếm tài khoản..." className="h-9" />
        </div>
        <NavMain items={menu} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
