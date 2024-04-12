import Index  from "./index"
import {render, screen} from "@testing-library/react"
import ids from "../../utils/@ids";

test("render version page", async ()=>{
    //given version page is rendered
    render(<Index/>)
    //when version page is shown
    const pageElement = await screen.findByTestId(ids.pages.version);
    //then expect page id to exist
    expect(pageElement).toBeInTheDocument();
})