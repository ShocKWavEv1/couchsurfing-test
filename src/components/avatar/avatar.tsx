"use client";
import React, { useState } from "react";
import { AvatarProps } from "./avatarProps";
import Image from "next/image";

const Avatar: React.FC<AvatarProps> = ({ name, avatar, size = 40 }) => {
  const [imgError, setImgError] = useState(false);

  // Generate initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold select-none overflow-hidden"
      style={{ width: size, height: size }}
    >
      {avatar && !imgError ? (
        <Image
          src={avatar}
          alt={name}
          width={size}
          height={size}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <p className="text-[10px] font-normal">{initials}</p>
      )}
    </div>
  );
};

export default Avatar;
