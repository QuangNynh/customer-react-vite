"use client";

import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormValues = {
  orderBy: string;
  sort: string;
  username: string;
  currency: string;
};

export default function FormSearch() {
  const { control, register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      orderBy: "",
      sort: "",
      username: "",
      currency: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("🔍 Form Search Data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-wrap items-center gap-3"
    >
      <span className="text-xs font-light text-muted-foreground">OrderBy</span>

      {/* Dropdown: Cược chưa thanh toán */}
      <Controller
        name="orderBy"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-48 text-xs">
              <SelectValue placeholder="Cược chưa thanh toán" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="unpaid">Cược chưa thanh toán</SelectItem>
              <SelectItem value="paid">Cược đã thanh toán</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Dropdown: Cao nhất / Thấp nhất */}
      <Controller
        name="sort"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-40 text-xs">
              <SelectValue placeholder="Cao nhất" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">Cao nhất</SelectItem>
              <SelectItem value="low">Thấp nhất</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Input: Tên người dùng */}
      <span className="text-xs font-light text-muted-foreground">
        Tên người dùng
      </span>
      <Input
        {...register("username")}
        placeholder="Tên người dùng"
        className="h-9 w-48 text-[12px]"
      />

      {/* Dropdown: Tiền tệ */}
      <span className="text-xs font-light text-muted-foreground">Tiền tệ</span>
      <Controller
        name="currency"
        control={control}
        render={({ field }) => (
          <Select onValueChange={field.onChange} value={field.value}>
            <SelectTrigger className="h-8 w-40 text-xs">
              <SelectValue placeholder="Tất cả các" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tất cả các</SelectItem>
              <SelectItem value="vnd">VND</SelectItem>
              <SelectItem value="usd">USD</SelectItem>
            </SelectContent>
          </Select>
        )}
      />

      {/* Nút Tìm kiếm */}
      <Button
        type="submit"
        className="h-8 bg-[#2196f3] text-white hover:bg-[#1976d2]"
      >
        Tìm kiếm
      </Button>
    </form>
  );
}
