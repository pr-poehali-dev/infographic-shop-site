import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
