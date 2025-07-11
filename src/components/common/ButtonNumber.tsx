import { Button } from "../ui/button";

interface ButtonNumberProps {
  content: string;
  className?: string;
  disabled?: boolean;
  count: number;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ButtonNumber = ({ content, props, count }: ButtonNumberProps) => {
  return (
    <Button
      className="h-fit px-2 py-1 bg-[#2a437c] text-white"
      size="sm"
      variant="secondary"
      {...props}
    >
      <span className="text-xs">{content}</span>
      <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#909399] text-xs text-primary-foreground">
        {count}
      </span>
    </Button>
  );
};

export default ButtonNumber;
