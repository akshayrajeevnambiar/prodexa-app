// this would help us create responses that the server would send
import { NextResponse } from "next/server";

 // defining how a task object would be like
const tasks: {id: string, title: string, description: string}[] = []

export async function GET() {
    return NextResponse.json(tasks)
}

export async function POST(request: Request) {
    const {title, description} = await request.json()
    const newTask = {id: Date.now().toString(), title: title, description: description}
    tasks.push(newTask)
    return NextResponse.json(newTask)
}