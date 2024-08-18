import MDXEditor from "./_components/MDXEditor";

export default function NewNote() {
  return (
    <div className="flex h-screen w-full flex-col pt-20">
      <h3 className="text-2xl font-medium">Share a new note</h3>

      <h2 className="text-5xl font-semibold focus:border-black" contentEditable>
        Name of the note
      </h2>
      <MDXEditor />
    </div>
  );
}
