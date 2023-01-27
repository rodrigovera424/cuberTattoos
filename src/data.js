// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/', name: 'Sobre mi' },
    { href: '/', name: 'Galeria' },
    { href: '/', name: 'Testimonios' },
    { href: '/', name: 'Articulos' },
    { href: '/', name: 'Contacto' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'Mi cuerpo es mi diario ',
  subtitle:
    'y mis tatuajes son mi historia.',
  btnText: 'saber mas',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'Mi Historia:',
  subtitle1:
    'Ilustrador y tatuador profesional de hace 5 años ',
  subtitle2:
    ' Creo que los tatuajes son una forma de expresarse sin palabras. Sin tener que dar explicaciones, la gente puede mirar tus tatuajes y ver quién eres.',
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Visita mi galeria:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Hacerse un tatuaje es una buena forma de recuperar tu propio cuerpo para ayudarte a decirte a ti mismo que estás a cargo.”',
  btnText: 'play',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "Lo recomiendo al 100x%, muy buena atención, gente muy buena onda y educada, lugar muy limpio y ordenado, un lugar grato para poder asesorarte y tatuarte",
    name: 'natalia foi',

  },
  {
    quoteImg: QuoteImg,
    message:
      'Lo mejor del mundo. Mucha paciencia en mi diseño y la verdad que me encantó cómo quedó. Un saludo enorme .',
    name: 'Carlos medina',
   
  },
];

export const contactData = {
  title: 'Contactame :',
  info: [
    {
      title: 'Mi estudio',
      subtitle:
        'Veni a conocer',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Av. 9 de Julio 1392,Temperley',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+54 93 30493943',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'Av. 9 de Julio 1392,Temperley',
      },
      link: 'Get location',
    },
    
  ],
  form: {
    name: 'Tu Nombre',
    email: 'Tu E-mail',
    message: 'Escribe tu mensaje',
    btnText: 'Enviar',
  },
};

export const footerData = {
  about: {
    title: 'About void tattoo',
    subtitle:
      'Sit amet, consectetur nun in velit arcu posuere integer. Adipiscing elit duis porttitor massa tellus',
    address: {
      icon: <FaMapMarkerAlt />,
      name: '1630 Elm Drive, New York City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+49 34 36573355',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/', name: 'About me' },
      { href: '/', name: 'My gallery' },
      { href: '/', name: 'My services' },
      { href: '/', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      'Elit duis porttitor massa tellus nun in velit arcu posuere integer.',
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
