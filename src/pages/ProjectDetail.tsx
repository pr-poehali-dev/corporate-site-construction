import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface Project {
  id: string;
  title: string;
  year: string;
  location: string;
  image: string;
  challenge: string;
  solution: string[];
  specs: { label: string; value: string }[];
  gallery: string[];
  testimonial: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
  team: { role: string; count: number }[];
  relatedServices: string[];
  tags: string[];
}

const projects: Record<string, Project> = {
  "ural": {
    id: "ural",
    title: "Промышленный комплекс «Урал»",
    year: "2023",
    location: "г. Стерлитамак, Республика Башкортостан",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/50ec055d-ad32-46fe-81d0-2ae7ac2263c6.jpg",
    challenge: "Заказчик — ООО «УралПром» — поставил задачу построить современный производственный комплекс площадью 12 500 м² для размещения линий по переработке нефтепродуктов. Требовалось выполнить полный цикл работ: от монтажа металлоконструкций до устройства технологических трубопроводов. Ключевые сложности: жёсткие сроки (8 месяцев), работа с опасными веществами, необходимость соблюдения повышенных требований промышленной безопасности.",
    solution: [
      "Разработали детальный график производства работ с параллельным выполнением нескольких этапов",
      "Смонтировали металлический каркас здания общим весом более 800 тонн, включая колонны, балки и фермы покрытия",
      "Выполнили монтаж технологических трубопроводов Ду50-600 мм общей протяжённостью 1 200 метров для транспортировки нефтепродуктов",
      "Установили железобетонные конструкции: фундаменты под оборудование, перекрытия, площадки обслуживания",
      "Провели полный комплекс общестроительных работ: кровля, стены, внутренняя отделка административно-бытового корпуса",
      "Все работы выполнены с использованием сертифицированных материалов и под контролем службы технического надзора заказчика"
    ],
    specs: [
      { label: "Площадь объекта", value: "12 500 м²" },
      { label: "Срок реализации", value: "8 месяцев" },
      { label: "Металлоконструкций", value: "800 тонн" },
      { label: "Протяжённость трубопроводов", value: "1 200 м" },
      { label: "Высота здания", value: "18 метров" },
      { label: "Количество рабочих", value: "До 60 человек" }
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/50ec055d-ad32-46fe-81d0-2ae7ac2263c6.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/4edbd683-1238-4924-86b6-bb3411b858c2.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/78e6ddb1-6892-4892-bbf3-e7e3d7d0c7eb.jpg"
    ],
    testimonial: {
      text: "Работы выполнены на высоком профессиональном уровне и точно в срок. Особо отмечаем качество сварных соединений трубопроводов и ответственный подход к соблюдению норм промышленной безопасности. Все этапы проходили под строгим контролем с нашей стороны, замечаний не возникло. Рекомендуем ИСК как надёжного генподрядчика для сложных промышленных объектов.",
      author: "Сергей Владимирович Петров",
      position: "Технический директор",
      company: "ООО «УралПром»"
    },
    team: [
      { role: "Инженеры-проектировщики", count: 4 },
      { role: "Монтажники металлоконструкций", count: 12 },
      { role: "Сварщики (НАКС)", count: 8 },
      { role: "Монтажники трубопроводов", count: 10 },
      { role: "Машинисты кранов", count: 6 },
      { role: "Общестроительные рабочие", count: 20 }
    ],
    relatedServices: [
      "Монтаж технологических трубопроводов",
      "Монтаж металлоконструкций",
      "Монтаж железобетонных конструкций",
      "Общестроительные работы"
    ],
    tags: ["Нефтепереработка", "Промышленное строительство", "Металлоконструкции", "Трубопроводы"]
  },
  "khpz": {
    id: "khpz",
    title: "Трубопроводная система ХПЗ",
    year: "2022",
    location: "г. Уфа, Республика Башкортостан",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/02baf658-6fc0-4a36-998c-b5c0c65779a1.jpg",
    challenge: "АО «Химпром» требовалось модернизировать систему технологических трубопроводов для транспортировки агрессивных химических веществ. Старая система, эксплуатировавшаяся более 30 лет, не соответствовала современным требованиям безопасности. Необходимо было выполнить работы без остановки основного производства, в действующих цехах с ограниченным пространством для маневра.",
    solution: [
      "Разработали поэтапный план работ с учётом графика производства заказчика",
      "Смонтировали новые трубопроводы Ду400-800 мм общей протяжённостью 3 200 метров",
      "Применили специальные марки сталей, устойчивых к воздействию агрессивных сред",
      "Выполнили 100% контроль сварных швов методом рентгенографии",
      "Провели гидравлические испытания на прочность и герметичность с давлением 1,5 от рабочего",
      "Смонтировали систему запорной и регулирующей арматуры с дистанционным управлением",
      "Выполнили теплоизоляцию трубопроводов с последующей защитой алюминиевыми кожухами"
    ],
    specs: [
      { label: "Протяжённость", value: "3 200 м" },
      { label: "Диаметры трубопроводов", value: "Ду400-800 мм" },
      { label: "Срок реализации", value: "6 месяцев" },
      { label: "Количество сварных швов", value: "Более 1500" },
      { label: "Рабочее давление", value: "До 4,0 МПа" },
      { label: "Рабочая температура", value: "До 250°C" }
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/02baf658-6fc0-4a36-998c-b5c0c65779a1.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/78e6ddb1-6892-4892-bbf3-e7e3d7d0c7eb.jpg"
    ],
    testimonial: {
      text: "Команда ИСК продемонстрировала высокий профессионализм и ответственность. Особо хочется отметить качество выполнения сварочных работ — 100% швов прошли контроль с первого раза. Работы велись строго по графику, с соблюдением всех норм промышленной безопасности. Система работает безупречно уже более года. Благодарим за отличную работу!",
      author: "Игорь Анатольевич Смирнов",
      position: "Главный инженер",
      company: "АО «Химпром»"
    },
    team: [
      { role: "Инженеры-технологи", count: 3 },
      { role: "Монтажники трубопроводов", count: 14 },
      { role: "Сварщики 6 разряда (НАКС)", count: 10 },
      { role: "Дефектоскописты", count: 2 },
      { role: "Изолировщики", count: 6 },
      { role: "Слесари КИПиА", count: 4 }
    ],
    relatedServices: [
      "Монтаж технологических трубопроводов",
      "Монтаж металлоконструкций"
    ],
    tags: ["Химическая промышленность", "Трубопроводы высокого давления", "Модернизация", "Агрессивные среды"]
  },
  "logistics": {
    id: "logistics",
    title: "Логистический центр",
    year: "2024",
    location: "г. Стерлитамак, Республика Башкортостан",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/036ee138-1035-4ca8-b4d8-b91c9b292667.jpg",
    challenge: "Крупная транспортно-логистическая компания планировала строительство современного складского комплекса класса «А» площадью 18 000 м². Требовалось возвести здание с учётом специфических требований: высота потолков не менее 12 метров, пол с повышенной нагрузкой до 5 т/м², наличие тёплых разгрузочных доков, офисных и бытовых помещений. Сжатые сроки — 10 месяцев до начала эксплуатации.",
    solution: [
      "Выполнили полный комплекс земляных работ: планировку площадки 2,5 га, устройство котлованов",
      "Возвели металлический каркас здания с применением лёгких стальных конструкций",
      "Смонтировали железобетонные колонны и фундаменты под стеллажное оборудование",
      "Выполнили устройство промышленного бетонного пола с упрочнённым верхним слоем (топпинг)",
      "Установили сэндвич-панели для стен и кровли с высокими теплоизоляционными характеристиками",
      "Построили административно-бытовой корпус с современной отделкой",
      "Благоустроили прилегающую территорию: парковки, подъездные пути, освещение, ограждение"
    ],
    specs: [
      { label: "Площадь склада", value: "18 000 м²" },
      { label: "Срок реализации", value: "10 месяцев" },
      { label: "Высота потолков", value: "12 метров" },
      { label: "Нагрузка на пол", value: "5 т/м²" },
      { label: "Количество доков", value: "24 шт" },
      { label: "Площадь офисов", value: "800 м²" }
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/036ee138-1035-4ca8-b4d8-b91c9b292667.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/6e04386c-806b-40be-96de-87940df29aed.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/cd535f40-02ac-42dc-94c8-8a05eb4c867e.jpg"
    ],
    testimonial: {
      text: "Проект реализован точно в срок и с отличным качеством. Особенно довольны промышленным полом — ровность идеальная, стеллажное оборудование встало без проблем. Здание тёплое, энергоэффективное. ИСК — команда профессионалов, которая понимает специфику логистической недвижимости. Однозначно будем обращаться снова для новых объектов.",
      author: "Александр Михайлович Кузнецов",
      position: "Директор по развитию",
      company: "ООО «Логистик-Центр»"
    },
    team: [
      { role: "Прорабы", count: 3 },
      { role: "Монтажники металлоконструкций", count: 16 },
      { role: "Монтажники ЖБК", count: 8 },
      { role: "Бетонщики", count: 12 },
      { role: "Кровельщики", count: 10 },
      { role: "Отделочники", count: 15 },
      { role: "Машинисты спецтехники", count: 8 }
    ],
    relatedServices: [
      "Монтаж металлоконструкций",
      "Монтаж железобетонных конструкций",
      "Земляные работы",
      "Общестроительные работы"
    ],
    tags: ["Складская недвижимость", "Логистика", "Класс А", "Быстровозводимые здания"]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const project = projectId ? projects[projectId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Проект не найден</h1>
          <Button onClick={() => navigate("/")}>Вернуться на главную</Button>
        </div>
      </div>
    );
  }

  const scrollToContacts = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById("contacts");
      element?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => navigate("/")} className="flex items-center space-x-3 group">
            <img 
              src="https://cdn.poehali.dev/files/54bbab8e-ce7f-42ef-a936-06caf8460eec.png" 
              alt="ИСК Логотип" 
              className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary">ИСК</span>
              <span className="text-xs text-muted-foreground">Инженерно-строительная компания</span>
            </div>
          </button>
          
          <Button onClick={() => navigate("/")} variant="ghost">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Назад
          </Button>
        </div>
      </header>

      <div className="pt-20 md:pt-24">
        <div 
          className="relative h-[350px] md:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 md:pb-12 relative z-10">
            <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
              {project.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white mb-3 md:mb-4">{project.title}</h1>
            <div className="flex flex-wrap items-center gap-3 md:gap-4 text-white/90 text-sm md:text-lg">
              <div className="flex items-center space-x-2">
                <Icon name="Calendar" size={20} />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Задача заказчика</h2>
                <Card className="p-4 md:p-6 bg-muted/30">
                  <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                    {project.challenge}
                  </p>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Наше решение</h2>
                <div className="space-y-4">
                  {project.solution.map((item, index) => (
                    <Card key={index} className="p-4 md:p-5">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-muted-foreground leading-relaxed pt-0.5 text-sm md:text-base">{item}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Технические характеристики</h2>
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {project.specs.map((spec, index) => (
                    <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow">
                      <div className="text-xs md:text-sm text-muted-foreground mb-1 md:mb-2">{spec.label}</div>
                      <div className="text-xl md:text-2xl font-bold text-primary">{spec.value}</div>
                    </Card>
                  ))}
                </div>
              </section>

              {project.gallery.length > 0 && (
                <section>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Фотогалерея проекта</h2>
                  <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                    {project.gallery.map((image, index) => (
                      <div key={index} className="relative h-48 md:h-72 rounded-xl overflow-hidden group cursor-pointer">
                        <img 
                          src={image} 
                          alt={`Фото проекта ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Отзыв заказчика</h2>
                <Card className="p-5 md:p-8 bg-gradient-to-br from-accent/5 to-primary/5">
                  <Icon name="Quote" size={32} className="text-accent mb-3 md:mb-4 md:w-10 md:h-10" />
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground mb-4 md:mb-6 italic">
                    "{project.testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-lg md:text-2xl font-bold">
                      {project.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-base md:text-lg">{project.testimonial.author}</div>
                      <div className="text-muted-foreground">{project.testimonial.position}</div>
                      <div className="text-sm text-accent font-semibold">{project.testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Участвующая команда</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                  {project.team.map((member, index) => (
                    <Card key={index} className="p-4 md:p-5 text-center hover:shadow-lg transition-shadow">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2 md:mb-3">
                        <Icon name="Users" size={24} className="text-primary md:w-7 md:h-7" />
                      </div>
                      <div className="text-2xl md:text-3xl font-bold text-accent mb-1">{member.count}</div>
                      <div className="text-sm text-muted-foreground">{member.role}</div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Связанные услуги</h2>
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {project.relatedServices.map((service, index) => (
                    <Card key={index} className="p-4 md:p-5 hover:shadow-xl transition-all hover:border-accent group cursor-pointer">
                      <div className="flex items-center space-x-2 md:space-x-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors flex-shrink-0">
                          <Icon name="Wrench" size={20} className="md:w-6 md:h-6" />
                        </div>
                        <span className="font-semibold group-hover:text-accent transition-colors text-sm md:text-base">{service}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-4 md:space-y-6">
                <Card className="p-5 md:p-6 bg-gradient-to-br from-primary to-secondary text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Обсудить ваш проект</h3>
                  <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base">
                    Хотите реализовать похожий проект? Свяжитесь с нами для бесплатной консультации
                  </p>
                  <Button 
                    onClick={scrollToContacts}
                    className="w-full bg-white text-primary hover:bg-white/90"
                    size="lg"
                  >
                    Получить консультацию
                  </Button>
                </Card>

                <Card className="p-5 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4">Ключевые цифры</h3>
                  <div className="space-y-4">
                    {project.specs.slice(0, 3).map((spec, index) => (
                      <div key={index}>
                        <div className="text-sm text-muted-foreground mb-1">{spec.label}</div>
                        <div className="text-xl font-bold text-primary">{spec.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 md:p-6 bg-accent/5">
                  <h3 className="font-bold mb-3 md:mb-4 text-base md:text-lg">Другие проекты</h3>
                  <div className="space-y-3">
                    {Object.values(projects)
                      .filter(p => p.id !== project.id)
                      .map((p) => (
                        <button
                          key={p.id}
                          onClick={() => navigate(`/projects/${p.id}`)}
                          className="w-full text-left"
                        >
                          <div className="relative h-24 md:h-32 rounded-lg overflow-hidden group">
                            <img 
                              src={p.image} 
                              alt={p.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                            <div className="absolute bottom-1.5 left-1.5 right-1.5 md:bottom-2 md:left-2 md:right-2">
                              <div className="text-white font-semibold text-xs md:text-sm line-clamp-2">{p.title}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-gradient-to-br from-primary via-primary to-secondary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">© 2024 ИСК. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;