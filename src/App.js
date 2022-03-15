import "./App.css";
import React from "react";
import Homepage from "./Restaurant/homepage";
import Postpage from "./Restaurant/postpage";
import Categoriespage from "./Restaurant/category";
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import Content from "./Components/Content";
import Categories from "./Components/Categories";
import Tagspage from "./Restaurant/tags";
import Tags from './Components/Tags'
function App() {
  return (
    <div className="App h-screen w-screen font-mono font-semibold text-lg">
      <Router>
        <div className="flex w-full "> 
          <div className="flex justify-self-start w-full">
            <div className=" dropdown dropdown-hover">
              <label tabIndex="0" className="text-3xl hover:text-blue-800 transition duration-150 cursor-pointer m-2 ml-3 ">FSWD</label>
                <div tabIndex="0" className="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content">
                  <div className="card-body">
                    <h3 className="card-title">Full Stack Web Developer</h3>
                    <p>Design by 61070044 Naphat Pornbunruang</p>
                  </div>
                </div>
              </div> 
            <div className="flex m-2 mr-2 items-end hover:text-blue-800 transition duration-150 cursor-pointer">
              <NavLink to="/" activeClassName="home">HomePage</NavLink>
            </div>
            <div className="flex m-2 mr-2 items-end hover:text-blue-800 transition duration-150 cursor-pointer">
              <NavLink to="/postpage" activeClassName="post">PostPage</NavLink>
              </div>
            <div className="flex m-2 mr-2 items-end ">
              <div className="dropdown dropdown-hover items-end">
                <label tabIndex="0" className="m-1 items-end hover:text-blue-800 transition duration-150 cursor-pointer">Categories</label>
                  <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-25 absolute ">
                    <Categoriespage />
                  </ul>
              </div>
            </div>
            <div className="flex m-2 mr-2 items-end">
              <div className="dropdown dropdown-hover items-end">
                <label tabIndex="0" className="m-1 items-end hover:text-blue-800 transition duration-150 cursor-pointer">Tags</label>
                  <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-25 absolute ">
                    <Tagspage />
                  </ul>
              </div>
            </div>
          </div>
          <div className="flex m-2 -ml-80 justify-end items-end">61070044 Naphat Pornbunruang</div>
        </div>
        <hr className="bg-white"/>
        <div className="h-5/6">
          <div className="h-full ">
            <Switch>
            <Route path='/tags/brooklyn' exact>
                <Tags />

              </Route>
              <Route path='/tags/fashion' exact>
                <Tags />

              </Route>
              <Route path='/tags/women-3' exact>
                <Tags />

              </Route>
              <Route path='/category/category-test' exact>
                <Categories />

              </Route>
              <Route path='/category/classic' exact>
                <Categories />

              </Route>
              <Route path='/category/Runner' exact>
                <Categories />

              </Route>
              <Route path='/category/style' exact>
                <Categories />

              </Route>
              <Route path='/category/life' exact>
                <Categories />

              </Route>
              <Route path='/category/uncategorized' exact>
                <Categories />

              </Route>
              <Route path='/vel-est-iusto-numquam-molestiae' exact>
                <Content />

              </Route>
              <Route path='/page5' exact>

              </Route>
              <Route path='/ut-autem-iste-quo' exact>
              <Content />
              </Route>
              <Route path='/iure-eligendi-impedit-voluptatum-non-omnis-asperiores-quia' exact>
              <Content />
              </Route>
              <Route path='/posts-page1' exact>

              </Route>

              <Route path='/esse-odit-ut-unde-sed-nihil' exact>
              <Content />
              </Route>

              <Route path='/classic-post' exact>
              <Content />
              </Route>
              <Route path='/id-ullam-reprehenderit-aut'  exact>
              <Content />
              </Route>
              <Route path='/maiores-est-quisquam-minus-placeat' exact>
              <Content />
              </Route>
              <Route path='/porro-ut-ea-sequi' exact>
              <Content />
              </Route>

              <Route path="/postpage" exact>
                <Postpage />
              </Route>

              <Route path="/categories" exact>
                <Categoriespage />
              </Route>

              <Route path="/" exact>
                <Homepage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
