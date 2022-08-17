import "./App.css";
import ClassIntroduction from './ClassIntroduction.js';
import ClassComponents from './ClassComponents.js';

function App() {
  return <div>
    <ClassIntroduction />
    <ClassComponents />
  </div>;
}

// import { Component } from "react";

// const App = () => {
//   return (
//     <ErrorBoundary>
//       <Counter />
//     </ErrorBoundary>
//   );
// };

// const Counter = () => {
//   throw new Error("Something wrong");
//   return <button>Counter</button>;
// };

// class ErrorBoundary extends Component {
//   state = {
//     hasError: false,
//   };

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(err, errInfo) {
//     console.log(err, errInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div>Something went wrong</div>;
//     }
//     return this.props.children;
//   }
// }

export default App;
