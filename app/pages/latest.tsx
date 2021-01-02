import { useLatestEntries } from "app/hooks/useLatestEntries"
import Layout from "app/layouts/Layout"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

const Entries = () => {
  const entries = useLatestEntries()
  return (
    <div>
      {entries.map((entry) => (
        <div>{entry.content}</div>
      ))}
    </div>
  )
}

const Latest: BlitzPage = () => {
  return (
    <Suspense fallback="Loading...">
      <Entries />
    </Suspense>
  )
}

Latest.getLayout = (page) => <Layout title="">{page}</Layout>

export default Latest
