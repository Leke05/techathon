import React from 'react'
import {Flex, Heading, Image, Text, VStack} from '@chakra-ui/react'

const Productive = () => {
  return (
    <Flex style={{backgroundImage: `url(${'/images/showcase.jpg'})`, backgroundRepeat: '0', backgroundSize: 'cover', }} minHeight={'630px'}>
      <VStack mt={'80px'}>
        <Heading color={'#ef34fe'} fontWeight={'bold'}>Affordable Professonal Website</Heading>
        <Text px={"60px"} color={'#ef34fe'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus architecto totam id, delectus ipsa culpa earum ratione rem autem nesciunt commodi, beatae sed adipisci eos eligendi mollitia neque. Maxime, voluptas!</Text>
     </VStack>
    </Flex>
  )
}

export default Productive