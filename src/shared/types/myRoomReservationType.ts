export type Reservation = {
  roomName: string;
  startTime: string;
  endTime: string;
  userName: string;
  price: number;
};

// 날짜별 예약 묶음
export type DailyReservation = {
  date: string;
  reservations: Reservation[];
};

// 전체 예약 배열
export type MyRoomReservationType = DailyReservation[];
