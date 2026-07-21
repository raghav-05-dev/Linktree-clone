import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("Linktree")
    const collection = db.collection("links")
    const item = await collection.findOne({ handle: handle })
    if (!item) {
        return notFound()
    }

    const item2 = {
        "_id": {
            "$oid": "6a5f2e8b8213f1272d36a5da"
        },
        "links": [
            {
                "link": "https://x.com/r4gh_4V",
                "linktext": "Twitter/X"
            }
        ],
        "handle": "raghav",
        "pic": "https://i.pinimg.com/736x/67/98/0b/67980b6404f2df96e91cae46b542d3b8.jpg"
    }

    return <div className="flex min-h-screen justify-center items-start py-20 bg-yellow-400">
        {item &&<div className="photo flex flex-col justify-center items-center">
            <img width={200} height={200} src={item.pic} alt="" className="" />
            <span className="font-bold text-xl">@{item.handle}</span>
            <div className="links">
                {item.links.map((item, index) => {
                    return <Link key={index} href={item.link}><div className="bg-yellow-100 text-lg py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                        {item.linktext}
                    </div></Link>
                })}
            </div>
        </div>}
    </div>
}