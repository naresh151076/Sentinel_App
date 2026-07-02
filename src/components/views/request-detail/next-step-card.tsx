import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function NextStepCard({
  text,
  actionLabel,
}: {
  text: string;
  actionLabel: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-sm text-gray-700 mb-4">{text}</div>
        <Button className="w-full">{actionLabel}</Button>
      </CardContent>
    </Card>
  );
}
