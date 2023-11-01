import { PersonalData } from "@/personalData";
import Image from "next/image";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/awesome/applicant`)
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Home() {
  const resp = await getData();
  const myData: PersonalData = resp.personalData
  // if(myData){
  //   return (
  //       <main className="flex min-h-screen flex-col items-center justify-between p-24">
  //         <h1>{myData.personalData.name}</h1>
  //       </main>
  //   )
  // }
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-14 lg:p-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <Image 
            src="https://www.johngorriceta.com/john_profile.webp"
            height={400} width={400}
            className="rounded-[250px] hover:rounded-3xl duration-300"
            alt="John's Profile Pic"
          />
          <div className="flex flex-col">
            <a href={myData.siteURL}><h2 className="text-[50px] font-bold hover:text-blue-600 duration-300">{myData.name}</h2></a>
            <h2 className="text-2xl font-bold">Age: {myData.age}</h2>
            <h2 className="text-2xl font-bold">isGraduated: {myData.isGraduated ? (<span className="text-red-400">True</span>):(<span className="text-red-400">False</span>)}</h2>
          </div>
        </div>
        <div className="mt-24 lg:w-3/4">
          <h2 className="text-3xl font-bold mb-3">README.md</h2>
          <p>
            {myData.bio}
          </p>
        </div>
      </main>
  )
}
