import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useRouter } from "next/router";

export default ({ isSsr }) => {
  const router = useRouter();
  return (
    <div>
      <p>{isSsr ? "SSR" : "NOT SSR"}</p>
      <p>{router.query.ssr}</p>
    </div>
  );
};

export const getServerSideProps = () => {
  return { isSsr: true };
};
