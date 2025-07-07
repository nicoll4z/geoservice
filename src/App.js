// Novo código React com UI/UX refinada baseado nos sites fornecidos e nas instruções do usuário

import React, { useState } from 'react';

import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Check,
  Star,
  ArrowRight,
  Droplets,
  FileText,
  Search,
  Settings,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import './GeoserviceLandingPage.css';



const GeoserviceLandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Droplets className="icon blue" />, title: "Perfuração de Poços",
      description: "Perfuração profissional de poços tubulares profundos com tecnologia avançada e equipe especializada."
    },
    {
      icon: <FileText className="icon dark-blue" />, title: "Licenciamento Ambiental",
      description: "Regularização completa junto aos órgãos ambientais e elaboração de documentação técnica."
    },
    {
      icon: <Search className="icon teal" />, title: "Análise Hidrogeológica",
      description: "Estudos detalhados de produtividade e qualidade da água com relatórios técnicos especializados."
    }
  ];

  const projects = [
    {
      name: "Condomínio Águas Claras", location: "Brasília - DF",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
      description: "Perfuração de 3 poços artesianos para abastecimento residencial com capacidade de 15.000L/h cada."
    },
    {
      name: "Indústria Alimentícia Silva", location: "Goiânia - GO",
      image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=80",
      description: "Licenciamento ambiental completo e perfuração de poço industrial para processo produtivo."
    },
    {
      name: "Fazenda São João", location: "Anápolis - GO",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80",
      description: "Sistema de irrigação com 2 poços profundos para cultivo de 500 hectares de soja e milho."
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendes", company: "Construtora Mendes", rating: 5,
      text: "Excelente serviço! Perfuraram 2 poços para nossa obra e entregaram tudo no prazo. Equipe muito profissional."
    },
    {
      name: "Maria Santos", company: "Fazenda Vista Alegre", rating: 5,
      text: "Resolveram todos os problemas de licenciamento e ainda conseguiram uma vazão excelente no poço. Recomendo!"
    },
    {
      name: "João Silva", company: "Indústria Silva & Filhos", rating: 5,
      text: "Trabalho impecável desde o projeto até a entrega. Nossa produção nunca mais parou por falta de água."
    }
  ];


  return (
    <div className="geoservice-landing">
      <header>
        <div className="header-container">
          <div className="logo">GeoService</div>
          <nav className="desktop-menu">
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#projects">Projetos</a>
            <a href="#testimonials">Clientes</a>
            <a href="#contact">Contato</a>
          </nav>
          <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (

          <div className="mobile-menu">
            <a href="#home">Início</a>
            <a href="#about">Sobre</a>
            <a href="#services">Serviços</a>
            <a href="#projects">Projetos</a>
            <a href="#testimonials">Clientes</a>
            <a href="#contact">Contato</a>
          </div>
        )}
      </header>

      <section id="home" className="section hero fade-in">
        <h1>Especialistas em <span className="highlight">Perfuração de Poços</span></h1>
        <p>Soluções completas em hidrogeologia, licenciamento ambiental e perfuração de poços tubulares profundos com tecnologia de ponta.</p>
        <div className="buttons">
          <a href="#contact" className="button">Solicite um Orçamento <ArrowRight /></a>
          <a href="https://wa.me/5562999999999" className="button whatsapp">Fale com Especialista <MessageCircle /></a>
        </div>
      </section>

      <section id="about" className="section fade-in">
        <h2>Anos de experiência em geologia</h2>
        <p>Com anos de experiência no campo da geologia, somos referência em soluções integradas para perfuração e locação de poços tubulares profundos. Nossa atuação cobre desde estudos hidrogeológicos e geofísicos até o licenciamento ambiental, assegurando que cada projeto seja conduzido com rigor técnico e respeito às normas vigentes.

Nossa equipe é formada por profissionais altamente qualificados, que utilizam equipamentos modernos e tecnologia de ponta para garantir precisão e eficiência. Além disso, oferecemos consultoria especializada para orientar nossos clientes em todas as etapas do processo, minimizando riscos e otimizando resultados.

Priorizamos a sustentabilidade e o compromisso ambiental, realizando o licenciamento completo e adequado para cada empreendimento. Atuamos em toda a região Centro-Oeste, oferecendo atendimento personalizado e soluções sob medida para cada necessidade.

</p>
        <ul>
          <li> Equipe técnica altamente qualificada</li>
          <li> Licenciamento ambiental completo</li>
          <li> Consultoria técnica especializada</li>
          <li> Estudos hidrogeológicos e geofísicos</li>

        </ul>
      </section>

      <section id="services" className="section fade-in">
        <h2>Nossos Serviços</h2>
        <div className="grid">
          {services.map((s, i) => (
            <div className="card service-card" key={i}>
              {s.icon}
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
         <div className="buttons">
          <a href="https://wa.me/5562999999999" className="button whatsapp">Fale com Especialista <MessageCircle /></a>
        </div>
      </section>

      <section id="projects" className="section fade-in">
        <h2>Projetos Realizados</h2>
        <div className="grid">
          {projects.map((p, i) => (
            <div className="card project-card" key={i}>
              <img src={p.image} alt={p.name} className="project-image" />
              <h3>{p.name}</h3>
              <p className="project-location">{p.location}</p>
              <p>{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="section fade-in">
        <h2>O que nossos clientes dizem</h2>
        <div className="grid">
          {testimonials.map((t, i) => (
            <div className="testimonial" key={i}>
              <div className="stars">{[...Array(t.rating)].map((_, j) => <Star key={j} />)}</div>
              <p>"{t.text}"</p>
              <strong>{t.name}</strong>
              <small>{t.company}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section fade-in">
        <h2>Entre em Contato</h2>
        <p>Solicite um orçamento ou tire suas dúvidas com nossa equipe especializada</p>
        <form className="contact-form">
          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu e-mail" />
          <input type="tel" placeholder="Seu telefone" />
          <textarea placeholder="Descreva seu projeto"></textarea>
          <button className="button" type="submit">Enviar Mensagem</button>
        </form>
      </section>

      <footer className="footer">
        <div className="footer-column">
          <h4>GeoService</h4>
          <p>Perfuração de poços, licenciamento ambiental e análise hidrogeológica com qualidade e confiança.</p>
        </div>
        <div className="footer-column">
          <h4>Serviços</h4>
          <ul>
            <li>Perfuração de Poços</li>
            <li>Licenciamento Ambiental</li>
            <li>Análise Hidrogeológica</li>
            <li>Locação de Equipamentos</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contato</h4>
          <ul>
            <li><Phone size={16} /> (62) 3333-4444 / (62) 99999-9999</li>
            <li><Mail size={16} /> contato@geoservice.com.br</li>
            <li><MapPin size={16} /> Goiânia - GO</li>
            <li className="social-icons">
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default GeoserviceLandingPage;