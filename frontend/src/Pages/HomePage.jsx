import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
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
          Les produits disponibles
        </Text>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3
          }}
          spacing={10}
          w={"full"}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
            Pas de produit disponible {" "}
            <Link to={"/create"}>
              <Text as='span' color='blue.500' _hover={{ textDecoration: 'underline'}} cursor='pointer'>
                Ajouter un produit
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default HomePage;