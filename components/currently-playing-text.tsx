export const CurrentlyPlayingText: React.FC<{ title: string, description: string }> = ({ title, description }) => {
  return (
    <div className="basis-full h-full">
      <h1 className="text-white font-bold">{title}</h1>
      <p className="text-zinc-150">{description}</p>
    </div >
  );
}
