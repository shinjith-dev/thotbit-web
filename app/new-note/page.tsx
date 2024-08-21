import NewNoteForm from "./_components/new-note-form";

export default function NewNote() {
  return (
    <div className="flex h-screen w-full flex-col pt-24">
      <h3 className="text-center text-3xl font-medium">Share New Note 📝</h3>

      <NewNoteForm />
    </div>
  );
}
