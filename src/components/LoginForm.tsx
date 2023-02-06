import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Link,
    Button,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

export default function LoginForm() {
    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('primary.100', 'primary.900')}>
            <Stack spacing={10} mx={'auto'} maxW={'lg'} py={12} px={6} w={'md'}>
                <Stack align={'center'}>
                    <Heading
                        fontSize={'4xl'}>
                        E-Commerce Dashboard
                    </Heading>
                </Stack>

                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('primary.50', 'primary.800')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Senha</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Link
                                    color={'purple.600'}
                                    _hover={{color: 'purple.500'}}>
                                    Esqueceu a senha?
                                </Link>
                            </Stack>
                            <Button
                                bg={'purple.600'}
                                color={'white'}
                                _hover={{bg: 'purple.500'}}>
                                Entrar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
