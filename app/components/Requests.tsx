"use client";

import React, { useEffect, useState } from "react";
import {
  GetSentRequests,
  getIncomingRequests,
  AcceptRequest,
  DeclineRequest,
} from "@/lib/friend-services";
import { FriendRequest } from "@/interfaces/interface";
import { loggedInData, getToken } from "@/lib/user-services";
import { redirect } from "next/navigation";
import { Button } from "flowbite-react";

const Requests = () => {
  const [outboundRequests, setOutboundRequests] = useState<FriendRequest[]>([]);
  const [inboundRequests, setInboundRequests] = useState<FriendRequest[]>([]);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    async function onload() {
      const user = loggedInData();
      const token = getToken();

      if (!token) {
        redirect("/");
        return;
      }

      setToken(token);
      setUserId(user?.id || 0);

      const out = await GetSentRequests(user?.id || 0, token);
      const inbound = await getIncomingRequests(user?.id || 0, token);

      setOutboundRequests(out || []);
      setInboundRequests(inbound || []);
    }

    onload();
  }, []);

  const filterPending = (requests: FriendRequest[]) => {
    return requests.filter(
      (req) => req.status?.toLowerCase() === "pending"
    );
  };

  const refreshRequests = async (userId: number, token: string) => {
    const out = await GetSentRequests(userId, token);
    const inbound = await (getIncomingRequests(userId, token));
    setOutboundRequests(filterPending(out));
    setInboundRequests(filterPending(inbound));
  };

  const handleAccept = async (requestId: number) => {
    await AcceptRequest(requestId, token);
    await refreshRequests(userId, token);
  };

  const handleDecline = async (requestId: number) => {
    await DeclineRequest(requestId, token);
    await refreshRequests(userId, token);
  };

  return (
    <div className="text-[#593819]">
      <h2>Incoming Requests</h2>
      {inboundRequests.map((request) => (
        <div key={request.id}>
          <p>{request.senderUser}</p>
          <div className="flex gap-3"><Button className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5 hover:bg-[#eab472]" onClick={() => handleAccept(request.id)}>Accept</Button>
          <Button className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5 hover:bg-[#FCC27D]" onClick={() => handleDecline(request.id)}>Decline</Button></div>

        </div>
      ))}

      <h2>Sent Requests</h2>
      {outboundRequests.map((request) => (
        <div key={request.id}>
          <p>{request.receiverUser || request.senderId}</p>
          <p>Status: {request.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Requests;