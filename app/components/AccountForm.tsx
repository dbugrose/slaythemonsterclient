"use client"
import { Token } from '@/interfaces/interface'
import { createAccount, getUserByUsername, login } from '@/lib/user-services'
import { Button, Label, TextInput } from 'flowbite-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AccountForm = () => {

const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
//when true we are creating an account, when false we are logging in
const [switchBool, setSwitchBool] = useState(true);

const router = useRouter(); // router.push('/');
const {push} = useRouter(); //push('/');
//using deconstruction to create an instance of just the push method instead of just the entire useRouter class
 
//handling the switch between login and create account
const handleSwitch = () => setSwitchBool(!switchBool);
const handleSubmit = async () => {
    const user = {
        //key: value
        //Username: username,
        //Password: password

        //if you have variables that match the wanted property names you can input te variables for both the key and value pair
        username,
        password
    }
    if(switchBool)
    {
      const result = await createAccount(user);
      alert(result ? "Account Created": "Username already exists");
    }
    else {//we log in and push to dashboard page
      const token: Token | null = await login(user);
      console.log(token?.token)

      if (token != null) {
      localStorage.setItem("token", token.token);
      await getUserByUsername(username)
        push('/missions');

      }else {
      alert("Login failed - did you enter your information correctly?");
    }
    } 
}



return (
  <div>
    <div className='bg-[url(/assets/royal-golden-border-stockcake-removebg-preview.png)] bg-size-[100%_100%] p-15 text-center w-[clamp(300px, 50vw, 600px)]'>
        <h1 className='text-3xl'>{switchBool ? "Create Account" : "Login"}</h1>
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username">Your Username</Label>
        </div>
        <TextInput id="username" type="text" placeholder="Enter username" required onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Your Password</Label>
        </div>
        <TextInput id="password1" type="password" placeholder="Enter password" required onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={handleSwitch} color="light">{switchBool ? "Already have an account?" : "Don't have an account?"}</Button>

      </div>
      <Button onClick={handleSubmit}>Submit</Button>
    </form>
    </div>
    </div>
  )
}

export default AccountForm