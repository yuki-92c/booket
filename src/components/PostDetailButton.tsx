export function PostDetailButton(props: {id: string}) {

  const handleDelete = async () => {
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

  const handleEdit = () => {
    window.location.href = `/posts/${props.id}/edit`;  // 編集ページへリダイレクト
  };

  return (
    <div className="flex justify-end gap-2">
    <button className="bg-slate-800 text-slate-100 dark:bg-slate-900 text-sm rounded-md px-3 py-1" onClick={handleDelete}>
      Delete
    </button>
    <button className="border-2 border-slate-800 bg-slate-100 text-slate-800 text-sm rounded-md px-3 py-1" onClick={handleEdit}>
      Edit
    </button>
  </div>
  )
}
