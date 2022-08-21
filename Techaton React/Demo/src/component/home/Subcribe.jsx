import React from 'react'
import { Flex, Heading, HStack, Image, Spacer, Text, VStack } from '@chakra-ui/react'

const Subcribe = () => {
  return (
    <Flex w={'100%'}>
        <HStack w={'80%'} margin={'auto'}>
          <VStack my={'40px'}>
            <Image src={"./images/html logo.png"} mt={'20px'}/>
            <Heading fontSize={'20px'}>Html Markup language</Heading>
            <Text fontSize={'15px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel dignissimos, veritatis quae debitis culpa quaerat quos, error perferendis dolorum cupiditate, voluptatibus nemo fuga. Omnis vel alias voluptatibus aut voluptatem?</Text>
            </VStack>
            <Spacer/>
            <VStack>
            <Image src={"./images/css logo.png"} mt={'20px'}/>
            <Heading fontSize={'20px'}>Html Markup language</Heading>
            <Text  fontSize={'15px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel dignissimos, veritatis quae debitis culpa quaerat quos, error perferendis dolorum cupiditate, voluptatibus nemo fuga. Omnis vel alias voluptatibus aut voluptatem?</Text>
            </VStack>
            <Spacer/>
            <VStack>
            <Image src={"./images/graphic.jpg"} mt={'20px'}/>
            <Heading fontSize={'20px'}>Html Markup language</Heading>
            <Text  fontSize={'15px'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel dignissimos, veritatis quae debitis culpa quaerat quos, error perferendis dolorum cupiditate,</Text>
            </VStack>
        </HStack>
    </Flex>
  )
}

export default Subcribe