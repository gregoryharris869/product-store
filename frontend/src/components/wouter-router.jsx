import { Link, Route } from "wouter";
import App from "../App";
import Navbar from "./navbar";

const WouterRouter = () => (
  <>
    <Navbar />
    <Link href="/about">About</Link>
    <Route path="/about">About Us</Route>

    <Route path="/" component={App} />
  </>
);

export default WouterRouter;
