import {Controller, useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {InputField} from "../../shared/ui/InputField";
import {Button} from "../../shared/ui/Button";

const schema = z.object({
  email: z.string({ required_error: "Email обязателен" }).email("Введите корректный email"),
  password: z.string({ required_error: "Пароль обязателен" }).min(6, "Пароль должен содержать минимум 6 символов"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema),  mode: "onTouched"  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Отправка данных:", data);

    } catch (error) {
      console.error("Ошибка авторизации", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <InputField
              type="email"
              title="Email"
              errors={errors.email}
              errorMessage={errors.email?.message}
              {...field}
            />
          )}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputField
              type="password"
              title="Пароль"
              errors={errors.password}
              errorMessage={errors.password?.message}
              {...field}
            />
          )}
        />
      </div>
      <Button type="submit">
        Войти
      </Button>
    </form>
  );
}
