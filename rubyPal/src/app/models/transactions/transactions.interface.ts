export interface OnSendTransactionEvent {
  sender: string;
  receiver: string;
  value: number;
}