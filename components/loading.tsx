// "use client";

// const Loading = () => {
//   return (
//     <div className="">
//       <CutoutTextLoader height="650px" background="" imgUrl="/twitch-gif.gif" />
//     </div>
//   );
// };

// const CutoutTextLoader = ({
//   height,
//   background,
//   imgUrl,
// }: {
//   height: string;
//   background: string;
//   imgUrl: string;
// }) => {
//   return (
//     <div className="relative" style={{ height }}>
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       />
//       <div
//         style={{ background }}
//         className="absolute inset-0 animate-pulse z-10"
//       />
//       <span
//         className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none text-violet-600 pt-40"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           fontSize: "clamp(3rem, 12vw, 10rem)",
//           lineHeight: height,
//         }}
//       >
//         Loading...
//       </span>
//     </div>
//   );
// };

// export default Loading;

import { Loader } from "lucide-react";

interface LoadingVideoProps {
  label: string;
}

export const LoadingVideo = ({ label }: LoadingVideoProps) => {
  return (
    <div className="h-full flex flex-col space-y-4 justify-center items-center">
      <Loader className="h-10 w-10 text-muted-foreground animate-spin" />
      <p className="text-muted-foreground capitalize">{label}</p>
    </div>
  );
};
