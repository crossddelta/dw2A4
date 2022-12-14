import { useState } from "react";

import bugImageUrl from "../../assets/gota.png";
import ideaImageUrl from "../../assets/sol.png";
import thoughtImageUrl from "../../assets/nuvem.png";
import elogioImageUrl from "../../assets/rainbow.png";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de uma gota",
    },
  },
  IDEA: {
    title: "Sugestão",
    image: {
      source: ideaImageUrl,
      alt: "Imagem de um sol",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
  ELOGIO: {
    title: "Elogio",
    image: {
      source: elogioImageUrl,
      alt: "Imagem de um arco-íris",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep    onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a
          className="underline underline-offset-2" target="_blank"
          href="https://github.com/crossddelta/dw2A4/tree/main/Atividades/Projeto-SPA/Impulse-Rocketseat"
        >
          Danilo Lessa
        </a>
      </footer>
    </div>
  );
}