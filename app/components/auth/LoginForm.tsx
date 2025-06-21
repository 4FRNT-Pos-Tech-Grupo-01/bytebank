import { useState } from "react";
import Image from "next/image";
import ilustracaoLogin from "../../assets/images/ilustracaoLogin.svg";

interface LoginFormProps {
  onSubmit: (data: { email: string; password: string }) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      onSubmit({ email, password });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Illustration Section */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 px-8 pt-12 pb-8 text-center">
        <div className="mb-4 flex justify-center">
          <Image
            src={ilustracaoLogin}
            alt="Ilustração Login"
            width={333.25}
            height={267}
            className="mx-auto"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800">Login</h1>
      </div>

      {/* Form Section */}
      <div className="px-8 py-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm  text-gray-700 mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2 font-bold">
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

          <div className="text-left mb-2">
            <button
              type="button"
              className="text-[var(--color-green)] underline text-sm hover:text-green-700 transition-colors border-none bg-transparent cursor-pointer"
            >
              Esqueci a senha!
            </button>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[144px] h-[48px] rounded-[8px] bg-[var(--color-green)] text-white font-medium hover:brightness-110 transition-all mx-auto block"
          >
            Acessar
          </button>
        </div>
      </div>
    </div>
  );
}
