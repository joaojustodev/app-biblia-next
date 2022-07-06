import { ArrowSquareRight } from "phosphor-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { fetchBible } from "../store/bible";
import { Book, Version } from "../store/bible/types";
import { useAppDispatch, useAppSelector } from "../store/hook";
import Verses from "./Verses";

interface FormValues {
  version: string;
  book: string;
  chapter: string;
}

interface BibleProps {
  books: Book[];
  versions: Version[];
}

const Bible = ({ books, versions }: BibleProps) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const [bookSelected, setBookSelected] = useState("gn");
  const dispatch = useAppDispatch();
  const { success, data, loading } = useAppSelector((state) => state.bible);

  const chapterOptions: JSX.Element[] = [];

  const [book] = books.filter((b) => b.abbrev.pt === bookSelected);

  if (book) {
    for (let i = 0; i < Number(book.chapters); i++) {
      chapterOptions.push(
        <option key={i} value={i + 1}>
          {i + 1}
        </option>
      );
    }
  }

  function onSubmit({ book, chapter, version }: FormValues) {
    if (!book || !chapter || !version) return;

    const url = `/verses/${version}/${book}/${chapter}`;
    dispatch(fetchBible(url));
  }

  return (
    <section className="bg-blue-700 dark:bg-gray-700 rounded shadow-md h-[76px] xs:h-full xs:py-2">
      <div className="w-full h-full flex items-center justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center justify-around xs:flex-col xs:gap-4"
        >
          <select
            className="w-[60px] rounded cursor-pointer xs:w-full"
            id="version"
            {...register("version", { required: true })}
          >
            {versions &&
              versions.map((v) => {
                return (
                  <option
                    key={v.version}
                    className="cursor-pointer"
                    value={v.version}
                  >
                    {v.version.toUpperCase()}
                  </option>
                );
              })}
          </select>
          <select
            className="w-[120px] rounded cursor-pointer xs:w-full"
            id="book"
            {...register("book", { required: true })}
            defaultValue=""
            onChange={(e) => setBookSelected(e.target.value)}
          >
            {books.map((b) => {
              return (
                <option
                  key={b.abbrev.pt}
                  className="cursor-pointer"
                  value={b.abbrev.pt}
                >
                  {b.name}
                </option>
              );
            })}
          </select>
          <select
            className="w-[60px] rounded cursor-pointer xs:w-full"
            id="chapter"
            {...register("chapter", { required: true })}
          >
            {chapterOptions}
          </select>
          <button
            type="submit"
            className="text-sm text-gray-900 font-bold bg-pink-500 rounded p-1 flex items-center justify-center gap-2  xs:w-full xs:justify-between opacity-90 transition-opacity hover:opacity-100"
          >
            <span className="hidden md:block xs:block">Buscar</span>
            <ArrowSquareRight size={24} />
          </button>
        </form>
      </div>
      {success && data && <Verses />}
      {loading && <h1>Carregando...</h1>}
    </section>
  );
};

export default Bible;
