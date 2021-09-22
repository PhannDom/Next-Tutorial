import React from "react";
import { getPostById, getPostIds } from "../../lib/post";
import Layout from "../../components/Layout";
import { Card, Button, Spinner } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import spinnerStyles from '../../styles/Spinner.module.css'

const Post = ({ post }) => {
  const router = useRouter();

  //Neu trang chua tao xong, isFallBack === true
  //va trang tam thoi se duoc render
  if (router.isFallback) {
    return (
      <>
        <Spinner 
          animation="border"
          role="status"
          variant="dark" className={spinnerStyles.spinnerLg}></Spinner>
        <span className="sr-only">LOADING...</span>
      </>
    );
  }
  // Khi getStaticProps() chay xong lan dau tien
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href="/posts" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getPostIds(5);
  console.log(paths);

  return {
    paths,
    //fallback: false, // bat ky path nao ko return boi getStaticPaths se toi trang 404
    fallback: true,
    //path nao ko return ngay lap tuc se show trang tam thoi
    // => getStaticProps chay xong => return trang hoàn chỉnh
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id);
  return {
    props: {
      post,
    },
    revalidate: 1
  };
};

export default Post;
