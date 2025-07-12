import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";

type FormValues = {
  loginTimeFrom: Date;
  loginTimeTo: Date;
  userType: string;
  accountType: string;
  filterBy: string;
  keyword: string;
  tags: string[]; // Assuming multiselect
  status: string;
  pause: string;
  currency: string;
  wantDeposit: string;
  orderBy: string;
  orderByDir: string;
};

export default function FormSearchAccount() {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      userType: "cash",
      loginTimeFrom: new Date(),
      loginTimeTo: new Date(),
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("🔍 search:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-center gap-3 text-xs font-light"
    >
      <div>
        <Controller
          name="filterBy"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="h-8 w-[130px] text-xs">
                <SelectValue placeholder="Tên người dùng" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="username">Thời gian đăng nhập</SelectItem>
                <SelectItem value="loginName">Tên đăng nhập</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>
      {/* Ngày thống kê */}
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">Ngày thống kê (GMT+7)</span>
        <Controller
          name="loginTimeFrom"
          control={control}
          render={({ field }) => (
            <DatePicker date={field.value} onChange={field.onChange} />
          )}
        />
        <span>To</span>
        <Controller
          name="loginTimeTo"
          control={control}
          render={({ field }) => (
            <DatePicker date={field.value} onChange={field.onChange} />
          )}
        />
      </div>

      {/* Loại người chơi */}
      <div className="flex items-center gap-2">
        <span>Loại người chơi</span>
        <Controller
          name="userType"
          control={control}
          render={({ field }) => (
            <RadioGroup
              className="flex items-center gap-3"
              defaultValue="cash"
              onValueChange={field.onChange}
              value={field.value}
            >
              <div className="flex items-center gap-1">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit">Tín dụng</Label>
              </div>
              <div className="flex items-center gap-1">
                <RadioGroupItem value="cash" id="cash" />
                <Label htmlFor="cash">Tiền mặt</Label>
              </div>
            </RadioGroup>
          )}
        />
      </div>

      {/* Loại tài khoản */}
      <Controller
        name="accountType"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-[140px] text-xs">
              <SelectValue placeholder="Toàn bộ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toàn bộ</SelectItem>
              <SelectItem value="vip">VIP</SelectItem>
              <SelectItem value="normal">Thường</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Lọc */}
      <Controller
        name="filterBy"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-[130px] text-xs">
              <SelectValue placeholder="Tên người dùng" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="username">Tên người dùng</SelectItem>
              <SelectItem value="loginName">Tên đăng nhập</SelectItem>
            </SelectContent>
          </Select>
        )}
      />
      <Input
        {...register("keyword")}
        placeholder="nhập từ khóa"
        className="h-8 w-40 text-xs"
      />

      {/* Nhãn (giả định sẽ làm SelectMulti sau nếu cần) */}
      <Controller
        name="tags"
        control={control}
        render={() => (
          <Select>
            <SelectTrigger className="h-8 w-[160px] text-xs">
              <SelectValue placeholder="Tất cả các" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="risk">Người chơi mạo hiểm</SelectItem>
              <SelectItem value="otp">SMS OTP</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Trạng thái */}
      <Controller
        name="status"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue placeholder="Toàn bộ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toàn bộ</SelectItem>
              <SelectItem value="active">Hoạt động</SelectItem>
              <SelectItem value="inactive">Vô hiệu hóa</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Tạm dừng */}
      <Controller
        name="pause"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue placeholder="Toàn bộ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toàn bộ</SelectItem>
              <SelectItem value="yes">Có</SelectItem>
              <SelectItem value="no">Không</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Tiền tệ */}
      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-32 text-xs">
              <SelectValue placeholder="Toàn bộ" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toàn bộ</SelectItem>
              <SelectItem value="vnd">VND</SelectItem>
              <SelectItem value="usd">USD</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Có muốn nạp tiền không */}
      <Controller
        name="wantDeposit"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-40 text-xs">
              <SelectValue placeholder="Có muốn nạp tiền không?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toàn bộ</SelectItem>
              <SelectItem value="yes">Có</SelectItem>
              <SelectItem value="no">Không</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* OrderBy */}
      <Controller
        name="orderBy"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-[140px] text-xs">
              <SelectValue placeholder="OrderBy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="username">Tên người dùng</SelectItem>
              <SelectItem value="cash">Số dư</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Order By Dir */}
      <Controller
        name="orderByDir"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-[80px] text-xs">
              <SelectValue placeholder="ASC" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="asc">ASC</SelectItem>
              <SelectItem value="desc">DESC</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Nút tìm kiếm */}
      <Button
        type="submit"
        className="h-8 bg-[#2196f3] text-white hover:bg-[#1976d2]"
      >
        Tìm kiếm
      </Button>
    </form>
  );
}

// -------------------------
// Component: Date Picker
function DatePicker({
  date,
  onChange,
}: {
  date?: Date;
  onChange: (date: Date) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "h-8 w-[170px] justify-start text-left text-xs font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "yyyy/MM/dd HH:mm:ss")
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) => d && onChange(d)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
