import { useState } from 'react';
import type { SimpleIcon } from 'simple-icons';

import { DraggableChip } from './DraggableChip';

interface DragContainerProps {
  array: SimpleIcon[];
  updateArray: (s: SimpleIcon[]) => void;
  // getTagProps: (index: number) => Record<string, any>;
}

export const DragContainer = ({ array, updateArray }: DragContainerProps) => {
  const [draggedIndex, setDraggedIndex] = useState<number>(-1);

  const reorderArray = (fromIndex: number, toIndex: number) => {
    const reorderedArray = [...array];
    const [removed] = reorderedArray.splice(fromIndex, 1);
    reorderedArray.splice(toIndex, 0, removed);
    updateArray(reorderedArray);
  };

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (index: number) => {
    if (draggedIndex === -1) return;
    if (index === draggedIndex) return;
    reorderArray(draggedIndex, index);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(-1);
  };

  const deleteItem = (index: number) => {
    const deleted = array.filter((el, idx) => idx !== index);
    updateArray([...deleted]);
  };

  return (
    <>
      {array.map((stack, index) => (
        <DraggableChip
          key={stack.path}
          stack={stack}
          index={index}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
          deleteItem={() => deleteItem(index)}
        />
      ))}
    </>
  );
};

// interface DragContainerProps {
//   array: SimpleIcon[];
//   updateArray: (s: SimpleIcon[]) => void;
// }

// export const DragContainer = ({ array, updateArray }: DragContainerProps) => {
//   const [selected, setSelected] = useState<SimpleIcon>();

//   const reorderArray = (index: number) => {
//     const filteredArray = array.filter((el) => el !== selected);

//     const prev = filteredArray.slice(0, index);
//     const next = filteredArray.slice(index, filteredArray.length);

//     if (prev && next && selected) {
//       updateArray([...prev, selected, ...next]);
//     }
//   };

//   const deleteItem = (index: number) => {
//     const deleted = array.filter((el, idx) => idx !== index);
//     updateArray([...deleted]);
//   };

//   const mouseUp = (index: number) => {
//     reorderArray(index);
//   };

//   const mouseDown = (index: number) => {
//     setSelected(array[index]);
//   };

//   return (
//     <>
//       {array.map((stack, index) => (
//         <DraggableChip
//           key={stack.path}
//           stack={stack}
//           mouseUp={() => mouseUp(index)}
//           mouseDown={() => mouseDown(index)}
//           deleteItem={() => deleteItem(index)}
//         />
//       ))}
//     </>
//   );
// };
