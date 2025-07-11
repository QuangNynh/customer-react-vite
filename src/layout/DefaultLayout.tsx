import { AppSidebar } from "@/components/app-sidebar";
import ButtonNumber from "@/components/common/ButtonNumber";
import { MenuUser } from "@/components/menu-user-nav";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Mail } from "lucide-react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-10 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 bg-[#223663]">
          <div className="flex items-center justify-between px-4 w-full">
            <SidebarTrigger className="-ml-1 text-white" />
            <div className="flex items-center gap-2">
              <ButtonNumber content="Nạp tiền" count={0} />
              <ButtonNumber content="Rút tiền" count={0} />
              <ButtonNumber content="Ưu đãi" count={0} />
              <ButtonNumber content="Giới thiệu" count={0} />
              <ButtonNumber content="Đại lý tiền mặt" count={0} />
              <Button
                className="h-fit p-1 bg-[#2a437c] text-white"
                size="sm"
                variant="secondary"
              >
                <Mail />
              </Button>

              <MenuUser />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
