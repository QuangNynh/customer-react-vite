import { ChevronRight } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import React from "react";
import { useNavigate } from "react-router-dom";
import type { MenuGroup } from "@/router/menu";

export function NavMain({ items }: { items: MenuGroup[] }) {
  console.log("NavMain items:", items);
  const navigate = useNavigate();

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.items ? (
              <Collapsible
                asChild
                defaultOpen={item.items.some(
                  (subItem) => location.pathname === subItem.url
                )}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      tooltip={item.name}
                      className="py-6"
                      isActive={location.pathname === item.url}
                    >
                      {index + 1}
                      <span className="font-medium">{item.name}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items.map((subItem, ind) => (
                        <SidebarMenuSubItem key={ind}>
                          <SidebarMenuSubButton
                            asChild
                            className="py-5"
                            isActive={location.pathname === subItem.url}
                            onClick={() => navigate(subItem?.url || "/")}
                          >
                            <span>
                              {`${index + 1}.${ind + 1}`} {subItem.name}
                            </span>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuItem key={index} className="py-0">
                <SidebarMenuButton
                  asChild
                  onClick={() => navigate(item?.url || "/")}
                  className={
                    location.pathname === item.url
                      ? "bg-highlight text-highlight-foreground"
                      : ""
                  }
                  isActive={location.pathname === item.url}
                >
                  <div className="flex items-center cursor-pointer py-6 font-medium  ">
                    {index + 1}
                    <span>{item.name}</span>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )}
          </React.Fragment>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
