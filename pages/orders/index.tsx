import SidebarNavbar from "@/components/SidebarNavbar";
import {Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, useColorModeValue} from "@chakra-ui/react";
import NextLink from "next/link";
import nestApi from "@/axios/config";
import {GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult} from "next";

type Order = {
    _id: string;
    status: string;
    products: string[];
    user: string;
    /*createdAt: Date;*/
    __v: string;
}

type OrderProps = {
    orders: Order[];
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    try {
        const response = await nestApi.get('/orders');
        return {
            props: {
                orders: response.data
            },
        };
    }catch(error) {
        console.log(error);
    }
}

export default function UsersIndex({ orders }: OrderProps) {
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
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>User</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Status</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Products</Th>
                            <Th color={useColorModeValue('primary.800', 'primary.400')}>Ações</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {orders.map((order: Order) =>  (
                                <Tr key={order._id}>
                                    <Td>{order.user}</Td>
                                    <Td>{order.status}</Td>
                                    <Td>{order.products}</Td>
                                    <Td><NextLink href={"/orders/" + order._id}>Editar</NextLink></Td>
                                </Tr>
                            )
                        )}
                    </Tbody>
                </Table>
            </TableContainer>
        </SidebarNavbar>
    )
}