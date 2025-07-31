import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Clock, Globe, Truck, TrendingUp, Package, Wrench } from "lucide-react";

export function AdvantagesSection() {
  const advantages = [
    {
      icon: Clock,
      title: "Работает 24/7",
      description: "Система работает без перерывов и выходных, обеспечивая непрерывный контроль автопарка",
      stats: "365 дней",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Удаленное управление",
      description: "Позволяет управлять автопарком из любой точки мира через веб-интерфейс",
      stats: "∞ км",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Truck,
      title: "Любой размер автопарка",
      description: "Подходит для автопарков любого размера грузоперевозками",
      stats: "1-10000+",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      title: "Оптимизация и эффективность",
      description: "Помогает снизить риски, оптимизировать затраты и повысить эффективность работы автопарка",
      stats: "+35%",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Package,
      title: "Коробочное решение",
      description: "Готовое коробочное решение с возможностью доработки под ваши требования",
      stats: "Ready",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: Wrench,
      title: "Индивидуальная доработка",
      description: "Возможность кастомизации и доработки функционала под специфические потребности бизнеса",
      stats: "Custom",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="advantages" className="py-20 relative overflow-hidden">
      {/* Футуристичный фон */}
      <div className="absolute inset-0">
        <div className="tech-grid opacity-20 absolute inset-0" />
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hologram-text">Преимущества</span>{" "}
            <span className="text-white">нашей системы</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Комплексное решение для управления автопарком, которое повышает эффективность 
            и снижает операционные расходы с использованием передовых технологий
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -15, 
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card p-8 border-white/10 group relative overflow-hidden h-full">
                  {/* Анимированный фон карточки */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${advantage.color} opacity-0 group-hover:opacity-20`}
                    initial={{ scale: 0.8, rotate: 0 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <div className="relative z-10">
                    {/* Статистика в углу */}
                    <motion.div
                      className="absolute -top-2 -right-2 glass-card px-3 py-1 rounded-full border border-white/20"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <span className="text-xs font-bold text-accent">{advantage.stats}</span>
                    </motion.div>
                    
                    {/* Иконка */}
                    <motion.div
                      className={`w-16 h-16 mb-6 bg-gradient-to-br ${advantage.color} rounded-2xl flex items-center justify-center neon-glow-blue relative`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Орбитальные точки */}
                      <motion.div
                        className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                          scale: { duration: 2, repeat: Infinity }
                        }}
                      />
                    </motion.div>
                    
                    <h4 className="font-bold text-white mb-4 text-xl group-hover:text-primary transition-colors">
                      {advantage.title}
                    </h4>
                    
                    <p className="text-white/70 leading-relaxed group-hover:text-white/90 transition-colors">
                      {advantage.description}
                    </p>
                  </div>
                  
                  {/* Декоративная сетка */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-20 h-20 opacity-10"
                    style={{
                      backgroundImage: `linear-gradient(45deg, currentColor 25%, transparent 25%), 
                                       linear-gradient(-45deg, currentColor 25%, transparent 25%)`,
                      backgroundSize: '4px 4px'
                    }}
                    animate={{ rotate: [0, 90, 180, 270, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Центральный элемент соединения */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="glass-card p-6 rounded-full border-white/20 neon-glow-accent">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center"
            >
              <Package className="w-6 h-6 text-white" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}