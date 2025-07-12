import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dates = Array.from({ length: 7 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() - (6 - i)); // Lùi về 6 ngày trước rồi tiến dần đến hôm nay
  return date.toISOString().split("T")[0]; // Định dạng yyyy-mm-dd
});

const rows = ["Chuyển khoản ngân hàng", "Mạng thanh toán", "Thủ côngHoạt động"];

export default function ReportTable() {
  return (
    <div className="rounded-md border overflow-x-auto">
      <Table>
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="whitespace-nowrap">Loại</TableHead>
            {dates.map((date) => (
              <TableHead key={date} className="text-center whitespace-nowrap">
                {date}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((label, idx) => (
            <TableRow key={idx}>
              <TableCell className="font-medium text-muted-foreground whitespace-nowrap">
                {label}
              </TableCell>
              {dates.map((_, i) => (
                <TableCell key={i} className="text-center">
                  0.00
                </TableCell>
              ))}
            </TableRow>
          ))}
          {/* Tổng cộng row */}
          <TableRow>
            <TableCell className="font-bold text-black whitespace-nowrap">
              INR Tổng cộng
            </TableCell>
            {dates.map((_, i) => (
              <TableCell
                key={i}
                className="text-center font-bold text-muted-foreground"
              >
                0.00
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
