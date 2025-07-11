import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SidebarSelect() {
  return (
    <div className="w-full px-3">
      <Select>
        <SelectTrigger className="bg-background w-full shadow-none">
          <SelectValue placeholder="Chọn múi giờ" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Múi giờ</SelectLabel>
            <SelectItem value="GMT-8">GMT-8</SelectItem>
            <SelectItem value="GMT-7">GMT-7</SelectItem>
            <SelectItem value="GMT-6">GMT-6</SelectItem>
            <SelectItem value="GMT-5">GMT-5</SelectItem>
            <SelectItem value="GMT-4">GMT-4 (System Time)</SelectItem>
            <SelectItem value="GMT-3">GMT-3</SelectItem>
            <SelectItem value="GMT+1">GMT+1</SelectItem>
            <SelectItem value="GMT+2">GMT+2</SelectItem>
            <SelectItem value="GMT+3">GMT+3</SelectItem>
            <SelectItem value="GMT+5">GMT+5</SelectItem>
            <SelectItem value="GMT+5.5">GMT+5.5</SelectItem>
            <SelectItem value="GMT+6.5">GMT+6.5</SelectItem>
            <SelectItem value="GMT+7">GMT+7</SelectItem>
            <SelectItem value="GMT+8">GMT+8</SelectItem>
            <SelectItem value="GMT+9">GMT+9</SelectItem>
            <SelectItem value="GMT+10">GMT+10</SelectItem>
            <SelectItem value="GMT+11">GMT+11</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
