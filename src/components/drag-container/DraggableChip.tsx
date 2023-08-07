import { Chip } from '@mui/material';
import type { SimpleIcon } from 'simple-icons';

interface DraggableChipProps {
  stack: SimpleIcon;
  index: number;
  onDragStart: (index: number) => void;
  onDragOver: (index: number) => void;
  onDragEnd: () => void;
  deleteItem: () => void;
}

export const DraggableChip = ({
  stack,
  index,
  onDragStart,
  onDragOver,
  onDragEnd,
  deleteItem,
}: DraggableChipProps) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', String(index));
    onDragStart(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    onDragOver(index);
  };

  const handleDragEnd = () => {
    onDragEnd();
  };

  const handleDeleteItem = () => {
    deleteItem();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <Chip
        label={stack.title}
        onDelete={handleDeleteItem}
        sx={{
          bgcolor: '#e6f0ff',
          border: '1px solid #99c2ff',
          margin: '0 3px',
          cursor: 'grab',
        }}
      />
    </div>
  );
};

// interface DraggableChipProps {
//   stack: SimpleIcon;
//   mouseUp: () => void;
//   mouseDown: () => void;
//   deleteItem: () => void;
// }

// export const DraggableChip = ({ stack, mouseUp, mouseDown, deleteItem }: DraggableChipProps) => {
//   return (
//     <div onMouseDown={mouseDown} onMouseUp={mouseUp}>
//       <Chip
//         label={stack.title}
//         onDelete={deleteItem}
//         sx={{
//           bgcolor: '#e6f0ff',
//           border: '1px solid #99c2ff',
//           margin: '0 3px',
//         }}
//       />
//     </div>
//   );
// };
