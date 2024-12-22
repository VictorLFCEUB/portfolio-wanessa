'use client'

import 'react-circular-progressbar/dist/styles.css'

import { useState } from 'react'
import { Badge, BadgeCheck, Menu, Languages } from 'lucide-react'
import { CircularProgressbar } from 'react-circular-progressbar'
import { TbBrandPinterest, TbBrandInstagram, TbBrandLinkedin, TbDownload, TbBrandTiktok } from "react-icons/tb";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { SkillBar } from "@/components/SkillBar"
import { Tool } from "@/components/Tool"
import { StatItem } from "@/components/StatItem"
import { downloadCurriculum } from "@/components/Curriculum"
import { StarRating } from "@/components/Rating"


import Image from 'next/image'
import myImage from '../../public/IMG_4502.jpg'


export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isEnglish, setIsEnglish] = useState(false)

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish)
  }

  const translate = (pt: string, en: string) => isEnglish ? en : pt
    

  return (
    <div className="flex min-h-screen bg-white text-black">
      <aside className={`w-64 bg-orange-300 p-6 fixed h-full overflow-y-auto transition-all duration-300 ease-in-out ${menuOpen ? 'left-0' : '-left-64'} lg:left-0`}>
        

        <div className="flex flex-col items-center mb-4 ">
            <Image src={myImage} alt="Wanessa de Oliveira" className="rounded-full mb-2" />
            <h2 className="text-xl font-bold mb-2">Wanessa de Almeida</h2>
            <p className="text-sm text-gray-600">{translate("Publicitária | Marketing | Blog", "Advertiser | Marketing | Blogger")}</p>
        </div>

        <Button 
          variant="outline" 
          className="w-full mb-6 flex items-center justify-center"
          onClick={downloadCurriculum}
        >
          <TbDownload className="mr-2 h-4 w-4" />
          {translate("Baixar Currículo", "Download CV")}
        </Button>
        
        <div className="mb-6">
          <h3 className="text- font-semibold mb-2">{translate("Residência", "Residence")}</h3>
          <p className="text-sm text-gray-600">{translate("Brasil", "Brazil")}</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">{translate("Cidade", "City")}</h3>
          <p className="text-sm text-gray-600">Brasília</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">{translate("Idade", "Age")}</h3>
          <p className="text-sm text-gray-600">34</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-4">{translate("Línguas", "Languages")}</h3>
          <div className="flex justify-between">
            <div className="w-20 h-20">
            <CircularProgressbar 
                value={97} 
                text="97%" 
                styles={{
                  path: {
                    stroke: `#d9756c`, // Path color
                  },
                  text: {
                    fill: '#d9756c', // Text color
                  },
                  trail: {
                    stroke: '#d6d6d6', // Trail color
                  },
                }} 
              />
              <p className="text-center mt-2 text-sm">{translate("Português", "Portuguese")}</p>
            </div>
            <div className="w-20 h-20">
              <CircularProgressbar 
                value={83} 
                text="83%" 
                styles={{
                  path: {
                    stroke: `#d9756c`, // Path color
                  },
                  text: {
                    fill: '#d9756c', // Text color
                  },
                  trail: {
                    stroke: '#d6d6d6', // Trail color #CF9A63
                  },
                }} 
              />
              <p className="text-center mt-2 text-sm">{translate("Inglês", "English")}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6 mt-16">
          <h3 className="text-sm font-semibold mb-2">{translate("Experiências e Competências", "Experiences and Skills")}</h3>
          <SkillBar name="Pacote Office" percentage={75}/>
          <SkillBar name={translate("Planejamento de Conteúdo", "Content Planning")} percentage={91} />
          <SkillBar name={translate("Mídias Sociais", "Social Media")} percentage={90} />
          <SkillBar name="SEO" percentage={83} />
        </div>
        
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-2">{translate("Ferramentas", "Tools")}</h3>
          <div className="flex flex-wrap">
            <Tool name="Canva" />
            <Tool name="CapCut" />
            <Tool name="Pinterest" />
            <Tool name="Fotografia" />
            <Tool name="TikTok" />
            <Tool name="Instagram" />
            <Tool name="Google Analytics" />
            <Tool name="Wordpress" />
            <Tool name="Blogger" />
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <a href="https://www.instagram.com/wanessaoalmeida/" className="text-gray-600 hover:text-white" target="_blank">
            <TbBrandInstagram size={30} />
          </a>
          <a href="https://www.linkedin.com/in/wanessa-oliveira-5302ba7b/" className="text-gray-600 hover:text-white" target="_blank">
            <TbBrandLinkedin size={28} />
          </a>
          <a href="https://br.pinterest.com/wanessaoalmeida/" className="text-gray-600 hover:text-white" target="_blank">
            <TbBrandPinterest size={28} />
          </a>
          <a href="https://www.tiktok.com/@oquebrasiliatemdemelhor" className="text-gray-600 hover:text-white" target="_blank">
            <TbBrandTiktok size={28} />
          </a>
        </div>
      </aside>
      
      <main className="flex-1 p-8 lg:ml-64">
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu />
          </Button>
          <Button variant="ghost" size="default" onClick={toggleLanguage} >
            <Languages />
            <span className="ml-2">{translate("Traduzir para EN", "Translate to PT")}</span>
          </Button>
        </div>
        
        <section className="mb-12">
          <Card className="bg-zinc-200">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-4">{translate("Olá, seja bem-vindo(a)!", "Hello, welcome!")}</h1>
                  <Button className="bg-[#d9756c] text-black hover:bg-[#cf6258]">{translate("Explorar", "Explore")}</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
        
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <StatItem icon={<BadgeCheck size={24} />} value="10+" label={translate("Projetos Realizados", "Completed Projects")} />
          <StatItem icon={<Badge size={24} />} value="8+" label={translate("Clientes de Freelancer", "Freelance Clients")} />
          <StatItem icon={<Badge size={24} />} value="5+" label={translate("Certificados", "Certificates")} />
          <StatItem icon={<TbBrandInstagram size={24} />} value="4+" label={translate("Projetos Pessoais", "Personal Projects")} />
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">{translate("Meus Projetos", "My Projects")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="bg-zinc-200">
              <CardHeader className="p-0">
                <Image
                  src="/blog.png"
                  alt="Blog"
                  width={400}
                  height={200}
                  className="w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Dia de Brilho</CardTitle>
                <p className="text-sm text-gray-400">
                  {translate(
                    "Meu blog Dia de Brilho é um espaço onde compartilho dicas de beleza, moda, viagem e lifestyle. O blog foi criado em 2010 e desde então, tenho me dedicado a produzir conteúdo de qualidade e relevante para o público feminino. O site foi desenvolvido com WordPress e Elementor, garantindo um design moderno e responsivo.",
                    "My blog Dia de Brilho is a space where I share beauty, fashion, travel, and lifestyle tips. The blog was created in 2010 and since then, I have been dedicated to producing quality and relevant content to the feminin public. The site was developed with WordPress and Elementor, ensuring a modern and responsive design."
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader className="p-0">
                <Image
                  src="/arquiteta.png"
                  alt="Arquiteta"
                  width={400}
                  height={200}
                  className="w-full object-cover rounded-t-lg"
                /> 
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Bianca Libardi Arquiteta</CardTitle>
                <p className="text-sm text-gray-400">
                  {translate(
                    "Sou Social Media da arquiteta Bianca Libardi e trabalho criando conteúdo para o Instagram. O objetivo é divulgar os projetos da arquiteta e atrair novos clientes. O trabalho envolve a criação de posts, stories e gerenciamento das redes sociais.",
                    "I am Social Media for architect Bianca Libardi and work creating content for Instagram. The goal is to promote the architect's projects and attract new clients. The work involves creating posts, stories, and managing social networks."
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader className="p-0">
                <Image
                  src="/pinterest.png"
                  alt="Pinterest"
                  width={400}
                  height={200}
                  className="w-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">Pinterest Profissional</CardTitle>
                <p className="text-sm text-gray-400">
                  {translate(
                    "Meu trabalho com o Pinterest envolve a criação de pins, boards e a gestão de contas. O objetivo é aumentar o alcance e engajamento do perfil, atraindo tráfego orgânico para o site. O Pinterest é uma ferramenta poderosa para aumentar a visibilidade da marca e gerar leads qualificados.",
                    "My work with Pinterest involves creating pins, boards, and managing accounts. The goal is to increase the reach and engagement of the profile, attracting organic traffic to the site. Pinterest is a powerful tool to increase brand visibility and generate qualified leads."
                  )}
                </p> 
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-200">
              <CardHeader>
                <CardTitle>Github</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  {translate(
                    "O GitHub é essencial para controle de versão e colaboração. Sua interface intuitiva e recursos como pull requests e rastreamento de problemas simplificam o processo. A integração contínua garante código atualizado. O GitHub é vital para meu sucesso como desenvolvedora.",
                    "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer."
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <CardTitle>{translate("Contribuidora Open Source", "Open Source Contributor")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-400">
                  {translate(
                    "Open Source é o futuro. Geralmente dedico algum tempo nos fins de semana para contribuir com projetos de código aberto. Isso me dá a oportunidade de aprender com as melhores práticas de desenvolvimento e também me dá a chance de ajudar os outros e contribuir para a comunidade pelo bem comum.",
                    "Open Source is the future. I usually take some time on weekends and contribute to opensource projects. It gives me the opportunity to learn from best developer practices and also gives me a chance to help others and contribute to the community for the good."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </section> */}
        
        <section>
          <h2 className="text-2xl font-bold mb-4">{translate("Recomendações", "Recommendations")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-zinc-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/silvania.jpg" alt="Silvania Faria" />
                    <AvatarFallback>SF</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Silvania Faria</CardTitle>
                    <CardDescription>{translate("Nutricionista | Estética | Fitoterápica", "Nutritionist | Aesthetic | Phytotherapy")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <StarRating rating={5} />
                <p className="text-sm text-gray-400 mt-2">
                  {translate(
                    "Olá a todos! Queria aproveitar este momento para recomendar Wanessa para qualquer oportunidade em criação de conteúdos para mídias e sites. Tenho o prazer de trabalhar com ela desde 2020 em vários projetos onde ela demonstrou consistentemente habilidades fortes e excepcionais com designs criativos e textos únicos.",
                    "Hello everyone! I wanted to take this moment to recommend Wanessa for any opportunity in creating content for media and websites. I have the pleasure of working with her since 2020 on various projects where she has consistently demonstrated strong and exceptional skills with creative designs and unique texts."
                  )}
                </p>
              </CardContent>
            </Card>
            <Card className="bg-zinc-200">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="/marilu.jpeg" alt="Marylú Montenegro" />
                    <AvatarFallback>MM</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Marylú Montenegro</CardTitle>
                    <CardDescription>{translate("Psicóloga | Clínica | Metafísica", "Psychologist | Clinic | Metaphysic")}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <StarRating rating={5} />
                <p className="text-sm text-gray-400 mt-2">
                  {translate(
                    "Tenho o privilégio de trabalhar ao lado de Wanessa em vários projetos profissionais desde 2024, e devo dizer que seu talento e diversidade realmente se destacaram. Recentemente, iniciamos a criação de conteúdo e storytelling em vídeos, para divulgação do meu trabalho como psicóloga e terapeuta metafísica.",
                    "I have the privilege of working alongside Wanessa on several professional projects since 2024, and I must say that her talent and diversity really stood out. Recently, we started creating content and storytelling in videos, to promote my work as a psychologist and metaphysical therapist."
                  )}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-400">
          <p>{translate("© 2024 Wanessa de Almeida Oliveira. Todos os direitos reservados.","© 2024 Wanessa de Almeida Oliveira. All rights reserved.")}</p>         
        </footer>
      </main>
    </div>
  )
}