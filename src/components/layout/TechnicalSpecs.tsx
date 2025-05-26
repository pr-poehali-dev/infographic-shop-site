import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechnicalSpecs = () => {
  const sizeData = [
    ["20mm", "35mm", "7mm", "Стандарт"],
    ["25mm", "40mm", "7mm", "Стандарт"],
    ["30mm", "47mm", "7mm", "Усиленная"],
    ["35mm", "52mm", "8mm", "Усиленная"],
    ["40mm", "58mm", "8mm", "Высокое давление"],
    ["50mm", "68mm", "9mm", "Высокое давление"],
  ];

  return (
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
                {sizeData.map((row, index) => (
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
                      <span className="font-medium">Экстремальные условия</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
