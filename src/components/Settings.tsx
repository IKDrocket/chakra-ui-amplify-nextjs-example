import { SettingsIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react';

import { Logout } from './Logout';

export const Settings = () => {
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
          <Logout />
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
