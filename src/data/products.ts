import { Product } from "@/types/Product";

export const products: Product[] = [
  {
    id: 1,
    name: "Манжеты гидравлические",
    category: "Гидравлика",
    description: "Высококачественные манжеты для гидравлических систем",
    sizes: ["Ø20-30mm", "Ø30-50mm", "Ø50-80mm", "Ø80-120mm"],
    pressure: "до 400 бар",
    temperature: "-40°C до +100°C",
    material: "NBR, FKM, EPDM",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Уплотнение вала",
    category: "Уплотнения",
    description: "Радиальные уплотнения для защиты подшипников",
    sizes: ["10x22x7", "15x28x7", "20x35x7", "25x40x7", "30x47x7"],
    pressure: "до 5 бар",
    temperature: "-30°C до +120°C",
    material: "NBR, PTFE",
    image:
      "https://images.unsplash.com/photo-1586521995568-39abaa0c2311?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Манжета армированная высокого давления",
    category: "Спецтехника",
    description: "Армированные манжеты для экстремальных условий",
    sizes: ["Ø25-40mm", "Ø40-65mm", "Ø65-90mm", "Ø90-125mm"],
    pressure: "до 700 бар",
    temperature: "-20°C до +150°C",
    material: "FKM, PTFE",
    image:
      "https://images.unsplash.com/photo-1565792537829-00ba98d85277?w=400&h=300&fit=crop",
  },
];
