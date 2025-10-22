import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from "@/components/ui/icon";
import { useState, useEffect, useRef } from "react";
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

  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const advantagesRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    setIsVisible(true);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 animate-fade-in-down">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 group">
            <img 
              src="https://cdn.poehali.dev/files/54bbab8e-ce7f-42ef-a936-06caf8460eec.png" 
              alt="ИСК Логотип" 
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">ИСК</span>
              <span className="text-xs text-muted-foreground">Инженерно-строительная компания</span>
            </div>
          </div>
          
              <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              Услуги
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              О компании
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-accent transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
              Контакты
            </button>
          </nav>

          <a href="tel:+78001234567" className="hidden md:flex items-center space-x-2 text-accent font-semibold hover:scale-105 transition-transform duration-300 group">
            <div className="p-2 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
              <Icon name="Phone" size={20} className="group-hover:rotate-12 transition-transform" />
            </div>
            <span>+7 (800) 123-45-67</span>
          </a>

          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Комплексные строительно-монтажные работы
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Монтаж технологических трубопроводов • Металлоконструкции • Железобетонные конструкции • Земляные работы • Общестроительные работы
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-6 text-lg animate-fade-in-up relative overflow-hidden group"
              style={{ animationDelay: '0.4s' }}
              onClick={() => scrollToSection('contacts')}
            >
              Получить коммерческое предложение
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></span>
              <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.1s' }}>
            <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-accent group">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Аттестованный персонал</h3>
              <p className="text-muted-foreground">
                Высококвалифицированные специалисты и сертифицированное оборудование
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-accent group">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <Icon name="Construction" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Опыт прокладки коммуникаций</h3>
              <p className="text-muted-foreground">
                Многолетний опыт работы с подземными инженерными системами
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-accent group">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Работа с опасными средами</h3>
              <p className="text-muted-foreground">
                Специализация на транспортировке взрывоопасных и ядовитых веществ
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 border-l-4 border-l-accent group">
              <div className="w-12 h-12 bg-accent/10 rounded flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
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
          <h2 className="text-4xl font-bold text-center mb-4 animate-on-scroll opacity-0 transition-all duration-700">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.1s' }}>
            Выполняем полный комплекс строительно-монтажных работ для промышленных объектов
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.2s' }}>
            <Card className="p-0 hover:shadow-xl transition-all duration-500 hover:border-accent hover:-translate-y-2 group relative overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/a8163113-1f50-4d0d-a7ae-0430d19991dc.jpg" 
                  alt="Монтаж трубопроводов"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name="Gauge" size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Монтаж технологических трубопроводов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Монтаж стальных и ПНД трубопроводов Ду25–1200 мм, включая транспортировку взрывоопасных, ядовитых и горючих веществ. Полное соблюдение норм безопасности и требований ГОСТ.
                </p>
              </div>
            </Card>

            <Card className="p-0 hover:shadow-xl transition-all duration-500 hover:border-accent hover:-translate-y-2 group relative overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/4edbd683-1238-4924-86b6-bb3411b858c2.jpg" 
                  alt="Монтаж металлоконструкций"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name="Grid3x3" size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Монтаж металлоконструкций</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Изготовление и монтаж металлоконструкций любой сложности для промышленных объектов. Сварочные работы, антикоррозийная обработка, контроль качества на всех этапах.
                </p>
              </div>
            </Card>

            <Card className="p-0 hover:shadow-xl transition-all duration-500 hover:border-accent hover:-translate-y-2 group relative overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/cd535f40-02ac-42dc-94c8-8a05eb4c867e.jpg" 
                  alt="Монтаж железобетонных конструкций"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Монтаж железобетонных конструкций</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Установка фундаментов, перекрытий, колонн и других ЖБ элементов. Использование современного подъёмного оборудования и соблюдение технологии монтажа.
                </p>
              </div>
            </Card>

            <Card className="p-0 hover:shadow-xl transition-all duration-500 hover:border-accent hover:-translate-y-2 group relative overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/c6f66008-90cf-4967-bd5b-931439b60ae7.jpg" 
                  alt="Земляные работы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name="Shovel" size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Земляные работы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Выемка и перемещение грунта, планировка территории, прокладка подземных коммуникаций. Собственный парк спецтехники и опытные машинисты.
                </p>
              </div>
            </Card>

            <Card className="p-0 hover:shadow-xl transition-all duration-500 hover:border-accent hover:-translate-y-2 group relative overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/6e04386c-806b-40be-96de-87940df29aed.jpg" 
                  alt="Общестроительные работы"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center">
                  <Icon name="HardHat" size={28} className="text-primary" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Общестроительные работы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Полный спектр строительных работ: возведение зданий, кладочные работы, устройство кровли, внутренняя и наружная отделка промышленных объектов.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8 animate-on-scroll opacity-0 transition-all duration-700">
              <img 
                src="https://cdn.poehali.dev/files/54bbab8e-ce7f-42ef-a936-06caf8460eec.png" 
                alt="ИСК Логотип" 
                className="w-24 h-24 mr-6 hover:scale-110 transition-transform duration-500"
              />
              <div>
                <h2 className="text-4xl font-bold">ООО "ИСК"</h2>
                <p className="text-xl text-muted-foreground mt-2">Инженерно-строительная компания</p>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none space-y-6 text-foreground animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.1s' }}>
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-transparent border-l-4 border-l-accent">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Icon name="Calendar" size={32} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold mb-2">Основана в 2018 году</p>
                    <p className="text-muted-foreground">
                      За время своего существования показала себя как исполнительный подрядчик, выполняющий договорные обязательства с хорошим качеством работ и в установленные сроки.
                    </p>
                  </div>
                </div>
              </Card>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Target" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Качество и безопасность</h3>
                  <p className="text-sm text-muted-foreground">Особое внимание контролю и охране труда</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Zap" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Гибкость</h3>
                  <p className="text-sm text-muted-foreground">Оперативность и инициативность</p>
                </Card>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <h3 className="font-bold mb-2">Команда</h3>
                  <p className="text-sm text-muted-foreground">Высококвалифицированные специалисты</p>
                </Card>
              </div>
              
              <p className="leading-relaxed text-lg">
                Профессиональный менеджмент в области подбора кадров позволил собрать <span className="font-semibold text-accent">команду высококвалифицированных специалистов</span>, которые решают поставленные задачи любой сложности.
              </p>
              
              <p className="leading-relaxed text-lg">
                <span className="font-semibold text-primary">Открытость и прозрачность в ценообразовании</span> позволяет Заказчику участвовать в оптимизации стоимости строительства. За время своей работы компания наладила постоянные контакты с множеством производителей и поставщиков строительных материалов и оборудования.
              </p>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <div className="flex items-start space-x-4">
                  <Icon name="TrendingUp" size={40} className="text-primary flex-shrink-0" />
                  <p className="text-lg italic">
                    "Для нас важен каждый заказчик, нуждающийся в наших услугах. Компания может выполнять в короткие сроки задачи в сфере строительства любой сложности."
                  </p>
                </div>
              </Card>

              <div className="bg-white p-8 rounded-lg border-2 border-primary/20 mt-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="font-bold text-2xl mb-6 text-primary flex items-center">
                  <Icon name="Building2" size={28} className="mr-3" />
                  Контактная информация
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Юридическое название:</span> ООО "ИСК"</p>
                  <p><span className="font-semibold text-foreground">Год основания:</span> 2018</p>
                  <p><span className="font-semibold text-foreground">Юридический адрес:</span> 620000, г. Екатеринбург, ул. Промышленная, д. 12</p>
                  <p><span className="font-semibold text-foreground">ИНН:</span> 6658123456</p>
                  <p><span className="font-semibold text-foreground">ОГРН:</span> 1166658012345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 animate-on-scroll opacity-0 transition-all duration-700">Наша команда</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.1s' }}>
              Профессионалы с многолетним опытом в промышленном строительстве
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto animate-on-scroll opacity-0 transition-all duration-700" style={{ transitionDelay: '0.2s' }}>
            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <Icon name="User" size={80} className="text-white relative z-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Генеральный директор</h3>
                <p className="text-accent font-semibold mb-3">Руководство компанией</p>
                <p className="text-sm text-muted-foreground">
                  Стратегическое планирование, управление проектами, развитие бизнеса
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-accent/80 to-accent flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-accent/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <Icon name="Briefcase" size={80} className="text-white relative z-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Главный инженер</h3>
                <p className="text-accent font-semibold mb-3">Технический надзор</p>
                <p className="text-sm text-muted-foreground">
                  Контроль качества работ, техническая документация, соблюдение норм
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-secondary to-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <Icon name="Calculator" size={80} className="text-white relative z-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Главный бухгалтер</h3>
                <p className="text-accent font-semibold mb-3">Финансовый учёт</p>
                <p className="text-sm text-muted-foreground">
                  Бухгалтерский учёт, финансовая отчётность, налоговое планирование
                </p>
              </div>
            </Card>

            <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden">
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-primary/70 to-accent/70 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <Icon name="ClipboardList" size={80} className="text-white relative z-10" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">Начальник отдела снабжения</h3>
                <p className="text-accent font-semibold mb-3">Логистика</p>
                <p className="text-sm text-muted-foreground">
                  Закупка материалов, взаимодействие с поставщиками, контроль поставок
                </p>
              </div>
            </Card>
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10">
              <div className="flex items-start space-x-4">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <Icon name="Users" size={40} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-3">Присоединяйтесь к нашей команде</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы постоянно ищем талантливых специалистов: прорабов, мастеров участков, инженеров ПТО, 
                    сварщиков, монтажников, машинистов спецтехники. Предлагаем достойную заработную плату, 
                    официальное трудоустройство и возможность профессионального роста.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Официальное трудоустройство</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Достойная оплата</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={16} className="text-accent" />
                      <span>Карьерный рост</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Icon name="Phone" size={24} className="text-accent group-hover:rotate-12 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Телефон</h3>
                      <a href="tel:+78001234567" className="text-accent hover:underline">
                        +7 (800) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Icon name="Mail" size={24} className="text-accent group-hover:-rotate-12 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@isk-str.ru" className="text-accent hover:underline">
                        info@isk-str.ru
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Icon name="MapPin" size={24} className="text-accent group-hover:scale-125 transition-transform" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        620000, г. Екатеринбург,<br />
                        ул. Промышленная, д. 12
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group hover:bg-accent/5 p-4 rounded-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent/20 transition-all">
                      <Icon name="Clock" size={24} className="text-accent group-hover:rotate-45 transition-transform" />
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

              <Card className="p-6 border-2 border-primary/10 hover:border-primary/30 transition-colors duration-300">
                <h3 className="font-bold text-xl mb-6 flex items-center">
                  <Icon name="Send" size={24} className="mr-2 text-accent" />
                  Форма обратной связи
                </h3>
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
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 group relative overflow-hidden">
                    <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                    <span className="relative flex items-center justify-center">
                      Отправить заявку
                      <Icon name="ArrowRight" className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-white py-12 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 group">
                <img 
                  src="https://cdn.poehali.dev/files/54bbab8e-ce7f-42ef-a936-06caf8460eec.png" 
                  alt="ИСК Логотип" 
                  className="w-12 h-12 transition-transform duration-300 group-hover:scale-110 brightness-0 invert"
                />
                <div>
                  <span className="font-bold text-xl">ИСК</span>
                  <p className="text-xs text-white/60">Инженерно-строительная компания</p>
                </div>
              </div>
              <p className="text-white/80">
                Комплексные строительно-монтажные работы для промышленных объектов
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/80">
                <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center">
                  <Icon name="ChevronRight" size={16} className="mr-1" />
                  Монтаж трубопроводов
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center">
                  <Icon name="ChevronRight" size={16} className="mr-1" />
                  Металлоконструкции
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center">
                  <Icon name="ChevronRight" size={16} className="mr-1" />
                  Железобетонные конструкции
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center">
                  <Icon name="ChevronRight" size={16} className="mr-1" />
                  Земляные работы
                </li>
                <li className="hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer flex items-center">
                  <Icon name="ChevronRight" size={16} className="mr-1" />
                  Общестроительные работы
                </li>
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

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/60 hover:text-white/80 transition-colors">© 2025 ООО "ИСК". Все права защищены.</p>
            <p className="text-white/40 text-sm mt-2">Инженерно-строительная компания • Основана в 2018 году</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;