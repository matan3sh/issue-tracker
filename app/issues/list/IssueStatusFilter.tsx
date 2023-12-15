"use client"

import { Status } from "@prisma/client"
import { Select } from "@radix-ui/themes"
import { useRouter } from "next/navigation"

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: Status["OPEN"] },
  { label: "In Progress", value: Status["IN_PROGRESS"] },
  { label: "Closed", value: Status["CLOSED"] },
]

const IssueStatusFilter = () => {
  const router = useRouter()

  const onValueChange = (status: string) => {
    const query = status !== "All" ? `?status=${status}` : ""
    router.push(`/issues/list` + query)
  }

  return (
    <Select.Root onValueChange={onValueChange}>
      <Select.Trigger placeholder="Filter by status..." />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || status.label}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  )
}

export default IssueStatusFilter
