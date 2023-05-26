/*
 * @Autor: ERP
 * @Email: 邮箱
 * @Description: 
 * @CreateDate: Do not edit
 * @LastEditors: houxinchao
 */
import {React, createRoot} from "./whichReact";
import "./index.css";

// import jsx from "./pages/ExamplePage";
// import TransitionPage from "./pages/TransitionPage";
// import LifeCyclePage from "./pages/LifeCyclePage";
// import SuspensePage from "./pages/SuspensePage";
// import UseCallbackPage from "./pages/UseCallbackPage";
import UseMemoPage from "./pages/UseMemoPage";

// ReactDOM.render(jsx, document.getElementById("root"));

const root = createRoot(document.getElementById("root"));

// root.render(jsx);
root.render(<UseMemoPage />);

console.log("React", React.version); //sy-log
