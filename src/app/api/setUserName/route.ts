import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(req: Request) {
  try {
    // リクエストボディをJSONとして解析
    const body = await req.json(); // body全体をログ出力して確認
    console.log("Received body:", body);

    // const { userId, customUserName } = body;
    const userId = body.userId;
    const customUserName = body.customUserName;
    console.log("Received userId:", userId); // userIdを確認
    console.log("Received customUsername:", customUserName); // customUserNameを確認

    if (!userId || !customUserName) {
      return new NextResponse("Invalid input", { status: 400 });
    }

    // データベースのユーザー情報を更新
    const updateUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        customName: customUserName,
      },
    });

    console.log("Updated user", updateUser);

    // 成功した場合は更新されたユーザー情報を返す
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    console.error("Error updating user with custom username", error);
    return new NextResponse("Error updating user", { status: 500 });
  }
}
