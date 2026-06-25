import { Aurora, Container } from "@/components/ui/Aurora";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <Aurora />
      <Container className="relative text-center">
        <p className="text-7xl font-semibold text-gradient md:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-semibold text-mist-50">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-md text-mist-400">
          The page may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button href="/" icon="ArrowRight">
            Back home
          </Button>
          <Button href="/services" variant="outline">
            Browse services
          </Button>
        </div>
      </Container>
    </section>
  );
}
