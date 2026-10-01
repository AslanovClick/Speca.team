import uk from './uk';

export type Dict = typeof uk;
export type Locale = 'uk' | 'ru';

// ru будет добавлен отдельным словарём той же формы
const dictionaries: Partial<Record<Locale, Dict>> = { uk };

export function useDict(locale: string | undefined): Dict {
  return dictionaries[(locale as Locale) ?? 'uk'] ?? uk;
}
