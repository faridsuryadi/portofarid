import { Box, Heading } from "@chakra-ui/react"
import { Footer } from "../../components/Footer"
import { Project } from "../../components/Project"

export const HomeView = () =>{
    return (
        <>
        <Box display={"flex"} flexDir={"column"}>
            <Box flex={1} position={"relative"}>
        <Project/>
        <Project/>
            </Box>
        </Box>
        {/* <Footer/> */}
        </>
    )
}