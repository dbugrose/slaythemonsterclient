import { Stats } from "@/interfaces/interface";
import { getFriends, getFriendStats } from "@/lib/friend-services";
import React, { useEffect, useState } from "react";

type FriendBoxProps = {
  userId: number;
  token: string;
  friends : Stats[];
};

const FriendBox = ({ userId, token, friends }: FriendBoxProps) => {
    function handleSendCoOp(e: HTMLButtonElement): void {
    
    }

  return (
    <div className="overflow-y-scroll max-h-screen">
      {friends &&
        friends.map((friend) => (
            <div key={friend.id} className="p-2">
            <a href={`/profile/${friend.username}`} className="text-[#593819] px-5">{friend.username}</a>
            {/* to-do: add co-op services and link */}
            <button onClick={e => handleSendCoOp} className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5">Co-Op</button>
            </div>
        ))}
    </div>
  );
};

export default FriendBox;
