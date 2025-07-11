import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Info } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";

interface Props {
  open?: boolean;
  onClose?: () => void;
  data?: FormDataCard | null;
}
export interface FormDataCard {
  name: string;
  color: string;
  status: string;
  description: string;
}
export const DialogCreateCard = ({ open, onClose, data }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      color: "#8242c3",
      status: "active",
      description: "",
    },
  });
  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        color: data.color,
        status: data.status,
        description: data.description,
      });
    }
  }, [data]);
  const onSubmit = (data: FormDataCard) => {
    console.log(data);
  };
  const handleClose = () => {
    reset();
    onClose?.();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-lg top-10 translate-y-0">
        <div className="bg-[#cfd8e6] px-4 pb-2">
          <div className="w-fit rounded-b-md bg-[#2a437c] px-4 py-1 text-xs font-base text-white">
            {data ? "Chỉnh sửa thẻ" : "Tạo thẻ"}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 px-6 py-4">
          {/* Tên thẻ */}
          <div className="flex justify-between items-center gap-3">
            <Label
              htmlFor="name"
              className="after:ml-1 after:text-red-500 after:content-['*']"
            >
              Tên thẻ
            </Label>
            <div className="w-3/4 flex flex-col gap-1">
              <Input
                id="name"
                {...register("name", { required: true })}
                placeholder="Nhập tên thẻ..."
                className={cn(errors.name && "border-red-500")}
              />
              {errors.name && <p className="text-xs text-red-500">Bắt buộc</p>}
            </div>
          </div>

          {/* Màu thẻ + Chip */}
          <div className="flex items-center justify-between gap-3">
            <Label className="flex items-center gap-1 after:ml-1 after:text-red-500 after:content-['*']">
              Màu thẻ <Info className="h-4 w-4 text-muted-foreground" />
            </Label>
            <div className="">
              <input
                type="color"
                className="h-8 w-8 cursor-pointer rounded border"
                {...register("color")}
              />
            </div>
            <span className="ml-2 text-sm text-muted-foreground">
              Đánh giá đánh giá tài khoản:
              <span
                className={`ml-2 rounded px-2 py-0.5 text-xs text-white`}
                style={{
                  backgroundColor: watch("color"),
                  color: watch("color") === "#ffffff" ? "#000" : "#fff",
                }}
              >
                Username
              </span>
            </span>
          </div>

          {/* Trạng thái */}
          <div className="flex items-center justify-between gap-3">
            <Label className="after:ml-1 after:text-red-500 after:content-['*']">
              Trạng thái
            </Label>
            <Controller
              control={control}
              name="status"
              rules={{ required: true }}
              render={({ field }) => (
                <RadioGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  className="flex items-center gap-6"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="active" id="active" />
                    <Label
                      htmlFor="active"
                      className="text-blue-600 font-medium"
                    >
                      Cho phép
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="inactive" id="inactive" />
                    <Label htmlFor="inactive">Vô hiệu hóa</Label>
                  </div>
                </RadioGroup>
              )}
            />
          </div>

          {/* Mô tả thẻ */}
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="description">Mô tả thẻ</Label>
            <Textarea
              id="description"
              {...register("description")}
              className="min-h-[80px] w-3/4 text-xs"
              placeholder="Mô tả thẻ..."
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <Button variant="outline" type="button" onClick={handleClose}>
              Hủy
            </Button>
            <Button type="submit">Gửi</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
