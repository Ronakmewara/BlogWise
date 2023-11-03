import React from 'react'
import ReactDOM from 'react-dom/client'
 
import {AddPost, AllPosts, App, EditPost, Home, LoginPage, Postpage, SignupPage, Authlayout } from './components/index.js'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/Store.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: (
                <Authlayout authentication={false}>
                    <LoginPage/>
                </Authlayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <Authlayout authentication={false}>
                    <SignupPage />
                </Authlayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AllPosts />
                </Authlayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <Authlayout authentication>
                    {" "}
                    <AddPost />
                </Authlayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <Authlayout authentication>
                    {" "}
                    <EditPost />
                </Authlayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Postpage />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
