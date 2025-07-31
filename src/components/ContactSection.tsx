import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "motion/react";
import { Mail, Phone, Truck, MessageCircle, Send, Satellite } from "lucide-react";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Спасибо за заявку! Мы свяжемся с вами в ближайшее время.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      info: "sample@ya.ru",
      description: "Напишите нам на почту"
    },
    {
      icon: Phone,
      title: "Телефон",
      info: "+7 999 123-45-67",
      description: "Звоните в рабочее время"
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Футуристичный фон */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 360]
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.4, 1, 1.4],
          opacity: [0.4, 0.2, 0.4],
          rotate: [360, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

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
            <Satellite className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-white">Свяжитесь с нами</span>
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="hologram-text">Контакты</span>{" "}
            <span className="text-white">и заявка</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Готовы оптимизировать управление вашим автопарком грузовых фур? 
            Свяжитесь с нами для получения персонального предложения.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="glass-card p-8 border-white/10 group">
                      <div className="flex items-start gap-6">
                        <motion.div
                          className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center neon-glow flex-shrink-0"
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-xl group-hover:text-primary transition-colors">
                            {info.title}
                          </h4>
                          <p className="text-primary font-medium mb-2 text-lg">{info.info}</p>
                          <p className="text-white/60">{info.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <Card className="glass-card p-8 bg-gradient-to-r from-accent/20 to-primary/20 border-white/20 relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10"
                  animate={{ 
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                <div className="relative z-10 flex items-start gap-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-2xl flex items-center justify-center neon-glow-accent flex-shrink-0"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <Truck className="w-8 h-8 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Специализируемся на грузоперевозках
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      Наша система разработана специально для управления автопарками грузовых фур 
                      с интеграцией ГЛОНАСС и оптимизации логистических процессов.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.01 }}
          >
            <Card className="glass-card p-8 border-white/10 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center neon-glow"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white">Сделать заявку</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                        Имя *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="Иван" 
                        required 
                        className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                      <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                        Фамилия *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Иванов" 
                        required 
                        className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="ivan@company.ru" 
                      required 
                      className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Телефон
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+7 999 123-45-67" 
                      className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Компания *
                    </label>
                    <Input 
                      id="company" 
                      placeholder="Название вашей компании" 
                      required 
                      className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="fleetSize" className="block text-sm font-medium text-white mb-2">
                      Размер автопарка
                    </label>
                    <Input 
                      id="fleetSize" 
                      placeholder="Количество грузовых фур" 
                      className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50"
                    />
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileFocus={{ scale: 1.02 }}>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Сообщение
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о ваших потребностях в управлении автопарком..."
                      rows={4}
                      className="glass-card border-white/20 bg-white/5 text-white placeholder:text-white/50 resize-none"
                    />
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 neon-glow text-lg py-4"
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Отправить заявку
                    </Button>
                  </motion.div>
                </form>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}