// components/Dashboard.tsx
import CircularProgressChart from "@/components/pages/dashboard/CircularProgressChart";
import OnlineUsersChart from "@/components/pages/dashboard/OnlineUsersChart";
import ReportTable from "@/components/pages/dashboard/ReportTable";
import TabsContentTime from "@/components/pages/dashboard/TabContentTime";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";
import { useState } from "react";

const currencies = ["INR", "LAK", "MYR", "PHP", "THB", "USD", "VND"];
const tabsTime = [
  {
    value: "day",
    lable: "Hôm nay",
  },
  {
    value: "week",
    lable: "Tuần này",
  },
  {
    value: "month",
    lable: "Tháng này",
  },
];
const tabs24h = [
  {
    value: "userLive",
    lable: "Số người dùng trực tuyến",
  },
  {
    value: "monneySent",
    lable: "Gửi tiền và rút tiền số lượng",
  },
  {
    value: "loginMoneny",
    lable: "Đăng kí và đếm tiền gửi lần đầu",
  },
];

export default function Dashboard() {
  const [valueTab, setValueTab] = useState<string>("day");
  const [valueTab24h, setValueTab24h] = useState<string>("userLive");
  return (
    <div className="p-4 space-y-4">
      {/* Các thẻ thống kê */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center col-span-2">
          <CardContent className=" flex items-center justify-around">
            <CircularProgressChart percent={58.37} />
            <div>
              <div className="text-xs font-light text-[#2b437c]">
                hiện tại thắng thua (EUR)
              </div>
              <div className="text-lg text-muted-foreground">5,993.12</div>
            </div>
            <div>
              <div className="text-xs font-light text-[#2b437c]">
                giới hạn mũ (EUR)
              </div>
              <div className="text-lg text-muted-foreground">10,255.30</div>
            </div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="flex items-center flex-col justify-center h-full">
            <div className="text-xs font-light text-[#2b437c]">
              giới hạn mũ (EUR)
            </div>
            <div className="text-lg text-muted-foreground">10,255.30</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="flex items-center flex-col justify-center h-full">
            <div className="text-xs font-light text-[#2b437c]">
              giới hạn mũ (EUR)
            </div>
            <div className="text-lg text-muted-foreground">10,255.30</div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs chọn loại tiền */}

      <Tabs defaultValue="INR" className="w-full">
        <Card className="p-0 rounded-xs">
          <TabsList className="bg-transparent shadow-none border-none p-0 ">
            {currencies.map((cur) => (
              <TabsTrigger
                key={cur}
                value={cur}
                className="data-[state=active]:bg-[#409EFF] data-[state=active]:text-white text-gray-600 hover:text-[#409EFF] rounded-xs h-full data-[state=active]:border-[#409EFF] "
              >
                {cur}
              </TabsTrigger>
            ))}
          </TabsList>
        </Card>
        <Card className="px-2 py-1 rounded-xs">
          <div className="text-xs flex items-center gap-2">
            <Info size={12} />
            Dấu thời gian trong bảng điều khiển này dựa trên GMT+7. Vui lòng cân
            nhắc sự khác biệt về múi giờ.
          </div>
        </Card>

        {/* Nội dung tab: ví dụ INR */}

        {currencies.map((item, index) => (
          <TabsContent value={item} key={index}>
            <Card className="rounded-xs">
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-[#e6a23b]">
                      Tổng số dư trên ví chính:
                    </div>
                    <p className="text-lg">
                      0.00{" "}
                      <span className="text-xs font-medium text-[#909399]">
                        {item}
                      </span>{" "}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs text-[#e6a23b]">Ví khuyến mãi:</div>{" "}
                    <p className="text-lg">
                      0.00{" "}
                      <span className="text-xs font-medium text-[#909399]">
                        {item}
                      </span>{" "}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs text-[#e6a23b]">Ví giới thiệu:</div>{" "}
                    <p className="text-lg">
                      0.00{" "}
                      <span className="text-xs font-medium text-[#909399]">
                        {item}
                      </span>{" "}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs text-[#e6a23b]">Dư nợ:</div>{" "}
                    <p className="text-lg">
                      0.00{" "}
                      <span className="text-xs font-medium text-[#909399]">
                        {item}
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-xs">
              <CardContent className=" space-y-2">
                <Tabs
                  value={valueTab}
                  onValueChange={(value: string) => setValueTab(value)}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold text-xs">
                        Tổng quan hiệu suất
                      </h2>
                      <TabsList className="p-0">
                        {tabsTime.map((item, index) => (
                          <TabsTrigger
                            key={index}
                            value={item.value}
                            className="data-[state=active]:bg-[#409EFF] data-[state=active]:text-white text-gray-600 hover:text-[#409EFF] rounded-xs h-full data-[state=active]:border-[#409EFF] "
                          >
                            {item.lable}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                    {tabsTime.map((item, index) => (
                      <TabsContent value={item.value} key={index}>
                        <TabsContentTime />
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="rounded-xs">
              <CardContent className=" space-y-2">
                <Tabs
                  value={valueTab24h}
                  onValueChange={(value: string) => setValueTab24h(value)}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <h2 className="font-semibold text-xs">24 giờ qua</h2>
                      <TabsList className="p-0">
                        {tabs24h.map((item, index) => (
                          <TabsTrigger
                            key={index}
                            value={item.value}
                            className="data-[state=active]:bg-[#409EFF] data-[state=active]:text-white text-gray-600 hover:text-[#409EFF] rounded-xs h-full data-[state=active]:border-[#409EFF] "
                          >
                            {item.lable}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                    </div>
                    {tabs24h.map((item, index) => (
                      <TabsContent value={item.value} key={index}>
                        <OnlineUsersChart />
                      </TabsContent>
                    ))}
                  </div>
                </Tabs>
              </CardContent>
            </Card>
            <Card className="rounded-xs">
              <CardContent className=" space-y-2">
                <h2 className="font-semibold text-xs">
                  Số dư ngân hàng 7 ngày qua
                </h2>
                <ReportTable />
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
