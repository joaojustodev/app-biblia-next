import { useContext, useEffect, useRef, useState } from "react";
import { CircleHalf, Hand } from "phosphor-react";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { decrease, darkMode, increase } from "../store/acessibility";

const Acessibility = () => {
  const [isActive, setIsActive] = useState(false);
  const acessibilityRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.bible);

  useEffect(() => {
    function registerClick(e: MouseEvent) {
      if (!acessibilityRef.current?.contains(e.target as HTMLElement)) {
        setIsActive(false);
      }
    }

    window.addEventListener("mousedown", registerClick);

    return () => {
      window.removeEventListener("mousedown", registerClick);
    };
  }, [isActive]);

  if (!data) {
    return <></>;
  }

  return (
    <div ref={acessibilityRef} className="fixed bottom-5 right-5">
      {isActive && (
        <div className="absolute top-[-150px] right-1 bg-white shadow-xl rounded-xl p-2 flex flex-col items-center justify-center gap-4">
          <button
            type="button"
            title="Aumentar fonte"
            aria-label="Clique para aumenta a fonte"
            className="text-2xl font-bold"
            onClick={() => dispatch(increase())}
          >
            A+
          </button>
          <button
            type="button"
            title="Diminuir fonte"
            aria-label="Clique para diminuir a fonte"
            className="text-2xl font-bold"
            onClick={() => dispatch(decrease())}
          >
            A-
          </button>
          <button
            type="button"
            title="Alto contraste"
            aria-label="Alterar para alto contraste"
            className="text-2xl font-bold"
            onClick={() => dispatch(darkMode())}
          >
            <CircleHalf />
          </button>
        </div>
      )}
      <button
        type="button"
        title="Acessibilidade"
        aria-label="Clique aqui para acessar o menu de acessibilidade"
        tabIndex={0}
        onClick={() => setIsActive(!isActive)}
        className="bg-blue-500 w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
      >
        <Hand size={32} className="text-white font-bold " />
      </button>
    </div>
  );
};

export default Acessibility;
