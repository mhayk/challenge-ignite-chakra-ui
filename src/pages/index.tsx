import Head from 'next/head'
import Image from 'next/image'

import { Box, Divider, Flex, List, ListItem, Text } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import SwiperCore, {
  Navigation, Pagination, Keyboard
} from 'swiper/core';


// install Swiper modules
SwiperCore.use([Navigation, Pagination, Keyboard]);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="header"

        align="center"
        justifyContent="center"
        h="50"
      >
        <Image src="/images/logo.svg" alt="Logo" width={81} height={20} />
      </Flex>

      <Flex
        as="section"
        direction="column"
        bgImage="/images/mobile-hero-bg.jpg"
        padding="28px 26px 28px 16px"
      >
        <Text textStyle="h1">5 Continentes,<br />infinitas possibilidades.</Text>
        <Text textStyle="h2" marginTop="8px">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
      </Flex>

      <Flex direction="column" alignItems="center">
        <List display="flex" listStyleType="disc" flexWrap="wrap" padding="36px 50px 36px 50px" listStylePosition="inside">
          <ListItem color="orange.50" flex="60%" marginBottom="24px">
            <Box as="span" fontSize="18px" fontWeight="500" color="gray.200">vida noturna</Box>
          </ListItem>
          <ListItem color="orange.50" flex="40%" textAlign="right" >
            <Box as="span" fontSize="18px" fontWeight="500"
              color="gray.200">praia</Box></ListItem>
          <ListItem color="orange.50" flex="50%">
            <Box as="span" fontSize="18px" fontWeight="500" color="gray.200">moderno</Box></ListItem>
          <ListItem color="orange.50" flex="50%" textAlign="right" marginBottom="24px">
            <Box as="span" fontSize="18px" fontWeight="500" color="gray.200">clássico</Box></ListItem>
          <ListItem color="orange.50" flex="100%" textAlign="center">
            <Box as="span" fontSize="18px" fontWeight="500" color="gray.200">e mais...</Box></ListItem>
        </List>

        <Divider w="60px" mb="24px" />

        <Text color="gray.200" fontWeight="500" fontSize="20px">Vamos nessa?</Text>
        <Text color="gray.200" fontWeight="500" fontSize="20px" mb="20px">Então escolha seu continente</Text>
      </Flex>

      <Flex height="250px" mb="24px">
        <Swiper
          navigation={true} pagination={true} mousewheel={true} keyboard={true}
        >
          <SwiperSlide>
            <Flex height="100%" direction="column" justify="center" alignItems="center" bgImage="/images/mobile-europa.jpg">
              <Text fontSize="24px" fontWeight="700" color="gray.50">Europa</Text>
              <Text fontSize="14px" fontWeight="700" color="gray.100">O continente mais antigo</Text>
            </Flex>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/mobile-europa.jpg" alt="Europa" layout="fill" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/images/mobile-europa.jpg" alt="Europa" layout="fill" />
          </SwiperSlide>
        </Swiper>
      </Flex>


    </div >
  )
}
