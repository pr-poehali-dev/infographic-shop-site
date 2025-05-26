import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Index = () => {
  const products = [
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

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-semibold text-gray-900">РезиноТех</h1>
              <nav className="hidden md:flex space-x-6">
                <a
                  href="#catalog"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Каталог
                </a>
                <a
                  href="#specs"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Характеристики
                </a>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Контакты
                </a>
              </nav>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">Заказать</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Резинотехнические
            <br />
            <span className="font-semibold">изделия</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Высокоточные уплотнения и манжеты для промышленного оборудования.
            Немецкое качество, российские цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
            >
              Смотреть каталог
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Техническая поддержка
            </Button>
          </div>
        </div>
      </section>

      {/* Product Catalog */}
      <section
        id="catalog"
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Каталог продукции
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Профессиональные решения для гидравлических и пневматических систем
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-all duration-300 border-gray-100"
            >
              <div className="aspect-[4/3] bg-gray-50 rounded-t-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Размеры:
                    </span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {product.sizes.map((size, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {size}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">
                        Давление:
                      </span>
                      <p className="text-gray-600">{product.pressure}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Температура:
                      </span>
                      <p className="text-gray-600">{product.temperature}</p>
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Материал:
                    </span>
                    <p className="text-sm text-gray-600">{product.material}</p>
                  </div>
                </div>
                <Button className="w-full mt-6 bg-gray-900 hover:bg-gray-800">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section id="specs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">
              Технические характеристики
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Точные размеры и параметры для профессионального подбора
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Size Chart */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">
                  Стандартные размеры манжет
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 border-b pb-2">
                    <span>Внутр. Ø</span>
                    <span>Внешн. Ø</span>
                    <span>Высота</span>
                    <span>Тип</span>
                  </div>
                  {[
                    ["20mm", "35mm", "7mm", "Стандарт"],
                    ["25mm", "40mm", "7mm", "Стандарт"],
                    ["30mm", "47mm", "7mm", "Усиленная"],
                    ["35mm", "52mm", "8mm", "Усиленная"],
                    ["40mm", "58mm", "8mm", "Высокое давление"],
                    ["50mm", "68mm", "9mm", "Высокое давление"],
                  ].map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 gap-4 text-sm py-2 border-b border-gray-100"
                    >
                      {row.map((cell, cellIndex) => (
                        <span
                          key={cellIndex}
                          className={
                            cellIndex === 3
                              ? "text-blue-600 font-medium"
                              : "text-gray-600"
                          }
                        >
                          {cell}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Material Properties */}
            <Card className="p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl">Свойства материалов</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      NBR (Нитрил)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Температура:</span>
                        <span className="font-medium">-40°C до +100°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Твёрдость:</span>
                        <span className="font-medium">70-90 Shore A</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Применение:</span>
                        <span className="font-medium">Масла, топливо</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      FKM (Витон)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Температура:</span>
                        <span className="font-medium">-20°C до +200°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Твёрдость:</span>
                        <span className="font-medium">75-90 Shore A</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Применение:</span>
                        <span className="font-medium">Химия, высокие T°</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">
                      PTFE (Тефлон)
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Температура:</span>
                        <span className="font-medium">-200°C до +260°C</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Давление:</span>
                        <span className="font-medium">до 1000 бар</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Применение:</span>
                        <span className="font-medium">
                          Экстремальные условия
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">РезиноТех</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Профессиональные решения в области резинотехнических изделий.
                Качество и надёжность с 1995 года.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@rezinoteh.ru</p>
                <p>Москва, ул. Промышленная, 15</p>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Услуги</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Подбор изделий</p>
                <p>Техническая поддержка</p>
                <p>Срочная доставка</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
            © 2024 РезиноТех. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
