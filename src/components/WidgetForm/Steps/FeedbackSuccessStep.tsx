import { CloseButton } from "../../CloseButton"
import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequest: () => void;
}

export const FeedbackSuccessStep = ({onFeedbackRestartRequest}: FeedbackSuccessStepProps) => {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <img src={successImageUrl} alt="Ícone de sucesso" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-[4px] border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          type="button"
          onClick={onFeedbackRestartRequest}
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}