import React from "react";

export default function AuthorLink() {
  return (
    <div className="p-3 rounded-xl border flex items-center gap-3 fixed bottom-4 right-4 bg-zinc-900 text-zinc-500 border-zinc-700">
      <img
        src="https://pbs.twimg.com/profile_images/1683103084149637120/VK7NewuP_x96.jpg"
        className="w-8 h-8 rounded-full"
        alt=""
      />
      <a href="http://twitter.com/zksytmkn" target="_blank" className="text-sm">
        nakamoto
        <span className="absolute inset-0"></span>
      </a>
    </div>
  );
}
