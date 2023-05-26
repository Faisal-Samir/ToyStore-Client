import { useEffect } from "react"

const UseTitle = (title) =>{
    useEffect(() =>{
        document.title= `Toyosis | ${title}`;
    },[title])
}
export default UseTitle;