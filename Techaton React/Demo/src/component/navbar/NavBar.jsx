import React from 'react'
import { Flex, Heading, HStack, Spacer} from '@chakra-ui/react'
import {NavLink, useLocation} from 'react-router-dom'
import { useState } from 'react'

const NavBar = () => {
  const [nav, setNav] = useState([]);
  const location = useLocation();
  const isActiveHash = location.hash ==="#home";
  const isActivePath = location.search ==="/";
  return (
    <Flex w={'100%'} h={'10vh'}>
    <Flex justifyContent={'center'} align={'center'} gap={5} w={'1380px'}bg={'gray'}>
      <Heading my={'20px'} pl={'40px'} fontSize={'30px'} fontStyle={'italic'} color={'#007acc'}>Techaton</Heading>
      <Spacer/>
      <HStack alignContent={'center'} w={'30%'} justifyContent={'space-between'}  mt={'20px'} mx={'60px'}>
        <NavLink style={({isActive}) => isActive? {color: 'red'} : {color: '#fff'}} to={'/'}>Home</NavLink>
        <NavLink style={({isActive}) => isActive? {color: 'red'} : {color: '#fff'}} to={'/products'}>Products</NavLink>
        <NavLink style={({isActive}) => isActive? {color: 'red'} : {color: '#fff'}} to={'/register'}>Register</NavLink>
        <NavLink style={({isActive}) => isActive? {color: 'red'} : {color: '#fff'}} to={'/login'}>Login</NavLink>
        <NavLink style={({isActive}) => isActive? {color: 'red'} : {color: '#fff'}} to={'/dashboard'}>Dashboard</NavLink>
      </HStack>
    </Flex>
    </Flex>
  )
}

export default NavBar