import { Stack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react'

const Fetch = () => {

    const url = "https://random-data-api.com/api/v2/users?size=20"

    const [users, setUsers] = useState(null);

    const getData = async() =>{
        const res = await fetch(url);
         const data = await res.json();
         setUsers(data)
    }

    useEffect(() =>{
        // fetch(url).then((res) =>res.json()).then((data) =>{
        //  setUser(data);
        // }).catch((err) =>console.log(err));
        getData();
    }, []); 
      
    console.log(users);
    const renderUsers = users?.map((user) =>{
        console.log(user);
        return (
        <Stack key={user.id}>
            <Text>{user.email}</Text>
        </Stack>
        );
    })
  return 
    <div>{renderUsers}</div>;
  
};

export default Fetch