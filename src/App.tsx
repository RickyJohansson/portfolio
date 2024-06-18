import './App.scss'
import './styles/_variables.scss';
import './styles/_typography.scss';
import profilePic from './assets/profilepicgreyed.png';
import Header from './components/Header';
import Underscore from './components/Underscore';
import PuzzlePiece from './components/PuzzlePiece';
import SocialMedia from './components/SocialMedia';
import Project from './components/Project';
import Experience from './components/Experience';

import css from './assets/CSS.png';
import express from './assets/Express.png';
import javascript from './assets/Javascript.png';
import typescript from './assets/Typescript.png';
import node from './assets/Node.png';
import git from './assets/Github.png';
import firebase from './assets/Firebase.png';
import figma from './assets/Figma.png';
import html from './assets/HTML.png';
import sass from './assets/Sass.png';
import material from './assets/Material-ui.png';
import react from './assets/React.png';

import { useState } from 'react';
import pluggaItCover from './assets/pluggaitCover.jpg';
import rocksaltCover from './assets/rocksaltCover.jpg';
import rescueCover from './assets/rescueCover.jpg';
import rewindCover from './assets/rewindCover.jpg';
import morganCover from './assets/morgankjellinCover.png';
import comboCover from './assets/comboCover.png';
import portfolioCover from './assets/portfolioCover.png';
import ellaCover from './assets/ellaCover.png';
import { useRef } from 'react';

function App() {

  const [ scrolled, setScrolled ] = useState<string>('0');

  const date = new Date();
  const currentYear = date.getFullYear();
  const aboutRef = useRef() as React.MutableRefObject<HTMLElement>;
  const portfolioRef = useRef() as React.MutableRefObject<HTMLElement>;
  const contactRef = useRef() as React.MutableRefObject<HTMLElement>;

  const experiences = [
    { prog: 'React', img: react },
    { prog: 'Typescript', img: typescript },
    { prog: 'Javascript', img: javascript },
    { prog: 'Html', img: html },
    { prog: 'Css', img: css },
    { prog: 'Sass', img: sass },
    { prog: 'Node', img: node },
    { prog: 'Firebase', img: firebase },
    { prog: 'Express', img: express },
    { prog: 'Material-ui', img: material },
    { prog: 'Git', img: git },
    { prog: 'Figma', img: figma },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  window.onscroll = () => {
    setScrolled(`${window.scrollY}`);
  }

  const scrollDown = () => {

    aboutRef.current.scrollIntoView({ behavior: 'smooth' });

  }

  return (
    <div className="app">

      < Header aboutRef={aboutRef} portfolioRef={portfolioRef} contactRef={contactRef}/>
      
      <figure className="spider_string" style={{ height: `${ Number(scrolled) }px` }}></figure>
      <section className="scroll_button__container">

        <figure className="top_button" onClick={ scrollToTop }>

          <figure className="left_net"></figure>
          <figure className="right_net"></figure>


          <figure className="spider_body">

            <figure className="spider_left__backlegs"></figure>
            <figure className="spider_right__backlegs"></figure>
            <figure className="spider_left__frontlegs"></figure>
            <figure className="spider_right__frontlegs"></figure>

            <figure className="spider_left__eye">
              <figure className="spider_pupil"></figure>
            </figure>

            <figure className="spider_right__eye">
              <figure className="spider_pupil"></figure>
            </figure>

          </figure>

          <p className="text_top">Scrolla upp?</p>
          <p className="text_click">Klicka</p>

        </figure>

      </section>


      <section className="profile_section">

        <div className="profile">

          <figure className="picture_figure__big">

            <img className="profile_picture" src={ profilePic } alt="profilePic" />
            <h1>Creative thinking</h1>
            <p className="profile_name">Ricky Johansson</p>
            <p className="profile_desc">Frontend Developer</p>

            <SocialMedia type={0}/>

            <Underscore />

          </figure>

          <figure className="picture_figure__small">

          </figure>
          <figure className="picture_figure__final"></figure>

          <section className="profile_smaller">
            <h1>Creative thinking</h1>
            <p className="profile_name">Ricky Johansson</p>
            <p className="profile_desc">Frontend Developer</p>
            <img className="profile_picture" src={ profilePic } alt="profilePic" />
            <SocialMedia type={0}/>
            <Underscore />
          </section>

        </div>

        <figure className="profile_arrow_container">
          <section className="profile_arrow" onClick={() => scrollDown()}>
            <figure className="arrow_bottom"></figure>
            <figure className="arrow_top"></figure>
          </section>
        </figure>

      </section>

      <section ref={aboutRef} className="about_section">

        <PuzzlePiece />
        <h1>OM MIG</h1>
        <Underscore />
        <p>Jag har studerat till Frontend utvecklare vid folkuniversitetet i Karlstad, vilket är en 2 år lång utbildning.</p>
        <p>Programmering har alltid varit något som intresserat mig sedan barnsben, nu var det dags att sätta igång den resan.</p>
        <p>När utbildningen startade var jag nöjd över att äntligen få sätta igång och lära mig programmering på djupet, det var också inom just Front-end utveckling vilket intresserade mig.</p>
        <p>Nu som nyexaminerad från yrkeshögskolan är jag mer än redo att starta min karriär!</p>
        <p className="about_experience">Vilka tekniker har jag koll på?</p>
        <section className="experience_grid">
          {
            experiences.map((obj, i) => {
              return <Experience key={i} prog={obj.prog} img={obj.img} />
            })
          }
        </section>
        <PuzzlePiece />


      </section>

      <section ref={ portfolioRef } className="portfolio_section">

        <h1>PORTFOLIO</h1>

        <Underscore />

        <section className="projects_wrapper">

        <Project projectName={'Ellas klinik'} projectImage={ellaCover} 
            desc={[
              'Projekt för en personlig kund, fortsätter att utvecklas.',
              'Målet var att åt kundens klinik skapa en simpel hemsida med fräsch design.',
              'Behovet var att kunna se lite generell info om kliniken och att kunna se över tjänster och bokningar.',
              'Huvudfokus för kunden var att kunna se tjänster för skönhetsvård, medicinsk fotvård samt hårvård.',
              'Design processen: wireframes, användar tester.',
              'Tech-stack: React - Typescript - Sass'
            ]} 
            liveLink={'https://ellasklinik.se/'} 
            gitLink={'https://github.com/RickyJohansson/ellasklinik'}
            figma={''}
          />

          <Project projectName={'ComboVault'} projectImage={comboCover} 
            desc={[
              'Har du någon gång spelat fighting spel och funderat över hur combon för en viss karaktär ser ut? att minnas alla variationer är nog nära omöjligt.',
              'ComboVault hjälper till med detta, hemsidan uppdateras med flertalet spel och dess karaktärer där du lätt kan se combos medan du spelar eller för att titta upp dessa på förhand för ett så effektivt spelande som möjligt.',
              'Utöver publika inlägg kan du logga in på ditt google-konto för att hålla koll på dina egna inlägg.',
              'Simple and fun!',
              'Design processen: Figma - wireframes, prototyper, user stories, användar tester.',
              'Tech-stack: React - Typescript - Sass - Firebase'
            ]} 
            liveLink={'https://combovault.com/'} 
            gitLink={'https://github.com/KarlEmilArvid/ComboVault'}
            figma={'https://www.figma.com/file/yKd6UQBfT0mFDJZynvMowc/ComboVault?type=design&node-id=0%3A1&mode=design&t=AnAo888XuQdGbJ5z-1'}
          />

          <Project projectName={'Rocksalt'} projectImage={rocksaltCover} 
          desc={[
            'Ett större grupp projekt, vi använde oss av Scrum som agil metod.',
            'Vi hade en ny scrum master varje vecka och projektet varade i fem veckor, Det blev mycket live kodning men det lärde oss mycket också.',
            'Sidan ska återspegla en take-away restaurang där vanliga funktioner ingår, jag arbetade mest med menyn och att få beställningar att gå runt, både som personal/icke-personal.',
            'Man kan skapa konto eller vara gäst för beställningar, det finns även ett test konto för admins att logga in på för att även se den delen: Ricky / test',
            'Design processen: Figma - wireframes, prototyper, user stories, användar tester.',
            'Tech stack: React - TypeScript - Node.js - Express - LowDb - SASS - Docker'
          ]} 
          liveLink={'https://rocksalt.onrender.com/#/'} 
          gitLink={'https://github.com/RickyJohansson/mighty-zebras-fullstack'}
          figma={'https://www.figma.com/file/lbwykP4131jRMf9EXopIdw/Mighty-Zebras?type=design&node-id=56-469&mode=design'}
          />

          <Project projectName={'Plugga IT'} projectImage={pluggaItCover} 
          desc={[
            'Detta projekt skapades på min första LIA-plats hos ZoCom AB, arbetstiderna var heltid, hemsidan är nu händertagen av ZoCom.',
            'Vi jobbade på en kampanjsida som skulle vara tech inspirerad, vi har samarbetat bra och livecodat, gruppen fick bra koll på koden.',
            'Projektet bestod av 4 utvecklare och 1 projektledare, vi använde Scrum under projektet.',
            'Mitt fokus var mestadels funktionalitet, framförallt formulärets funktioner, där utvecklade jag i princip allt.',
            'Vi använde Firebase för att lagra vår användarstatistik från formuläret.',
            'Design processen: Figma - wireframes, prototyper, user stories, användar tester.',
            'Tech stack: React - TypeScript - SASS - AnimeJS - Firebase'
          ]} 
          liveLink={'https://plugga-it.se/'} gitLink={'https://github.com/RickyJohansson/folkans-it-utbildningar'}
          figma={''}
          />

          <Project projectName={'Morgan Kjellin'} projectImage={morganCover} 
          desc={[
            'Projektet utformades för en enskild kund för att kunna boka föreläsningar eller kontakt för övrig entreprenuerskap, därför var kontinuerlig kontakt med kunden viktigt för att få rätt information och uppfylla vad han vill åstadkomma på rätt sätt.',
            'Det finns även en admin del där han kan redigera vissa utvalda texter där man kunde förutse kontinuerliga förändringar. Här lades också en personlig kalender till. Denna del kan dock inte visas här på grund av sekretess.',
            'Nytt för mig var att använda Material-UI men det var väldigt lärorikt och kul att lära sig nya saker!',
            'Designprocessen: figma skiss, användar tester, kunden var med väldigt mycket och fick göra sina val/lämna åsikter på prototypen, vilka funktioner som skulle finnas.',
            'Tech-stack: React, Typescript, Material-UI, Firebase'

          ]} 
          liveLink={'https://morgankjellin.com/'} 
          gitLink={'https://github.com/Felix-Stark/morgan-kjellin'}
          figma={'https://www.figma.com/file/WRcjImiU6UKZK1ijk0iyyB/Morgan-Kjellin?type=design&node-id=1%3A2&mode=design&t=OIqdFUKCBWCNpBxn-1'}
          />

          <Project projectName={'Portfolio'} projectImage={portfolioCover} 
            desc={[
              'Portfolion skapades i syfte att visa kreativitet och vilja, den kommer ständigt uppdateras med nya projekt.',
              'Jag hoppas ni gillar det ni ser lika mycket som jag tyckte om att skapa det, man lär sig alltid något nytt längs vägen!',
              'Designprocessen: figma skiss, användar tester',
              'Tech-stack: React, Typescript, Sass'

            ]} 
            liveLink={''} 
            gitLink={'https://github.com/RickyJohansson/portfolio'}
            figma={''}
          />

          <Project projectName={'Rescue Rabbits'} projectImage={rescueCover} 
          desc={[
            'Hemsidan hjälper dig att kunna adoptera djur.',
            'Ett kortare projekt där vi live-codade väldigt mycket, främst genom discord streaming.',
            'Design processen: Figma - wireframes, prototyper, user stories, användar tester.',
            'Tech stack: React - TypeScript - Sass'
          ]} 
          liveLink={'https://rescue-rabbits.onrender.com/'} 
          gitLink={'https://github.com/RickyJohansson/rescue-rabbits'}
          figma={'https://www.figma.com/file/dPiu6XGVasp1wwbECQYY4g/Rescue-Rabbits---by-Mighty-Gardeners?type=design&node-id=15%3A2&mode=design&t=xRD5mMww591t6rAj-1'}
          />

          <Project projectName={'Rewind'} projectImage={rewindCover} 
          desc={[
            'Ett kortare projekt som går ut på att du kan spara och söka spelhistorik.',
            'Datan ligger inte i en databas, men den symboliserar en full-stack om jag skulle vilja bygga vidare på projektet.',
            'Hemsidan är därför prototypad som en inloggad user där du kan lägga till resultat för de befintliga spelen.',
            'Du kan också söka på befintliga spelare och spelare som läggs till i nya matcher. På Ryan Shecklers profil kan man se resultat.',
            'Design processen: Figma - wireframes, prototyper, user stories, användar tester.',
            'Tech stack: React - TypeScript - SASS/CSS'
          ]} 
          liveLink={'https://rewind-assignment.onrender.com/'} 
          gitLink={'https://github.com/RickyJohansson/rewind-assignment'}
          figma={'https://www.figma.com/file/NwefOfxwtk177IIn0DtBMs/Rewind-Prototype?type=design&node-id=3%3A2&mode=design&t=xRD5mMww591t6rAj-1'}
          />


        </section>

        <PuzzlePiece />

      </section>

      <section ref={ contactRef } className="contact_section">
        <SocialMedia type={1}/>
        <p className="copyright"> &copy; { currentYear }, All Rights Reserved.</p>
      </section>

    </div>
  )
}

export default App
