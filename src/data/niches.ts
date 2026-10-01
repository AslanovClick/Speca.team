import subtitles from './logo-subtitles.json';

export type NicheId = keyof typeof subtitles;

export interface Niche {
  id: NicheId;
  domain: string;
  /** Верхний (светлый) цвет градиента иконки из Figma */
  c1: string;
  /** Нижний цвет градиента — эффективный, в пределах иконки */
  c2: string;
  /** Цвет ниши для светлой темы: насыщенный и контрастный на белом (≥ 3:1) */
  ink: string;
  status: 'live' | 'soon';
  url?: string;
  /** Контур подписи под логотипом (координаты группы 609×140 из Figma) */
  subtitle: string;
  /** Показатели: bike — реальные, остальные — ЗАГЛУШКИ (плановые) до запуска */
  stats: { products: number; brands: number; shops: number; categories: number };
}

const base: Omit<Niche, 'subtitle'>[] = [
  { id: 'bike',    domain: 'speca.bike',    c1: '#FF361C', c2: '#DF2F18', ink: '#E8290B', status: 'live', url: 'https://motoagregtor-motoaggregator-tlvw65-032779-2-24-123-177.sslip.io/', stats: { products: 27956, brands: 739, shops: 9, categories: 9 } },
  { id: 'ski',     domain: 'speca.ski',     c1: '#00C4FF', c2: '#0069C0', ink: '#0086D6', status: 'soon', stats: { products: 8420, brands: 186, shops: 7, categories: 14 } },
  { id: 'fishing', domain: 'speca.fishing', c1: '#1CE8FE', c2: '#1CD5F8', ink: '#008FB8', status: 'soon', stats: { products: 41380, brands: 512, shops: 12, categories: 22 } },
  { id: 'run',     domain: 'speca.run',     c1: '#1CFE82', c2: '#18E778', ink: '#00A050', status: 'soon', stats: { products: 15640, brands: 204, shops: 10, categories: 12 } },
  { id: 'foto',    domain: 'speca.foto',    c1: '#D38DFF', c2: '#BB00FF', ink: '#9B12EC', status: 'soon', stats: { products: 12870, brands: 97, shops: 8, categories: 16 } },
  { id: 'tools',   domain: 'speca.tools',   c1: '#FFC800', c2: '#FF8400', ink: '#DB6E00', status: 'soon', stats: { products: 56210, brands: 438, shops: 14, categories: 28 } },
  { id: 'camp',    domain: 'speca.camp',    c1: '#74FFBC', c2: '#36A56F', ink: '#049E68', status: 'soon', stats: { products: 19350, brands: 263, shops: 11, categories: 18 } },
  { id: 'tennis',  domain: 'speca.tennis',  c1: '#FFFF00', c2: '#DBBA00', ink: '#B88900', status: 'soon', stats: { products: 6480, brands: 72, shops: 6, categories: 9 } },
  { id: 'surf',    domain: 'speca.surf',    c1: '#00FFE6', c2: '#07BD9C', ink: '#009E8C', status: 'soon', stats: { products: 3920, brands: 58, shops: 5, categories: 8 } },
];

export const niches: Niche[] = base.map((n) => ({ ...n, subtitle: subtitles[n.id] }));
