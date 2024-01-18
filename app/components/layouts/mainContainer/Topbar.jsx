"use client";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import { Add, Logout, Search } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Topbar = () => {
  const router = useRouter();
  const [search, setSearh] = useState("");
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts, people,..."
          className="search-bar"
          value={search}
          onChange={(e) => setSearh(e.target.value)}
        />
        <Search className="search-icon" />
      </div>
      <button
        className="create-post-btn"
        onClick={() => router.push("/create-post")}
      >
        <Add />
        <p className="max-lg:hidden">Create post</p>
      </button>
      <div className="flex gap-3 md:hidden">
        <SignedIn>
          <SignOutButton>
            <div className="flex gap-4 items-center cursor-pointer ">
              <Logout sx={{ color: "white", fontSize: "32px" }} />
              
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/profile">
          <Image
            src="/assets/phucmai.png"
            alt="profile photo"
            width={50}
            height={50}
            className="rounded-full md:hidden"
          />
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
