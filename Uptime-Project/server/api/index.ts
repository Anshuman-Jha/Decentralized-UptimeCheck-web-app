import express from "express";
import { authMiddleware } from "./middleware";
import { prismaClient } from "db/prisma/src";
import cors from "cors";
const app = express();

//If we do req.body/app.post()=> Catch Content=> app.use()
app.use(express.json());
app.use(cors()); // Used for resource sharing from backend to frontend 

app.post("/api/v1/website", authMiddleware, async (req, res) => {
    const userId = req.userId!.toString();
    const { url } = req.body;

    const data = await prismaClient.website.create({
        data: {
            userId,
            url,
            ticks: 0

        }
    })

    res.json({
        id: data.id
    })
})
// Status EndPoint user send website id in Request
//Also Make Sure no other User can get other Website Tick Data
// Authenticcate/Check via there Userid only then give Websitetick data
app.get("/api/v1/website/status", authMiddleware, async (req, res) => {

    const websiteId = req.query.websiteId! as unknown as string;
    const userId: string = req.userId.toString();
    const data = await prismaClient.website.findFirst({
        where: {
            id: websiteId,
            userId, // userid should be this should be owner
            disabled: false
        },
        include: {
            WebsiteTicks: true // corresponding to it WebsiteTicks key  DataTable Exists 
        }
    })
    res.json(data);
})

app.get("/api/v1/websites", authMiddleware, async (req, res) => {

    const userid: string = req.userId.toString();
    //Find All the Website corresponding to username 
    //Returning those which are not Delted/Disabled
    const website = await prismaClient.website.findMany({
        where: {
            userId: userid,
            disabled: false
        },
        include: {
            WebsiteTicks: true
        }
    })
    res.json(website);
})

//Route/End Point for Catching Query then Delete Operation 
app.delete("/api/v1/website/", authMiddleware, async (req, res) => {

    //User sending website Id to be Deleted 
    const websiteId = req.body.websiteId;
    const userId = req.userId! as unknown as string;

    const data = await prismaClient.website.update({
        where: {
            id: websiteId,
            userId
        },
        data: {
            disabled: true // update this key to true means Deleted 
        }
    })

    res.json({
        msg: "Succesfully Deleted !!!!!"
    });
})




const port = 3002;
app.listen(port);

console.log(`Server is Running on ${port}`);