import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useRouter } from "next/router";
import Link from "next/link";

export default ({ isSsr }) => {
  const router = useRouter();
  return (
    <div>
      <p>{isSsr ? "SSR" : "NOT SSR"}</p>
      <p>{router.query.ssr}</p>
      <Link href="/">
        <a>back</a>
      </Link>
    </div>
  );
};

export const getServerSideProps = () => {
  return { props: { isSsr: true } };
};
