import React from 'react'
import { getPostById } from '@/lib/post'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PostCardProps } from '@/types/post'

type Params = {
  params: Promise<{ id: string }>
}

export default async function Postpage({ params } : Params) {
  const { id } = await params
  const post = await getPostById(id)
  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        {post.topImage && (
          <div className="relative h-64 lg:h-96 w-full">
            <Image 
              src={post.topImage} 
              alt={post.title} 
              fill 
              sizes="100vw"
              className="object-cover rounded-t-md"
              />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500 mb-2">
              投稿者：{post.author.name}
            </p>
            <time className="text-sm text-gray-500 mb-2">
            {format(new Date(post.createdAt), "yyyy/MM/dd", { locale: ja })}
            </time>
          </div>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {post.content}
        </CardContent>
      </Card>
    </div>
  )
}
