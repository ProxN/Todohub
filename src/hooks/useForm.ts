import { useState, useCallback, ChangeEvent } from 'react';

interface GoalForm {
  goal: string;
  notes: string;
}

interface TaskForm {
  task: string;
  notes: string;
  start: string;
  end: string;
}

type FormTypes = GoalForm | TaskForm;

interface IUseForm<T> {
  values: T;
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useForm = <T extends FormTypes>(
  callback: () => void,
  initialValues: T
): IUseForm<T> => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
    ): void => {
      const { value, name } = e.target;

      setValues((prevState) => ({ ...prevState, [name]: value }));
    },
    [setValues]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    callback();
  };

  // useEffect(() => {
  //   if (!isEmpty(values)) {
  //     const propIsEmpty = Object.values(values).some((el) => el === '');
  //     if (!propIsEmpty) {
  //       setIsSubmitting(true);
  //     }
  //   }
  // }, [values]);

  return {
    values,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
