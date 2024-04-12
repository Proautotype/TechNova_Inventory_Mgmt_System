import React from "react";
import ids from "../../utils/@ids";
import {Link, useLoaderData} from "react-router-dom";
import {GitHubCommit} from "../../utils/@types";

const Index = () => {
    const loaderData = useLoaderData() as GitHubCommit;
    return <div data-testid={ids.pages.version}>
        <span>Last Build Status</span>
        <img src={"https://github.com/Proautotype/TechNova_Inventory_Mgmt_System/workflows/CI/CD/badge.svg"}
             alt={"build status"}/>
        <fieldset>
            <legend>
                GitHub Information
            </legend>
            <data>
                <div>
                    <span>Branch</span>
                    <h3 style={{display:"inline-block", marginLeft: 5}}>Main</h3>
                </div>
                <div>
                    <span>Commit Message</span>
                    <h3 style={{display:"inline-block", marginLeft: 5}}>{loaderData.commit.message}</h3>
                </div>
                <div>
                    <span>Commit SHA</span>
                    <h3 style={{display:"inline-block", marginLeft: 5}}>{loaderData.sha}</h3>
                </div>
            </data>
        </fieldset>
    </div>
}

export default Index;