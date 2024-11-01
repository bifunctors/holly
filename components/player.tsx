"use client";

import { useEffect, useState } from "react";

import { PlayPauseButton } from "@/components/play-pause-button";
import { SongProgress } from "@/components/song-progress";
import { CurrentlyPlayingText } from "@/components/currently-playing-text";

export const Player = () => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTitle, setSongTitle] = useState("Epic title");
  const [songDescription, setSongDescription] = useState("This is an epic description");

  const update = () => setProgress((prevProgress) => { return prevProgress > 100 ? 0 : prevProgress + 0.1 });

  useEffect(() => {

    const timer = setInterval(() => {
      update();
    }, 100);

    return () => clearInterval(timer);
  }, [])


  return (
    <div className="flex fixed bottom-0 left-0 bg-zinc-950 right-0 h-20 p-4 gap-4 items-center">
      <PlayPauseButton isPlaying={isPlaying} onClick={() => setIsPlaying((prev) => {
        console.log(prev);

        return !prev;
      })} />
      <CurrentlyPlayingText title={songTitle} description={songDescription} />

      <SongProgress progress={progress} />
    </div >
  );
}
