import Image from "next/image";

export default function Note() {
  return (
    <div className="flex w-full flex-col gap-4 py-3 md:flex-row md:items-center">
      <div className="relative aspect-video sm:w-full md:h-36 md:w-auto">
        <Image
          alt="cat"
          src="https://placecats.com/320/180"
          className="rounded object-cover"
          fill
        />
      </div>

      <div className="space-y-1">
        <h4 className="text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Place Kittens
        </h4>
        <p className="text-sm text-subtle sm:text-base">
          A quick and simple service for getting pictures of cats for use as
          placeholders in your designs or code. Just put your image size (width
          & height) after our URL and you'll get a placeholder.{" "}
        </p>
        <p className="pt-1 text-xs text-muted sm:text-sm">
          shinjith-dev on 16th February 2023
        </p>
      </div>
    </div>
  );
}
