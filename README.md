This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

## インストール
- db
- ダミーデータ用
- 暗号化
- 型を指定

```
npm instal prisma@^6 @prisma/client@^6
npm instal -D ts-node@^10
npm instal bcryptjs@^2
npm instal @types/bcryptjs@^2
```

## Prismaの設定
- Prismaの初期化
```
npx prisma init
```

## マイグレーションとシード実行
```
// マイグレーション(テーブル作成)
npx prisma migrate dev --name init
// シード実行(ダミーデータ)
npx prisma db seed
// DBの内容を確認
npx prisma studio
// DBリセット
npx prisma migrate reset
```

## デザイン shadcn/ui
- https://ui.shadcn.com/

```
npx shadcn@latest init
base color > Neutral
Use --force
```

- 必要なコンポーネントをインストール
```
npx shadcn@latest add navigation-menu
button input label alert dropdown-menu
alert-dialog
```

## 日付フォーマット
```
npm instal date-fns@^4
```
