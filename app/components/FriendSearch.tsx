import { CreateFriendRequest, FriendRequest, Stats } from "@/interfaces/interface";
import { getFriends, SendFriendRequest } from "@/lib/friend-services";
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
  const [content, setContent] = useState<any>();



  async function handleSearch() {
    const result = await searchUser(input);
    setHasSearched(true);
    setSearchedFriend(result || null);
    console.log("this is the friends:" + friends);
  }

    async function handleSend() {

    const send =  await SendFriendRequest(userId, searchedFriend, token);
    if (send != false)
    {
      setContent(<p className="text-[#593819]">Friend request sent!</p>);
    }
    else setContent(<p className="text-[#593819]">Sorry, there was an error.</p>)
  }

useEffect(() => {
  if (hasSearched) {
    if (searchedFriend != null) {
      setContent(
      <div className="flex items-center gap-3 justify-center text-[#593819] py-3">
        <a href={`/profile/${searchedFriend}`}>
          {searchedFriend}
        </a>
        {!friends.some(friend => friend.username === searchedFriend) && (
          <button className="bg-[#FCC27D] text-[#593819] px-5 rounded-2xl" onClick={handleSend}>
            Friend
          </button>
        )}
        
        {friends.some(friend => friend.username === searchedFriend) &&
        (<button className="bg-[#FCC27D] text-[#593819] px-5 rounded-2xl"> 
            Co-Op
        </button>)
        }
      </div>);
    } else {
      setContent("No User Found");
    }
  }
}, [hasSearched, searchedFriend, friends]);

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
