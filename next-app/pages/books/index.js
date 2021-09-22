import React from "react";
import Layout from "../../components/Layout";
import Link from "next/link";
import { Card, Button } from "react-bootstrap";
import { getBooks } from "../../lib/book";

const Book = ({ books }) => {
  return (
    <Layout>
      {books.map((book) => (
        <>
          <Card key={book.bookId} className="my-3 shadow">
            <Card.Body>
              <Card.Title>{book.bookName}</Card.Title>
              <Card.Text>{book.bookContent}</Card.Text>
              <Link href="/" passHref>
                <Button variant="dark">Back</Button>
              </Link>
            </Card.Body>
          </Card>
        </>
      ))}
    </Layout>
  );
};

//Du lieu phụ thuộc vào mỗi request, nhung van tao ra HTML tĩnh cho FE
export const getStaticProps = async () => {
  const books = await getBooks();
  return {
    props: {
      books,
    },
  };
};

export default Book;
