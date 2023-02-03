import SidebarNavbar from "@/components/SidebarNavbar";
import {Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useColorModeValue} from "@chakra-ui/react";
import NextLink from "next/link";
import nestApi from "@/axios/config";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";

type Product = {
    _id: string;
    name: string;
    sku: string;
    quantity: number;
    images: string[];
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: string;
}

type ProductProps = {
    products: Product[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const response = await nestApi.get('/products');
        return {
            props: {
                products: response.data
            },
        };
    }catch(error) {
        console.log(error);
    }
}

export default function UsersIndex({ products }: ProductProps) {
    return (
        <SidebarNavbar>
            <TableContainer>
                <Table
                    variant={'simple'}
                    size={'md'}
                    border={'2px'}
                    borderRadius={'lg'}
                    borderColor={useColorModeValue('primary.200', 'primary.800')}
                    colorScheme={'blackAlpha'}
                    style={{ borderCollapse: 'separate' }}
                    bg={useColorModeValue('primary.200', 'primary.800')}>
                    <Thead
                        bg={useColorModeValue('primary.300', 'primary.1000')}
                        color={useColorModeValue('primary.200', 'primary.800')}>
                        <Tr>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Nome</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Sku</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Quantity</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Featured</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {products.map((product: Product) =>  (
                                <Tr key={product._id}>
                                    <Td>{product.name}</Td>
                                    <Td>{product.sku}</Td>
                                    <Td>{product.quantity}</Td>
                                    <Td>{product.isFeatured}</Td>
                                    <Td><NextLink href={"/products/" + product._id}>Editar</NextLink></Td>
                                </Tr>
                            )
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </SidebarNavbar>
    )
}