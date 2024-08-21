import NewNoteForm from "./_components/new-note-form";

export default function NewNote() {
  return (
    <div className="flex h-screen w-full flex-col pt-20">
      <h3 className="text-2xl font-medium">Share a new note</h3>

      <NewNoteForm />
    </div>
  );
}
