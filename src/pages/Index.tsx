import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

export default function Index() {
  const services = [
    {
      title: 'Русская баня на дровах',
      description: 'Традиционная парная на березовых дровах с веничным массажем',
      price: 'от 1800₽/час',
      features: ['Парная до 90°C', 'Березовые веники', 'Купель с холодной водой']
    },
    {
      title: 'VIP зал',
      description: 'Премиальный отдых в отдельном зале с комфортной зоной',
      price: 'от 3500₽/час',
      features: ['Отдельная парная', 'Комната отдыха', 'Караоке система']
    },
    {
      title: 'Банные процедуры',
      description: 'Профессиональные банные процедуры от опытных банщиков',
      price: 'от 2000₽',
      features: ['Парение с веником', 'Медовый пилинг', 'Травяные настои']
    },
    {
      title: 'Банкетный зал',
      description: 'Корпоративы и торжества в уютной атмосфере бани',
      price: 'от 5000₽',
      features: ['До 20 человек', 'Кухня', 'Музыкальная система']
    }
  ];

  const advantages = [
    {
      title: 'Новое здание',
      description: 'Современный комплекс, построенный в 2023 году',
      icon: 'Building2'
    },
    {
      title: 'Экологичность',
      description: 'Натуральные материалы: дуб, липа, кедр',
      icon: 'Leaf'
    },
    {
      title: 'Безопасность',
      description: 'Система контроля воздуха и современная вентиляция',
      icon: 'Shield'
    },
    {
      title: 'Удобство',
      description: 'Парковка, раздевалки, душевые, комнаты отдыха',
      icon: 'Car'
    }
  ];

  const schedule = [
    { day: 'Понедельник', time: '10:00 - 23:00', price: '1800₽/час' },
    { day: 'Вторник', time: '10:00 - 23:00', price: '1800₽/час' },
    { day: 'Среда', time: '10:00 - 23:00', price: '1800₽/час' },
    { day: 'Четверг', time: '10:00 - 23:00', price: '1800₽/час' },
    { day: 'Пятница', time: '10:00 - 01:00', price: '2200₽/час' },
    { day: 'Суббота', time: '10:00 - 01:00', price: '2200₽/час' },
    { day: 'Воскресенье', time: '10:00 - 23:00', price: '2000₽/час' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Верхняя полоса */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        📞 Звоните: +7 (495) 123-45-67 | 📧 info@severniye-bani.ru | 🕐 Работаем ежедневно с 10:00
      </div>

      {/* Шапка */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Waves" size={28} className="text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-primary">Северные бани</h1>
                <p className="text-sm text-muted-foreground">Новая общественная баня на Севере Москвы</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-foreground hover:text-primary font-medium transition-colors">Услуги</a>
              <a href="#schedule" className="text-foreground hover:text-primary font-medium transition-colors">Расписание</a>
              <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors">О бане</a>
              <a href="#contacts" className="text-foreground hover:text-primary font-medium transition-colors">Контакты</a>
            </nav>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" className="mr-2" size={16} />
              Забронировать
            </Button>
          </div>
        </div>
      </header>

      {/* Главный блок */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0">
          <img
            src="/img/9f9ca5e3-6c8b-4990-9f80-8b02071186b2.jpg"
            alt="Северные бани"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-6">
              🔥 Открылись в 2023 году
            </Badge>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Северные
              <br />
              <span className="text-primary">бани</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Новая общественная баня на севере Москвы. Настоящая русская баня на дровах 
              с традиционными процедурами и современным комфортом.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Виртуальная экскурсия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">
              Почему выбирают нас
            </Badge>
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Современная баня с традициями
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы объединили лучшие традиции русской бани с современными технологиями 
              для максимального комфорта наших гостей.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">
              Наши услуги
            </Badge>
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Выберите подходящий формат
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-slate-50 to-white">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-4">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-lg font-bold px-3 py-1">
                      {service.price}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Подробнее и бронирование
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Расписание и цены */}
      <section id="schedule" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary mb-4">
              Расписание работы
            </Badge>
            <h3 className="text-4xl font-bold text-foreground mb-4">
              Работаем каждый день
            </h3>
            <p className="text-lg text-muted-foreground">
              Удобное время для посещения в любой день недели
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">График работы и цены</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center py-3">
                        <div className="flex-1">
                          <span className="font-semibold">{item.day}</span>
                        </div>
                        <div className="flex-1 text-center">
                          <span className="text-muted-foreground">{item.time}</span>
                        </div>
                        <div className="flex-1 text-right">
                          <Badge variant="outline" className="font-semibold">
                            {item.price}
                          </Badge>
                        </div>
                      </div>
                      {index < schedule.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    💡 Минимальное время бронирования — 2 часа. Скидки для постоянных клиентов.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* О бане */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary mb-4">
                О наших банях
              </Badge>
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Традиции русской бани в современном исполнении
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Северные бани</strong> — это новый банный комплекс, 
                  открывшийся в 2023 году на севере Москвы. Мы создали пространство, где традиционная 
                  русская баня встречается с современным комфортом.
                </p>
                <p>
                  Наша парная построена по всем канонам русского банного искусства: используются 
                  только натуральные материалы — липа, дуб и кедр. Печь топится настоящими 
                  березовыми дровами, что создает неповторимый аромат и правильный пар.
                </p>
                <p>
                  В нашем комплексе есть все для полноценного банного отдыха: просторные парные, 
                  комфортные раздевалки, душевые кабины, купель с холодной водой и уютные 
                  комнаты отдыха.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1">
                  🌿 Экологичные материалы
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 text-sm px-3 py-1">
                  🔥 Печь на дровах
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 text-sm px-3 py-1">
                  💆 Банные процедуры
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="/img/8e074b22-43fd-47c6-83fb-414af084748c.jpg"
                  alt="Интерьер русской бани"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">2023</div>
                  <div className="text-sm text-muted-foreground">Год открытия</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-4">
              Контакты
            </Badge>
            <h3 className="text-4xl font-bold mb-4">Как нас найти</h3>
            <p className="text-lg text-slate-300">
              Удобное расположение на севере Москвы с парковкой
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h4 className="text-2xl font-bold mb-8">Контактная информация</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Адрес</h5>
                    <p className="text-slate-300">г. Москва, САО, ул. Банная, д. 25</p>
                    <p className="text-sm text-slate-400 mt-1">Рядом с м. Войковская</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Телефон</h5>
                    <p className="text-slate-300">+7 (495) 123-45-67</p>
                    <p className="text-sm text-slate-400 mt-1">Звоните с 10:00 до 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Email</h5>
                    <p className="text-slate-300">info@severniye-bani.ru</p>
                    <p className="text-sm text-slate-400 mt-1">Ответим в течение часа</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Режим работы</h5>
                    <p className="text-slate-300">Ежедневно с 10:00 до 23:00</p>
                    <p className="text-sm text-slate-400 mt-1">Пт-Сб до 01:00</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-slate-700">
                <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-lg px-8 py-3">
                  <Icon name="Calendar" className="mr-2" size={20} />
                  Забронировать время
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold mb-8">Как добраться</h4>
              <div className="bg-slate-800 rounded-xl p-6 mb-6">
                <h5 className="font-semibold mb-3 text-primary">🚇 На метро</h5>
                <p className="text-slate-300 mb-4">
                  От станции м. Войковская — 8 минут пешком по ул. Космонавта Волкова, 
                  затем поворот направо на ул. Банную.
                </p>
                <h5 className="font-semibold mb-3 text-primary">🚗 На автомобиле</h5>
                <p className="text-slate-300 mb-4">
                  Собственная парковка на 20 мест. Въезд с ул. Банной. 
                  Парковка бесплатная для гостей бани.
                </p>
                <h5 className="font-semibold mb-3 text-primary">🚌 Общественный транспорт</h5>
                <p className="text-slate-300">
                  Автобусы №№ 72, 179 до остановки "Банная улица". 
                  От остановки 2 минуты пешком.
                </p>
              </div>
              
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h5 className="font-semibold mb-3">💡 Полезная информация</h5>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>• Бесплатная парковка для гостей</li>
                  <li>• Предоставляем полотенца и тапочки</li>
                  <li>• Можно заказать еду и напитки</li>
                  <li>• Принимаем карты и наличные</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Waves" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-white">Северные бани</span>
              </div>
              <p className="text-sm mb-4">
                Новая общественная баня на севере Москвы. Традиции русского парения 
                с современным комфортом.
              </p>
              <p className="text-xs text-slate-500">
                © 2024 Северные бани. Все права защищены.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Услуги</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-primary transition-colors">Русская баня</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">VIP зал</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Банные процедуры</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Банкетный зал</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-4">Контакты</h5>
              <div className="space-y-2 text-sm">
                <p>📞 +7 (495) 123-45-67</p>
                <p>📧 info@severniye-bani.ru</p>
                <p>📍 г. Москва, САО, ул. Банная, 25</p>
                <p>🕐 Ежедневно 10:00 - 23:00</p>
              </div>
            </div>
          </div>
          
          <Separator className="bg-slate-800" />
          
          <div className="mt-8 text-center text-xs text-slate-500">
            <p>
              Разработано с ❤️ для любителей настоящей русской бани. 
              Все цены указаны в рублях и актуальны на {new Date().getFullYear()} год.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}