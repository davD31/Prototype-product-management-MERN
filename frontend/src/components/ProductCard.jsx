import { 
  Box, 
  Heading, 
  HStack, 
  IconButton, 
  Image, 
  Text,
  VStack, 
  Input,
  Button
} from '@chakra-ui/react';
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogTitle,
} from '@chakra-ui/react';
import { Trash2, Pencil } from 'lucide-react';
import { useColorModeValue } from '../components/ui/color-mode';
import { useProductStore } from '../store/product';
import toast from 'react-hot-toast';
import { useState } from 'react';

const ProductCard = ({product}) => {
  const textColor = useColorModeValue("gray.600", "gray.200");
  const bgColor = useColorModeValue("white", "gray.800");

  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isOpen, setIsOpen] = useState(false);
  
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const { deleteProduct, updateProduct } = useProductStore();
  
  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    
    if (!success) {
      toast.error(message, {
        duration: 3000,
      });
    } else {
      toast.success("Product deleted successfully", {
        duration: 3000,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    onClose();
    
    if (!success) {
      toast.error(message, {
        duration: 3000,
      });
    } else {
      toast.success("Product updated successfully", {
        duration: 3000,
      });
    }
  };

  return (
    <Box
      shadow='lg'
      rounded='lg'
      overflow='hidden'
      transition='all 0.3s'
      _hover={{ transform: "translateY(-5px)", shadow: "xl"}}
      bg={bgColor}
    >
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover'/>

      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>
          {product.name}
        </Heading>

        <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
          ${product.price}
        </Text>

        <HStack spacing={2}>
          <IconButton 
            aria-label='Edit product'
            colorScheme='blue'
            onClick={onOpen}
            size="sm"
          >
            <Pencil size={18} />
          </IconButton>
          
          <IconButton 
            aria-label='Delete product'
            onClick={() => handleDeleteProduct(product._id)}
            colorScheme='red'
            size="sm"
          >
            <Trash2 size={18} />
          </IconButton>
        </HStack>
      </Box>

      <DialogRoot open={isOpen} onOpenChange={(details) => setIsOpen(details.open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Mettre à jour le produit</DialogTitle>
            <DialogCloseTrigger />
          </DialogHeader>
          <DialogBody>
            <VStack spacing={4}>
              <Input
                placeholder='Nom du produit'
                name='name'
                value={updatedProduct.name}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
              />
              <Input
                placeholder='Price'
                name='price'
                type='number'
                value={updatedProduct.price}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
              />
              <Input
                placeholder='Image URL'
                name='image'
                value={updatedProduct.image}
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
              />
            </VStack>
          </DialogBody>

          <DialogFooter>
            <Button colorScheme='blue' mr={3} onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
              Mettre à jour
            </Button>
            <Button variant='ghost' onClick={onClose}>
              Annuler
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogRoot>
    </Box>
  );
};

export default ProductCard;