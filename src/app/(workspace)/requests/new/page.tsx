import { NewRequestFlow } from "@/components/views/new-request/new-request-flow";

export default async function NewRequestPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;

  return <NewRequestFlow initialMessage={message} />;
}
