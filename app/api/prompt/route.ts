import { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // const body = await request.json()
  // const { email, name, password } = body
  // const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.promptList.findMany()

  return NextResponse.json(user)
}
export async function POST(request: Request) {
  const body = await request.json()
  // const { email, name, password } = body
  // const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.promptList.findMany()

  return NextResponse.json(user)
}

// export default function handler(req: Request, res: NextApiResponse) {
//   console.log('aa')
//   switch (req.method) {
//     case 'GET':
//       return GET(req)
//     case 'POST':
//       return POST(req)
//     default:
//       return res.status(405).send('Method Not Allowed')
//   }
// }