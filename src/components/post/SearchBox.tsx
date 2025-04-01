'use client'

import React from 'react'
import { Input } from '@/components/ui/input'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function SearchBox() {
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const router = useRouter()

  // デバウンス処理
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300)
    return () => clearTimeout(timer)
  }, [search])

  useEffect(() => {
    if (debouncedSearch) {
      router.push(`/?search=${debouncedSearch.trim()}`)
    } else {
      router.push('/')
    }
  }, [debouncedSearch, router])
    
  return (
    <>
    <Input 
      placeholder="キーワードを入力" 
      className="w-[200px] lg:w-[300px]"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <button>検索</button>
    </>
  )
}
