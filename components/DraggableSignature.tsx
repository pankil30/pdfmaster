// "use client";

// import Draggable from "react-draggable";

// interface Props {
//   signature: string;
//   position: {
//     x: number;
//     y: number;
//   };
//   size: {
//     width: number;
//     height: number;
//   };
//   setPosition: (p: { x: number; y: number }) => void;
//   setSize: (s: { width: number; height: number }) => void;
// }

// export default function DraggableSignature({
//   signature,
//   position,
//   size,
//   setPosition,
//   setSize,
// }: Props) {
//   if (!signature) return null;

//   return (
//     <Draggable
//       position={position}
//       onStop={(e, data) =>
//         setPosition({
//           x: data.x,
//           y: data.y,
//         })
//       }
//     >
//       <div className="absolute cursor-move border-2 border-blue-500 bg-white p-1">
//         <img
//           src={signature}
//           alt="signature"
//           style={{
//             width: size.width,
//             height: size.height,
//           }}
//           draggable={false}
//         />

//         <div className="mt-2 flex gap-2">
//           <button
//             className="rounded bg-gray-200 px-2"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSize({
//                 width: size.width + 20,
//                 height: size.height + 10,
//               });
//             }}
//           >
//             +
//           </button>

//           <button
//             className="rounded bg-gray-200 px-2"
//             onClick={(e) => {
//               e.stopPropagation();
//               setSize({
//                 width: Math.max(60, size.width - 20),
//                 height: Math.max(30, size.height - 10),
//               });
//             }}
//           >
//             -
//           </button>
//         </div>
//       </div>
//     </Draggable>
//   );
// }




"use client";

import { useRef } from "react";
import Draggable from "react-draggable";

interface Props {
  signature: string;
  position: {
    x: number;
    y: number;
  };
  size: {
    width: number;
    height: number;
  };
  setPosition: (p: { x: number; y: number }) => void;
  setSize: (s: { width: number; height: number }) => void;
}

export default function DraggableSignature({
  signature,
  position,
  size,
  setPosition,
  setSize,
}: Props) {
  const nodeRef = useRef<HTMLDivElement>(null);

  if (!signature) return null;

  return (
    <Draggable
      nodeRef={nodeRef}
      position={position}
      onStop={(_, data) =>
        setPosition({
          x: data.x,
          y: data.y,
        })
      }
    >
      <div
        ref={nodeRef}
        className="absolute cursor-move border-2 border-blue-500 bg-white p-1"
      >
        <img
          src={signature}
          alt="signature"
          draggable={false}
          style={{
            width: size.width,
            height: size.height,
          }}
        />

        <div className="mt-2 flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSize({
                width: size.width + 20,
                height: size.height + 10,
              });
            }}
            className="rounded bg-gray-200 px-2"
          >
            +
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSize({
                width: Math.max(60, size.width - 20),
                height: Math.max(30, size.height - 10),
              });
            }}
            className="rounded bg-gray-200 px-2"
          >
            -
          </button>
        </div>
      </div>
    </Draggable>
  );
}