import { Card } from "@/components/card";
import { Menu } from "@/components/menu";

export default function Scan() {
  return (
    <>
      <div className="flex flex-col p-4 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">Tree View:</h1>
          <Card className="p-4 h-80">
          </Card>
        </div>
        <Card className="p-4 h-80">
        </Card>
      </div>
    </>
  );
}
