"use client";

import { motion } from "framer-motion";

const PlayPath = () => {
  return (
    <motion.svg
      fill="black"
      fillRule="evenodd"
      viewBox="-20 0 512 512"
      width={22}
      height={22}
      className="z-1"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.1 }}
    >
      <motion.path
        fill="bg-zinc-950"
        d="m 99.772484,81.798721 -8e-6,348.402559 a 13.710086,13.710086 28.740516 0 0 21.080334,11.56053 L 391.14719,269.43947 a 15.938395,15.938395 90 0 0 0,-26.87894 L 120.85282,70.238191 a 13.710086,13.710086 151.25949 0 0 -21.080336,11.56053 z"
      />

    </motion.svg >
  );
};

const PausePath = () => {
  return (
    <motion.svg
      viewBox="0 0 512 512"
      width={20}
      height={20}
      className="z-2"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.1 }}
    >
      <motion.rect
        fill="bg-zinc-950"
        width="120"
        height="400"
        x="304.77734"
        y="56"
        rx="25"
        ry="25" />
      <motion.rect
        fill="bg-zinc-950"
        width="120"
        height="400"
        x="87.222672"
        y="56"
        rx="25"
        ry="25" />
    </motion.svg>
  );
};

export const PlayPauseButton: React.FC<{ isPlaying: boolean, onClick: React.MouseEventHandler<HTMLDivElement> }> = ({ isPlaying, onClick }) => {
  return (
    <div className="bg-white h-10 min-w-10 w-10 rounded-full items-center justify-center flex" onClick={onClick}>
      <motion.div initial={false}>
        {isPlaying ? <PausePath key="1" /> : <PlayPath key="2" />}
      </motion.div>
    </div >
  );
}

//      <AnimatePresence>
//        {isPlaying ? <PausePath key="1" /> : <PlayPath key="2" />}
//      </AnimatePresence>
