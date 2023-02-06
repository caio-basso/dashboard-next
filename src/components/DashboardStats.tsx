import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Stack,
  Center,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';

const stats = [
  { label: 'Total Subscribers', value: '71,887', growth: '1.12%' },
  { label: 'Avg. Open Rate', value: '56.87%', growth: '5.43%' },
  { label: 'Avg. Click Rate', value: '12.87%', growth: '-5.62%' },
];

export default function DashboardStats(): JSX.Element {
  return (
    <Box as="section" py={{ base: '4', md: '8' }}>
      <Container>
        <Stack spacing={8} direction={{ base: 'column', sm: 'row' }}>
          {stats.map(({ label, value, growth }) => (
            <Stat
              key={label}
              bg="primary.200"
              _dark={{ bg: 'primary.800' }}
              borderColor={'primary.300'}
              h={'200px'}
              borderRadius={'lg'}
              shadow={'lg'}
              display={'flex'}
              justifyContent={'center'}
              alignItems={'center'}
            >
              <StatLabel>{label}</StatLabel>
              <StatNumber>{value}</StatNumber>
              <StatHelpText>
                <StatArrow type="decrease" />
                {growth}
              </StatHelpText>
            </Stat>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
