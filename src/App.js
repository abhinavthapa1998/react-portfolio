import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "../src/components/Layout";
import Home from "./components/Home";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}
