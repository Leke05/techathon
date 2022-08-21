import React from 'react'
import {Button, Checkbox, Flex, FormControl, FormLabel, HStack, Input, Select, Textarea, VStack, Link as Links, Text} from '@chakra-ui/react'
import { useState } from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Register = () => {
  //Hooks
  const navigate = useNavigate()
  //initial value
  const initialValue ={
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    description: '',
    password: '',
    confirmpassword: '',
    phonenumber: '',
    checked: false,
    select: '',
  };
  const [contactinfo, setContactInfo] = useState(initialValue);
  const [show, setShow] = useState(false);


 const {firstname, lastname, username, password, email, phonenumber, confirmpassword, description,select,checked} = contactinfo
  const handleSubmit = (event) =>{
    event.preventDefault();
   const info = JSON.stringify(contactinfo);
   sessionStorage.getItem("info") === null ? sessionStorage.setItem('info', info) :(sessionStorage.removeItem("info"), sessionStorage.setItem("info", info));
   if(password === confirmpassword && username.length > 8){
    navigate("/login") 
   }else{
    alert("Incorrect Password")
   }
  };

  const handleChange = (e) =>{
    const {name, value,type, checked} = e.target
    setContactInfo({...contactinfo, [name]: type === "checkbox" ? checked :value});
  }
  return (
    <Flex w={'100%'}>
        <VStack w={'100%'} m={'auto'} as={'form'} my={'50px'} onSubmit={handleSubmit}> 
          <HStack w={'700px'} gap={5}>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Firstname</FormLabel>
              <Input type={"text"} placeholder={'Enter firstname'} value={firstname} name="firstname" onChange={handleChange} required/>
            </FormControl>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Lastname</FormLabel>
              <Input type={"text"} placeholder={'Enter lastname'} value={lastname}  name="lastname" onChange={handleChange} required/>
            </FormControl>
          </HStack>
          <HStack w={'700px'} gap={5}>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Username</FormLabel>
              <Input type={"text"} placeholder={'Enter username'} value={username}  name="username" onChange={handleChange} required/>
            </FormControl>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Email</FormLabel>
              <Input type={"email"} placeholder={'Enter email'} value={email}  name="email" onChange={handleChange} required/>
            </FormControl>
          </HStack>
          <HStack w={'700px'} gap={5}>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Phonenumber</FormLabel>
              <Input type={"number"} placeholder={'+234'} value={phonenumber}  name="phonenumber" onChange={handleChange} required/>
            </FormControl>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Discription</FormLabel>
              <Textarea size={'lg'} type={"text" } value={description}  name="description" onChange={handleChange}/>
            </FormControl>
          </HStack>
          <HStack w={'700px'} gap={5}>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>Password</FormLabel>
              <Input type={show? 'text' : "password"} placeholder={'Enter password'} value={password}  name="password" onChange={handleChange} required/>
            </FormControl>
            <FormControl w={'50%'}>
              <FormLabel textAlign={"center"}>confirm Password</FormLabel>
              <Input type={show? 'text' : "confirmpassword"} placeholder={'Enter confirm password'} value={confirmpassword}  name="confirmpassword" onChange={handleChange} required/>
            </FormControl>
            <Button type={'button'} colorScheme={'facebook'} onClick={()=>setShow(prev=>!prev)} >Show</Button>
          </HStack>
      
            <Select placeholder={'Chose Gender'} w={'30%'} name="select" value={select} onChange={handleChange}>
            <option value={'male'}>Male</option>
            <option value={'female'}>Female</option>
            </Select>

            <Checkbox type={'checked'}  name="checked" checked={checked} onChange={handleChange}>Agree to Term and Condition</Checkbox>
            <Button type={'submit'} colorScheme={'facebook'}>Submit</Button>

            <Text>already have an account?<Link to={"/login"}>Login</Link></Text>
        </VStack>
    </Flex>
  )
}

export default Register