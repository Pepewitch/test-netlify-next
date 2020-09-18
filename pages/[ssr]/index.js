import { unstable_renderSubtreeIntoContainer } from "react-dom";
import { useRouter } from "next/router";

export default () => {
  const router = useRouter();
  return <div>{router.query.ssr}</div>;
};
