import { Box, Heading } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"

export const HomeView = () =>{
    return (
        <>
        <Box minH={"100vh"} display={"flex"} flexDir={"column"}>
            <Box flex={1}>

        <Heading>
            Muhammad Farid Suryadi
        </Heading>
            </Box>
        <Footer/>
        </Box>
        </>
    )
}