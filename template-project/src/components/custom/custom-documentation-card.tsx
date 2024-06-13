import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function DocumentationCard() {
  return (
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Links</CardTitle>
        <CardDescription className="pt-2 max-w-lg text-balance leading-relaxed">
          This template uses TailwindCSS and Shadcn/ui. If you want to Learn
          more about them, you can visit the following links.
        </CardDescription>
      </CardHeader>
      <CardFooter className="py-6">
        <Link to={"https://ui.shadcn.com/docs"}>
          <Button className="mr-5">Shadcn/ui</Button>
        </Link>
        <Link to={"https://tailwindcss.com/docs"}>
          <Button>Tailwindcss</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
