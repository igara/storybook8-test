import * as yup from 'yup';
import { InferType } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const AddUserFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('入力してください。')
    .max(30, '30文字以内で入力してください。'),
  age: yup
    .number()
    .typeError('入力してください。')
    .transform((value) => {
      return (isNaN(value) ? undefined : parseFloat(value))
    })
    .required('入力してください。')
    .max(999, '3桁以内で入力してください。'),
  description: yup
    .string()
    .required('入力してください。')
    .max(100, '100文字以内で入力してください。'),
});
export type AddUserFormType = InferType<
  typeof AddUserFormSchema
>;
export const AddUserFormResolver = yupResolver(
  AddUserFormSchema,
);
