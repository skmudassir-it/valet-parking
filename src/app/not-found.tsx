import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="flex justify-center mb-6">
          <FontAwesomeIcon icon={faCar} className="size-16 text-slate-200" />
        </div>
        <div className="text-8xl font-extrabold text-slate-200 mb-4">404</div>
        <h1 className="text-2xl font-bold tracking-tight mb-2">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Looks like this parking spot doesn't exist. Let's get you back on the road.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="inline-flex">
            <Button>Back Home</Button>
          </Link>
          <Link href="/contact" className="inline-flex">
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
