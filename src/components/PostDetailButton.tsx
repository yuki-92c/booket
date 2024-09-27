export function PostDetailButton(props: {id: string}) {

  return (
    <div className="flex justify-end gap-2">
    <button className="bg-slate-800 text-slate-100 dark:bg-slate-900 text-sm rounded-md px-3 py-1" onClick={
      async () => {
        try {
          const res = await fetch('/api/posts/' + props.id, {
            method: 'DELETE',
          });
          if (res.ok) {
            window.location.href = '/dashboard';
          }
        } catch (error) {
          console.error('Error deleting post:', error);
        }
      }
    }>
      Delete
    </button>
    <button className="bg-slate-400 text-slate-100 dark:bg-slate-600 text-sm rounded-md px-3 py-1">
      Edit
    </button>
  </div>
  )
}
