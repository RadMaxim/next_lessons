import {prisma} from "@/shared/lib/db";

async function main() {
    await prisma.game.deleteMany();

    await prisma.game.create({
        data: { name: "John Doe 1" },
    });

    await prisma.game.create({
        data: { name: "John Doe 2" },
    });
    await prisma.game.create({
        data: { name: "John Doe 3" },
    });
}

main()
    .then(async () => {
        console.log("🌱 Seed completed");
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error("❌ Seed error:", e);
        await prisma.$disconnect();
        process.exit(1);
    });
