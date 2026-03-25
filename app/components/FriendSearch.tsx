import { Stats } from "@/interfaces/interface";
import { getFriends } from "@/lib/friend-services";
import { getUserByUsername, searchUser } from "@/lib/user-services";
import React, { useState, useEffect, createElement } from "react";

type FriendBoxProps = {
  userId: number;
  token: string;
  friends : Stats[];
};

const FriendSearch = ({userId, token, friends} : FriendBoxProps) => {
  const [input, setInput] = useState("");
  const [searchedFriend, setSearchedFriend] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  async function handleSearch() {
    const result = await searchUser(input);
    setHasSearched(true);
    setSearchedFriend(result || null);
    console.log(friends);
  }


let content;

if (hasSearched) {
  if (searchedFriend != null) {
    content = (
      <div className="flex items-center gap-3 justify-center text-[#593819] py-3">
        <a href={`/profile/${searchedFriend}`}>
          {searchedFriend}
        </a>
        {!friends.some(friend => friend.username === searchedFriend) && (
          <button className="bg-[#FCC27D] text-[#593819] px-5 rounded-2xl">
            Friend
          </button>
        )}
        
        {friends.some(friend => friend.username === searchedFriend) &&
        (<button className="bg-[#FCC27D] text-[#593819] px-5 rounded-2xl">
            Co-Op
        </button>)
        }
      </div>
    );
  } else {
    content = "No User Found";
  }
}

  return (
    <div className="flex flex-col justify-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        placeholder="search for friend"
        className="bg-white rounded-2xl text-[#593819]"
      />
      <button
        className="bg-[#FCC27D] text-[#593819] px-5 rounded-2xl"
        onClick={handleSearch}
      >
        Search User
      </button>
        {content}
    </div>
  );
};

export default FriendSearch;
