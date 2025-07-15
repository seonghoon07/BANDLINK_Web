export interface Ticket {
  id?: string;
  title: string;
  reservedAt: string;
  place: string;
  price: string;
  status: '예매완료' | '취소됨';
  posterUrl: string;
}
