import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function NextStepCard({
  text,
  actionLabel,
}: {
  text: string;
  actionLabel: string;
}) {
  return (
    <Card className="flex h-full flex-col text-base">
      <CardHeader>
        <CardTitle className="font-semibold">Next Step</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col pt-0">
        <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
      </CardContent>
      <CardFooter className="border-t-0 bg-transparent pt-0">
        <Button className="h-11 w-full text-base font-semibold">
          {actionLabel}
        </Button>
      </CardFooter>
    </Card>
  );
}
