import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Check, MessageCircle, Zap, Crown } from "lucide-react";

export function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Футуристичный фон */}
      <div className="absolute inset-0">
        <div className="tech-grid opacity-30 absolute inset-0" />
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
            x: [0, 100, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.5, 1, 1.5],
            opacity: [0.5, 0.2, 0.5],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
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
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-white">Премиум решение</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hologram-text">Цена</span>{" "}
            <span className="text-white">договорная</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Предлагаем коробочное решение с разработкой под ваши нужды. 
            Дополнительная разработка обговаривается отдельно.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="glass-card p-12 border-white/20 relative overflow-hidden group">
              {/* Анимированные фоновые элементы */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <motion.div
                    className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center neon-glow relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Zap className="w-10 h-10 text-white" />
                    <motion.div
                      className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Индивидуальное предложение
                  </h3>
                  <p className="text-xl text-white/70 mb-8">
                    Стоимость зависит от размера автопарка и требуемого функционала
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-6">
                    <motion.h4 
                      className="text-xl font-semibold text-white mb-6 flex items-center"
                      whileHover={{ x: 10 }}
                    >
                      <Zap className="w-5 h-5 mr-2 text-primary" />
                      Коробочное решение включает:
                    </motion.h4>
                    <div className="space-y-4">
                      {[
                        "Управление автопарком грузовых фур",
                        "Интеграция с системой ГЛОНАСС",
                        "Мониторинг KPI и аналитика",
                        "Система заявок и уведомлений",
                        "Веб-интерфейс и бот-интеграция",
                        "24/7 техническая поддержка"
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 neon-glow-blue">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-white/90">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <motion.h4 
                      className="text-xl font-semibold text-white mb-6 flex items-center"
                      whileHover={{ x: 10 }}
                    >
                      <Crown className="w-5 h-5 mr-2 text-accent" />
                      Дополнительные услуги:
                    </motion.h4>
                    <div className="space-y-4">
                      {[
                        "Кастомизация под ваши процессы",
                        "Интеграция с внешними системами",
                        "Персональное обучение персонала",
                        "Расширенная аналитика и BI",
                        "Мобильные приложения",
                        "Приоритетная техподдержка"
                      ].map((service, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          whileHover={{ x: 10 }}
                        >
                          <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0 neon-glow-accent">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-white/90">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <motion.div
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 neon-glow px-12 py-4 text-lg"
                  >
                    <MessageCircle className="w-6 h-6 mr-3" />
                    Получить коммерческое предложение
                  </Button>
                </motion.div>
              </div>
              
              {/* Декоративные элементы */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 border-2 border-primary/50 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 border-2 border-accent/50 rounded-lg"
                animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <p className="text-white/60 text-lg">
            Цена формируется индивидуально в зависимости от объема автопарка и требований к функционалу
          </p>
        </motion.div>
      </div>
    </section>
  );
}