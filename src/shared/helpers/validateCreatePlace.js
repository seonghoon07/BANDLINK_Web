export function validateCreatePlaceInput(placeState) {
    if (!placeState.placeName.trim()) {
        return { valid: false, message: '장소명을 입력해주세요.' };
    }
    if (!placeState.postCode || !placeState.address) {
        return { valid: false, message: '주소를 입력해주세요.' };
    }
    if (!placeState.detailAddress.trim()) {
        return { valid: false, message: '상세 주소를 입력해주세요.' };
    }
    if (!/^\d{10}$/.test(placeState.businessNumber)) {
        return { valid: false, message: '유효한 사업자 등록 번호를 입력해주세요.' };
    }
    if (placeState.selectedPlaceTypes.length === 0) {
        return { valid: false, message: '장소 타입을 선택해주세요.' };
    }
    if (placeState.selectedBusinessDays.length === 0) {
        return { valid: false, message: '영업일을 최소 하루 이상 선택해주세요.' };
    }
    const { open, close } = placeState.selectedTimes;
    if (open.hour === '' || open.minute === '' ||
        close.hour === '' || close.minute === '') {
        return { valid: false, message: '영업 시간을 모두 입력해주세요.' };
    }
    const openTime = parseInt(open.hour) * 60 + parseInt(open.minute);
    const closeTime = parseInt(close.hour) * 60 + parseInt(close.minute);
    if (openTime === closeTime) {
        return { valid: false, message: '영업 시작 시간과 종료 시간이 같을 수 없습니다.' };
    }
    if (openTime > closeTime) {
        return { valid: false, message: '영업 시작 시간은 종료 시간보다 빠르거나 같아야 합니다.' };
    }
    return { valid: true };
}
