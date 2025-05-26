import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
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
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            Смотреть каталог
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            Техническая поддержка
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
