import { NextResponse } from 'next/server'

export type User = {
  id: number
  name: string
  age: number
  description: string
}

export type ResponseData = {
  message: string,
  users: User[]
}

export function GET(
) {
  const data: ResponseData = {
    message: 'OK',
    users: [...Array(100)].map((_, i) => {
      const index = i + 1;
      return {
        id: index,
        name: `User ${index}`,
        age: 20,
        description: `This is user ${index}`
      };
    })
  }

  const res = NextResponse.json(data)

  return res
}
