import { useState } from "react";
import Image from "next/image";
import ilustracaoCriacaoLogin from "../../assets/images/IlustraçãoCriacaoLogin.svg";

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
    <div className="flex flex-col">
      {/* Illustration Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 px-8 pt-12 pb-8 text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src={ilustracaoCriacaoLogin}
            alt="Ilustração Login"
            width={354.96}
            height={261.6}
            className="mx-auto mb-6"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="px-8 py-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-6 text-center">
          Preencha os campos abaixo para criar sua conta corrente!
        </h3>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome
            </label>
            <input
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
                emailError
                  ? "border-[var(--color-error)] focus:ring-[var(--color-error)]"
                  : "border-gray-200 focus:ring-green-500"
              }`}
            />
            {emailError && (
              <p
                className="text-xs mt-1"
                style={{ color: "var(--color-error)" }}
              >
                {emailError}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>

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

          <button
            onClick={handleSubmit}
            disabled={!agreedToTerms}
            className="w-[144px] h-[48px] rounded-[8px] bg-[var(--color-green)] text-white font-medium hover:brightness-110 transition-all mx-auto block"
          >
            Criar conta
          </button>
        </div>
      </div>
    </div>
  );
}
