import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export type BannerProps = {
  className?: string;
  HeaderImage: StaticImageData;
  alt: string;
  title: string;
  description: React.ReactNode;
};

const Banner: React.FC<BannerProps> = ({
  className,
  HeaderImage,
  alt,
  title,
  description,
}) => {
  return (
    <section
      className={cn(
        "relative h-[450px] bg-gray-200 flex items-center justify-center",
        className
      )}
    >
      <Image
        className="object-cover filter brightness-75"
        src={HeaderImage}
        alt={alt}
        fill
      />
      <div className="absolute text-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <div className="mt-4 text-lg">{description}</div>
      </div>
    </section>
  );
};

export default Banner;
