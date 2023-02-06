import React, { ReactNode } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Button,
} from '@chakra-ui/react';
import { HiOutlineUsers } from 'react-icons/hi';
import { RxDashboard } from 'react-icons/rx';
import { BsHandbag } from 'react-icons/bs';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ColorModeSwitcher } from '@/src/components/ColorModeSwitcher';
import Logo from '@/src/components/Logo';
import NextLink from 'next/link';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Dashboard', icon: RxDashboard, href: '/dashboard' },
  { name: 'Users', icon: HiOutlineUsers, href: '/users' },
  { name: 'Products', icon: BsHandbag, href: '/products' },
  { name: 'Orders', icon: RiMoneyDollarCircleLine, href: '/orders' },
];

export default function SidebarNavbar({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('primary.100', 'primary.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="xs"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue('primary.200', 'primary.1000')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Logo />
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NextLink key={link.name} href={link.href} passHref legacyBehavior>
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        </NextLink>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'purple.400',
          color: 'primary.100',
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: 'primary.100',
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <HStack spacing={{ base: '0', md: '6' }}>
        <ColorModeSwitcher />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton py={2} _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('primary.200', 'primary.900')}
              borderColor={useColorModeValue('primary.100', 'primary.700')}
            >
              <MenuItem
                bg={useColorModeValue('primary.200', 'primary.900')}
                borderColor={useColorModeValue('primary.200', 'primary.700')}
                _hover={{ bg: 'purple.400' }}
              >
                Profile
              </MenuItem>
              <MenuDivider />
              <MenuItem
                bg={useColorModeValue('primary.200', 'primary.900')}
                borderColor={useColorModeValue('primary.200', 'primary.700')}
                _hover={{ bg: 'purple.400' }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
