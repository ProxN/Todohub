import { useState, useCallback, ChangeEvent } from 'react';
import { ISettings } from '../store/types';

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

interface TimerSettings {
  longBreak: string | number;
  shortBreak: string | number;
  rounds: string | number;
  work: string | number;
}

type FormTypes = GoalForm | TaskForm | TimerSettings | ISettings;

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
