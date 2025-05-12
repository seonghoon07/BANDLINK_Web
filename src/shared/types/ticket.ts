export interface Ticket {
  id: string;
  performanceName: string;
  date: string;
  address: string;
  price: number;
  status: '예매완료' | '취소됨';
  imageUrl: string;
}
