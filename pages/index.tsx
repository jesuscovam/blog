import PostList from "components/PostList";
import matter from "gray-matter";
import { NextPage } from "next";
import { Layout } from "components/Layout";
import { CardBlogInfo } from "components/CardBlogInfo";

const Index: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <Layout>
      <main className="h-screen">
        <CardBlogInfo />
        <PostList posts={posts} />
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      //@ts-ignore
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
    },
  };
}

export default Index;
