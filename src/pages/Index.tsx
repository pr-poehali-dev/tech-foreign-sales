import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Привет! Я помогу вам с выбором техники и логистики. Что вас интересует?",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const vehicles = [
    {
      id: 1,
      title: "BMW X5 2023",
      price: "от $45,000",
      image: "/img/07462fa6-7d18-4b2a-a1e9-9e3a888595fd.jpg",
      country: "Германия",
      specs: ["3.0L", "AWD", "Автомат"],
    },
    {
      id: 2,
      title: "Mercedes-Benz E-Class",
      price: "от $38,000",
      image: "/img/07462fa6-7d18-4b2a-a1e9-9e3a888595fd.jpg",
      country: "Германия",
      specs: ["2.0L", "RWD", "Автомат"],
    },
    {
      id: 3,
      title: "Audi Q7 2023",
      price: "от $52,000",
      image: "/img/07462fa6-7d18-4b2a-a1e9-9e3a888595fd.jpg",
      country: "Германия",
      specs: ["3.0L", "AWD", "Автомат"],
    },
  ];

  const agents = [
    {
      country: "Германия",
      name: "AutoLogistics GmbH",
      rating: 4.8,
      experience: "12 лет",
      price: "от €800",
      link: "https://example.com/germany",
    },
    {
      country: "Япония",
      name: "Tokyo Import Solutions",
      rating: 4.9,
      experience: "15 лет",
      price: "от ¥120,000",
      link: "https://example.com/japan",
    },
    {
      country: "США",
      name: "American Auto Transport",
      rating: 4.7,
      experience: "8 лет",
      price: "от $1,200",
      link: "https://example.com/usa",
    },
  ];

  const partners = [
    {
      name: "CarExport Pro",
      description: "Эксклюзивные автомобили из Европы",
      link: "https://example.com/carexport",
      logo: "🚗",
    },
    {
      name: "Global Logistics",
      description: "Международная доставка техники",
      link: "https://example.com/logistics",
      logo: "🚚",
    },
    {
      name: "TechImport Solutions",
      description: "Спецтехника и оборудование",
      link: "https://example.com/techimport",
      logo: "⚙️",
    },
  ];

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { type: "user", text: newMessage }]);
      setNewMessage("");

      // Simulate bot response
      setTimeout(() => {
        const responses = [
          "Понятно! Рассмотрю варианты для вас.",
          "Отличный выбор! Могу подключить специалиста.",
          "Сейчас найду подходящие предложения.",
        ];
        setMessages((prev) => [
          ...prev,
          {
            type: "bot",
            text: responses[Math.floor(Math.random() * responses.length)],
          },
        ]);
      }, 1000);
    }
  };

  const connectToAgent = () => {
    setMessages((prev) => [
      ...prev,
      {
        type: "system",
        text: "Подключаю к живому специалисту... 🔄",
      },
    ]);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "agent",
          text: "Здравствуйте! Меня зовут Алексей, я помогу вам с выбором и доставкой техники. Что вас интересует?",
        },
      ]);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Car" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-gray-900">AutoImport</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#catalog"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Каталог
              </a>
              <a
                href="#logistics"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Доставка
              </a>
              <a
                href="#partners"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Партнеры
              </a>
              <a
                href="#profile"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Профиль
              </a>
            </nav>
            <Button>Войти</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Импорт техники
            <span className="block text-primary">из любой точки мира</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Профессиональная помощь в выборе и доставке автомобилей, спецтехники
            и оборудования. Работаем с проверенными агентами по всему миру.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-scale-in">
            <Button size="lg" className="text-lg px-8 py-3">
              <Icon name="Search" size={20} className="mr-2" />
              Найти технику
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      {/* Vehicle Catalog */}
      <section id="catalog" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Популярная техника
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Широкий выбор автомобилей и спецтехники от официальных дилеров
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="hover:shadow-lg transition-shadow animate-fade-in"
              >
                <CardHeader className="p-0">
                  <img
                    src={vehicle.image}
                    alt={vehicle.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{vehicle.title}</CardTitle>
                    <Badge variant="outline">{vehicle.country}</Badge>
                  </div>
                  <CardDescription className="text-primary font-semibold text-xl mb-3">
                    {vehicle.price}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {vehicle.specs.map((spec, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full">
                    <Icon name="Info" size={16} className="mr-2" />
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Section */}
      <section id="logistics" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Логистические агенты
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Проверенные партнеры для доставки техники в любую точку России
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow animate-fade-in"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{agent.country}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-500 fill-current"
                      />
                      <span className="text-sm font-medium">
                        {agent.rating}
                      </span>
                    </div>
                  </div>
                  <CardDescription className="font-medium text-gray-900">
                    {agent.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Опыт работы:
                      </span>
                      <span className="text-sm font-medium">
                        {agent.experience}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Стоимость:</span>
                      <span className="text-sm font-medium text-primary">
                        {agent.price}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <a
                      href={agent.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Связаться
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Наши партнеры
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Надежные компании для комплексного решения ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow animate-fade-in"
              >
                <CardHeader>
                  <div className="text-4xl mb-2">{partner.logo}</div>
                  <CardTitle className="text-lg">{partner.name}</CardTitle>
                  <CardDescription>{partner.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href={partner.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon name="ExternalLink" size={16} className="mr-2" />
                      Перейти на сайт
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Bot */}
      <div className="fixed bottom-6 right-6 z-50">
        <Dialog open={chatOpen} onOpenChange={setChatOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
              <Icon name="MessageCircle" size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Icon name="Bot" size={20} className="mr-2" />
                Чат-бот поддержки
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="h-64 overflow-y-auto space-y-2 p-2 border rounded-lg">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg text-sm ${
                      msg.type === "user"
                        ? "bg-primary text-white ml-8"
                        : msg.type === "agent"
                          ? "bg-secondary text-white mr-8"
                          : msg.type === "system"
                            ? "bg-yellow-100 text-yellow-800 text-center"
                            : "bg-gray-100 text-gray-800 mr-8"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Введите сообщение..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="icon">
                  <Icon name="Send" size={16} />
                </Button>
              </div>
              <Button
                onClick={connectToAgent}
                variant="outline"
                className="w-full"
              >
                <Icon name="Users" size={16} className="mr-2" />
                Связаться с агентом
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Car" size={24} className="text-primary" />
                <h4 className="text-lg font-semibold">AutoImport</h4>
              </div>
              <p className="text-gray-400">
                Профессиональный импорт техники из любой точки мира
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Подбор техники
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Логистика
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Оформление
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Чат-бот
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <div className="space-y-2 text-gray-400">
                <p>+7 (800) 123-45-67</p>
                <p>info@autoimport.ru</p>
                <p>Работаем 24/7</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoImport. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
