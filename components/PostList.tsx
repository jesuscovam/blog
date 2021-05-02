import Link from "next/link";

export default function PostList({ posts }) {
  if (posts === "undefined") return null;

  return (
    <div className="mt-20">
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li className="my-5 cursor-pointer" key={post.slug}>
                <Link href={{ pathname: `/post/${post.slug}` }}>
                  <div>
                    <a className="font-montserrat text-2xl text-gray-800">
                      {post.frontmatter.title}
                    </a>
                    <p className="font-spacemono">
                      {post.frontmatter.createdAt} - {post.frontmatter.time}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
