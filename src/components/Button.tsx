import { Button as ChakraButton } from '@chakra-ui/react';

type Props = {
  label: string;
  onClick: () => void;
  isPrimary?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  onClick,
  isPrimary = false,
  isLoading = false,
  disabled = false,
}: Props) => {
  return (
    <ChakraButton
      colorScheme={isPrimary ? 'red' : 'gray'}
      variant="solid"
      border="1px"
      size="sm"
      mr={3}
      onClick={onClick}
      isLoading={isLoading}
      disabled={disabled}
    >
      {label}
    </ChakraButton>
  );
};
