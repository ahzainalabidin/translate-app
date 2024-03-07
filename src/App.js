import React, { useState } from "react";
import Field from "./components/field";
import Translate from "./components/translate";
import Languages from "./components/languages";

function App() {

  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div>
      <Field />
      <Languages />
      <hr />
      <Translate />
    </div>
  );
}

export default App;
