import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

interface DataLogin {
  userName: string;
  password: string;
  twoFA: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      userName: "",
      password: "",
      twoFA: "",
    },
  });

  const onSubmit = (data: DataLogin) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Đăng nhập</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Nhập tài khoản mật khẩu để đăng nhập
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="text">Tên đăng nhập</Label>
          <Input
            {...register("userName")}
            type="text"
            placeholder="Nhập tên đăng nhập"
            required
          />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input
            {...register("password")}
            type="password"
            placeholder="Nhập mật khẩu"
            required
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="text">Xác thực 2FA</Label>
          <Input
            {...register("twoFA")}
            type="text"
            placeholder="Nhập tên mã xác thực"
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Nếu bạn chưa có tài khoản?{" "}
        <a href="#" className="underline underline-offset-4">
          Đăng ký
        </a>
      </div>
    </form>
  );
}
