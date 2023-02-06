import SidebarNavbar from '@/src/components/SidebarNavbar';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import nestApi from '@/src/axios/config';
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { Order } from '@/pages/orders';

export type User = {
  _id: string;
  name: string;
  age: number;
  email: string;
  password: string;
  shippingAddress: string[];
  billingAddress: string[];
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
  __v: string;
};

type UserProps = {
  users: User[];
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await nestApi.get('/users');
    return {
      props: {
        users: response.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default function UsersIndex({ users }: UserProps) {
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
          bg={useColorModeValue('primary.200', 'primary.800')}
        >
          <Thead
            bg={useColorModeValue('primary.300', 'primary.1000')}
            color={useColorModeValue('primary.200', 'primary.800')}
          >
            <Tr>
              <Th color={useColorModeValue('primary.800', 'primary.400')}>
                Nome
              </Th>
              <Th color={useColorModeValue('primary.800', 'primary.400')}>
                Idade
              </Th>
              <Th color={useColorModeValue('primary.800', 'primary.400')}>
                Email
              </Th>
              <Th color={useColorModeValue('primary.800', 'primary.400')}>
                Ações
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user: User) => (
              <Tr key={user._id}>
                <Td>{user.name}</Td>
                <Td>{user.age}</Td>
                <Td>{user.email}</Td>
                <Td>
                  <NextLink href={'/users/' + user._id}>Editar</NextLink>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </SidebarNavbar>
  );
}
