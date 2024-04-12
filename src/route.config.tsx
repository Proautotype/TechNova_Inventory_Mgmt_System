import {ActionFunctionArgs, createHashRouter, RouteObject} from "react-router-dom";
import {nanoid} from "@reduxjs/toolkit";
import Version from "./pages/Version";
import App from "./App";

const repoOwner = 'Proautotype';
const repoName = 'TechNova_Inventory_Mgmt_System';
const branch = 'main';
const url = `https://api.github.com/repos/${repoOwner}/${repoName}/commits/${branch}`;


export const routerHashObject: RouteObject[] = [
    {
        id: nanoid(),
        path:"/",
        element: <App/>
    },
    {
        id: nanoid(),
        path:"/version",
        element: <Version/>,
        loader: async function (input) {
            console.log(input)
            return fetch(url,{
                method:"get"
            })
        },
        action: function (input) {
            console.log(input);
            return new Promise(()=>{})
        }
    }
]

export default {}