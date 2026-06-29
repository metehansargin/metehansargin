"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/Header";

const skills = [
  "MsSQL",
  "NoSQL",
  "MongoDB",
  "Java",
  "SpringBoot",
  "Python",
  "C++",
  "C",
  "C#",
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          >
            Hakkımda
          </motion.h1>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-full md:w-80 h-auto rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/profile.jpg"
                alt="Metehan Sargın"
                width={400}
                height={500}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-none space-y-6 flex-1"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                Merhaba, ben Metehan Sargın. İstanbul&apos;da yaşayan bir yazılım geliştiriciyim.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Ayrıca, KTÜ Yazılım Kulübü&apos;nde aktif olarak yönetim ekibinde bulunuyor ve
                sayman olarak görev yapıyorum. Bu süre zarfında ekip içindeki etkileşimim ve
                liderlik yeteneklerim sayesinde kulübümde başarılar elde ettim.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Yaratıcı ve yenilikçi çözümlere olan ilgim, yazılım mühendisliği alanındaki bilgi
                birikimim ve problem geliştirme konusundaki tutkum ile birleşerek beni
                heyecanlandırıyor. Yeni teknolojilerle sürekli olarak ilgileniyor ve yazılım
                alanındaki becerilerimi her geçen gün geliştirmeye devam ediyorum.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Yetenekler
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
