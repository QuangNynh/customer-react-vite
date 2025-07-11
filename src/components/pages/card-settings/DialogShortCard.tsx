import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Move } from "lucide-react";
import { useState } from "react";

// Fake data
const initialTags = [
  { id: "1", name: "Người chơi chênh lệch giá" },
  { id: "2", name: "Người chơi mạo hiểm" },
  { id: "3", name: "SMS OTP" },
  { id: "4", name: "Mail OTP" },
  { id: "5", name: "Bank Info" },
];

// Sortable item
function SortableTagItem({ id, name }: { id: string; name: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-center rounded bg-muted px-2 py-1 text-xs font-light cursor-move whitespace-nowrap overflow-hidden text-ellipsis"
    >
      <span className="mr-1  text-green-600">
        <Move className="h-4 w-4" />
      </span>
      <span className="text-green-600">{name}</span>
    </div>
  );
}

interface DialogTagPriorityProps {
  open: boolean;
  onClose: () => void;
}

export function DialogTagPriority({ open, onClose }: DialogTagPriorityProps) {
  const [tags, setTags] = useState(initialTags);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = tags.findIndex((item) => item.id === active.id);
      const newIndex = tags.findIndex((item) => item.id === over?.id);
      setTags((items) => arrayMove(items, oldIndex, newIndex));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="min-w-3xl max-w-4xl p-0 overflow-hidden rounded-lg top-10 translate-y-0">
        {/* Header */}
        <div className="bg-[#cfd8e6] px-4 pb-2">
          <div className="w-fit rounded-b-md bg-[#2a437c] px-4 py-1 text-xs font-base text-white">
            Ưu tiên thẻ
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-4 pb-2 space-y-4 w-full">
          <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
            <li>Kéo và thả để sắp xếp lại việc sắp xếp thẻ</li>
            <li>
              Thẻ được bật được hiển thị trong văn bản màu xanh lá cây; Thẻ bị
              vô hiệu hóa được hiển thị trong văn bản màu đỏ.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2 bg-[#606266] px-3 py-2 rounded w-full">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={tags.map((t) => t.id)}
                strategy={verticalListSortingStrategy}
              >
                {tags.map((tag) => (
                  <SortableTagItem key={tag.id} id={tag.id} name={tag.name} />
                ))}
              </SortableContext>
            </DndContext>
          </div>

          <div className="flex justify-end pt-1">
            <Button className="bg-[#90c5ff] text-white hover:bg-[#63b5ff]">
              Lưu
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
