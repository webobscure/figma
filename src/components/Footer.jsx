import { Separator } from "./ui/separator";
import { motion } from "motion/react";
import { Satellite, Mail, Phone, Zap } from "lucide-react";

export function Footer() {
  const socialIcons = [
    { icon: Mail, href: "mailto:sample@ya.ru" },
    { icon: Phone, href: "tel:+79991234567" },
    { icon: Zap, href: "#" },
    { icon: Satellite, href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm border-t border-white/10">
      {/* Футуристичный фон */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center neon-glow"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Satellite className="w-5 h-5 text-white" />
              </motion.div>
              <span className="hologram-text font-bold text-xl">FleetTech Pro</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Комплексная футуристичная система управления автопарком грузовых фур 
              с интеграцией ГЛОНАСС для оптимизации логистических процессов.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center border border-white/20 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-5 h-5 text-white/70 group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">Функции системы</h4>
            <ul className="space-y-3">
              {[
                "Мониторинг автопарка",
                "Интеграция ГЛОНАСС",
                "KPI водителей и механиков",
                "Управление ТО и ремонтом",
                "Система заявок",
                "Аналитика и отчеты"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="text-white/60 hover:text-white/90 transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">Преимущества</h4>
            <ul className="space-y-3">
              {[
                "Работает 24/7",
                "Удаленное управление",
                "Любой размер автопарка",
                "Коробочное решение",
                "Индивидуальная доработка",
                "Техническая поддержка"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="text-white/60 hover:text-white/90 transition-colors cursor-pointer"
                  whileHover={{ x: 5 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h4 className="font-semibold text-lg mb-6 text-white">Контакты</h4>
            <ul className="space-y-4">
              <motion.li 
                className="text-white/60"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <strong className="text-primary">Email:</strong> sample@ya.ru
              </motion.li>
              <motion.li 
                className="text-white/60"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                <strong className="text-accent">Телефон:</strong> +7 999 123-45-67
              </motion.li>
              <motion.li 
                className="text-white/60"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Работаем 24/7
              </motion.li>
              <motion.li 
                className="text-white/60"
                whileHover={{ scale: 1.05, x: 5 }}
              >
                Поддержка автопарков любого размера
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <Separator className="bg-white/10 mb-8" />

        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p>&copy; 2024 FleetTech Pro. Все права защищены.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <motion.span
              className="text-sm"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Специализация: грузовые перевозки с ГЛОНАСС
            </motion.span>
            <motion.div
              className="w-2 h-2 bg-accent rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}