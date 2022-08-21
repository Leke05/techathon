import { Flex, HStack, Text, VStack, Link as Links, Spacer, Image} from '@chakra-ui/react'
import React from 'react'
import {FiPhoneCall} from 'react-icons/fi'
import {AiTwotoneMail} from 'react-icons/ai'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialTwitter} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'

const Footer = () => {
  return (
    <Flex w={'100%'} bg={'#e84914'}>
        <HStack w={'80%'} my={'30px'}>
            <VStack mx={'30px'}>
            <Image src={"./IMG/logo.svg"} w={"100px"}/>
                <Text mx={'30px'} ><FiPhoneCall size={'40px'} color={'teal'}/>Phone: +1-543-123-4567</Text>
                <Links ><AiTwotoneMail size={'40px'}  color={"teal"}/>example@techaton.com</Links> 
            </VStack>
            <Spacer/>
            <VStack>
                <Links>About US</Links>
                <Links>Jobs</Links>
                <Links>Press</Links>
                <Links>Blog</Links>
            </VStack>
            <Spacer/>
            <VStack m>
                <Links>Contant Us</Links>
                <Links>Terms</Links>
                <Links>Privacy</Links>
            </VStack>
            <Spacer/>
            <HStack>
              <TiSocialFacebook size={'48px'}/>
              <TiSocialTwitter size={'48px'}/>
              <TiSocialInstagram size={'48px'}/>
              <TiSocialLinkedin size={'48px'}/>
            </HStack>
        </HStack>
    </Flex>
  )
}

export default Footer