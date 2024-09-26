import { useState } from 'react';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';

export function LikeButton({ postId, initialLikeCount, initialLiked }: { postId: string, initialLikeCount: number, initialLiked: boolean }) {
  const [likeCount, setLikeCount] = useState(initialLikeCount);
  const [liked, setLiked] = useState(initialLiked);

  const handleLike = async () => {
    try {
      const res = await fetch('/api/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId }),
      });

      const result = await res.json();
      if (result.liked) {
        setLikeCount(likeCount + 1);
      } else {
        setLikeCount(likeCount - 1);
      }
      setLiked(result.liked);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div className="flex items-center">
      <button onClick={handleLike} aria-label="Like or Unlike post">
        {liked ? (
          <IoMdHeart className="text-red-500" size={24} />
        ) : (
          <IoMdHeartEmpty className="text-slate-500 dark:text-slate-400" size={24} />
        )}
      </button>
      <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">
        {likeCount}
      </span>
    </div>
  );
}
