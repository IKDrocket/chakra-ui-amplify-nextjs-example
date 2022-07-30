import { Flex, HStack, Spacer, Text } from '@chakra-ui/react';

import { ThemeButton } from './ThemeButton';

export const Header = () => {
  return (
    <Flex justifyContent="flex-end" alignItems="center" p={2}>
      <Text fontWeight="bold">chakra-ui amplify nextjs example</Text>
      <Spacer></Spacer>
      <HStack>
        <ThemeButton />
      </HStack>
    </Flex>
  );
};
