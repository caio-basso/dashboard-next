import { Box, Text } from '@chakra-ui/react';
import { IoDiamondOutline } from 'react-icons/io5';

export default function Logo() {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
    >
      <IoDiamondOutline size={25} color="#6B46C1" />
      <Text
        fontSize="2xl"
        fontFamily="Roboto"
        fontWeight="thin"
        pl={2}
        color={'purple.600'}
      >
        Clothie
      </Text>
    </Box>
  );
}
