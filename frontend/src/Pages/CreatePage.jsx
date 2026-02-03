import { Container, Input, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";
import { useState } from "react";
import { useProductStore } from "../store/product";
import toast from 'react-hot-toast';

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    
    if (!success) {
      toast.error(message, {
        duration: 4000,
        style: {
          background: '#F56565',
          color: 'white',
        },
      });
    } else {
      toast.success('Product created successfully', {
        duration: 4000,
        style: {
          background: '#48BB78',
          color: 'white',
        },
      });
      
      setNewProduct({
        name: "",
        price: "",
        image: "",
      });
    }
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"} 
          bg={useColorModeValue("white", "gray.800")}
          p={6} 
          rounded={"lg"} 
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder='Product Name'
              name='name'
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
            />
            <Input
              placeholder='Price'
              name='price'
              type='number'
              value={newProduct.price}
              onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
            />
            <Input
              placeholder='Image URL'
              name='image'
              value={newProduct.image}
              onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
            />

            <Button colorScheme='blue' onClick={handleAddProduct} w='full'>
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;