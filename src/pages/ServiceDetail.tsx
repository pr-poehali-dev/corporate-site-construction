import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useParams, useNavigate } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string[];
  stages: { title: string; description: string }[];
  materials: string[];
  standards: string[];
  applications: string[];
  gallery: string[];
  faq: { question: string; answer: string }[];
}

const services: Record<string, Service> = {
  "tehnologicheskie-truboprovody": {
    id: "tehnologicheskie-truboprovody",
    title: "Монтаж технологических трубопроводов",
    subtitle: "Профессиональный монтаж трубопроводных систем любой сложности",
    icon: "Droplets",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/78e6ddb1-6892-4892-bbf3-e7e3d7d0c7eb.jpg",
    description: [
      "Наша компания специализируется на монтаже технологических трубопроводов диаметром от Ду25 до Ду1200 мм. Мы выполняем работы по транспортировке различных сред, включая взрывоопасные, ядовитые и горючие вещества.",
      "Все работы выполняются с строгим соблюдением норм безопасности, требований ГОСТ и проектной документации. Наши специалисты имеют все необходимые допуски и сертификаты для работы на опасных производственных объектах.",
      "Мы используем только качественные материалы и современное оборудование, что гарантирует долговечность и надёжность смонтированных систем."
    ],
    stages: [
      {
        title: "Подготовительные работы",
        description: "Изучение проектной документации, подготовка материалов и оборудования, разметка трассы трубопровода"
      },
      {
        title: "Монтаж трубопроводов",
        description: "Резка, гибка и сварка труб, установка опор и подвесок, монтаж запорной арматуры"
      },
      {
        title: "Контроль качества",
        description: "Визуальный и инструментальный контроль сварных швов, рентгенографический контроль (при необходимости)"
      },
      {
        title: "Испытания",
        description: "Гидравлические испытания на прочность и герметичность, пневматические испытания (при необходимости)"
      },
      {
        title: "Теплоизоляция",
        description: "Устройство теплоизоляции трубопроводов согласно проекту, защита изоляции от механических повреждений"
      },
      {
        title: "Сдача в эксплуатацию",
        description: "Оформление исполнительной документации, передача объекта заказчику"
      }
    ],
    materials: [
      "Стальные трубы (бесшовные и электросварные) по ГОСТ 8732, ГОСТ 10704",
      "Трубы из полиэтилена низкого давления (ПНД) по ГОСТ 18599",
      "Запорная арматура (задвижки, краны, затворы)",
      "Фланцы и фланцевые соединения по ГОСТ 12815, ГОСТ 33259",
      "Сварочные материалы (электроды, проволока) по ГОСТ",
      "Теплоизоляционные материалы (минеральная вата, пенополиуретан)",
      "Опоры и подвески для трубопроводов"
    ],
    standards: [
      "СНиП 3.05.05-84 «Технологическое оборудование и технологические трубопроводы»",
      "ГОСТ 356-80 «Арматура и детали трубопроводов. Давления условные, пробные и рабочие»",
      "ГОСТ 32388-2013 «Трубопроводы технологические»",
      "СП 36.13330.2012 «Магистральные трубопроводы»",
      "ПБ 03-585-03 «Правила устройства и безопасной эксплуатации трубопроводов пара и горячей воды»",
      "РД 153-34.1-003-01 «Типовая инструкция по организации безопасного проведения огневых работ на взрывоопасных и взрывопожароопасных объектах»"
    ],
    applications: [
      "Нефтеперерабатывающие заводы",
      "Химические предприятия",
      "Энергетические объекты (ТЭЦ, котельные)",
      "Металлургические комбинаты",
      "Пищевые производства",
      "Фармацевтические заводы",
      "Водоочистные сооружения",
      "Промышленные парки и логистические центры"
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/78e6ddb1-6892-4892-bbf3-e7e3d7d0c7eb.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/02baf658-6fc0-4a36-998c-b5c0c65779a1.jpg"
    ],
    faq: [
      {
        question: "Какие диаметры трубопроводов вы монтируете?",
        answer: "Мы выполняем монтаж трубопроводов диаметром от Ду25 до Ду1200 мм. Для каждого диаметра применяются соответствующие технологии и оборудование."
      },
      {
        question: "Работаете ли вы с опасными веществами?",
        answer: "Да, наши специалисты имеют все необходимые допуски для работы с взрывоопасными, ядовитыми и горючими веществами. Все работы выполняются с соблюдением повышенных мер безопасности."
      },
      {
        question: "Какие гарантии вы предоставляете?",
        answer: "Мы предоставляем гарантию на выполненные работы от 12 до 36 месяцев в зависимости от типа работ и условий эксплуатации. Гарантийные обязательства закрепляются в договоре."
      },
      {
        question: "Сколько времени занимает монтаж?",
        answer: "Сроки зависят от объёма работ, сложности проекта и протяжённости трубопровода. Типовой проект средней сложности занимает от 2 до 6 месяцев."
      },
      {
        question: "Выполняете ли вы проектирование?",
        answer: "Мы выполняем работы по готовой проектной документации. При необходимости можем порекомендовать проверенные проектные организации."
      }
    ]
  },
  "metallokonstrukcii": {
    id: "metallokonstrukcii",
    title: "Монтаж металлоконструкций",
    subtitle: "Изготовление и монтаж металлоконструкций любой сложности",
    icon: "Grid3x3",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/4edbd683-1238-4924-86b6-bb3411b858c2.jpg",
    description: [
      "Мы предлагаем полный цикл работ по металлоконструкциям: от изготовления до монтажа и антикоррозийной обработки. Наше производство оснащено современным оборудованием для резки, гибки и сварки металла.",
      "Выполняем изготовление каркасов зданий, ферм, колонн, балок, площадок обслуживания, лестниц, ограждений и других конструкций по индивидуальным проектам.",
      "Все сварочные работы выполняются аттестованными сварщиками с применением качественных расходных материалов и контролем качества швов."
    ],
    stages: [
      {
        title: "Разработка КМД",
        description: "Создание конструкторской документации на основе проекта, детализация узлов и соединений"
      },
      {
        title: "Изготовление конструкций",
        description: "Резка металла, гибка, сварка элементов, контроль геометрии и качества сварных швов"
      },
      {
        title: "Антикоррозийная обработка",
        description: "Пескоструйная очистка, грунтование и окраска металлоконструкций"
      },
      {
        title: "Транспортировка",
        description: "Доставка конструкций на объект специализированным транспортом"
      },
      {
        title: "Монтаж",
        description: "Установка конструкций с применением крановой техники, выверка и закрепление"
      },
      {
        title: "Контрольная приёмка",
        description: "Проверка качества монтажа, оформление исполнительной документации"
      }
    ],
    materials: [
      "Стальной прокат (балки, швеллеры, уголки, листовой металл)",
      "Профильные трубы квадратного и прямоугольного сечения",
      "Метизы (болты, гайки, шайбы) различных классов прочности",
      "Сварочные материалы (электроды, проволока, флюс)",
      "Грунт-эмали и антикоррозийные покрытия",
      "Огнезащитные составы (при необходимости)"
    ],
    standards: [
      "СП 16.13330.2017 «Стальные конструкции»",
      "ГОСТ 23118-2012 «Конструкции стальные строительные. Общие технические условия»",
      "СНиП 3.03.01-87 «Несущие и ограждающие конструкции»",
      "ГОСТ 5264-80 «Ручная дуговая сварка. Соединения сварные»",
      "ГОСТ 14771-76 «Дуговая сварка в защитном газе»"
    ],
    applications: [
      "Каркасы промышленных зданий и складов",
      "Производственные цеха и ангары",
      "Торговые и бизнес-центры",
      "Спортивные сооружения",
      "Мосты и эстакады",
      "Технологические площадки и галереи",
      "Резервуарные парки"
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/4edbd683-1238-4924-86b6-bb3411b858c2.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/50ec055d-ad32-46fe-81d0-2ae7ac2263c6.jpg"
    ],
    faq: [
      {
        question: "Изготавливаете ли вы металлоконструкции по индивидуальному проекту?",
        answer: "Да, мы выполняем изготовление металлоконструкций любой сложности по индивидуальным чертежам и проектам заказчика."
      },
      {
        question: "Какой максимальный вес конструкций вы можете монтировать?",
        answer: "Возможности монтажа зависят от используемой крановой техники. Мы работаем с кранами грузоподъёмностью до 100 тонн и можем выполнять монтаж крупногабаритных конструкций."
      },
      {
        question: "Выполняете ли вы антикоррозийную защиту?",
        answer: "Да, мы предоставляем полный комплекс услуг по антикоррозийной защите: пескоструйную очистку, грунтование, окраску различными типами покрытий."
      },
      {
        question: "Какие сроки изготовления?",
        answer: "Сроки изготовления зависят от объёма и сложности заказа. Типовые конструкции изготавливаются за 2-4 недели, сложные проекты — от 1 до 3 месяцев."
      }
    ]
  },
  "zhelezobeton": {
    id: "zhelezobeton",
    title: "Монтаж железобетонных конструкций",
    subtitle: "Установка ЖБ конструкций с использованием современной техники",
    icon: "Building2",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/cd535f40-02ac-42dc-94c8-8a05eb4c867e.jpg",
    description: [
      "Выполняем монтаж железобетонных конструкций любой сложности: фундаментов, колонн, балок, плит перекрытий, стеновых панелей и других ЖБ элементов.",
      "Используем современное подъёмное оборудование и строго соблюдаем технологию монтажа для обеспечения прочности и долговечности конструкций.",
      "Наши специалисты имеют многолетний опыт работы с ЖБК на промышленных и гражданских объектах различной категории сложности."
    ],
    stages: [
      {
        title: "Подготовка основания",
        description: "Проверка качества основания, геодезическая разметка осей и отметок"
      },
      {
        title: "Доставка конструкций",
        description: "Транспортировка ЖБ изделий на объект, складирование с соблюдением требований хранения"
      },
      {
        title: "Монтаж конструкций",
        description: "Установка элементов краном, выверка положения, временное и постоянное закрепление"
      },
      {
        title: "Заделка стыков",
        description: "Замоноличивание стыков и узлов соединений бетонной смесью"
      },
      {
        title: "Контроль качества",
        description: "Проверка геометрических параметров, прочности соединений, качества заделки швов"
      },
      {
        title: "Сдача работ",
        description: "Оформление актов освидетельствования скрытых работ и исполнительной документации"
      }
    ],
    materials: [
      "Железобетонные колонны различных сечений",
      "Балки и ригели перекрытий",
      "Плиты перекрытий и покрытий",
      "Фундаментные блоки и сваи",
      "Стеновые панели и диафрагмы жёсткости",
      "Бетонная смесь для замоноличивания стыков",
      "Закладные детали и анкерные болты"
    ],
    standards: [
      "СП 70.13330.2012 «Несущие и ограждающие конструкции»",
      "ГОСТ 13015-2012 «Изделия бетонные и железобетонные для строительства»",
      "СНиП 3.03.01-87 «Несущие и ограждающие конструкции»",
      "ГОСТ 22904-93 «Конструкции железобетонные. Основные положения»",
      "СП 63.13330.2018 «Бетонные и железобетонные конструкции»"
    ],
    applications: [
      "Каркасы промышленных зданий",
      "Многоэтажные жилые дома",
      "Складские комплексы",
      "Торговые центры",
      "Паркинги и гаражные комплексы",
      "Инженерные сооружения (резервуары, бункеры)",
      "Мосты и путепроводы"
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/cd535f40-02ac-42dc-94c8-8a05eb4c867e.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/036ee138-1035-4ca8-b4d8-b91c9b292667.jpg"
    ],
    faq: [
      {
        question: "Какое оборудование используется для монтажа?",
        answer: "Мы используем современные автомобильные и гусеничные краны грузоподъёмностью от 25 до 100 тонн, а также специализированную технику для монтажа крупногабаритных конструкций."
      },
      {
        question: "Работаете ли вы в зимний период?",
        answer: "Да, мы выполняем монтаж круглогодично. При работе в зимних условиях применяем специальные технологии для обеспечения качества замоноличивания стыков."
      },
      {
        question: "Какова точность установки конструкций?",
        answer: "Точность установки соответствует требованиям СНиП и составляет ±5 мм для колонн по вертикали и ±10 мм для балок и плит по горизонтали."
      },
      {
        question: "Требуется ли усиление старых конструкций?",
        answer: "Этот вопрос решается индивидуально после обследования состояния существующих конструкций и анализа проектной документации."
      }
    ]
  },
  "zemlyanye-raboty": {
    id: "zemlyanye-raboty",
    title: "Земляные работы",
    subtitle: "Выемка, перемещение грунта и планировка территории",
    icon: "Shovel",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/c6f66008-90cf-4967-bd5b-931439b60ae7.jpg",
    description: [
      "Выполняем полный комплекс земляных работ: рытьё котлованов и траншей, планировку территории, обратную засыпку, уплотнение грунта.",
      "Располагаем собственным парком современной спецтехники: экскаваторы, бульдозеры, грейдеры, катки. Все машины находятся в отличном техническом состоянии.",
      "Опытные машинисты с высокой квалификацией обеспечивают точность выполнения работ и соблюдение проектных отметок."
    ],
    stages: [
      {
        title: "Подготовка участка",
        description: "Расчистка территории от растительности, разметка границ котлованов и траншей"
      },
      {
        title: "Разработка грунта",
        description: "Выемка грунта экскаваторами, транспортировка самосвалами на место складирования или утилизации"
      },
      {
        title: "Планировка",
        description: "Выравнивание поверхности бульдозерами и грейдерами до проектных отметок"
      },
      {
        title: "Устройство оснований",
        description: "Укладка песчано-гравийной подушки, послойное уплотнение виброкатками"
      },
      {
        title: "Обратная засыпка",
        description: "Засыпка пазух котлованов и траншей с послойным уплотнением"
      },
      {
        title: "Благоустройство",
        description: "Планировка прилегающей территории, устройство откосов и дренажа"
      }
    ],
    materials: [
      "Песок для устройства подушек и засыпки",
      "Щебень различных фракций",
      "Геотекстиль для укрепления грунтов",
      "Дренажные трубы и материалы",
      "Георешётки и геосетки (при необходимости)"
    ],
    standards: [
      "СНиП 3.02.01-87 «Земляные сооружения, основания и фундаменты»",
      "СП 45.13330.2017 «Земляные сооружения, основания и фундаменты»",
      "ГОСТ 25100-2020 «Грунты. Классификация»",
      "СП 104.13330.2016 «Инженерная защита территории от затопления и подтопления»"
    ],
    applications: [
      "Устройство котлованов под фундаменты",
      "Прокладка подземных коммуникаций (водопровод, канализация, кабели)",
      "Планировка строительных площадок",
      "Устройство дорог и площадок",
      "Ландшафтные работы",
      "Намыв и намывка территорий",
      "Противопаводковые мероприятия"
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/c6f66008-90cf-4967-bd5b-931439b60ae7.jpg"
    ],
    faq: [
      {
        question: "Какая спецтехника у вас в наличии?",
        answer: "В нашем парке: экскаваторы (гусеничные и колёсные), бульдозеры, грейдеры, виброкатки, самосвалы различной грузоподъёмности. Вся техника проходит регулярное техническое обслуживание."
      },
      {
        question: "Вывозите ли вы грунт с объекта?",
        answer: "Да, мы обеспечиваем вывоз лишнего грунта на полигоны или места, согласованные с заказчиком. Имеем все необходимые разрешения на транспортировку."
      },
      {
        question: "Работаете ли в стеснённых условиях города?",
        answer: "Да, имеем опыт работы в плотной городской застройке. Используем малогабаритную технику, обеспечиваем безопасность и минимальное воздействие на окружающую среду."
      },
      {
        question: "Как быстро вы можете приступить к работе?",
        answer: "При наличии всех разрешительных документов и согласованной проектной документации мы готовы приступить к работам в течение 3-5 рабочих дней."
      }
    ]
  },
  "obschestroitelnye-raboty": {
    id: "obschestroitelnye-raboty",
    title: "Общестроительные работы",
    subtitle: "Полный спектр строительных работ для промышленных объектов",
    icon: "HardHat",
    image: "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/6e04386c-806b-40be-96de-87940df29aed.jpg",
    description: [
      "Выполняем весь комплекс общестроительных работ: от возведения фундаментов до кровельных и отделочных работ. Работаем на промышленных объектах, складских комплексах, производственных зданиях.",
      "Наша команда включает квалифицированных специалистов всех строительных специальностей: каменщики, бетонщики, монтажники, кровельщики, отделочники.",
      "Гарантируем соблюдение сроков, качество выполнения работ и полное соответствие проектной документации и строительным нормам."
    ],
    stages: [
      {
        title: "Устройство фундаментов",
        description: "Земляные работы, армирование, бетонирование ленточных, плитных и свайных фундаментов"
      },
      {
        title: "Возведение стен",
        description: "Кладка из кирпича, блоков, монтаж стеновых панелей, устройство проёмов"
      },
      {
        title: "Устройство перекрытий",
        description: "Монтаж железобетонных плит или устройство монолитных перекрытий"
      },
      {
        title: "Кровельные работы",
        description: "Монтаж стропильной системы, утепление, гидроизоляция, укладка кровельного покрытия"
      },
      {
        title: "Наружная отделка",
        description: "Утепление фасадов, штукатурка, облицовка, окраска"
      },
      {
        title: "Внутренняя отделка",
        description: "Штукатурные работы, устройство полов, малярные работы, монтаж перегородок"
      }
    ],
    materials: [
      "Бетон и бетонные смеси различных марок",
      "Кирпич (рядовой, лицевой, огнеупорный)",
      "Газобетонные и керамзитобетонные блоки",
      "Арматура и закладные изделия",
      "Кровельные материалы (профнастил, металлочерепица, рулонные материалы)",
      "Теплоизоляционные материалы",
      "Штукатурные и отделочные составы",
      "Лакокрасочные материалы"
    ],
    standards: [
      "СП 70.13330.2012 «Несущие и ограждающие конструкции»",
      "СП 15.13330.2020 «Каменные и армокаменные конструкции»",
      "СП 17.13330.2017 «Кровли»",
      "СП 50.13330.2012 «Тепловая защита зданий»",
      "СНиП 3.04.01-87 «Изоляционные и отделочные покрытия»"
    ],
    applications: [
      "Промышленные здания и цеха",
      "Складские комплексы и ангары",
      "Административно-бытовые корпуса",
      "Котельные и насосные станции",
      "Очистные сооружения",
      "Гаражи и мастерские",
      "Вспомогательные производственные здания"
    ],
    gallery: [
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/6e04386c-806b-40be-96de-87940df29aed.jpg",
      "https://cdn.poehali.dev/projects/9904a683-686d-4561-9edc-49b801b00e0e/files/50ec055d-ad32-46fe-81d0-2ae7ac2263c6.jpg"
    ],
    faq: [
      {
        question: "Выполняете ли вы работы «под ключ»?",
        answer: "Да, мы предоставляем полный комплекс услуг по строительству объектов «под ключ»: от фундамента до сдачи в эксплуатацию, включая все коммуникации."
      },
      {
        question: "Предоставляете ли гарантию на работы?",
        answer: "На все виды общестроительных работ предоставляется гарантия от 12 до 36 месяцев в зависимости от типа конструкций и условий эксплуатации."
      },
      {
        question: "Можно ли вносить изменения в проект в процессе строительства?",
        answer: "Изменения возможны при согласовании с проектной организацией и заказчиком. Все изменения оформляются дополнительными соглашениями к договору."
      },
      {
        question: "Как контролируется качество работ?",
        answer: "Контроль осуществляется на всех этапах: входной контроль материалов, операционный контроль в процессе работ, приёмочный контроль готовых конструкций. Все результаты фиксируются в журналах работ."
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? services[serviceId] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
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

      <div className="pt-24">
        <div 
          className="relative h-[400px] bg-cover bg-center"
          style={{ backgroundImage: `url(${service.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
          <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                <Icon name={service.icon as any} size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{service.title}</h1>
                <p className="text-white/90 text-lg">{service.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Описание услуги</h2>
                <div className="space-y-4">
                  {service.description.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Этапы выполнения работ</h2>
                <div className="space-y-4">
                  {service.stages.map((stage, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{stage.title}</h3>
                          <p className="text-muted-foreground">{stage.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Используемые материалы и оборудование</h2>
                <Card className="p-6">
                  <ul className="space-y-3">
                    {service.materials.map((material, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{material}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Нормативная база</h2>
                <Card className="p-6">
                  <ul className="space-y-3">
                    {service.standards.map((standard, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="FileText" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{standard}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </section>

              {service.gallery.length > 0 && (
                <section>
                  <h2 className="text-3xl font-bold mb-6">Фотогалерея работ</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.gallery.map((image, index) => (
                      <div key={index} className="relative h-64 rounded-xl overflow-hidden group">
                        <img 
                          src={image} 
                          alt={`Фото работ ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              <section>
                <h2 className="text-3xl font-bold mb-6">Типовые объекты применения</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.applications.map((app, index) => (
                    <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon name="Building" size={20} className="text-accent" />
                        </div>
                        <span className="font-medium">{app}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {service.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                      <AccordionTrigger className="text-left font-semibold">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="p-6 bg-gradient-to-br from-primary to-secondary text-white">
                  <h3 className="text-2xl font-bold mb-4">Получить консультацию</h3>
                  <p className="mb-6 text-white/90">
                    Оставьте заявку, и наш специалист свяжется с вами для обсуждения проекта
                  </p>
                  <Button 
                    onClick={scrollToContacts}
                    className="w-full bg-white text-primary hover:bg-white/90"
                    size="lg"
                  >
                    Связаться с нами
                  </Button>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-xl mb-4">Контакты</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Icon name="Phone" size={20} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-muted-foreground">Телефон</div>
                        <a href="tel:+79273404080" className="font-semibold hover:text-accent">
                          +7 (927) 340-40-80
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Mail" size={20} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-muted-foreground">Email</div>
                        <a href="mailto:info@isk-str.ru" className="font-semibold hover:text-accent">
                          info@isk-str.ru
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Icon name="Clock" size={20} className="text-accent flex-shrink-0 mt-1" />
                      <div>
                        <div className="text-sm text-muted-foreground">Режим работы</div>
                        <div className="font-semibold">Пн-Пт: 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-accent/5">
                  <h3 className="font-bold mb-3">Другие услуги</h3>
                  <div className="space-y-2">
                    {Object.values(services)
                      .filter(s => s.id !== service.id)
                      .slice(0, 4)
                      .map((s) => (
                        <button
                          key={s.id}
                          onClick={() => navigate(`/services/${s.id}`)}
                          className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors text-sm font-medium"
                        >
                          {s.title}
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

export default ServiceDetail;
