import BookOverview from "@/components/BookOverview";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import BookList from "../../components/BookList";
import { sampleBooks } from "@/constant";

const Home = () => (
  <>
    <BookOverview {...sampleBooks[1]} />
    <BookList
      title="Latest Books"
      books={sampleBooks}
      containerClassName="mt-28"
    />
  </>
);

export default Home;
