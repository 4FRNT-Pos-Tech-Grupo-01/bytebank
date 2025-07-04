import { useState } from "react";
import { AuthLayout } from "./auth-layout";
import Input from "../input/Input";
import { Button } from "../button/Button";
import IlustracaoCriacaoLogin from "@/assets/images/IlustraçãoCriacaoLogin.svg";

interface RegisterFormProps {
  onSubmit: (data: { name: string; email: string; password: string }) => void;
}

export function RegisterForm({ onSubmit }: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Dado incorreto, Revise e digite novamente.");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handleSubmit = () => {
    if (name && email && password && agreedToTerms) {
      onSubmit({ name, email, password });
    } else if (!agreedToTerms) {
      alert("Você deve concordar com os termos para continuar.");
    }
  };

  return (
    <AuthLayout
      illustration={IlustracaoCriacaoLogin}
      illustrationAlt="Ilustração Criação Login"
      illustrationWidth={354.96}
      illustrationHeight={261.6}
      title="Criar conta"
      subtitle="Preencha os campos abaixo para criar sua conta corrente!"
    >
      <div className="flex flex-col gap-4">
        <Input
          label="Nome"
          placeholder="Digite seu nome completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Digite seu email"
          value={email}
          error={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
        />

        <Input
          label="Senha"
          type="password"
          placeholder="Digite sua senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-start gap-3 my-2">
          <input
            type="checkbox"
            id="terms"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-1 w-4 h-4 accent-[var(--color-green)] border-[var(--color-green)] border-2 rounded focus:ring-green-500"
          />
          <label
            htmlFor="terms"
            className="text-sm text-gray-600 leading-relaxed cursor-pointer"
          >
            Li e estou ciente quanto às condições de tratamento dos meus dados
            conforme descrito na Política de Privacidade do banco.
          </label>
        </div>

        <Button
          label="Criar conta"
          onClick={handleSubmit}
          disabled={!agreedToTerms}
          centered
        />
      </div>
    </AuthLayout>
  );
}
