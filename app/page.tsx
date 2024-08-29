import Main from "@/components/Main";
import { appWithTranslation } from "next-i18next";
import "../i18n";

function Home() {
  return <Main />;
}

export default appWithTranslation(Home);
