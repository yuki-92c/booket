"use client";
import {Input} from "@/components/ui/input";
import React from "react";
import { useRouter } from 'next/navigation'; 

interface UserNameFormProps {
  userId: string;
}
export function UserNameForm({ userId }: UserNameFormProps) {
  const [customUserName, setCustomUserName] = React.useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("customUserName", customUserName); // ここで `customUserName` の内容を確認
    console.log("userId", userId); // `userId` も確認
  
    try {
      const updateUser = await fetch(`/api/setUserName`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, customUserName }), // 正しい値が送られているか確認
      });
  
      const result = await updateUser.json();
      console.log("Result from API", result); // APIの結果を確認
      if (result.customName) {
        router.push("/dashboard");
      } else {
        console.error("Error saving custom username", result);
      }
    } catch (error) {
      console.error("Error saving custom username", error);
    }
  };
  
  if (!userId) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Set User Name</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="User Name"
          name="customUserName"
          value={customUserName}
          onChange={(e) => setCustomUserName(e.target.value)}
        />
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
