import { SafeParseReturnType, z } from 'zod';

export const createValidationResult = (
  result: SafeParseReturnType<unknown, unknown>
) => {
  const isInvalid = !result.success;
  const errorMessage = !result.success && result.error.errors[0].message;

  return {
    isInvalid,
    errorMessage,
  };
};

// 13桁の数字
export const isbnSchema = z
  .string()
  .regex(/^\d{13}$/, 'ISBNは13桁の数字で入力してください');

export const postBookSchema = z
  .object({
    isbn: isbnSchema,
  })
  .partial();
