import createEntry from "app/domains/entry/mutations/createEntry"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { BlitzPage, useMutation } from "blitz"
import { Suspense, useCallback, useRef } from "react"

const Content = () => {
  const currentUser = useCurrentUser()
  const [createEntryMutation, result] = useMutation(createEntry)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  console.log(result)

  const onSubmit = useCallback(async () => {
    console.log(currentUser)
    if (!currentUser) return

    await createEntryMutation({
      data: {
        data: {
          content: textareaRef.current?.value!,
          user: { connect: { id: currentUser.id } },
        },
      },
    })
  }, [currentUser])

  return result.isSuccess ? (
    <div>お気持ち聞き届けたり（ドス</div>
  ) : (
    <div>
      <textarea ref={textareaRef} placeholder="最後に言いたいことは？" />
      <button onClick={onSubmit}>以上です</button>
    </div>
  )
}

const New: BlitzPage = () => {
  return (
    <Suspense fallback="matte">
      <Content />
    </Suspense>
  )
}

export default New
