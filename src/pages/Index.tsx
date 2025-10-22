import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    topic: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", phone: "", topic: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">ИСК</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">ИСК-СТР</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition-colors">
              Контакты
            </button>
          </nav>

          <a href="tel:+78001234567" className="hidden md:flex items-center space-x-2 text-accent font-semibold">
            <Icon name="Phone" size={20} />
            <span>+7 (800) 123-45-67</span>
          </a>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Комплексные строительно-монтажные работы
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Монтаж технологических трубопроводов • Металлоконструкции • Железобетонные конструкции • Земляные работы • Общестроительные работы
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg"
              onClick={() => scrollToSection('contacts')}
            >
              Получить коммерческое предложение
              <Icon name="ArrowRight" className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Аттестованный персонал</h3>
              <p className="text-muted-foreground">
                Высококвалифицированные специалисты и сертифицированное оборудование
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                <Icon name="Construction" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Опыт прокладки коммуникаций</h3>
              <p className="text-muted-foreground">
                Многолетний опыт работы с подземными инженерными системами
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Работа с опасными средами</h3>
              <p className="text-muted-foreground">
                Специализация на транспортировке взрывоопасных и ядовитых веществ
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4">
                <Icon name="Layers" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Полный цикл работ</h3>
              <p className="text-muted-foreground">
                От земляных работ до сдачи объекта под ключ
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Выполняем полный комплекс строительно-монтажных работ для промышленных объектов
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-8 hover:shadow-xl transition-all hover:border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Gauge" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Монтаж технологических трубопроводов</h3>
              <p className="text-muted-foreground leading-relaxed">
                Монтаж стальных и ПНД трубопроводов Ду25–1200 мм, включая транспортировку взрывоопасных, ядовитых и горючих веществ. Полное соблюдение норм безопасности и требований ГОСТ.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Grid3x3" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Монтаж металлоконструкций</h3>
              <p className="text-muted-foreground leading-relaxed">
                Изготовление и монтаж металлоконструкций любой сложности для промышленных объектов. Сварочные работы, антикоррозийная обработка, контроль качества на всех этапах.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Building2" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Монтаж железобетонных конструкций</h3>
              <p className="text-muted-foreground leading-relaxed">
                Установка фундаментов, перекрытий, колонн и других ЖБ элементов. Использование современного подъёмного оборудования и соблюдение технологии монтажа.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="Shovel" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Земляные работы</h3>
              <p className="text-muted-foreground leading-relaxed">
                Выемка и перемещение грунта, планировка территории, прокладка подземных коммуникаций. Собственный парк спецтехники и опытные машинисты.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all hover:border-accent">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Icon name="HardHat" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">Общестроительные работы</h3>
              <p className="text-muted-foreground leading-relaxed">
                Полный спектр строительных работ: возведение зданий, кладочные работы, устройство кровли, внутренняя и наружная отделка промышленных объектов.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">О компании</h2>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground">
              <p className="leading-relaxed">
                ИСК-СТР — компания, специализирующаяся на комплексных строительно-монтажных работах для промышленных объектов. Мы используем современные материалы и оборудование при монтаже, изготовлении узлов с применением как стальных, так и полиэтиленовых трубопроводов различных диаметров диапазоном от 25 до 1200 мм.
              </p>
              
              <p className="leading-relaxed">
                Наш обученный высококвалифицированный персонал и аттестованное оборудование позволяют выполнять работы любой сложности. Мы обладаем огромным опытом по прокладке подземных коммуникаций, что является важной составляющей оборудования различных инженерных сооружений.
              </p>
              
              <p className="leading-relaxed">
                К технологическим трубопроводам предъявляются повышенные требования при их изготовлении и монтаже, так как по ним могут транспортироваться опасные для здоровья и жизни обслуживающего персонала взрывоопасные, ядовитые и горючие вещества. Мы строго соблюдаем все нормы безопасности и технологические регламенты.
              </p>

              <div className="bg-white p-6 rounded-lg border border-border mt-8">
                <h3 className="font-bold text-xl mb-4 text-primary">Контактная информация</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Юридический адрес:</span> 620000, г. Екатеринбург, ул. Промышленная, д. 12</p>
                  <p><span className="font-semibold text-foreground">ИНН:</span> 6658123456</p>
                  <p><span className="font-semibold text-foreground">ОГРН:</span> 1166658012345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">Контакты</h2>
            <p className="text-center text-muted-foreground mb-12">
              Свяжитесь с нами для получения консультации или коммерческого предложения
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+78001234567" className="text-accent hover:underline">
                        +7 (800) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@isk-str.ru" className="text-accent hover:underline">
                        info@isk-str.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        620000, г. Екатеринбург,<br />
                        ул. Промышленная, д. 12
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Режим работы</h3>
                      <p className="text-muted-foreground">
                        Пн-Пт: 9:00 - 18:00<br />
                        Сб-Вс: выходной
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <h3 className="font-bold text-xl mb-6">Форма обратной связи</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Select value={formData.topic} onValueChange={(value) => setFormData({ ...formData, topic: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите тему обращения" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pipeline">Монтаж трубопроводов</SelectItem>
                        <SelectItem value="metal">Металлоконструкции</SelectItem>
                        <SelectItem value="concrete">Железобетонные конструкции</SelectItem>
                        <SelectItem value="earth">Земляные работы</SelectItem>
                        <SelectItem value="construction">Общестроительные работы</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Textarea
                      placeholder="Сообщение"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-white flex items-center justify-center">
                  <span className="text-primary font-bold text-lg">ИСК</span>
                </div>
                <span className="font-bold text-xl">ИСК-СТР</span>
              </div>
              <p className="text-white/80">
                Комплексные строительно-монтажные работы для промышленных объектов
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li>Монтаж трубопроводов</li>
                <li>Металлоконструкции</li>
                <li>Железобетонные конструкции</li>
                <li>Земляные работы</li>
                <li>Общестроительные работы</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-white/80">
                <li>
                  <a href="tel:+78001234567" className="hover:text-accent transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </li>
                <li>
                  <a href="mailto:info@isk-str.ru" className="hover:text-accent transition-colors">
                    info@isk-str.ru
                  </a>
                </li>
                <li>г. Екатеринбург, ул. Промышленная, д. 12</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2025 ИСК-СТР. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
