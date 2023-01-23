import React from "react";
import Heads from "next/head";
import { getAllPosts, getPostByID } from "utils/postsFunctions";
import Layout from "../../components/Layout";
import Head from "next/head";

interface PostProps {
  id: number;
  title?: string;
  content?: string;
}

const PostNumber = ({ post }: any) => {
  console.log(post);

  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="w-1/2 m-auto mt-10">
        <h1 className="text-lime-500 text-4xl max-w-prose	 mb-4">
          {post.title}
        </h1>
        <p className="text-white max-w-prose mb-2">{post.content}</p>
      </div>
    </Layout>
  );
};

export default PostNumber;

export async function getStaticPaths() {
  const data = await getAllPosts();

  const paths = data.map((p: any) => {
    return {
      params: {
        id: p.id.toString(),
      },
    };
  });

  /* paths = 
      [
          { params: { id: '1' } },
          { params: { id: '2' } },
          { params: { id: '3' } },
          { params: { id: '5' } }
      ] 
    */
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: any) {
  //params = {id:'1'}
  const data = await getPostByID(params.id);
  return { props: { post: data } };
}
