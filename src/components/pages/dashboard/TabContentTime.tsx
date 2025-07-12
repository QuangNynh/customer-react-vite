export default function TabsContentTime() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
      {/* 1. Đăng ký */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">Đăng kí</div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-xs font-medium">
            Đăng ký mới
          </span>
        </div>
        <div className="text-xl font-bold">
          1{" "}
          <span className="text-muted-foreground text-xs font-medium">
            Tổng số tài khoản
          </span>
        </div>
      </div>

      {/* 2. Nạp tiền */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">Nạp tiền</div>
        <div className="text-xl font-bold">
          0.00{" "}
          <span className="text-muted-foreground text-xs font-medium">INR</span>
        </div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-xs font-medium">
            Các thành viên
          </span>
        </div>
      </div>

      {/* 3. Rút tiền */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">Rút tiền</div>
        <div className="text-xl font-bold">
          0.00{" "}
          <span className="text-muted-foreground text-xs font-medium">INR</span>
        </div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-xs font-medium">
            Các thành viên
          </span>
        </div>
      </div>

      {/* 4. Tiền gửi trừ tiền rút */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">
          Tiền gửi trừ tiền rút
        </div>
        <div className="text-xl font-bold text-green-600">
          0.00{" "}
          <span className="text-muted-foreground text-xs font-medium">INR</span>
        </div>
      </div>

      {/* 5. Khuyến mãi đã được yêu cầu */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">
          Khuyến mãi đã được yêu cầu
        </div>
        <div className="text-xl font-bold">
          0.00{" "}
          <span className="text-muted-foreground text-xs font-medium">INR</span>
        </div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-xs font-medium">
            Các thành viên
          </span>
        </div>
      </div>

      {/* 6. Yêu cầu giới thiệu */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">
          Yêu cầu giới thiệu
        </div>
        <div className="text-xl font-bold">
          0.00{" "}
          <span className="text-muted-foreground text-sm font-medium">INR</span>
        </div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-sm font-medium">
            Các thành viên
          </span>
        </div>
      </div>

      {/* 7. Cá cược */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">Cá cược</div>
        <div className="text-xl font-bold">
          0{" "}
          <span className="text-muted-foreground text-sm font-medium">
            Số cược
          </span>
        </div>
        <div className="text-xl font-bold">
          0.00{" "}
          <span className="text-muted-foreground text-sm font-medium">
            Doanh thu ròng
          </span>
        </div>
      </div>

      {/* 8. Công ty thắng thua */}
      <div>
        <div className="text-[#e6a23b] font-base text-xs mb-1">
          Công ty thắng thua
        </div>
        <div className="text-xl font-bold text-green-600">
          0.00{" "}
          <span className="text-muted-foreground text-sm font-medium">INR</span>
        </div>
        <div className="text-xl font-bold text-green-600">
          0%{" "}
          <span className="text-muted-foreground text-sm font-medium">Lề</span>
        </div>
      </div>
    </div>
  );
}
