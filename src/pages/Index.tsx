import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: 'Парение с березовыми вениками',
      description: 'Традиционные процедуры с настоящими березовыми вениками для очищения и оздоровления',
      price: '1500₽',
      duration: '60 мин',
      icon: 'Leaf'
    },
    {
      title: 'Ароматерапия',
      description: 'Эфирные масла хвои, мяты и эвкалипта для полного расслабления и восстановления',
      price: '800₽',
      duration: '30 мин',
      icon: 'Flower2'
    },
    {
      title: 'Общий сеанс в парной',
      description: 'Классическая русская баня с оптимальной температурой и влажностью',
      price: '2000₽',
      duration: '120 мин',
      icon: 'Thermometer'
    },
    {
      title: 'Массаж с медом',
      description: 'Целебный массаж натуральным медом после банных процедур',
      price: '2500₽',
      duration: '45 мин',
      icon: 'Heart'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Потрясающая атмосфера! Настоящая русская баня с душой. Парение с вениками — это что-то невероятное!',
      date: 'Август 2024'
    },
    {
      name: 'Михаил Волков',
      rating: 5,
      text: 'Хожу уже полгода. Отличный сервис, чистота, профессиональные банщики. Рекомендую всем!',
      date: 'Июль 2024'
    },
    {
      name: 'Елена Смирнова',
      rating: 5,
      text: 'Ароматерапия просто волшебная! После сеанса чувствуешь себя обновленной. Спасибо!',
      date: 'Июнь 2024'
    }
  ];

  const prices = [
    { service: 'Индивидуальный сеанс (2 часа)', price: '3000₽' },
    { service: 'Семейный сеанс (3 часа)', price: '4500₽' },
    { service: 'Корпоративное мероприятие', price: 'от 8000₽' },
    { service: 'Аренда на день', price: '15000₽' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-wood-50 to-wood-100">
      {/* Шапка */}
      <header className="bg-wood-700/95 backdrop-blur-sm text-wood-50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-wood-500 rounded-full flex items-center justify-center">
                <Icon name="Waves" size={24} className="text-wood-50" />
              </div>
              <h1 className="text-2xl font-heading font-bold">Северные Бани</h1>
            </div>
            <nav className="hidden md:flex space-x-8 font-body">
              <a href="#services" className="hover:text-wood-300 transition-colors">Услуги</a>
              <a href="#prices" className="hover:text-wood-300 transition-colors">Прайс</a>
              <a href="#gallery" className="hover:text-wood-300 transition-colors">Галерея</a>
              <a href="#reviews" className="hover:text-wood-300 transition-colors">Отзывы</a>
              <a href="#contacts" className="hover:text-wood-300 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Герой блок */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/57d72f5c-236e-40a6-8bfa-921159b98598.jpg"
            alt="Русская баня"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-wood-900/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-wood-50 px-4">
          <h2 className="text-6xl md:text-8xl font-heading font-bold mb-6 animate-fade-in">
            Северные Бани
          </h2>
          <p className="text-xl md:text-2xl font-body mb-8 max-w-2xl mx-auto animate-fade-in">
            Традиции русского парения в сердце города. Аутентичная атмосфера, 
            профессиональные банщики и целебные процедуры
          </p>
          <Button size="lg" className="bg-wood-600 hover:bg-wood-500 text-wood-50 font-body text-lg px-8 py-4 animate-scale-in">
            <Icon name="Phone" className="mr-2" size={20} />
            Забронировать
          </Button>
        </div>
      </section>

      {/* О нас */}
      <section className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-heading font-bold text-wood-800 mb-8">О наших банях</h3>
            <p className="text-lg font-body text-wood-700 mb-6 leading-relaxed">
              «Северные Бани» — это место, где современные технологии встречаются с вековыми традициями русского парения. 
              Наши мастера банного дела с любовью передают древние секреты оздоровления через пар, 
              создавая уникальную атмосферу релаксации и восстановления.
            </p>
            <p className="text-lg font-body text-wood-700 leading-relaxed">
              В нашем комплексе используется только натуральное дерево сибирских пород, 
              а процедуры проводятся с применением экологически чистых материалов и эфирных масел.
            </p>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-wood-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-heading font-bold text-center text-wood-800 mb-16">Наши услуги</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-wood-50 border-wood-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-wood-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-wood-50" />
                  </div>
                  <CardTitle className="font-heading text-wood-800">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-body text-wood-600 mb-4 text-center">
                    {service.description}
                  </CardDescription>
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="bg-wood-200 text-wood-800 font-body">
                      {service.duration}
                    </Badge>
                    <span className="font-heading font-bold text-wood-700">{service.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Прайс */}
      <section id="prices" className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-heading font-bold text-center text-wood-800 mb-16">Прайс-лист</h3>
          <div className="max-w-2xl mx-auto">
            <Card className="bg-wood-100 border-wood-300">
              <CardHeader>
                <CardTitle className="font-heading text-wood-800 text-center text-2xl">Стоимость услуг</CardTitle>
              </CardHeader>
              <CardContent>
                {prices.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center py-4 font-body">
                      <span className="text-wood-700">{item.service}</span>
                      <span className="font-bold text-wood-800 text-lg">{item.price}</span>
                    </div>
                    {index < prices.length - 1 && <Separator className="bg-wood-300" />}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section id="gallery" className="py-20 bg-wood-100">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-heading font-bold text-center text-wood-800 mb-16">Галерея</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-wood-200 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img
                  src="/img/57d72f5c-236e-40a6-8bfa-921159b98598.jpg"
                  alt={`Фото бани ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="reviews" className="py-20 bg-wood-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-heading font-bold text-center text-wood-800 mb-16">Отзывы гостей</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-wood-100 border-wood-200">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-body text-wood-800">{review.name}</CardTitle>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </div>
                  <CardDescription className="font-body text-wood-500">{review.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-body text-wood-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-wood-700 text-wood-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-heading font-bold text-center mb-16">Контакты</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="text-2xl font-heading font-bold mb-6">Наш адрес</h4>
              <div className="space-y-4 font-body">
                <div className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-3" />
                  <span>г. Архангельск, ул. Банная, 15</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-3" />
                  <span>+7 (921) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={20} className="mr-3" />
                  <span>info@severniye-bani.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={20} className="mr-3" />
                  <span>Ежедневно с 9:00 до 23:00</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-heading font-bold mb-6">Как добраться</h4>
              <p className="font-body text-wood-200 mb-6">
                Мы находимся в историческом центре города, рядом с набережной Северной Двины. 
                Удобная парковка для гостей. От вокзала — 15 минут на автобусе №7.
              </p>
              <Button className="bg-wood-500 hover:bg-wood-400 text-wood-50 font-body">
                <Icon name="Navigation" className="mr-2" size={20} />
                Построить маршрут
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-wood-900 text-wood-300 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-wood-600 rounded-full flex items-center justify-center">
                <Icon name="Waves" size={20} className="text-wood-50" />
              </div>
              <span className="text-xl font-heading font-bold text-wood-50">Северные Бани</span>
            </div>
            <p className="font-body text-sm">
              © 2024 Северные Бани. Все права защищены. Традиции русского парения с 2010 года.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}