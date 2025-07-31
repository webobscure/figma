import { Card } from "./ui/card";
import { motion } from "motion/react";
import { 
  BarChart3, 
  DollarSign, 
  Wrench, 
  Users, 
  Truck, 
  AlertTriangle,
  Settings,
  Bot,
  Satellite
} from "lucide-react";

export function WhyChooseUsSection() {
  const features = [
    {
      icon: BarChart3,
      title: "Общая загрузка транспорта",
      description: "Просмотр общей загрузки по транспортным средствам в режиме реального времени",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: DollarSign,
      title: "Доходность фур",
      description: "Доходность по транспортным средствам, позволяющая понять сколько стоит километр",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Wrench,
      title: "Контроль ТО и ремонта",
      description: "Затраты на ТО/ремонт с заявками на ремонт и ТО с фиксированием статуса",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: "KPI сотрудников",
      description: "KPI водителей и механиков для оптимизации работы персонала",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "Назначение рейсов",
      description: "Эффективное назначение рейсов и управление маршрутами грузовых фур",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: AlertTriangle,
      title: "Система заявок",
      description: "Заявки о проблемах, которые обрабатываются логистами или механиками",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Settings,
      title: "Управление пользователями",
      description: "Просмотр пользователей и управление ролями в системе",
      color: "from-gray-500 to-slate-500"
    },
    {
      icon: Satellite,
      title: "Система ГЛОНАСС",
      description: "Интегрированная система ГЛОНАСС для точного позиционирования и мониторинга",
      color: "from-green-400 to-teal-500"
    },
    {
      icon: Bot,
      title: "Бот и веб-интерфейс",
      description: "Возможность пользоваться всем ролям ботом (в том числе водителю) и сайтом (логист, директор, механик)",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="why-us" className="py-20 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 100, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Почему стоит выбрать{" "}
            <span className="hologram-text">именно нас</span>?
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Наша система предоставляет полный спектр инструментов для эффективного 
            управления автопарком грузовых фур с интеграцией современных технологий
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="glass-card p-6 border-white/10 group relative overflow-hidden">
                  {/* Анимированный градиент фона */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    initial={{ scale: 0, rotate: 0 }}
                    whileHover={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 mb-4 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center neon-glow-blue group-hover:neon-glow transition-all duration-300`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    
                    <h4 className="font-semibold text-white mb-3 text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    
                    <p className="text-sm text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Декоративные элементы */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-accent/50 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}