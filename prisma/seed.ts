import { PrismaClient } from '@prisma/client'
import * as bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // クリーンアップ
  await prisma.user.deleteMany()
  await prisma.post.deleteMany()

  const password = await bcrypt.hash('password', 10)

  // ダミー画像
  const dammyImages = [
     'https://picsum.photos/seed/post1/600/400',
     'https://picsum.photos/seed/post2/600/400',
  ]


  // ユーザー作成
  const user = await prisma.user.create({
    data: {
      email: 'test@test.com',
      name: 'test_user',
      password: password,
      posts: {
        create: [
          {
            title: '初めての投稿',
            content: 'こんにちは！',
            topImage: dammyImages[0],
            published: true,
          },
          {
            title: '2つ目の投稿',
            content: 'こんばんは！',
            topImage: dammyImages[1],
            published: true,
          },
        ],
      },
    },
  })

  console.log('ユーザー作成完了')
  console.log('ポスト作成完了')

}


main().catch((e) => { console.error(e); process.exit(1) })
.finally(async () => { await prisma.$disconnect() })
