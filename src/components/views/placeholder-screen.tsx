export function PlaceholderScreen({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="flex flex-1 items-center justify-center overflow-y-auto p-8">
      <div className="max-w-md text-center">
        <h1 className="mb-3 text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </main>
  );
}
