import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    // リクエストボディをJSONとして解析
    const body = await req.json(); //
    console.log("body!!!:", body);

    const addUser = await prisma.user.create({
      data: {
        // userId: body.userId, // Ensure the request body contains userId
        name: body.userName,
        id: body.userId,
      },
    });


//     // データベースのユーザー情報を更新
//     const updateUser = await prisma.user.update({
//       where: {
//         id: userId,
//       },

//     });

//     console.log("Updated user", updateUser);

//     // 成功した場合は更新されたユーザー情報を返す
    return NextResponse.json(addUser, { status: 200 });
  } catch (error) {
    console.error("Error: setting user name", error);
    return new NextResponse("Error: setting user name", { status: 500 });
  }
}
