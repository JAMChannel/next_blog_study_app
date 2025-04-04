import { prisma } from "@/lib/prisma";

export async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return posts;
}

export async function getPostById(id: string) {
  return await prisma.post.findUnique({
    where: { id },
    include: {
      author: {
        select: {
          name: true,
        },
      },
    },
  });
}

export async function searchPosts(keyword: string) {
  const decodedSearch = decodeURIComponent(keyword)
  const normalizedSearch = decodedSearch.replace(/[\s ]+/g, ' ').trim()
  const searchWords = normalizedSearch.split(' ').filter(Boolean)

  const filters = searchWords.map((word) => ({
    OR: [
      { title: { contains: word } },
      { content: { contains: word } },
    ],
  }))

  return await prisma.post.findMany({
    where: {
      AND: filters,
    },
    include: {
      author: {
        select: {
          name: true,
        }
      }
    },
    orderBy: {
      createdAt: 'desc',
    }
  })
}
  
