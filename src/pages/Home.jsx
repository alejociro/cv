import BarProgress from 'components/BarProgress';
import CardEducation from 'components/CardEducation';
import CardInterest from 'components/CardInterest';
import CardRelatedCourse from 'components/CardRelatedCourse';
import ContainerImage from 'components/ContainerImage';
import Sidebar from 'components/Sidebar';
import React from 'react';

const Home = () => (
  <main className='bg-white '>
    <Sidebar />
    <div className='lg:ml-[400px] p-10'>
      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto flex justify-evenly flex-wrap rounded-xl gap-4 bg-gray-200'>
        <h1 className='font-bold'>Desarrolador Full Stack</h1>
        <span className='py-5'>
          Hola!!, soy un desarrollador Web Colombiano, tengo poca experiencia en
          el campo laboral, sin embargo, he trabajado con páginas web tanto
          desde back como del front, manejo en base de datos y maquetación de
          proyectos.
        </span>
      </div>
      <div className=' divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto flex justify-evenly flex-wrap rounded-xl gap-4 bg-gray-200'>
        <h1 className='font-bold'>Perfil</h1>
        <span className='py-5'>
          Soy una persona con excelentes relaciones interpersonales y habilidad
          para trabajar en equipo, asumir responsabilidades, con un alto nivel
          de compromiso, capacidad para resolver problemas y aprendizaje rápido,
          alto sentido de pertenencia, empatía, autoconciencia, motivación,
          respeto, autocontrol, cordialidad y amabilidad son algunos de los
          valores con los que me siento identificado dentro de la sociedad.
        </span>
      </div>
      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Estudios</h1>
        <div className='flex justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <CardEducation
            title='Bachillerato'
            school='Colegio Agustiniano de San Nicolas'
            date='Fecha: 2012 - 2017'
          />
          <CardEducation
            title='Ingeniería de Sistema'
            school='Universidad de Antioquia'
            date='Fecha: 2018 - 2023'
          />
          <CardEducation
            title='Ingles'
            school='Smart Academy A1-A2'
            date='Fecha: 2021 - 2022'
          />
        </div>
      </div>

      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Cursos afines</h1>
        <div className='flex justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <CardRelatedCourse
            title='Aplicaciones empresariales'
            date='U de A 2022'
          />
          <CardRelatedCourse title='Bases de datos' date='U de A 2021' />
          <CardRelatedCourse title='Modelos y simulación' date='U de A 2021' />
        </div>
      </div>

      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Lenguajes</h1>
        <div className='flex-w-full justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <BarProgress title='Php - laravel' percentage='100' />
          <BarProgress title='Html - Css' percentage='50' />

          <BarProgress title='Js' percentage='25' />
          <BarProgress title='Vue' percentage='40' />
        </div>
      </div>

      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Hobbies</h1>
        <div className='flex justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <ContainerImage title='Ejercicio' url='/statics/gym.jpeg' />
          <ContainerImage title='Música' url='/statics/musica.jpg' />
          <ContainerImage title='Videojuegos' url='/statics/juegos.jpg' />
        </div>
      </div>

      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Hobbies</h1>
        <div className='flex justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <ContainerImage title='Ver peliculas' url='/statics/marvel.jpg' />
          <ContainerImage title='Comer' url='/statics/comer.jpg' />
          <ContainerImage title='Familia' url='/statics/familia.jpg' />
        </div>
      </div>

      <div className='divide-y-4 divide-slate-400/25 lg:ml-[50px] mb-10 p-4 w-auto rounded-xl bg-gray-200 text-center'>
        <h1 className='font-bold'>Intereses</h1>
        <div className='flex justify-evenly flex-wrap gap-4 mt-5 p-5'>
          <CardInterest title='Front-end' url='/statics/front.jpg' />
          <CardInterest title='Back-end' url='/statics/back.jpg' />
          <CardInterest
            title='Inteligencia artifical'
            url='/statics/robot.jpg'
          />
        </div>
      </div>
    </div>
  </main>
);

export default Home;
