import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [carpetWidth, setCarpetWidth] = useState(2);
  const [carpetLength, setCarpetLength] = useState(3);
  
  const calculatePrice = () => {
    const area = carpetWidth * carpetLength;
    const basePrice = 500;
    return Math.round(area * basePrice);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-secondary">ЧистоКовёр</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-primary transition-colors">Портфолио</button>
              <button onClick={() => scrollToSection('calculator')} className="hover:text-primary transition-colors">Калькулятор</button>
              <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
              <button onClick={() => scrollToSection('contacts')} className="hover:text-primary transition-colors">Контакты</button>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:+79991234567" className="hidden sm:block text-secondary font-semibold">+7 (999) 123-45-67</a>
              <Button onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать
              </Button>
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Профессиональная стирка ковров
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Глубокая очистка, быстрая сушка и бережный уход за вашими коврами. Возвращаем первозданную чистоту и свежесть.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('calculator')} className="text-lg">
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="text-lg">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3000+</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24ч</div>
              <div className="text-muted-foreground">быстрая сушка</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">гарантия качества</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Комплексный подход к чистке ковров с использованием профессионального оборудования
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Droplets" size={32} className="text-primary" />
                </div>
                <CardTitle>Глубокая стирка</CardTitle>
                <CardDescription>Удаление всех видов загрязнений</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Удаление пятен любой сложности</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Безопасные моющие средства</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Сохранение цвета и структуры</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Wind" size={32} className="text-primary" />
                </div>
                <CardTitle>Быстрая сушка</CardTitle>
                <CardDescription>Современное сушильное оборудование</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Профессиональные сушильные камеры</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Готовность через 24 часа</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Полное удаление влаги</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <CardTitle>Дезинфекция</CardTitle>
                <CardDescription>Защита от бактерий и аллергенов</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Антибактериальная обработка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Устранение неприятных запахов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-0.5" />
                    <span>Гипоаллергенные средства</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12">
            Примеры качественной чистки — результат говорит сам за себя
          </p>
          <Tabs defaultValue="before" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="before">До чистки</TabsTrigger>
              <TabsTrigger value="after">После чистки</TabsTrigger>
            </TabsList>
            <TabsContent value="before">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                      <Icon name="ImageOff" size={64} className="text-gray-300" />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">Загрязнённый ковёр перед чисткой</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="after">
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <Icon name="Sparkles" size={64} className="text-primary" />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground">Идеально чистый ковёр</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12">
            Узнайте точную стоимость чистки вашего ковра за несколько секунд
          </p>
          <Card>
            <CardHeader>
              <CardTitle>Рассчитайте стоимость</CardTitle>
              <CardDescription>Введите размеры ковра в метрах</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Ширина (метры)</label>
                <Input 
                  type="number" 
                  value={carpetWidth} 
                  onChange={(e) => setCarpetWidth(Number(e.target.value))}
                  min="0.5"
                  step="0.1"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Длина (метры)</label>
                <Input 
                  type="number" 
                  value={carpetLength} 
                  onChange={(e) => setCarpetLength(Number(e.target.value))}
                  min="0.5"
                  step="0.1"
                />
              </div>
              <div className="p-6 bg-primary/5 rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">Площадь ковра</div>
                <div className="text-2xl font-bold text-secondary mb-4">{(carpetWidth * carpetLength).toFixed(1)} м²</div>
                <div className="text-sm text-muted-foreground mb-2">Стоимость чистки</div>
                <div className="text-4xl font-bold text-primary">{calculatePrice().toLocaleString('ru-RU')} ₽</div>
                <p className="text-xs text-muted-foreground mt-4">
                  * Базовая цена: 500 ₽/м². Итоговая стоимость может варьироваться в зависимости от степени загрязнения
                </p>
              </div>
              <Button className="w-full" size="lg" onClick={() => scrollToSection('contacts')}>
                <Icon name="Phone" size={18} className="mr-2" />
                Заказать чистку
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Отзывы клиентов</h2>
          <p className="text-center text-muted-foreground mb-12">
            Нам доверяют тысячи довольных клиентов
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Елена Иванова', rating: 5, text: 'Отличная работа! Ковёр вернулся как новый. Особенно порадовала скорость — отдала вечером, забрала на следующий день.' },
              { name: 'Максим Петров', rating: 5, text: 'Профессиональный подход и качественная работа. Вывели старые пятна, которые я уже считал безнадёжными.' },
              { name: 'Анна Смирнова', rating: 5, text: 'Очень довольна результатом! Ковёр не только чистый, но и пахнет свежестью. Теперь буду обращаться только сюда.' }
            ].map((review, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-secondary">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами удобным способом
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Наши контакты</CardTitle>
                <CardDescription>Работаем ежедневно с 9:00 до 21:00</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <a href="tel:+79991234567" className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
                  </div>
                </a>
                <a href="https://t.me/chistokovyor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-muted rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="Send" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Telegram</div>
                    <div className="text-sm text-muted-foreground">@chistokovyor</div>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-sm text-muted-foreground">г. Москва, ул. Чистая, д. 15</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Оставить заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Спасибо! Мы скоро с вами свяжемся.'); }}>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <Input placeholder="Как вас зовут?" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input type="tel" placeholder="+7 (___) ___-__-__" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Комментарий</label>
                    <Textarea placeholder="Опишите задачу..." rows={3} />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Sparkles" size={28} />
            <h3 className="text-xl font-bold">ЧистоКовёр</h3>
          </div>
          <p className="text-white/80 mb-4">
            Профессиональная стирка ковров с 2019 года
          </p>
          <p className="text-sm text-white/60">
            © 2024 ЧистоКовёр. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
