export type AskProps = {
  chatId?: number;
  systemMessage?: string;
  userMessage: string;
};

export type AskReturn = {
  message: string;
};
