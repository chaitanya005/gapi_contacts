import React from 'react'
import classes from "./Navbar.css"

const Navbar = ( props ) => {
    return (
        <div className = {classes.Navbar}>
            <div>
                <svg width="255" height="78" viewBox="0 0 255 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.6" d="M198.968 -45.7106C218.956 -3.09177 236.394 82.0419 150.931 122.123C108.358 142.089 19.9371 99 19.9374 60.7641C19.9374 32.9115 32.3891 32.4124 74.9619 12.4464C117.535 -7.51964 178.98 -88.3295 198.968 -45.7106Z" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="11.0295" y1="19.3265" x2="191.153" y2="-64.0925" gradientUnits="userSpaceOnUse">
                <stop stopColor="#097AFF"/>
                <stop offset="1" stopColor="#0041E8"/>
                </linearGradient>
                </defs>
                </svg>
            </div>

            <div className = {classes.name}>{props.name}</div>
            <div><img className = {classes.img} src = {props.img} alt = '' /></div>
            <div className = {classes.mail}>{props.email}</div>

            <div>
                <div className = {classes.shapeCircle} onClick = {props.signout}>
                    <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.63275 22.4757C4.65476 28.684 11.5381 32.0118 18.2807 30.5244C25.0233 29.0369 29.8676 23.1219 29.9971 16.2184C30.1266 9.31496 25.5075 3.22243 18.8255 1.48315C12.1434 -0.256124 5.14011 2.81121 1.88739 8.90174" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className = {classes.shapeRightAngle} onClick = {props.signout}>
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.06744 12.2723L6.40201 6.93778L1.06744 1.60321" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className = {classes.shapeLine} onClick = {props.signout}>
                    <svg width="25" height="2" viewBox="0 0 25 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 0.937744H23.4052" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Navbar