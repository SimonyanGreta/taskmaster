import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

import { InputField } from "../../shared/ui/InputField";
import { Button } from "../../shared/ui/Button";
import { useAuth } from "../../app/context/AuthContext";

const schema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Пароль должен содержать минимум 6 символов"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const authContext = useAuth();

  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched"
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка авторизации");
      }

      const result = await response.json();
      authContext?.login({ email: data.email, token: result.token });
      navigate("/tasks");
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
