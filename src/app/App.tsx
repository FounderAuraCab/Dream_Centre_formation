import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
          background: '#C7C9CE',
          transition: 'all 0.1s ease-out'
        }}
      />

      <div className="min-h-screen bg-[#0B1220] text-[#E5E7EB] overflow-x-hidden cursor-none">
        {/* SECTION 1 - HERO */}
        <section className="min-h-screen flex flex-col justify-between px-8 md:px-16 lg:px-24 py-12">
          {/* Signature en haut gauche */}
          <motion.div 
            className="text-5xl md:text-6xl lg:text-7xl"
            style={{ fontFamily: 'Playfair Display, serif' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            D.
          </motion.div>

          {/* Titre massif centré */}
          <div className="flex-1 flex items-center justify-center">
            <motion.h1
              className="max-w-6xl mx-auto text-center"
              style={{ 
                fontFamily: 'Playfair Display, serif',
                letterSpacing: '-0.02em'
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-16 md:mb-24">
                Transformez votre centre en machine à inscriptions prévisibles.
              </span>
              
              <motion.div
                className="mt-16 md:mt-24 space-y-6"
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-[#9CA3AF] font-light leading-relaxed">
                  Un centre stable n'a pas besoin de pousser en permanence.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-[#9CA3AF] font-light leading-relaxed">
                  La majorité des centres dépendent encore de l'effort.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl text-[#E5E7EB] font-light leading-relaxed">
                  Les meilleurs structurent leur position.
                </p>
              </motion.div>
            </motion.h1>
          </div>

          {/* Footer */}
          <div className="flex justify-between items-end">
            <motion.a
              href="https://cal.com/dreamacq/echange-strategique-dream?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#111827] transition-all duration-500 text-lg md:text-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Demander un diagnostic confidentiel
            </motion.a>
            
            <motion.div
              className="text-right"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="text-2xl md:text-3xl tracking-wider">Dream</div>
              <div className="text-sm md:text-base text-[#9CA3AF] tracking-widest mt-1">
                Strategic Repositioning
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2 - LA RÉALITÉ STRUCTURELLE */}
        <section className="min-h-screen bg-[#111827] px-8 md:px-16 lg:px-24 py-32 md:py-48">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Le problème n'est pas l'effort. C'est l'imprévisibilité.
            </motion.h2>

            <motion.div
              className="space-y-12 md:space-y-16"
              style={{ fontFamily: 'Inter, sans-serif' }}
              {...fadeInUp}
            >
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] leading-relaxed">
                Dépendance aux campagnes.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] leading-relaxed">
                Dépendance au timing.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] leading-relaxed">
                Dépendance aux aides publiques.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] leading-relaxed">
                Pression commerciale constante.
              </p>
              <p className="text-2xl md:text-3xl lg:text-4xl text-[#E5E7EB] leading-relaxed">
                Remplissage non maîtrisé.
              </p>

              <motion.div 
                className="mt-24 pt-24 border-t border-[#C7C9CE]/20"
                {...fadeInUp}
              >
                <p className="text-xl md:text-2xl text-[#9CA3AF] leading-loose max-w-4xl">
                  Un centre sans structure d'attraction stable fonctionne par à-coups.
                  Chaque session dépend d'une nouvelle poussée. Chaque inscription nécessite une activation.
                  Le flux n'est jamais maîtrisé. Le dirigeant ne peut ni projeter, ni augmenter sereinement ses tarifs.
                  L'imprévisibilité devient le mode de fonctionnement structurel.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 3 - LE COÛT INVISIBLE */}
        <section className="min-h-screen bg-[#0B1220] px-8 md:px-16 lg:px-24 py-32 md:py-48">
          <div className="max-w-5xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Ce que coûte l'instabilité structurelle.
            </motion.h2>

            <motion.div 
              className="grid md:grid-cols-2 gap-16 md:gap-20"
              {...fadeInUp}
            >
              <div className="space-y-6">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I
                </div>
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Instabilité du flux
                </h3>
                <p className="text-lg text-[#9CA3AF] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Lorsque les inscriptions ne sont pas prévisibles, l'organisation fonctionne en réaction permanente.
                  Chaque mois devient une incertitude. Le remplissage dépend de facteurs externes non contrôlés.
                  La stabilité est structurellement impossible.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  II
                </div>
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Pression mentale du dirigeant
                </h3>
                <p className="text-lg text-[#9CA3AF] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Sans visibilité sur les prochains mois, le dirigeant porte seul l'incertitude.
                  Chaque décision stratégique devient un pari. La charge mentale ne diminue jamais.
                  L'organisation ne peut être dirigée sereinement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  III
                </div>
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Difficulté à projeter la croissance
                </h3>
                <p className="text-lg text-[#9CA3AF] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Une organisation sans prévisibilité ne peut ni recruter ni investir sereinement.
                  Chaque embauche représente un risque. Chaque investissement devient incertain.
                  La croissance reste bridée par l'impossibilité de projeter.
                </p>
              </div>

              <div className="space-y-6">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>
                  IV
                </div>
                <h3 className="text-2xl md:text-3xl" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Incapacité à augmenter les tarifs sereinement
                </h3>
                <p className="text-lg text-[#9CA3AF] leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Lorsque le flux d'inscriptions n'est pas maîtrisé, augmenter les tarifs devient un risque.
                  Le dirigeant craint de perdre les quelques demandes obtenues.
                  La croissance tarifaire devient structurellement impossible.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4 - DREAM */}
        <section className="min-h-screen bg-[#111827] px-8 md:px-16 lg:px-24 py-32 md:py-48 flex items-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Dream construit une structure d'attraction stable.
            </motion.h2>

            <motion.div 
              className="space-y-12 md:space-y-16 text-xl md:text-2xl leading-loose"
              style={{ fontFamily: 'Inter, sans-serif' }}
              {...fadeInUp}
            >
              <p className="text-[#9CA3AF]">
                Dream ne reconstruit pas une identité visuelle.
              </p>
              <p className="text-[#9CA3AF]">
                Dream ne déploie pas de campagnes publicitaires.
              </p>
              <p className="text-[#E5E7EB]">
                Dream bâtit une position stratégique qui génère des inscriptions prévisibles.
              </p>
              
              <div className="mt-16 pt-16 border-t border-[#C7C9CE]/20 space-y-6 text-lg text-[#9CA3AF]">
                <p>
                  Un centre qui a structuré sa position n'a plus besoin de courir après les demandes. 
                  Les inscriptions deviennent la conséquence naturelle d'une architecture narrative cohérente.
                </p>
                <p>
                  Dream construit cette architecture. Pas en surface, mais en profondeur.
                  Pas par l'exécution, mais par la structure. Pas temporairement, mais durablement.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 5 - LE CADRE DREAM */}
        <section className="min-h-screen bg-[#0B1220] px-8 md:px-16 lg:px-24 py-32 md:py-48">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Le cadre stratégique.
            </motion.h2>

            <motion.div 
              className="space-y-20 md:space-y-32"
              {...fadeInUp}
            >
              {/* Bloc I */}
              <div className="border-l-2 border-[#C6A75E] pl-8 md:pl-12">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  I — Diagnostic du système actuel
                </div>
                <div className="space-y-4 text-lg md:text-xl text-[#9CA3AF] leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Analyse de la manière dont les inscriptions sont générées aujourd'hui. 
                    Identification des sources réelles de demande, des périodes de remplissage et des points de fragilité dans l'acquisition.
                  </p>
                  <p>
                    Cette étape ne cherche pas à inventer une stratégie nouvelle. 
                    Elle vise à comprendre précisément ce qui fonctionne déjà, ce qui dépend encore du hasard, et ce qui peut être structuré.
                  </p>
                  <p>
                    Une fois ces éléments clarifiés, le système d'acquisition peut être repensé sur des bases solides.
                  </p>
                </div>
              </div>

              {/* Bloc II */}
              <div className="border-l-2 border-[#C6A75E] pl-8 md:pl-12">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  II — Identification du profil d'élève idéal
                </div>
                <div className="space-y-4 text-lg md:text-xl text-[#9CA3AF] leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Détermination précise du profil d'élève qui s'inscrit le plus naturellement : 
                    celui qui comprend rapidement la valeur de la formation, hésite peu et termine le processus d'inscription.
                  </p>
                  <p>
                    Un centre qui s'adresse à tous les profils crée mécaniquement de la friction. 
                    Dream identifie le profil pour lequel la formation est la plus évidente.
                  </p>
                  <p>
                    La clarté de ce profil permet d'attirer plus facilement les personnes les plus pertinentes.
                  </p>
                </div>
              </div>

              {/* Bloc III */}
              <div className="border-l-2 border-[#C6A75E] pl-8 md:pl-12">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  III — Structuration du moteur d'acquisition
                </div>
                <div className="space-y-4 text-lg md:text-xl text-[#9CA3AF] leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Mise en place d'un système permettant de générer des demandes qualifiées de manière régulière.
                  </p>
                  <p>
                    L'objectif n'est pas d'augmenter la visibilité de manière abstraite, 
                    mais de structurer un flux d'inscriptions plus prévisible. 
                    Les canaux existants sont analysés et activés de manière plus stratégique.
                  </p>
                  <p>
                    Le centre ne dépend plus uniquement du bouche-à-oreille ou d'un canal unique : l'acquisition devient structurée.
                  </p>
                </div>
              </div>

              {/* Bloc IV */}
              <div className="border-l-2 border-[#C6A75E] pl-8 md:pl-12">
                <div className="text-[#C6A75E] text-sm tracking-[0.3em] uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                  IV — Architecture de conversion
                </div>
                <div className="space-y-4 text-lg md:text-xl text-[#9CA3AF] leading-loose" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <p>
                    Une demande ne vaut rien si elle ne devient pas une inscription.
                  </p>
                  <p>
                    Cette phase consiste à structurer la manière dont les prospects passent de l'intérêt à la décision : 
                    qualification, présentation de la formation, processus d'inscription et suivi.
                  </p>
                  <p>
                    L'objectif est simple : transformer une demande réelle en inscription effective 
                    et permettre aux sessions d'être remplies avec plus de visibilité.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 6 - SÉLECTION */}
        <section className="min-h-screen bg-[#111827] px-8 md:px-16 lg:px-24 py-32 md:py-48 flex items-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Nous travaillons avec peu d'acteurs.
            </motion.h2>

            <motion.div 
              className="space-y-12 md:space-y-16"
              style={{ fontFamily: 'Inter, sans-serif' }}
              {...fadeInUp}
            >
              <div className="space-y-8 text-2xl md:text-3xl text-[#E5E7EB] leading-relaxed">
                <p>Centres indépendants.</p>
                <p>500 000 € et plus de chiffre d'affaires.</p>
                <p>Direction impliquée.</p>
                <p>Ambition réelle.</p>
              </div>

              <div className="mt-20 pt-20 border-t border-[#C7C9CE]/20">
                <p className="text-xl md:text-2xl text-[#9CA3AF] leading-loose">
                  Dream travaille exclusivement avec des centres ayant une volonté réelle de transformation structurelle. 
                  Pas d'optimisation rapide. Pas de solution marketing superficielle. Une refonte stratégique complète.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 7 - GARANTIE */}
        <section className="min-h-screen bg-[#0B1220] px-8 md:px-16 lg:px-24 py-32 md:py-48 flex items-center">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl mb-20 md:mb-32"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.01em' }}
              {...fadeInUp}
            >
              Engagement.
            </motion.h2>

            <motion.div 
              className="text-xl md:text-2xl text-[#9CA3AF] leading-loose"
              style={{ fontFamily: 'Inter, sans-serif' }}
              {...fadeInUp}
            >
              <p>
                Si une progression mesurable des demandes ou inscriptions n'est pas observée 
                sous 90 jours à trafic équivalent, Dream retravaille la stratégie jusqu'à 
                obtention d'un résultat tangible.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 8 - CLOSING */}
        <section id="contact" className="min-h-screen bg-[#111827] px-8 md:px-16 lg:px-24 py-32 md:py-48 flex flex-col justify-center items-center">
          <motion.div 
            className="max-w-6xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-20 md:mb-32 leading-[1.2]"
              style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}
            >
              La prévisibilité n'est pas une question de publicité.
              <br />
              <span className="block mt-8">
                C'est une question de position.
              </span>
            </h2>

            <motion.a
              href="https://cal.com/dreamacq/echange-strategique-dream?overlayCalendar=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-12 py-6 border-2 border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-[#111827] transition-all duration-500 text-lg md:text-xl"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              Demander un diagnostic confidentiel
            </motion.a>

            <motion.div
              className="mt-32 text-[#9CA3AF] text-sm tracking-widest"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              DREAM — STRATEGIC REPOSITIONING
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
}