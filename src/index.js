import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostsContextProvider } from "./Context/PostContext"
import { CommentsContextProvider } from './Context/CommentsContext';
import { CategoriesContextProvider } from './Context/CategoryContext';
import { TagsContextProvider } from './Context/TagContext'
import { PagesContextProvider } from './Context/PageContext';

ReactDOM.render(
  <React.StrictMode>
    <PostsContextProvider>
      <TagsContextProvider>
        <CommentsContextProvider>
          <CategoriesContextProvider>
            <PagesContextProvider>
              <App />
            </PagesContextProvider>
          </CategoriesContextProvider>
        </CommentsContextProvider>
      </TagsContextProvider>
    </PostsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
