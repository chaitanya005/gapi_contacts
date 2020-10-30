// import React,  {useState, useCallback, useEffect, useRef } from "react"
// import classes from "./Scrollbar.css"

// const SCROLL_MAX_HEIGHT = 20;

// const CustomScrollDiv = ({children, className, ...restProps}) => {
//     const [scrollBoxheight, setScrollBoxHeight ] = useState(SCROLL_MAX_HEIGHT)
//     const [scrollBoxTop, setScrollBoxTop ] = useState(0);

//     const handleScroll =  useCallback(() => {
//         if (!scrollHostRef) {
//             return;
//         }

//         const scrollHostElement = scrollHostRef.current
//         const { scrollTop, scrollHeight, offsetHeight } = scrollHostElement

//         let newTop = (parseInt(scrollTop, 10) / parseInt(scrollHeight, 10)) * offsetHeight

//         console.log(newTop, scrollBoxheight, scrollTop, scrollHeight, offsetHeight)

//         console.log(offsetHeight - scrollBoxheight)

//         newTop = Math.min (newTop, offsetHeight - scrollBoxheight)
//         setScrollBoxTop(newTop)
//     }, [])

//     const scrollHostRef = useRef();
//     useEffect( () => {
//         const scrollHostElement = scrollHostRef.current
//         const { clientHeight, scrollHeight } = scrollHostElement
//         const scrollBoxPercentage = clientHeight / scrollHeight  
//         const scrollbarHeight = Math.max(
//             scrollBoxPercentage * clientHeight,
//             SCROLL_MAX_HEIGHT
//         )

//         setScrollBoxHeight(scrollbarHeight)
//         scrollHostElement.addEventListener("scroll", handleScroll, true)
//         return function cleanUp() {
//         }
//     }, [])

//     return (
//         <div className = {classes.scrollHostContainer}>
//             <div ref = {scrollHostRef} {...restProps} className = {classes.scrollhost}>
//                 {children}
//             </div>
//             <div className = {classes.scrollbar} >
//                 <div className = {classes.scroller} style = {{height: scrollBoxheight, top: scrollBoxTop}} ></div>
//             </div>
//         </div>
//     )
// }

// export default CustomScrollDiv;