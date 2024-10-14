import { Card, CardHeader } from "@/app/_components/card";
import Link from "next/link";
import notFoundIcon from "@/assets/close-circle.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <Card>
      <CardHeader>Not Found</CardHeader>
      <div className="flex justify-center items-center">
        <Image src={notFoundIcon} alt="Not Found" width={108} height={108} />
      </div>
      <p className="font-medium text-center">Symbol not found!</p>
      <Link className="text-center" href="/">
        Return Home
      </Link>
    </Card>
  );
}
