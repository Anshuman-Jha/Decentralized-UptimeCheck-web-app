
import { PrismaClient, WebsiteStatus } from "@prisma/client";

const prismaClient = new PrismaClient();
const USER_ID = crypto.randomUUID();
const timestamp = Date.now();

async function seed() {
    await prismaClient.user.create({
        data: {
            id: USER_ID,
            email: `test${timestamp}@test.com`,
        }
    })

    const website = await prismaClient.website.create({
        data: {
            url: "https://test.com",
            userId: USER_ID,
            ticks: 0,
        }
    })

    const validator = await prismaClient.validators.create({
        data: {
            id: crypto.randomUUID(),
            publicKey: "0x12341223123",
            location: "Delhi",
            ipAddress: "127.0.0.1",
        }
    })

    await prismaClient.websiteTicks.create({
        data: {
            id: crypto.randomUUID(),
            websiteId: website.id,
            validatorId: validator.id,
            createdAt: new Date(),
            status: WebsiteStatus.GOOD,
            latency: 100,
        }
    })

    await prismaClient.websiteTicks.create({
        data: {
            id: crypto.randomUUID(),
            websiteId: website.id,
            validatorId: validator.id,
            createdAt: new Date(Date.now() - 1000 * 60 * 10),
            status: WebsiteStatus.BAD,
            latency: 100,
        }
    })

    await prismaClient.websiteTicks.create({
        data: {
            id: crypto.randomUUID(),
            websiteId: website.id,
            validatorId: validator.id,
            createdAt: new Date(Date.now() - 1000 * 60 * 20),
            status: WebsiteStatus.GOOD,
            latency: 100,
        }
    })

    console.log("Seed completed successfully!");
}

seed()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prismaClient.$disconnect();
        process.exit(1);
    });