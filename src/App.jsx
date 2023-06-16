import CharacteAbout from "./components/CharacterAbout";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/:id" element={<CharacteAbout />}/>
    </Routes>
  );
}

export default App;