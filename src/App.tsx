import './App.scss'
import './styles/_variables.scss';
import './styles/_typography.scss';
import profilePic from './assets/profilepicgreyed.png';
import Header from './components/Header';
import Underscore from './components/Underscore';
import PuzzlePiece from './components/PuzzlePiece';
import SocialMedia from './components/SocialMedia';
import Project from './components/Project';
import { useState } from 'react';
import pluggaItCover from './assets/pluggaitCover.jpg';
import rocksaltCover from './assets/rocksaltCover.jpg';
import rescueCover from './assets/rescueCover.jpg';
import rewindCover from './assets/rewindCover.jpg';
import morganCover from './assets/morgankjellinCover.png';
import comboCover from './assets/comboCover.png';
import { useRef } from 'react';

function App() {

  const [ scrolled, setScrolled ] = useState<string>('0');

  const date = new Date();
  const currentYear = date.getFullYear();
  const aboutRef = useRef() as React.MutableRefObject<HTMLElement>;
  const portfolioRef = useRef() as React.MutableRefObject<HTMLElement>;
  const contactRef = useRef() as React.MutableRefObject<HTMLElement>;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  window.onscroll = () => {
    setScrolled(`${window.scrollY}`);
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

      </section>

      <section ref={aboutRef} className="about_section">

        <PuzzlePiece />
        <h1>OM MIG</h1>
        <Underscore />
        <p>Jag har studerat till Frontend utvecklare vid folkuniversitetet i Karlstad, vilket är en 2 år lång utbildning.</p>
        <p>Programmering har alltid varit något som intresserat mig sedan barnsben, nu var det dags att sätta igång den resan.</p>
        <p>När utbildningen startade var jag överlycklig att äntligen få sätta igång och lära mig programmering på djupet, det var också inom just Frontend utveckling vilket intresserade mig.</p>
        <p>Nu som nyexaminerad från yrkeshögskolan är jag mer än redo att starta min karriär!</p>
        <PuzzlePiece />

      </section>

      <section ref={ portfolioRef } className="portfolio_section">

        <h1>PORTFOLIO</h1>

        <Underscore />

        <section className="projects_wrapper">

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
