import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export function NextStepCard({
  text,
  actionLabel,
}: {
  text: string;
  actionLabel: string;
}) {
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-5 flex flex-col flex-1">
        <CardTitle className="mb-3 text-base font-semibold">Next Step</CardTitle>
        <div className="text-sm text-gray-700 mb-5 flex-1">{text}</div>
        <Button className="w-full text-sm">{actionLabel}</Button>
      </CardContent>
    </Card>
  );
}
