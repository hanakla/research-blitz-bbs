import getLatestEntries from "app/domains/entry/queries/getLatestEntries"
import { useQuery } from "blitz"

export const useLatestEntries = () => {
  const [entries] = useQuery(getLatestEntries, null)
  return entries
}
