import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import AnimatedCode from '@/components/AnimatedCode';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');

  const services = [
    { title: 'Разработка ПО', icon: 'Code', description: 'Современные решения для вашего бизнеса' },
    { title: 'Системная интеграция', icon: 'Network', description: 'Объединение IT-систем компании' },
    { title: 'Консалтинг', icon: 'Users', description: 'Экспертные советы по цифровизации' },
    { title: 'Поддержка', icon: 'Headphones', description: 'Техническая поддержка 24/7' }
  ];

  const portfolio = [
    { title: 'Банковская система', tech: ['React', 'Node.js', 'PostgreSQL'], year: '2024' },
    { title: 'E-commerce платформа', tech: ['Vue.js', 'Python', 'MongoDB'], year: '2023' },
    { title: 'CRM для производства', tech: ['Angular', 'C#', 'SQL Server'], year: '2024' }
  ];

  const team = [
    { name: 'Артур Шелби', role: 'Технический директор', experience: '12 лет' },
    { name: 'Томас Шелби', role: 'Руководитель проектов', experience: '10 лет' },
    { name: 'Полли Грей', role: 'Ведущий разработчик', experience: '8 лет' }
  ];

  const technologies = ['React', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript'];

  const blogPosts = [
    { title: 'Тренды разработки в 2024', date: '15 дек 2024', category: 'Технологии' },
    { title: 'Микросервисная архитектура', date: '10 дек 2024', category: 'Архитектура' },
    { title: 'Безопасность веб-приложений', date: '5 дек 2024', category: 'Безопасность' }
  ];

  const cases = [
    { client: 'Промышленная группа', result: 'Рост продаж на 40%', duration: '6 месяцев' },
    { client: 'Торговая сеть', result: 'Автоматизация складов', duration: '4 месяца' },
    { client: 'IT-стартап', result: 'Масштабирование до 100k пользователей', duration: '8 месяцев' }
  ];

  const codeExamples = [
    {
      title: "React Component",
      language: "JSX",
      lines: [
        { text: "import React from 'react';", delay: 500 },
        { text: "", delay: 200 },
        { text: "const Dashboard = () => {", delay: 300 },
        { text: "  const [data, setData] = useState([]);", delay: 400 },
        { text: "  ", delay: 200 },
        { text: "  useEffect(() => {", delay: 300 },
        { text: "    fetchAnalytics().then(setData);", delay: 400 },
        { text: "  }, []);", delay: 300 },
        { text: "", delay: 200 },
        { text: "  return <Analytics data={data} />;", delay: 400 },
        { text: "};", delay: 300 }
      ]
    },
    {
      title: "API Endpoint",
      language: "Node.js",
      lines: [
        { text: "app.post('/api/analytics', async (req, res) => {", delay: 500 },
        { text: "  try {", delay: 300 },
        { text: "    const { userId, metrics } = req.body;", delay: 400 },
        { text: "    ", delay: 200 },
        { text: "    const result = await analytics.process({", delay: 400 },
        { text: "      user: userId,", delay: 300 },
        { text: "      data: metrics", delay: 300 },
        { text: "    });", delay: 300 },
        { text: "    ", delay: 200 },
        { text: "    res.json({ success: true, result });", delay: 400 },
        { text: "  } catch (error) {", delay: 300 },
        { text: "    res.status(500).json({ error });", delay: 400 },
        { text: "  }", delay: 300 },
        { text: "});", delay: 300 }
      ]
    }
  ];

  const architectures = [
    {
      title: "Микросервисная архитектура",
      nodes: [
        { id: "client", label: "Client App", x: 50, y: 50, icon: "Smartphone", color: "#8B4513" },
        { id: "gateway", label: "API Gateway", x: 200, y: 50, icon: "Globe", color: "#2C1810" },
        { id: "auth", label: "Auth Service", x: 350, y: 20, icon: "Shield", color: "#C9A96E" },
        { id: "user", label: "User Service", x: 350, y: 80, icon: "User", color: "#C9A96E" },
        { id: "payment", label: "Payment", x: 350, y: 140, icon: "CreditCard", color: "#C9A96E" },
        { id: "db", label: "Database", x: 500, y: 80, icon: "Database", color: "#8B4513" }
      ],
      connections: [
        { from: "client", to: "gateway", label: "HTTPS" },
        { from: "gateway", to: "auth" },
        { from: "gateway", to: "user" },
        { from: "gateway", to: "payment" },
        { from: "auth", to: "db" },
        { from: "user", to: "db" },
        { from: "payment", to: "db" }
      ]
    },
    {
      title: "CI/CD Pipeline",
      nodes: [
        { id: "code", label: "Code", x: 30, y: 100, icon: "Code", color: "#8B4513" },
        { id: "git", label: "Git Repo", x: 130, y: 100, icon: "GitBranch", color: "#2C1810" },
        { id: "build", label: "Build", x: 230, y: 100, icon: "Hammer", color: "#C9A96E" },
        { id: "test", label: "Tests", x: 330, y: 100, icon: "CheckCircle", color: "#C9A96E" },
        { id: "deploy", label: "Deploy", x: 430, y: 100, icon: "Upload", color: "#8B4513" },
        { id: "monitor", label: "Monitor", x: 530, y: 100, icon: "Activity", color: "#2C1810" }
      ],
      connections: [
        { from: "code", to: "git", label: "push" },
        { from: "git", to: "build", label: "trigger" },
        { from: "build", to: "test", label: "artifact" },
        { from: "test", to: "deploy", label: "success" },
        { from: "deploy", to: "monitor", label: "health" }
      ]
    }
  ];

  const handleChatSubmit = () => {
    alert(`Сообщение отправлено: ${chatMessage}`);
    setChatMessage('');
    setChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-vintage-cream font-sans">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 border-b-4 border-vintage-brown">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-serif font-bold tracking-wider">IT-SYNDICATE</div>
              <div className="hidden md:block text-sm opacity-80">Est. 2020 • Digital Solutions</div>
            </div>
            <nav className="hidden md:flex space-x-6 text-sm">
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
              <a href="#team" className="hover:text-accent transition-colors">Команда</a>
              <a href="#technologies" className="hover:text-accent transition-colors">Технологии</a>
              <a href="#blog" className="hover:text-accent transition-colors">Блог</a>
              <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-vintage-cream to-vintage-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/img/166c8647-4529-4aa2-8979-f3b0fb70e608.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="border-4 border-primary p-8 bg-vintage-cream/90 backdrop-blur-sm">
                <h1 className="text-5xl md:text-7xl font-serif font-black text-primary mb-4 leading-tight">
                  IT-SYNDICATE
                </h1>
                <div className="text-xl text-vintage-brown font-medium mb-2">━━━━━━━━━━━━━━━━━━━━━</div>
                <p className="text-xl md:text-2xl text-primary font-medium mb-6">
                  СОВРЕМЕННЫЕ ТЕХНОЛОГИИ • ПРОВЕРЕННЫЕ РЕШЕНИЯ
                </p>
                <p className="text-lg text-vintage-dark/80 max-w-2xl mx-auto leading-relaxed">
                  Создаем цифровые решения, которые работают как швейцарские часы. 
                  Каждый проект — это произведение искусства в мире технологий.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button size="lg" className="bg-vintage-brown hover:bg-vintage-dark text-vintage-cream font-semibold px-8 py-4 text-lg">
                Начать проект
              </Button>
              <Button variant="outline" size="lg" className="border-vintage-brown text-vintage-brown hover:bg-vintage-brown hover:text-vintage-cream px-8 py-4 text-lg">
                Наши кейсы
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">НАШИ УСЛУГИ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
            <p className="text-lg text-vintage-dark/70 max-w-2xl mx-auto">
              Полный спектр IT-услуг для современного бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-vintage-brown/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-vintage-brown/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon as any} size={32} className="text-vintage-brown" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-vintage-dark/70">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Code Demo */}
      <section className="py-16 bg-vintage-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-vintage-cream mb-4">ЖИВОЙ КОД</h2>
            <div className="w-32 h-1 bg-vintage-accent mx-auto mb-6"></div>
            <p className="text-lg text-vintage-cream/70 max-w-2xl mx-auto">
              Смотрите, как создается код в режиме реального времени
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {codeExamples.map((example, index) => (
              <AnimatedCode
                key={index}
                title={example.title}
                language={example.language}
                lines={example.lines}
                className="animate-slideInLeft"
                style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Diagrams */}
      <section className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">АРХИТЕКТУРА РЕШЕНИЙ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
            <p className="text-lg text-vintage-dark/70 max-w-2xl mx-auto">
              Интерактивные схемы наших технологических решений
            </p>
          </div>
          <div className="space-y-12">
            {architectures.map((arch, index) => (
              <ArchitectureDiagram
                key={index}
                title={arch.title}
                nodes={arch.nodes}
                connections={arch.connections}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 300}ms` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-16 bg-vintage-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">ПОРТФОЛИО</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <Card key={index} className="border-vintage-brown/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-serif text-primary">{project.title}</CardTitle>
                    <Badge variant="secondary" className="bg-vintage-brown text-vintage-cream">
                      {project.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-vintage-brown/50 text-vintage-dark">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">НАША КОМАНДА</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-vintage-brown/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 bg-vintage-brown/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" size={40} className="text-vintage-brown" />
                  </div>
                  <CardTitle className="text-xl font-serif text-primary">{member.name}</CardTitle>
                  <CardDescription className="text-vintage-brown font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-vintage-dark/70">Опыт: {member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="py-16 bg-vintage-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">ТЕХНОЛОГИИ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="bg-vintage-brown text-vintage-cream text-lg py-2 px-6 hover:bg-vintage-dark transition-colors cursor-pointer">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">БЛОГ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-vintage-brown/20 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="border-vintage-brown/50 text-vintage-brown text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-sm text-vintage-dark/60">{post.date}</span>
                  </div>
                  <CardTitle className="text-xl font-serif text-primary hover:text-vintage-brown transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-vintage-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">КЕЙСЫ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card key={index} className="border-vintage-brown/20 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-serif text-primary">{caseItem.client}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-vintage-brown font-semibold mb-2">{caseItem.result}</p>
                  <p className="text-sm text-vintage-dark/70">Срок реализации: {caseItem.duration}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-vintage-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">КОНТАКТЫ</h2>
            <div className="w-32 h-1 bg-vintage-brown mx-auto mb-6"></div>
          </div>
          <div className="max-w-2xl mx-auto">
            <Card className="border-vintage-brown/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-4">Свяжитесь с нами</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" className="text-vintage-brown" />
                        <span>+7 (495) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" className="text-vintage-brown" />
                        <span>info@it-syndicate.ru</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="MapPin" className="text-vintage-brown" />
                        <span>Москва, ул. Технологическая, 1</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-4">Часы работы</h3>
                    <div className="space-y-2 text-vintage-dark/70">
                      <p>Пн-Пт: 9:00 - 18:00</p>
                      <p>Сб: 10:00 - 16:00</p>
                      <p>Вс: выходной</p>
                      <p className="text-vintage-brown font-semibold mt-4">Техподдержка: 24/7</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 border-t-4 border-vintage-brown">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-serif font-bold mb-2">IT-SYNDICATE</div>
            <p className="text-sm opacity-80 mb-4">© 2024 IT-Syndicate. Все права защищены.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <Dialog open={chatOpen} onOpenChange={setChatOpen}>
        <DialogTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 bg-vintage-brown hover:bg-vintage-dark text-vintage-cream rounded-full w-16 h-16 shadow-lg z-50"
            size="lg"
          >
            <Icon name="MessageCircle" size={24} />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-vintage-cream border-vintage-brown/30">
          <DialogHeader>
            <DialogTitle className="text-primary font-serif">Консультация по услугам</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-vintage-dark/70">Задайте ваш вопрос, и мы свяжемся с вами в ближайшее время.</p>
            <Input 
              placeholder="Ваше имя" 
              className="border-vintage-brown/30 focus:border-vintage-brown"
            />
            <Input 
              placeholder="Ваш email или телефон" 
              className="border-vintage-brown/30 focus:border-vintage-brown"
            />
            <Textarea 
              placeholder="Опишите ваш проект или вопрос..."
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              className="border-vintage-brown/30 focus:border-vintage-brown min-h-[100px]"
            />
            <Button 
              onClick={handleChatSubmit}
              className="w-full bg-vintage-brown hover:bg-vintage-dark text-vintage-cream"
            >
              Отправить запрос
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;