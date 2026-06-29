export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "yapay-zeka-haber-analizi",
    title: "Yapay Zeka Destekli Haber Analizi ve Kategorilendirme Sistemi",
    description:
      "Harici web kaynaklarından otomatik veri çeken, Apache Spark MLlib ve NLP algoritmaları kullanarak metinleri kategorize edip özetleyen sistem geliştirildi. Spring Boot ve JDBC ile ölçeklenebilir backend servisleri kodlandı; JWT ve Spring Security ile token tabanlı güvenli kimlik doğrulama katmanı oluşturuldu.",
    image: "/images/ai-news-analysis.png",
    technologies: ["Java 21", "Spring Boot", "React 19", "Spark MLlib", "PostgreSQL"],
    features: [
      "Harici web kaynaklarından otomatik veri çekme",
      "Apache Spark MLlib ile metin kategorilendirme",
      "NLP algoritmaları ile metin özetleme",
      "JWT ve Spring Security ile kimlik doğrulama",
      "Spring Boot ve JDBC ile ölçeklenebilir backend",
    ],
    githubUrl: "https://github.com/metehansargin/bitirmeProjesi",
  },
  {
    slug: "mikroservis-mimarisi",
    title: "Spring Cloud & Kafka Tabanlı Mikroservis Mimarisi",
    description:
      "Sistemin ölçeklenebilirliğini artırmak amacıyla API Gateway, Eureka Service Registry ve merkezi Config Server bileşenlerini barındıran çoklu mikroservis ekosistemi sıfırdan geliştirildi. Servisler arası asenkron iletişim için Apache Kafka entegrasyonu sağlandı. Dağıtık sistemlerde hata takibi için Zipkin kullanılarak, tüm servislerin Docker konteynerleri üzerinde izole çalıştırılması organize edildi.",
    image: "/images/microservices-architecture.png",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "Kafka", "Docker", "Zipkin"],
    features: [
      "API Gateway ve Eureka Service Registry",
      "Merkezi Config Server yapılandırması",
      "Apache Kafka ile asenkron iletişim",
      "Zipkin ile dağıtık hata takibi",
      "Docker konteynerleri üzerinde izole deployment",
    ],
    githubUrl: "https://github.com/metehansargin/SpringbootMikroservisMimarisi",
  },
  {
    slug: "sosyal-medya-bagimliligi",
    title: "Sosyal Medya Bağımlılığı Tespit Sistemi",
    description:
      "Kullanıcı davranışlarını ve dijital alışkanlık verilerini analiz ederek sosyal medya bağımlılık seviyelerini tespit eden makine öğrenimi tabanlı bir sınıflandırma modeli geliştirildi. Veri ön işleme, özellik mühendisliği ve algoritma doğrulama süreçleri uygulanarak tahminleme performansı optimize edildi.",
    image: "/images/social-media-addiction.png",
    technologies: ["Python", "Makine Öğrenmesi", "Veri Analizi"],
    features: [
      "Kullanıcı davranış analizi",
      "Dijital alışkanlık verisi işleme",
      "Makine öğrenimi sınıflandırma modeli",
      "Veri ön işleme ve özellik mühendisliği",
      "Algoritma doğrulama ve performans optimizasyonu",
    ],
    githubUrl: "https://github.com/metehansargin/python",
  },
  {
    slug: "influxdb-entegrasyonu",
    title: "Zaman Serisi Veri Yönetimi ve InfluxDB Entegrasyonu",
    description:
      "Zamana bağlı sensör verilerinin ve metriklerin yüksek performanslı olarak kaydedilmesi, sorgulanması ve analizi için Java tabanlı InfluxDB entegrasyonu tasarlandı.",
    image: "/images/influxdb-integration.png",
    technologies: ["Java", "InfluxDB", "Maven"],
    features: [
      "Zamana bağlı sensör verisi kaydı",
      "Yüksek performanslı metrik sorgulama",
      "Java tabanlı InfluxDB entegrasyonu",
      "Veri analizi ve görselleştirme altyapısı",
    ],
    githubUrl: "https://github.com/metehansargin/influxDBProjects",
  },
  {
    slug: "derin-ogrenme-fiyatlandirma",
    title: "Derin Öğrenme Tabanlı Dinamik Fiyatlandırma ve Stok Optimizasyonu Platformu",
    description:
      "İşletmelerin fiyatlandırma ve stok yönetimi süreçlerini derin öğrenme algoritmaları ile optimize eden sistem altyapısı modellendi. Yazılım proje yönetimi standartları, test (QA) ve risk analizi süreçleri aktif uygulandı.",
    image: "/images/deep-learning-pricing.png",
    technologies: ["Python", "Derin Öğrenme", "Veri Analizi"],
    features: [
      "Derin öğrenme ile dinamik fiyatlandırma",
      "Stok yönetimi optimizasyonu",
      "Yazılım proje yönetimi standartları",
      "Test (QA) ve risk analizi süreçleri",
    ],
    githubUrl: "https://github.com/metehansargin/DeepLearning",
  },
  {
    slug: "patika-klon",
    title: "Patika Klon Sistemi (Eğitim Yönetim Masaüstü Uygulaması)",
    description:
      "Admin, Eğitmen ve Öğrenci rolleri barındıran; ders/içerik ekleme ve quiz değerlendirme modüllerine sahip, JDBC ile dinamik MySQL entegrasyonlu nesne yönelimli (OOP) eğitim platformu geliştirildi.",
    image: "/images/patika-clone.png",
    technologies: ["Java Swing", "MySQL", "JDBC"],
    features: [
      "Admin, Eğitmen ve Öğrenci rol yönetimi",
      "Ders ve içerik ekleme modülü",
      "Quiz değerlendirme sistemi",
      "JDBC ile dinamik MySQL entegrasyonu",
      "Nesne yönelimli (OOP) mimari",
    ],
    githubUrl: "https://github.com/metehansargin/patika-clone",
  },
  {
    slug: "adventure-game",
    title: "Macera Oyunu",
    description:
      "Java ve MySQL ile geliştirilmiş metin tabanlı bir macera oyunu. Oyuncular farklı karakterler seçebilir, çeşitli canavarlarla savaşabilir, silah ve zırh kullanabilir, farklı mekanlarda maceraya atılabilir. Konsol tabanlı arayüz ile oynanabilen bu oyun, nesne yönelimli programlama ve veritabanı yönetimi prensiplerini uygular.",
    image: "/images/adventure-game.png",
    technologies: ["Java", "MySQL", "JDBC", "OOP"],
    features: [
      "Farklı karakter sınıfları ve özellikleri",
      "Çeşitli canavarlar ve savaş mekanikleri",
      "Silah ve zırh sistemi",
      "Farklı mekanlar ve keşif imkanı",
      "MySQL veritabanı entegrasyonu",
      "Nesne yönelimli tasarım",
    ],
    githubUrl: "https://github.com/metehansargin/Adventure-Game",
  },
  {
    slug: "order-management",
    title: "Sipariş Yönetim Sistemi",
    description:
      "Java Swing ve MySQL kullanılarak geliştirilen kapsamlı bir işletme yönetim uygulaması. Satış takibi, müşteri yönetimi, stok kontrolü ve raporlama gibi temel işlevleri içeren bu sistem, işletmelerin günlük operasyonlarını verimli bir şekilde yönetmelerini sağlar.",
    image: "/images/order-management.png",
    technologies: ["Java Swing", "MySQL", "JDBC", "Desktop App"],
    features: [
      "Satış takibi ve raporlama",
      "Müşteri yönetimi",
      "Stok kontrolü",
      "Kullanıcı dostu Swing arayüzü",
      "MySQL veritabanı entegrasyonu",
    ],
    githubUrl: "https://github.com/metehansargin/order-management",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
