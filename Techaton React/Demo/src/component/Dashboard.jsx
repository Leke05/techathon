import { Button, Flex, Heading, HStack, Text, VStack} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { useNavigate} from "react-router-dom"


const Dashboard = () => {
  const [userdata, setuserData] = useState({});
  const navigate = useNavigate();
  useEffect (() => {
   const session = sessionStorage.getItem("info");
   const user = JSON.parse(session)
   setuserData(user);
  }, [])
  return (
    <Flex w={"100%"} h={"100%"}>
      <HStack ml={"50px"} w={"50px"}>
      <Heading>Profile</Heading>
      </HStack>

      <Flex>
      <VStack mt={"30px"}>
      <Text>Firstname: {userdata.firstname}</Text>
       <Text>Lastname: {userdata.lastname}</Text>
       <Text>Username: {userdata.username}</Text>
       <Text>Email: {userdata.email}</Text>
       <Text>Password: {userdata.password}</Text>
       <Text>Confirm Password: {userdata.confirmpassword}</Text>
       <Text>Phonenumber: {userdata.phonenumber}</Text>
       <Text>Description: {userdata.description}</Text>
       <Text>Gender: {userdata.select}</Text>
        <Button colorScheme={"red"} onClick={() =>{
          sessionStorage.removeItem("username");
          navigate("/login")
        }}>Logout</Button>
      </VStack>
      </Flex>

    </Flex>
  )
}

export default Dashboard