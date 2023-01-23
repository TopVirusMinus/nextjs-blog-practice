import Link from "next/link";
import React from "react";

interface PostProps {
  id?: number;
  title?: string;
  content?: string;
}

const BlogPost: React.FC<PostProps> = ({ id, title, content }) => {
  return (
    <>
      <div className="w-full rounded-lg bg-zinc-800 text-zinc-300 shadow lg:max-w-sm">
        <div className="p-4">
          <Link
            href={`http://localhost:3000/post/${id}`}
            className="text-xl font-semibold text-lime-500 hover:underline cursor-pointer"
          >
            {title}
          </Link>
          <p className="mb-2 mt-2 leading-normal">{content}</p>

          <Link href={`http://localhost:3000/post/${id}`}>
            <button className="px-4 hover:bg-blue-500 py-2 text-sm text-blue-100 bg-blue-600 rounded">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
