import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


    const [token, setToken] = useState("");
    const [userId, setUserId] = useState(0);
    const [username, setUsername] = useState("");
  
    /* ---------------- INITIAL SETUP ---------------- */
    useEffect(() => {
      const user = loggedInData();
      setUsername(user?.username || "");
      setUserId(user?.id || 0);
  
      const token = getToken();
      setToken(token);
      if (!token)
      {redirect("/")}
    }, []);

    
interface ToDo{
  userName: string;
  monsterSlain: number;
  tasks: number;
  easy: number;
  med: number;
  hard: number;
}
const RecordBoard = ({userName, monsterSlain, tasks, easy, med, hard} : ToDo) => {
  return (
    <div>

   
    <TableBody className="divide-y">
          <TableRow className="bg-transparent! dark:border-black dark:bg-black">
            <TableCell className="whitespace-nowrap font-medium text-black dark:text-black">
              {userName}
            </TableCell>
            <TableCell className="text-black text-center">{monsterSlain}</TableCell>
            <TableCell className="text-black">{tasks}</TableCell>
            <TableCell className="text-black">{easy}</TableCell>
            <TableCell className="text-black">{med}</TableCell>
            <TableCell className="text-black">{hard}</TableCell>
          </TableRow>
        </TableBody>
         </div>
  )
}

export default RecordBoard