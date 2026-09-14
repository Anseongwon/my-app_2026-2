import { Counter } from '@/components/counter'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-2xl flex-col items-center justify-center gap-8 py-24 px-8 text-center">
        <h1>웹서버보안프로그래밍</h1>
        <Counter />

        <br />
        <Link
          className="text-sm font-medium text-zinc-950 underline underline-offset-4 dark:text-zinc-50"
          href="/about"
        >
          {' '}
          /about 페이지로 이동하기{' '}
        </Link>
      </main>
    </div>
  )
}
