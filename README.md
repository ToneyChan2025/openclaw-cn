# OpenClaw 中文学习站（MVP）

技术栈：Next.js 14 + Nextra + Tailwind + Supabase（预留）+ Vercel。

## 开发

```bash
npm install
npm run dev
```

## 已完成（MVP框架）

- 课程双栏布局：`/courses`
- 资源双栏布局：`/resources`
- Supabase 客户端预留：`lib/supabase/*`
- 权限模型预留：`lib/auth/permissions.ts`

## 环境变量

复制 `.env.example` 并填写：

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
