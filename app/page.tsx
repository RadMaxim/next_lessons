
import ThemeToggle from "@/app/Button_component";
import {prisma} from "@/shared/lib/db";
import {Card, CardTitle} from "@/shared/ui/card";

export default async function Home() {
const games = await prisma.game.findMany();
    console.log(games)
  return (
    <div className={`flex min-h-screen items-center justify-center h-screen `}>
      <ThemeToggle/>
        {games.map((game) => <Card key={game.id} title={game.name}>
            <CardTitle>{game.name}</CardTitle>
        </Card>)}
    </div>
  );
}
