export const saveRecentPlaces = (newPlace) => {
    const key = 'recent_places';
    const existing = localStorage.getItem(key);
    const parsed = existing ? JSON.parse(existing) : [];
    const filtered = parsed.filter((place) => place.id !== newPlace.id);
    const updated = [newPlace, ...filtered];
    const limited = updated.slice(0, 5);
    localStorage.setItem(key, JSON.stringify(limited));
};
