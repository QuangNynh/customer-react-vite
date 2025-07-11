import type React from "react";
import { Card, CardContent } from "../ui/card";

interface CardCustomProps {
  children: React.ReactNode;
  title?: string;
  headerRight?: React.ReactNode;
}

const CardCustom = ({ children, title, headerRight }: CardCustomProps) => {
  return (
    <Card className="overflow-hidden rounded-lg border p-0">
      {/* Header "Lọc" */}
      <div className={`bg-[#cfd8e6] px-4 ${headerRight ? "" : "pb-2"}`}>
        <div className="flex justify-between h-full">
          <div className="w-fit h-fit rounded-b-md bg-[#2a437c] px-3 py-1 text-xs font-light text-white">
            {title}
          </div>
          {headerRight && (
            <div className="flex items-center h-full">{headerRight}</div>
          )}
        </div>
      </div>

      {/* Content */}
      <CardContent className="flex flex-wrap items-center gap-3 px-4 pb-4">
        {children}
      </CardContent>
    </Card>
  );
};

export default CardCustom;
