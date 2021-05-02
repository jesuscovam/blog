import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { NextPage } from "next";
import { Layout } from "components/Layout";
import gfm from 'remark-gfm'

const BlogPost: NextPage<BlogPostProps> = ({ frontmatter, markdownBody }) => {
  if (!frontmatter) return <></>;

  return (
    <Layout>
      <main className="mx-32">
        <Link href="/">
          <a className="font-black text-xl">Inicio</a>
        </Link>
        <article>
          <h1 className="capitalize text-3xl font-black font-montserrat my-5">
            {frontmatter.title}
          </h1>
          <section>
            <ReactMarkdown
              plugins={[gfm]}
              className="font-spacemono"
              children={markdownBody}
            />
          </section>
        </article>
      </main>
    </Layout>
  );
};

interface BlogPostProps {
  frontmatter: any;
  markdownBody: string;
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}

export default BlogPost;
