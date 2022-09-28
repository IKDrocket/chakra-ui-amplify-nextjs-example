import { SettingsIcon } from '@chakra-ui/icons';
import {
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { useAuth } from './hooks/useAuth';
import { Logout } from './Logout';

export const Settings = () => {
  const { user } = useAuth();

  return (
    <Menu placement="bottom">
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<SettingsIcon />}
        variant="outline"
        _active={{ bg: '#aca995' }}
        color={useColorModeValue('gray.800', 'gray.300')}
      />
      <MenuList mr={4}>
        <MenuItem>
          <Box>
            <Text>{user?.name}</Text>
            <Text>{user?.email}</Text>
          </Box>
        </MenuItem>
        <MenuItem>
          <Logout />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};;
