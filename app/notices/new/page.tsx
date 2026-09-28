import { SubmitButton } from '@/components/SubmitButton'
import { createNoticeAction } from '@/lib/actions'

export default function NewNoticePage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-1 flex-col gap-6 px-8 py-16">
      <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
        새 공지 작성
      </h1>
      {/* Ctrl + 클릭 하면 해당 함수로 이동 */}
      <form action={createNoticeAction} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="title"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            제목
          </label>
          <input
            id="tittle"
            name="title" // name 속성값이 변수의 이름
            type="text"
            required
            className="rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="author"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            작성자
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            name="content"
            rows={6}
            required
            className="resize-none rounded-md border border-black/[.08] px-3 py-2 text-sm outline-none focus:border-zinc-400 dark:border-white/[.145] dark:bg-transparent"
          ></textarea>
        </div>
        <SubmitButton label="등록하기" />
      </form>
    </div>
  )
}
