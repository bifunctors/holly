import { Card } from "@/components/card";
import { Player } from "@/components/player";

export default function Home() {
  const suggestions: string[] = ["Suggestion 1", "Suggestion 2", "Suggestion 3", "Suggestion 4", "Suggestion 5", "Suggestion 6"];
  return (
    <>
      <Player />

      <div className="flex flex-col p-4 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Suggestions:</h1>
          <div className="grid grid-cols-2 grid-rows-3 gap-2">
            {suggestions.map(suggestion => {
              return (
                <Card className="p-4">
                  <p>{suggestion}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Tree View:</h1>
          <Card className="p-4 h-80">
          </Card>
        </div>
        <Card className="p-4 h-80">
        </Card>
        <div className="h-16" />
      </div>
    </>
  );
}
