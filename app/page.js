"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
  const [text, setText] = useState("")


  const createTree = () => {

    router.push(`/generate?handle=${text}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Everything you </p>
          <p className="text-yellow-300 font-bold text-7xl">are. In one,</p>
          <p className="text-yellow-300 font-bold text-7xl">simple link in bio.</p>
          <p className="text-yellow-300 text-xl my-4">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2">
            <input value={text} onChange={(e) => setText(e.target.value)} className="px-2 py-2 bg-white focus:outline-green-800 rounded-md" type="text" placeholder="Enter your Handle" />
            <button onClick={() => createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold">Claim your Linktree</button>
          </div>
        </div>
        <div className="flex items-center justify-center flex-col mr-[10vw]">
          <img src="/home.png" alt="homepage image" />
        </div>
      </section>


      <section className="bg-blue-500 min-h-screen grid grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-blue-500">
          <video
            width={1400}
            height={1300}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/_marketing/images/campaigns/capture-1764669836574.webp"
            className="block size-full h-auto w-full object-cover"
          >
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.mp4"
              type='video/mp4; codecs="hvc1"'
            />
            <source
              src="https://assets.production.linktr.ee/static/curate/customise_your_linktree.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justify-center flex-col ml-[10vw] gap-3">
          <p className="text-yellow-300 font-bold text-7xl">Create and </p>
          <p className="text-yellow-300 font-bold text-7xl">customize your</p>
          <p className="text-yellow-300 font-bold text-7xl">Linktree in minutes</p>
          <p className="text-yellow-300 text-xl my-4">Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
          <div className="input flex gap-2">
            <button onClick={() => createTree()} className="bg-pink-300 rounded-full px-4 py-4 font-semibold cursor-pointer">Get started for free</button>
          </div>
        </div>
      </section>
    </main>
  );
}