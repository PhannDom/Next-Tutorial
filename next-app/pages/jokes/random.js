import React from "react";
import { getRandomJoke } from "../../lib/joke";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";

const Random = ({ joke }) => {
  return (
    <Layout>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here is your random joke for today</Card.Title>
          <Card.Text>{joke.value}</Card.Text>
          <Link href="/" passHref>
            <Button variant="dark">Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </Layout>
  );
};

//Du lieu phụ thuộc vào mỗi request, nhung van tao ra HTML tĩnh cho FE
export const getServerSideProps = async () => {
  let joke = await getRandomJoke();
  // joke = false;
  // if(!joke)
  // {
  //   return {
  //     redirect: {
  //       destination: '/posts',
  //       permanent: false
  //     }
  //   }
  // }

  return {
    props: {
      joke,
    },
  };
};

export default Random;
