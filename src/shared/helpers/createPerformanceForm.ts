type FormType = {
  title: string;
  description: string;
  poster: File | null;
  posterUrl: string;
  address: string;
  startTime: string;
  endTime: string;
  price: number;
  roomId: string;
};

export const createPerformanceForm = (form: FormType): string | null => {
  if (!form.poster) return '공연 포스터를 등록해주세요';
  if (!form.title.trim()) return '공연명을 입력해주세요';
  if (!form.description.trim()) return '공연 소개를 입력해주세요';
  if (!form.roomId) return '공연 장소를 선택해주세요';
  return null;
};
