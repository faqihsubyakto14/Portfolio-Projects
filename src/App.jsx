import Aboutme_section from "./Components/Aboutme_section";
import Contact_section from "./Components/Contact_section";
import Intro_section from "./Components/Intro_section";
import Portfolio_section from "./Components/Portfolio_section";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <div>
          <Intro_section />
          <Aboutme_section />
          <Portfolio_section />
          <Contact_section />
        </div>
      </Layout>
    </>
  );
}

export default App;
