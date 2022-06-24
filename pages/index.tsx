import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href={"/quiz/mainQuiz"}>
        <a>quiz</a>
      </Link>
    </div>
  );
};

export default Home;
