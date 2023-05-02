import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import {SelectExample} from 'components/SelectButton'
import {AddList} from 'components/AddSub'
import Table from 'components/Table'

import React, { useRef, useState } from 'react'
import './App.css'
import Card from 'react-bootstrap/Card'


function CRUD() {
    const list = [
        {
            id: 1, 
            name: "Bathroom",
            price: "2222"
        },
        {
            id: 2, 
            name: "Library",
            price: "2445"
        },
    ]
   
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    const [cardTitle, setCardTitle] = useState("CRUD Table")

    const handleCardTitleChange = (event) => {
        setCardTitle(event.target.value)
    }

    function handleEdit(id) {
        setUpdateState(id)
    }

    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }

    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, price: price} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }

    return (
        <Card>
            <Card.Header>
             <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "20px" }}>
                <Card.Title style={{paddingTop:"150px"}}>      
                              
                   <input type="text" value={cardTitle} onChange={handleCardTitleChange} placeholder="Enter Realestate" />
                </Card.Title>
             </div>
            <Card.Body>      
            <SelectExample/>          
                <div className='crud'>
                    <div>
                    <AddList setList={setList}/>
                    <form onSubmit={handleSubmit}>
                    <Table lists={lists} updateState={updateState} handleEdit={handleEdit} handleDelete={handleDelete} setList={setList}/>
                    </form>
                    </div>
                </div>
                
            </Card.Body>
            </Card.Header>
        </Card>
    )
}

export default CRUD;
