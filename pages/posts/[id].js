import Head from "next/head";
import Blog from "../../components/blog";
import styles from "../../styles/Blog.module.css";
import { Blog_10_6_2022 } from "../../blogs";
import { Blog_10_16_2022 } from "../../blogs";
import { Blog_11_27_2022 } from "../../blogs";

const Blogs = {
  Blog_10_6_2022,
  Blog_10_16_2022,
  Blog_11_27_2022,
};

export default function Post({ postData }) {
  //Main blog post.
  return (
    <Blog>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <BlogComponent postData={postData} />
    </Blog>
  );
}

import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
function BlogComponent(props) {
  let Component = Blogs[props.postData.component_name];
  return <Component {...props} />;
}
