import React, { useState } from 'react'
import { Button, Flex, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import { useEffect } from 'react';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
  const loginDetails = {
    username: '',
    password: ''
  };


  const [userDetails, setUserDetails] = useState(loginDetails);
  const [userdata, setuserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const userlogin = sessionStorage.getItem("info");
    const data = JSON.parse(userlogin);
    setuserData(data);
  },[])
 
 
  const {username, password} = userDetails


  const handleSubmit = (e) => {
    e. preventDefault();
   if(userdata?.username === username && userdata?.password === password){
     sessionStorage.setItem("password", password); 
     navigate("/dashboard")
   }else{
    alert('Incorrect userdata');
   }
  }

  const handleChange= (e) => {
    const {name, value} = e.target
   setUserDetails({...userDetails, [name] :value});
  };

  return (
    <Flex w={'100%'}>
      <VStack  m={'auto'} my={'60px'} w={'1000px'} as={'form'} onSubmit={handleSubmit}>
      <FormControl w={'40%'}> 
        <FormLabel textAlign={'center'}>Username</FormLabel>
        <Input type={'text'} placeholder={"enter username"} name= "username" onChange={handleChange} value={username}/>
      </FormControl>
      <FormControl w={'40%'}>
        <FormLabel textAlign={'center'}>Password</FormLabel>
        <Input type={'password'} placeholder={"enter password"} name= "password" onChange={handleChange} value={password}/>
        <Button type={'button'} colorScheme={'facebook'}>Show</Button>
      </FormControl>
      <Button type={'login'} colorScheme={'facebook'}>Login!</Button>
      </VStack>
    </Flex>
  )
}

export default Login