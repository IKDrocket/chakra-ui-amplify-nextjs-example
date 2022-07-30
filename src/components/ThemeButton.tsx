import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, IconButton, useColorMode } from '@chakra-ui/react';

export const ThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="theme change"
      />
    </Box>
  );
};
