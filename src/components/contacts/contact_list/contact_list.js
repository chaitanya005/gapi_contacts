import React, { Component } from 'react'
import classes from "./contact_list.css"


class Clist extends Component {
    
    state = {
        loadMore: false,
        Contacts : [
            {id: '1', name: 'ran', email: 'ran@gmail.com', number: '8123486687', url: '/img/face1.jpg'},
            {id: '2', name: 'vandy', email: 'vandy@gmail.com', number: '96961658784', url: '/img/face2.jpg'},
            {id: '3', name: 'manu', email: 'manu@gmail.com', number: '74520139524', url: '/img/face3.png'},
            {id: '4', name: 'cathe', email: 'cathe@gmail.com', number: '8255253952', url: '/img/face4.jpg'},
            {id: '5', name: 'chai', email: 'chai@gmail.com', number: '94629856636', url: '/img/face5.jpg'},
            {id: '6', name: 'purva', email: 'purva@gmail.com', number: '83546941464', url: '/img/face6.jpg'},
            {id: '7', name: 'benny', email: 'benny@gmail.com', number: '8974689487', url: '/img/face7.jpg'},            
        ],
    }
    render() {
        let contacts = this.state.Contacts
        return (
            
            <div>
          
          
                <div className = {classes.header}>Contacts</div>
                <div className = {classes.total}>(7)</div>
                <div className = {classes.colums}>
                    <div className = {classes.colName}>Name
                        <div className = {classes.colEmail}>Email
                            <div className = {classes.colNumber}>Phone Number</div>
                        </div>
                    </div>
                </div>

         
             
                {contacts.map((contact,i) =>
                    <div key = {contact.id}>
                    <div className = {classes.card}>
                        <div className = {classes.name}>{contact.name}</div>
                        <img className = {classes.img} src = {contact.url} alt = '' />
                        <div className = {classes.email}>{contact.email}</div>
                        <div className = {classes.number}>{contact.number}</div>
                    </div>
                    
                    </div>
                )}
                
               
            </div>
        )
    }
}

export default Clist