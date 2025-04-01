import React from 'react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">404 - ページが見つかりません</h1>
      <p className="text-gray-500">お探しの記事は存在しないか、削除された可能性があります。</p>
    </div>
  )
}
