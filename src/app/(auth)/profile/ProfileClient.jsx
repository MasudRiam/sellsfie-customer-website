"use client";

import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import EditProfileModal from "./EditProfileModal";

export default function ProfileClient({ UserInfo }) {
  const [data, setData] = useState(UserInfo); // server fetched data
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full max-w-3xl rounded-2xl border bg-white p-8 shadow-sm mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 border-b pb-6">
        <img
          src={data.logo || "https://i.pravatar.cc/150"}
          className="h-16 w-16 rounded-full object-cover"
        />
        <div>
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-base text-gray-500">{data.email}</p>
        </div>
      </div>

      {/* Social Links */}
  <div className="mt-3 flex gap-4 items-center">
  {/* Facebook Link */}
  {data.social?.facebook && (
    <Link
      href={data.social.facebook}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-200 text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1"
    >
      <Facebook size={18} strokeWidth={2.5} />
      <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 font-bold">
        Facebook
      </span>
    </Link>
  )}

  {/* Instagram Link */}
  {data.social?.instagram && (
    <Link
      href={data.social.instagram}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center justify-center p-2 rounded-full bg-slate-50 border border-slate-200 text-pink-600 transition-all duration-300 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white hover:shadow-lg hover:shadow-pink-200 hover:-translate-y-1"
    >
      <Instagram size={18} strokeWidth={2.5} />
      <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 font-bold">
        Instagram
      </span>
    </Link>
  )}
</div>
      {/* Info */}
      <div className="mt-6 space-y-4 text-base">
        <div className="flex justify-between">
          <span className="text-gray-500">Mobile</span>
          <span className="font-medium">{data.phone}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Address</span>
          <span className="font-medium">{data.address}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">URL</span>
          <span className="font-medium">{data.url}</span>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-8 w-full rounded-lg bg-green-700 hover:bg-[#2e2e2e] text-white py-3 cursor-pointer transition"
      >
        Edit Profile
      </button>

      {/* Edit Modal (optional) */}
      
      <EditProfileModal
        open={open}
        setOpen={setOpen}
        data={data}
        setData={setData}
      /> 
     
    </div>
  );
}
