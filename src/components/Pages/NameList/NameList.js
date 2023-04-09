import React, { useState, useEffect } from "react";
import NameListItem from "./NameListItem";

function NameList() {

    const [loadData, setLoadData] = useState(new Date);
    const [nameList, setNameList] = useState([
      {
        "id": 1,
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "city": "Billings",
        },
        "email": "jennie.nichols@example.com",
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "picture": {
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
        },
      },
      {
          "id": 2,
          "name":{
              "title":"Miss",
              "first":"Justine",
              "last":"Grenz"
          },
          "location":{
              "city":"Bopfingen"
          },
          "email":"justine.grenz@example.com",
          "dob":{
              "date":"1992-07-25T06:28:11.285Z",
              "age":30
          },
          "picture":{
              "medium":"https://randomuser.me/api/portraits/med/women/65.jpg"
          },
      },
      {
          "id": 3,
          "name": {
              "title": "Mr",
              "first": "Uriel",
              "last": "Lopes"
            },
            "location": {
              "city": "São José de Ribamar",
            },
            "email": "uriel.lopes@example.com",
            "dob": {
              "date": "1958-12-18T10:27:57.285Z",
              "age": 64
            },
            "picture": {
              "medium": "https://randomuser.me/api/portraits/med/men/61.jpg",
            },
      }
     ]);

     useEffect(() => {
      fetch(`https://randomuser.me/api`)
        .then((response) => {
          return response.json();
        }).then(responseData => {
          setNameList((nameList) => [...nameList, responseData.results[0]])
        });
     }, [loadData]);

       const nameListComponent = () => {
        return nameList.map((aName) =>  {
        return (
            <NameListItem 
                key= {aName.id}
                name={`${aName.name.first} ${aName.name.last}`} 
                city={aName.location.city} 
                email={aName.email} 
                birthday={aName.dob.date} 
                avatar={aName.picture.medium}
            />
        );
        });
       };

       const handleClick = () => {
        setLoadData(new Date)
       }

    return(
        <React.Fragment>
          <div className="container mt-4">
            <button className='btn btn-primary' onClick={handleClick}>Add User</button>
            <ul className="list-group">
               {nameListComponent()}
            </ul>
            </div>
        </React.Fragment>
    )
}

export default NameList;