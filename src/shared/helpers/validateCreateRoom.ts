export interface CreateRoomInput {
  name: string;
  description: string;
  additionalDescription: string;
  price: string;
  image: File | null;
}

export function validateCreateRoomInput(input: CreateRoomInput): {
  valid: boolean;
  message?: string;
} {
  if (!input.image) {
    return { valid: false, message: '방 사진을 업로드해주세요.' };
  }

  if (!input.name.trim()) {
    return { valid: false, message: '방 이름을 입력해주세요.' };
  }

  if (!input.description.trim()) {
    return { valid: false, message: '방 소개를 입력해주세요.' };
  }

  if (!/^\d+$/.test(input.price) || Number(input.price) <= 0) {
    return { valid: false, message: '가격은 0원 이상이여야 합니다.' };
  }

  if (!input.additionalDescription.trim()) {
    return { valid: false, message: '부가 설명을 입력해주세요.' };
  }

  return { valid: true };
}
