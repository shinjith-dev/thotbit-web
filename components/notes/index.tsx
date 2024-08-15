import Note from "../note";

export default function Notes() {
  return (
    <div className="mx-auto w-full max-w-md md:max-w-none">
      <h3 className="mb-2 font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        Notes
      </h3>
      <Note />
      <hr className="my-1 border-b border-border" />
      <Note />
      <hr className="my-1 border-b border-border" />
      <Note />
    </div>
  );
}
