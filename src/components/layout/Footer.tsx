const Footer = () => {
  return (
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
  );
};

export default Footer;
