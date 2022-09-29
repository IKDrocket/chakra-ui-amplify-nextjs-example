import { QuestionIcon } from '@chakra-ui/icons';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';

import { createValidationResult } from '@/lib/validation';

type Props = {
  formLabel: string;
  placeholder?: string;
  helpMessage?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validationSchema?: any;
};

export const InputForm = ({
  formLabel,
  placeholder = '',
  helpMessage = '',
  value,
  onChange,
  validationSchema = null,
}: Props) => {
  const result = validationSchema && validationSchema.safeParse(value);
  const { isInvalid, errorMessage } =
    validationSchema && createValidationResult(result);

  return (
    <FormControl id={formLabel} isInvalid={isInvalid}>
      <FormLabel
        fontSize="14px"
        htmlFor={formLabel}
        fontWeight="600"
        lineHeight="21px"
      >
        <HStack>
          <Text>{formLabel}</Text>
          <Tooltip label={helpMessage} hasArrow placement="right">
            <QuestionIcon boxSize="13px" />
          </Tooltip>
        </HStack>
      </FormLabel>
      <Input
        width="192px"
        height="32px"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isInvalid && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
