import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { Heart } from "phosphor-react";
import { Google } from "./Icons";

const Profile = () => {
  // NOTE: Verificar se existe alguma seção, caso existe preencha os campos com as info do usuário, caso não exista, peça ao usuário que faça o login.
  const session = false;

  return (
    <article className="bg-white border border-b-blue-300 shadow-md w-full lg:fixed lg:max-w-[300px] lg:p-4">
      {session ? (
        <>
          <div className="flex items-center justify-center flex-col relative">
            <div className="w-full h-[56px] bg-blue-500"></div>
            <div className="absolute top-[18px] flex items-center justify-center rounded-full border-2 border-pink-500">
              <Image
                src="https://www.github.com/joaojustodev.png"
                alt="Imagem do usuário"
                className="rounded-full"
                width={72}
                height={72}
              />
            </div>
            <div className="flex items-center justify-center flex-col mt-10">
              <strong className="text-black text-md">
                João Vitor Justo Arantes
              </strong>
              <span className="text-gray-300 text-xs">
                joaoarantesjob@gmail.com
              </span>
            </div>
          </div>
          <Tabs.Root defaultValue="favoritos">
            <Tabs.List
              aria-label="Gerir sua conta"
              className="flex gap-2  w-full border-b border-t pt-1  bg-gray-100 border-b-gray-200 border-t-gray-200"
            >
              <Tabs.TabsTrigger
                value="favoritos"
                className="flex items-center justify-center gap-1 p-1 text-xs data-state:font-bold data-state:text-red-500 data-state:border data-state:border-gray-300 data-state:border-b-0  transition-colors hover:text-red-400"
              >
                Favoritos <Heart size={16} />
              </Tabs.TabsTrigger>
            </Tabs.List>
            <Tabs.TabsContent
              value="favoritos"
              className="flex flex-1 items-center justify-center min-h-[30vh]"
            >
              <h1>Você não possui versículos salvos.</h1>
            </Tabs.TabsContent>
          </Tabs.Root>
        </>
      ) : (
        <div className="py-2">
          <div className="flex-1 flex flex-col justify-center gap-4">
            <div className="m-auto flex flex-col gap-1">
              <strong className="text-3xl">Faça login na plataforma</strong>
              <span className="block text-sm">
                Salve seus versículos favoritos e compartilhe
              </span>
            </div>
            <button className="flex items-center justify-center gap-2 w-full max-w-[300px] m-auto py-2 rounded bg-blue-500 text-white font-bold transition-colors hover:bg-blue-700 ">
              <div className="w-4 h-4">
                <Google />
              </div>
              Continuar com google
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

export default Profile;
