import { Container, Flex, HStack, Text, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { PlusSquare, Moon, Sun } from 'lucide-react';
import { useColorMode, useColorModeValue } from '../components/ui/color-mode';


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    
    
    return <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base:"column",
                sm:"row"
            }}
        >
            <Text
                fontSize={{ base: "22", sm: "28"}}
                fontWeight={"bold"}
                textTransform={"uppercase"}
                textAlign={"center"}
                background={"linear-gradient(to right, cyan, blue)"}
                backgroundClip="text"
                WebkitBackgroundClip="text"
                WebkitTextFillColor="transparent"
            >
                <Link to={"/"}>Product Store</Link>
            </Text>
            
            <HStack spacing={2} alignItems={"center"}>
                <Link to={"/create"}>
                    <Button>
                        <PlusSquare size={20} />
                    </Button>
                </Link>
                
                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
            </HStack>
        </Flex>
    </Container>
}

export default Navbar;