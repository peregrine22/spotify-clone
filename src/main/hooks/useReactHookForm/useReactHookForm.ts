import { useCallback } from 'react';
import {
  useForm,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
  DefaultValues
} from 'react-hook-form';

interface ReactHookFormOptions<FormDataType> {
  defaultValues: DefaultValues<FormDataType>;
}

interface SubmitReactHookFormOptions<FormDataType extends FieldValues> {
  onSubmit: SubmitHandler<FormDataType>;
  onClientValidationError?: SubmitErrorHandler<FormDataType>;
  onServerError?: (error: unknown) => void;
  dirtyFieldsOnly?: boolean;
}

function useReactHookForm<FormDataType extends FieldValues>({
  defaultValues
}: ReactHookFormOptions<FormDataType>) {
  const {
    control,
    formState: { dirtyFields, isDirty, errors, isValid },
    getValues,
    handleSubmit,
    register,
    reset,
    setError,
    setValue,
    watch,
    trigger
  } = useForm<FormDataType>({
    defaultValues
  });

  const handleSubmitReactHookForm = useCallback(
    ({
      onSubmit,
      onClientValidationError,
      onServerError
    }: SubmitReactHookFormOptions<FormDataType>) =>
      handleSubmit(
        async (data) => {
          try {
            return await onSubmit?.(data);
          } catch (error) {
            console.log(error);
            onServerError?.(error);
          }
        },
        (errors) => {
          onClientValidationError?.(errors);
        }
      ),
    [handleSubmit]
  );

  return {
    control,
    dirtyFields,
    errors,
    getValues,
    handleSubmitReactHookForm,
    isDirty,
    isValid,
    register,
    resetForm: reset,
    setError,
    setValue,
    watch,
    trigger
  };
}

export default useReactHookForm;
