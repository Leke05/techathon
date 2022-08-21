import React from 'react'
import { Box, Button, Flex, FormControl, Heading, HStack, Input, Spacer  } from '@chakra-ui/react'

const Newsletter = () => {
  return (
    <Flex w={'100%'} bg={'#35424a'}>
        <Flex w={'1000px'}>
        <Heading fontSize={'20px'} my={'50px'} pl={'60px'} color={'#fff'}>Subscribe to Newsletter</Heading>
        <Spacer/>
        <Box flexDirection={'row'} as={'form'} ml={'90px'}>
            <FormControl gap={2} my={'50px'}>
                <Input type={"email"} placeholder={"enter email"}/>
                <Button type='subscribe' colorScheme={'facebook'} position={'relative'} right={'-345'} top={'-39'}>Subscribe</Button>
            </FormControl>
     </Box>
</Flex>
    
    </Flex>
  )
}

export default Newsletter