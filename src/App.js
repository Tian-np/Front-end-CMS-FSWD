import "./App.css";
import React from "react";
import Homepage from "./Restaurant/homepage";
import Postpage from "./Restaurant/postpage";
import Categoriespage from "./Restaurant/category";
import Commentpage from "./Restaurant/comment";
import { BrowserRouter as Router, NavLink, Switch, Route } from "react-router-dom";
import { Menu } from '@headlessui/react'
import Content from "./Components/Content";
import Categories from "./Components/Categories";
import Tagspage from "./Restaurant/tags";
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
              <Route path='/category/category-test'>
                <Categories />

              </Route>
              <Route path='/category/classic'>
                <Categories />

              </Route>
              <Route path='/category/Runner'>
                <Categories />

              </Route>
              <Route path='/category/style'>
                <Categories />

              </Route>
              <Route path='/category/life'>
                <Categories />

              </Route>
              <Route path='/category/uncategorized'>
                <Categories />

              </Route>
              <Route path='/vel-est-iusto-numquam-molestiae'>
                <Content />

              </Route>
              <Route path='/page5'>

              </Route>
              <Route path='/ut-autem-iste-quo'>
              <Content />
              </Route>
              <Route path='/iure-eligendi-impedit-voluptatum-non-omnis-asperiores-quia'>
              <Content />
              </Route>
              <Route path='/posts-page1'>

              </Route>

              <Route path='/esse-odit-ut-unde-sed-nihil'>
              <Content />
              </Route>

              <Route path='/classic-post'>
              <Content />
              </Route>
              <Route path='/id-ullam-reprehenderit-aut' >
              <Content />
              </Route>
              <Route path='/maiores-est-quisquam-minus-placeat'>
              <Content />
              </Route>
              <Route path='/porro-ut-ea-sequi'>
              <Content />
              </Route>

              <Route path="/postpage">
                <Postpage />
              </Route>

              <Route path="/categories">
                <Categoriespage />
              </Route>

              <Route path="/">
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
