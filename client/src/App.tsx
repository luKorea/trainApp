import React, {FC} from 'react';
// import SuspenseDemo from "./baseTest/Lazy/SuspenseDemo";
import MemoDemo from "./baseTest/memoDemo";
// import ContextDemo from "./baseTest/ContextDemo";

 const App: FC = () => {
   return (
    <div className="App">
      {/*<ContextDemo />*/}
      {/*<SuspenseDemo />*/}
      <MemoDemo />
    </div>
  );
}

export default App;
