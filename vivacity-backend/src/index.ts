import express, {Express, Request, Response} from "express";

type IPersonalData = {
    name: string,
    age: number,
    bio: string,
    siteURL: string
    isGraduated: boolean,
}

const app: Express = express()

app.use(express.json())

app.get("/", (req:Request, res:Response)=>{
    res.status(200).json({"status":"api running"})
})

app.get("/awesome/applicant", async (req:Request, res:Response)=>{

    const myInfo: IPersonalData = {
        name: "John Gorriceta",
        age: 22,
        bio: "As a passionate full-stack developer, I specialize in creating dynamic web applications using cutting-edge technologies like Next.js, React, and TypeScript. My backend expertise encompasses languages like C# and Python, bolstered by a strong foundation in Cloud Computing. Beyond my technical prowess, I'm a fervent advocate for the open-source community. Reflecting this commitment, I've transitioned my entire development toolkit to open-source products, underscoring my belief in collaborative innovation and the power of shared knowledge. I continuously strive to leverage and contribute to the open-source realm, pushing boundaries to deliver exceptional digital experiences.",
        siteURL: "https://www.johngorriceta.com",
        isGraduated: false,
    }

    return res.status(200).json({ personalData: myInfo });
})

app.listen(3000, () => {
    console.log(`Server is running on port ${3000}.`);
});