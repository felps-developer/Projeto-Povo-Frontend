import {Box} from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import CourseList from "./components/CourseList";
import Footer from "./components/Footer";

function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <CourseList />
      <Footer />
    </Box>
  );
}

export default App;
