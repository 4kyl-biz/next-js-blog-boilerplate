import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="flex items-center justify-center">
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

const ProductPage = () => {
  return (
    <>
      <main className="py-12">
        <section className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Premium Custom Blinds</h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Our premium custom blinds offer the perfect balance of style and
            functionality. Whether you're decorating your living room or need
            office blinds, we have something to match every need.
          </p>

          <CarouselDemo />

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Product Details</h2>
            <p className="mt-4">
              Material: High-quality fabric or wood
              <br />
              Available in various colors and sizes
              <br />
              Easy to install and maintain
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductPage;
