/* ═══════════════════════════════════════════════════
   VOLUM — script.js  (v3)
═══════════════════════════════════════════════════ */

const IS_LAUNCHED    = false;
const PLAY_STORE_URL = '#';
const FETCH_TIMEOUT  = 5000;

/* ─── TRANSLATIONS ───────────────────────────────── */
const TRANSLATIONS = {
  en: {
    nav_features:'Features', nav_waitlist:'Join Waitlist',
    nav_how_it_works:'How It Works', nav_real_results:'Real Results', nav_testimonials:'Testimonials',
    hero_eyebrow:'Gym Tracker · Android & iOS',
    hero_headline:'You always know<br>what to lift.',
    hero_sub:'Stop wasting 20 minutes deciding what to lift. Volum plans every session: the exact weight, sets, and reps.',
    hero_proof:'One founder. 157 real sessions. 446,519 lbs tracked.',
    hero_input:'Your email address', hero_btn:'Get Early Access',
    hero_launch:'Launching Q3 2026.',
    hero_differentiator:'Most trackers log what you did. Volum tells you what to do next.',
    waitlist_hint:'Waitlist open · Limited early access spots.',
    features_eyebrow:'Progressive overload, automated',
    features_h2:'Every session, Volum updates your weights and reps for you. You never have to do the math.',
    features_tagline:'No spreadsheets. No guessing your next weight. No app to fight with.',
    features_ai:'Analyzes your training history and tells you exactly what weight to add today. Works from your very first session.',
    feat1_h3:'Always know your session',
    feat1_p:'Every workout is planned before you arrive. The exact weight, sets, and reps. No guessing, no deciding mid-set.',
    feat2_h3:'Volume that compounds',
    feat2_p:'Each session builds on the last. Your numbers go up automatically, week after week, without you having to plan a thing.',
    feat3_h3:'Track every lift',
    feat3_p:'Personal records, session history, and volume over time. All in one clean dashboard. See exactly how far you\'ve come.',
    feat4_h3:'Milestones & achievements',
    feat4_p:'Streaks, PRs, badges. 49 achievements to unlock. Progress you can see and feel. Every milestone earned.',
    vol_eyebrow:'The principle behind the app', vol_h2:'Volume is the engine of progress.',
    vol_body:'Sets × reps × weight. The total volume you move over time is what drives strength gains. Volum exists for one purpose: to grow yours. Every session.',
    mid_cta_text:'Your next session, planned before you walk in.', mid_cta_btn:'Get Early Access. Free.',
    vol_sets:'sets', vol_reps:'reps', vol_weight:'weight', vol_progress:'progress',
    hiw_eyebrow:'The loop', hiw_h2:'Three steps. Every session.',
    step1_h3:'Build your routine', step1_p:'Add the exercises you do. Set your starting weights once. Done.',
    step2_h3:'Walk in knowing your number', step2_p:'Open the app. Volum shows exactly what to lift today. Weight, reps, sets already calculated.',
    step3_h3:'Log and grow', step3_p:'Tap through each set. Your volume compounds automatically. Next session is planned before you leave.',
    stats_eyebrow:'Built on real training', stats_h2:'Tested in the gym, not a spreadsheet.',
    stats_sub:'Volum was built and battle-tested through the founder\'s own training. Not simulated data.',
    stat1_label:'lbs of total volume tracked', stat2_label:'workouts logged', stat3_label:'personal records set',
    stats_fine:'From the founder\'s own sessions. Your results will vary based on your programme.',
    mockup_eyebrow:'See it in action', mockup_h2:'Built for the gym floor.',
    mockup_sub:'Clean, fast, distraction-free. Focus on the lift, not the app.',
    mockup_cap1:'Your workouts, always ready', mockup_cap2:'Rest. Breathe. Go again.',
    showcase1_h3:'Every set mapped out',
    showcase1_p:'Weight, sets, and reps for every exercise. Ready before you walk in.',
    showcase2_h3:'Everything in one place',
    showcase2_p:'Streak, weekly volume, PRs, and all your routines on one screen.',
    showcase3_h3:'Volume that only goes up',
    showcase3_p:'446,519 lbs tracked. Every session adds to the curve.',
    faq_eyebrow:'Questions & answers',
    faq_h2:'Frequently asked questions',
    faq_q1:'What app tells you exactly how much weight to lift?',
    faq_a1:'Volum tells you the exact weight, sets, and reps for every exercise before you start. It analyzes your training history and uses an AI Coach to apply progressive overload automatically, so you never have to guess your next weight at the gym.',
    faq_q2:'What is the best app for progressive overload?',
    faq_a2:'Volum is built specifically for progressive overload. Instead of only logging what you did, it plans your next session, increasing weight, reps, or sets automatically based on your performance, so your training volume keeps climbing week after week.',
    faq_q3:'How do I know when to increase weight at the gym?',
    faq_a3:'A simple rule: increase the weight once you can complete all your planned sets and reps with one or two reps left in reserve. Volum tracks this for you and tells you exactly when and how much to add each session.',
    faq_q4:'How is Volum different from other workout trackers?',
    faq_a4:'Most trackers only log what you already did. Volum is a workout planner: it tells you what to do next. Every session\'s weight, sets, and reps are calculated for you in advance, then logged as you train, with no spreadsheets and no guessing.',
    faq_q5:'How much weight should I add each week?',
    faq_a5:'For most lifts, adding roughly 2.5 to 5 percent once you hit your rep targets is a sustainable rate of progression. The right amount depends on the exercise and your recovery, so Volum calculates it per exercise to keep each jump small enough to progress safely.',
    faq_q6:'Is Volum free, and what platforms does it support?',
    faq_a6:'Yes. Volum is a free workout tracker for Android and iOS, launching Q3 2026. Join the waitlist to get early access and a single email on launch day, with no credit card required.',
    faq_q7:'What does training volume mean in weightlifting?',
    faq_a7:'Training volume is sets times reps times weight, the total amount of work you move over time. It is a primary driver of muscle and strength gains. Volum tracks your volume every session and grows it gradually through automatic progressive overload.',
    cta_h2:'Stop guessing. Start growing.',
    cta_p:'Your spot is free. We\'ll ping you the second Volum drops.',
    cta_btn:'Get Early Access',
    form_success_hero:'You\'re on the list! We\'ll be in touch.',
    form_success_mid:'You\'re on the list! We\'ll be in touch.',
    form_success_bottom:'You\'re in. We\'ll message you on launch day.',
    form_error:'Something went wrong. Try again.', sending:'Sending…',
    platform_error:'Please select Android or iPhone.',
    form_privacy:'One email when we launch. Unsubscribe anytime.',
    platform_android:'Android', platform_ios:'iPhone',
    form_consent:'I agree to receive a launch-day email from Volum and accept the <a href="https://bouncingballentertainment.github.io/volum-legal/privacy-policy.html" target="_blank" rel="noopener">Privacy Policy</a>.',
    testimonials_eyebrow:'Beta Testers',
    testimonials_h2:'Real people. Real training.',
    testimonial1_quote:'"Volum has great functionality and is super easy to organise your workouts. It has a solid AI progression system that helps track when to increase weights and reps, and everything is fully adjustable: sets, weight, rest time, all of it."',
    testimonial2_quote:'"What impressed me most about Volum is the freedom to customise: add any exercise with any name, no generic list. The load progression tracking is excellent. You can clearly see how you\'re improving. For anyone who trains seriously and wants real control, this app is indispensable."',
    testimonial3_quote:'"Simple, complete, and very well made. Total control over your workouts, easy to use, and everything I need to progress at the gym. Highly recommended."',
    testimonial4_quote:'"Knowing exactly how much weight, how many reps, and how many sets for each exercise is a game changer. I used to waste time figuring it out at the gym. With Volum I walk in ready, execute, and can actually see my progression improving. It saves time and keeps you on track."',
    testimonial5_quote:'"Having the weight, reps and sets already planned for every exercise is exactly what I needed. No more guessing between sets. The progression tracking is the best part: you can see your numbers going up session after session. That visibility is what keeps you consistent."',
    testimonial6_quote:'"Volum brings convenience — having your progress tracked in detail is wonderful. Being able to choose your goal — hypertrophy or endurance — and have your loads and reps adjusted accordingly makes Volum an essential app."',
    share_nudge:'Know someone who lifts?', share_btn:'Share this page', share_copied:'Link copied!',
    footer_privacy:'Privacy Policy', footer_terms:'Terms of Service',
    footer_play:'Coming to Google Play', footer_ios:'Coming to App Store',
    footer_copy:'© 2026 Bouncing Ball Entertainment. All rights reserved.',
    lang_label:'EN'
  },
  es: {
    nav_features:'Funciones', nav_waitlist:'Unirse a la lista de espera',
    nav_how_it_works:'Cómo Funciona', nav_real_results:'Resultados Reales', nav_testimonials:'Testimonios',
    hero_eyebrow:'App de Gimnasio · Android & iOS',
    hero_headline:'Siempre sabes<br>cuánto levantar.',
    hero_sub:'Deja de perder 20 minutos decidiendo qué levantar. Volum planifica cada sesión: el peso exacto, las series y las repeticiones.',
    hero_proof:'Un fundador. 157 sesiones reales. 446.519 lbs registradas.',
    hero_input:'Tu correo electrónico', hero_btn:'Obtener Acceso Anticipado',
    hero_launch:'Lanzamiento Q3 2026.',
    hero_differentiator:'La mayoría de apps registran lo que hiciste. Volum te dice qué hacer después.',
    waitlist_hint:'Lista de espera abierta · Plazas de acceso anticipado limitadas.',
    features_eyebrow:'Sobrecarga progresiva, automatizada',
    features_h2:'Cada sesión, Volum actualiza tus pesos y repeticiones por ti. Nunca tendrás que hacer los cálculos.',
    features_tagline:'Sin hojas de cálculo. Sin adivinar tu próximo peso. Sin complicaciones.',
    features_ai:'Analiza tu historial de entrenamiento y te dice exactamente cuánto peso añadir hoy. Funciona desde tu primera sesión.',
    feat1_h3:'Tu sesión, siempre planificada',
    feat1_p:'Cada entrenamiento está planificado antes de que llegues. El peso exacto, las series y las repeticiones. Sin dudas, sin decisiones a mitad del ejercicio.',
    feat2_h3:'Volumen que se acumula',
    feat2_p:'Cada sesión se construye sobre la anterior. Tus números suben automáticamente, semana tras semana, sin que tengas que planificar nada.',
    feat3_h3:'Registra cada levantamiento',
    feat3_p:'Récords personales, historial de sesiones y volumen a lo largo del tiempo. Todo en un panel limpio. Mira exactamente hasta dónde has llegado.',
    feat4_h3:'Hitos y logros',
    feat4_p:'Rachas, RPs, medallas. 49 logros por desbloquear. Progreso que puedes ver y sentir. Cada hito ganado.',
    vol_eyebrow:'El principio detrás de la app', vol_h2:'El volumen es el motor del progreso.',
    vol_body:'Series × repeticiones × peso. El volumen total que mueves con el tiempo es lo que impulsa las ganancias de fuerza. Volum existe para un solo propósito: hacer crecer el tuyo. Cada sesión.',
    mid_cta_text:'Tu próxima sesión, planificada antes de que llegues.', mid_cta_btn:'Obtener acceso anticipado. Gratis.',
    vol_sets:'series', vol_reps:'reps', vol_weight:'peso', vol_progress:'progreso',
    hiw_eyebrow:'El ciclo', hiw_h2:'Tres pasos. Cada sesión.',
    step1_h3:'Construye tu rutina', step1_p:'Añade los ejercicios que haces. Establece tus pesos iniciales una vez. Listo.',
    step2_h3:'Entra sabiendo tu número', step2_p:'Abre la app. Volum te muestra exactamente cuánto levantar hoy. Peso, repeticiones y series ya calculadas.',
    step3_h3:'Registra y crece', step3_p:'Completa cada serie. Tu volumen se acumula automáticamente. La próxima sesión está planificada antes de que te vayas.',
    stats_eyebrow:'Construido con entrenamiento real', stats_h2:'Probado en el gimnasio, no en una hoja de cálculo.',
    stats_sub:'Volum fue construido y probado con el entrenamiento real del fundador. Sin datos simulados.',
    stat1_label:'lbs de volumen total registrado', stat2_label:'entrenamientos completados', stat3_label:'récords personales establecidos',
    stats_fine:'De las sesiones del fundador. Tus resultados variarán según tu programa.',
    mockup_eyebrow:'Míralo en acción', mockup_h2:'Diseñado para el gimnasio.',
    mockup_sub:'Limpio, rápido y sin distracciones. Céntrate en el levantamiento, no en la app.',
    mockup_cap1:'Tus entrenamientos, siempre listos', mockup_cap2:'Descansa. Respira. Vuelve por más.',
    showcase1_h3:'Cada serie planificada',
    showcase1_p:'Peso, series y repeticiones para cada ejercicio. Listo antes de que llegues.',
    showcase2_h3:'Todo en un solo lugar',
    showcase2_p:'Racha, volumen semanal, RPs y todas tus rutinas en una sola pantalla.',
    showcase3_h3:'Volumen que solo sube',
    showcase3_p:'446.519 lbs registradas. Cada sesión suma a la curva.',
    faq_eyebrow:'Preguntas y respuestas',
    faq_h2:'Preguntas frecuentes',
    faq_q1:'¿Qué app te dice exactamente cuánto peso levantar?',
    faq_a1:'Volum te indica el peso, las series y las repeticiones exactas de cada ejercicio antes de empezar. Analiza tu historial de entrenamiento y aplica la sobrecarga progresiva automáticamente con su AI Coach, para que nunca tengas que adivinar tu próximo peso.',
    faq_q2:'¿Cuál es la mejor app para sobrecarga progresiva?',
    faq_a2:'Volum está hecho específicamente para la sobrecarga progresiva. En lugar de solo registrar lo que hiciste, planifica tu próxima sesión, aumentando peso, repeticiones o series automáticamente según tu rendimiento, para que tu volumen siga subiendo semana tras semana.',
    faq_q3:'¿Cómo saber cuándo subir el peso en el gimnasio?',
    faq_a3:'Una regla simple: aumenta el peso cuando completes todas las series y repeticiones planificadas dejando una o dos repeticiones en reserva. Volum lo controla por ti y te dice exactamente cuándo y cuánto añadir en cada sesión.',
    faq_q4:'¿En qué se diferencia Volum de otras apps de entrenamiento?',
    faq_a4:'La mayoría de las apps solo registran lo que ya hiciste. Volum es un planificador: te dice qué hacer a continuación. Calcula el peso, las series y las repeticiones de cada sesión por adelantado y las registra mientras entrenas, sin hojas de cálculo.',
    faq_q5:'¿Cuánto peso debo añadir cada semana?',
    faq_a5:'Para la mayoría de los ejercicios, añadir alrededor del 2,5 a 5 por ciento al alcanzar tus repeticiones objetivo es un ritmo sostenible. La cantidad ideal depende del ejercicio y tu recuperación, así que Volum la calcula por ejercicio para que cada aumento sea seguro.',
    faq_q6:'¿Volum es gratis y en qué plataformas está disponible?',
    faq_a6:'Sí. Volum es una app de entrenamiento gratuita para Android e iOS, con lanzamiento en el Q3 de 2026. Únete a la lista de espera para obtener acceso anticipado y un único correo el día del lanzamiento, sin tarjeta de crédito.',
    faq_q7:'¿Qué significa el volumen en el entrenamiento con pesas?',
    faq_a7:'El volumen de entrenamiento es el total de series, repeticiones y peso — todo el trabajo que mueves a lo largo del tiempo. Es uno de los principales motores de las ganancias de fuerza y músculo. Volum mide tu volumen en cada sesión y lo aumenta de forma gradual.',
    cta_h2:'Deja de adivinar. Empieza a crecer.',
    cta_p:'Tu lugar es gratis. Te avisamos en el momento en que Volum llegue.',
    cta_btn:'Obtener Acceso Anticipado',
    form_success_hero:'¡Estás en la lista! Estaremos en contacto.',
    form_success_mid:'¡Estás en la lista! Estaremos en contacto.',
    form_success_bottom:'¡Ya estás dentro! Te escribiremos el día del lanzamiento.',
    form_error:'Algo salió mal. Inténtalo de nuevo.', sending:'Enviando…',
    platform_error:'Por favor selecciona Android o iPhone.',
    form_privacy:'Un correo cuando lancemos. Cancela cuando quieras.',
    platform_android:'Android', platform_ios:'iPhone',
    form_consent:'Acepto recibir un correo de lanzamiento de Volum y la <a href="https://bouncingballentertainment.github.io/volum-legal/privacy-policy.html" target="_blank" rel="noopener">Política de Privacidad</a>.',
    testimonials_eyebrow:'Beta Testers',
    testimonials_h2:'Personas reales. Entrenamiento real.',
    testimonial1_quote:'"Volum tiene una gran funcionalidad y es muy fácil de organizar los entrenamientos. Tiene una buena progresión por IA que ayuda a saber cuándo aumentar cargas y repeticiones, y todo es totalmente ajustable: series, peso, tiempo de descanso y mucho más."',
    testimonial2_quote:'"Lo que más me impresionó de Volum es la libertad de personalización: añades cualquier ejercicio con el nombre que quieras, sin listas genéricas. El seguimiento de progresión de carga es excelente. Ves claramente cómo evolucionas. Para quien se toma el entrenamiento en serio y quiere control real, esta app es imprescindible."',
    testimonial3_quote:'"Simple, completo y muy bien hecho. Control total sobre los entrenamientos, fácil de usar y con todo lo que necesito para progresar en el gimnasio. Lo recomiendo mucho."',
    testimonial4_quote:'"Saber exactamente cuánto peso usar, cuántas repeticiones y cuántas series por ejercicio lo cambia todo. Antes perdía tiempo calculándolo en el gimnasio. Con Volum llego lista, ejecuto y puedo ver claramente cómo progreso. Ahorra tiempo y te mantiene en camino."',
    testimonial5_quote:'"Tener el peso, las repeticiones y las series ya planificadas para cada ejercicio es exactamente lo que necesitaba. Sin más dudas entre series. El seguimiento de la progresión es lo mejor: ves tus números subir sesión tras sesión. Esa visibilidad es lo que te mantiene constante."',
    testimonial6_quote:'"Volum trae practicidad — tener tu progreso detallado es algo maravilloso. Poder elegir el objetivo — hipertrofia o resistencia — y tener tus cargas y repeticiones ajustadas a ese objetivo hace de Volum una app imprescindible."',
    share_nudge:'¿Conoces a alguien que entrene?', share_btn:'Compartir esta página', share_copied:'¡Enlace copiado!',
    footer_privacy:'Política de privacidad', footer_terms:'Términos de servicio',
    footer_play:'Próximamente en Google Play', footer_ios:'Próximamente en App Store',
    footer_copy:'© 2026 Bouncing Ball Entertainment. Todos los derechos reservados.',
    lang_label:'ES'
  },
  pt: {
    nav_features:'Funcionalidades', nav_waitlist:'Entrar na lista de espera',
    nav_how_it_works:'Como Funciona', nav_real_results:'Resultados Reais', nav_testimonials:'Depoimentos',
    hero_eyebrow:'App de Treino · Android & iOS',
    hero_headline:'Você sempre sabe<br>o quanto levantar.',
    hero_sub:'Pare de perder 20 minutos decidindo o que levantar. Volum planeja cada sessão: o peso exato, séries e repetições.',
    hero_proof:'Um fundador. 157 sessões reais. 446.519 lbs registrados.',
    hero_input:'Seu endereço de e-mail', hero_btn:'Obter Acesso Antecipado',
    hero_launch:'Lançamento Q3 2026.',
    hero_differentiator:'A maioria dos apps registra o que você fez. Volum te diz o que fazer a seguir.',
    waitlist_hint:'Lista aberta · Vagas de acesso antecipado limitadas.',
    features_eyebrow:'Sobrecarga progressiva, automatizada',
    features_h2:'A cada sessão, o Volum atualiza seus pesos e repetições por você. Você nunca precisa fazer as contas.',
    features_tagline:'Sem planilhas. Sem adivinhar seu próximo peso. Sem complicação.',
    features_ai:'Analisa seu histórico de treino e diz exatamente quanto peso adicionar hoje. Funciona desde a sua primeira sessão.',
    feat1_h3:'Sua sessão, sempre pronta',
    feat1_p:'Cada treino é planejado antes de você chegar. O peso exato, séries e repetições. Sem adivinhação, sem decisões no meio do exercício.',
    feat2_h3:'Volume que se acumula',
    feat2_p:'Cada sessão se baseia na anterior. Seus números sobem automaticamente, semana após semana, sem você precisar planejar nada.',
    feat3_h3:'Registre cada levantamento',
    feat3_p:'Recordes pessoais, histórico de sessões e volume ao longo do tempo. Tudo em um painel limpo. Veja exatamente o quanto você evoluiu.',
    feat4_h3:'Marcos e conquistas',
    feat4_p:'Sequências, RPs, emblemas. 49 conquistas para desbloquear. Progresso que você pode ver e sentir. Cada marco conquistado.',
    vol_eyebrow:'O princípio por trás do app', vol_h2:'Volume é o motor do progresso.',
    vol_body:'Séries × repetições × peso. O volume total que você move ao longo do tempo é o que impulsiona os ganhos de força. Volum existe para um único propósito: aumentar o seu. A cada sessão.',
    mid_cta_text:'Sua próxima sessão, planejada antes de você chegar.', mid_cta_btn:'Obter acesso antecipado. Grátis.',
    vol_sets:'séries', vol_reps:'reps', vol_weight:'peso', vol_progress:'progresso',
    hiw_eyebrow:'O ciclo', hiw_h2:'Três passos. A cada sessão.',
    step1_h3:'Monte sua rotina', step1_p:'Adicione os exercícios que você faz. Defina seus pesos iniciais uma vez. Pronto.',
    step2_h3:'Entre sabendo seu número', step2_p:'Abra o app. Volum mostra exatamente o quanto levantar hoje. Peso, repetições e séries, tudo já calculado.',
    step3_h3:'Registre e cresça', step3_p:'Conclua cada série. Seu volume se acumula automaticamente. A próxima sessão está planejada antes de você sair.',
    stats_eyebrow:'Construído com treino real', stats_h2:'Testado na academia, não em planilha.',
    stats_sub:'Volum foi construído e testado com o treino real do fundador. Sem dados simulados.',
    stat1_label:'lbs de volume total registrado', stat2_label:'treinos concluídos', stat3_label:'recordes pessoais estabelecidos',
    stats_fine:'Das sessões do fundador. Seus resultados variarão de acordo com seu programa.',
    mockup_eyebrow:'Veja em ação', mockup_h2:'Feito para o chão da academia.',
    mockup_sub:'Limpo, rápido e sem distrações. Foque no levantamento, não no app.',
    mockup_cap1:'Seus treinos, sempre prontos', mockup_cap2:'Descanse. Respire. Volte mais forte.',
    showcase1_h3:'Cada série planejada',
    showcase1_p:'Peso, séries e repetições para cada exercício. Pronto antes de você chegar.',
    showcase2_h3:'Tudo em um só lugar',
    showcase2_p:'Sequência, volume semanal, recordes e todas as suas rotinas em uma tela.',
    showcase3_h3:'Volume que só aumenta',
    showcase3_p:'446.519 lbs registrados. Cada sessão soma à curva.',
    faq_eyebrow:'Perguntas e respostas',
    faq_h2:'Perguntas frequentes',
    faq_q1:'Qual app diz exatamente quanto peso levantar?',
    faq_a1:'O Volum mostra o peso, as séries e as repetições exatas de cada exercício antes de você começar. Ele analisa seu histórico de treino e aplica a sobrecarga progressiva automaticamente com o AI Coach, para você nunca precisar adivinhar o próximo peso.',
    faq_q2:'Qual é o melhor app para sobrecarga progressiva?',
    faq_a2:'O Volum foi feito especificamente para a sobrecarga progressiva. Em vez de apenas registrar o que você fez, ele planeja sua próxima sessão, aumentando peso, repetições ou séries automaticamente conforme seu desempenho, para seu volume crescer semana após semana.',
    faq_q3:'Como saber quando aumentar a carga no treino?',
    faq_a3:'Uma regra simples: aumente a carga quando conseguir completar todas as séries e repetições planejadas deixando uma ou duas repetições de reserva. O Volum acompanha isso por você e diz exatamente quando e quanto adicionar em cada sessão.',
    faq_q4:'Como o Volum é diferente de outros apps de treino?',
    faq_a4:'A maioria dos apps só registra o que você já fez. O Volum é um planejador: ele diz o que fazer a seguir. Calcula o peso, as séries e as repetições de cada sessão com antecedência e registra enquanto você treina, sem planilhas.',
    faq_q5:'Quanto peso devo adicionar por semana?',
    faq_a5:'Para a maioria dos exercícios, adicionar cerca de 2,5 a 5 por cento ao atingir suas repetições-alvo é um ritmo sustentável. O valor ideal depende do exercício e da sua recuperação, então o Volum calcula por exercício para que cada aumento seja seguro.',
    faq_q6:'O Volum é gratuito e em quais plataformas funciona?',
    faq_a6:'Sim. O Volum é um app de treino gratuito para Android e iOS, com lançamento no Q3 de 2026. Entre na lista de espera para ter acesso antecipado e um único e-mail no dia do lançamento, sem cartão de crédito.',
    faq_q7:'O que significa volume no treino de musculação?',
    faq_a7:'Volume de treino é o total de séries, repetições e peso — todo o trabalho que você move ao longo do tempo. É um dos principais motores dos ganhos de força e músculo. O Volum mede seu volume em cada sessão e o aumenta gradualmente.',
    cta_h2:'Pare de adivinhar. Comece a crescer.',
    cta_p:'Sua vaga é grátis. Te avisamos no segundo em que Volum chegar.',
    cta_btn:'Obter Acesso Antecipado',
    form_success_hero:'Você está na lista! Entraremos em contato.',
    form_success_mid:'Você está na lista! Entraremos em contato.',
    form_success_bottom:'Você está dentro! Vamos te avisar no dia do lançamento.',
    form_error:'Algo deu errado. Tente novamente.', sending:'Enviando…',
    platform_error:'Por favor selecione Android ou iPhone.',
    form_privacy:'Um e-mail quando lançarmos. Cancele quando quiser.',
    platform_android:'Android', platform_ios:'iPhone',
    form_consent:'Concordo em receber um e-mail de lançamento da Volum e aceito a <a href="https://bouncingballentertainment.github.io/volum-legal/privacy-policy.html" target="_blank" rel="noopener">Política de Privacidade</a>.',
    testimonials_eyebrow:'Beta Testers',
    testimonials_h2:'Pessoas reais. Treino real.',
    testimonial1_quote:'"Volum tem ótima funcionalidade e é super fácil de organizar o treino. Tem uma boa linha de progressão por IA, o que ajuda a saber quando evoluir em cargas e repetições, e tem um sistema inteiramente regulável: séries, peso, tempo de descanso e tudo mais."',
    testimonial2_quote:'"O que mais me impressionou no Volum é a liberdade de personalização: você adiciona qualquer exercício com o nome que quiser, sem listas genéricas. O acompanhamento de progressão de carga é excelente. Dá para ver claramente como você está evoluindo. Para quem leva o treino a sério e quer controle real, esse app é indispensável."',
    testimonial3_quote:'"Simples, completo e muito bem feito. Controle total sobre os treinos, fácil de usar e com tudo que preciso para evoluir na academia. Recomendo muito."',
    testimonial4_quote:'"Saber exatamente quanto peso usar, quantas repetições e quantas séries por exercício muda tudo. Antes eu perdia tempo calculando na academia. Com o Volum chego pronta, executo e consigo ver claramente minha progressão. Economiza tempo e te mantém no caminho certo."',
    testimonial5_quote:'"Ter o peso, as repetições e as séries já planejadas para cada exercício é exatamente o que eu precisava. Sem mais dúvidas entre séries. O acompanhamento da progressão é o melhor: você vê seus números subindo sessão após sessão. Essa visibilidade é o que te mantém consistente."',
    testimonial6_quote:'"Volum traz praticidade — ter o seu progresso detalhado é algo maravilhoso. Poder escolher o objetivo — hipertrofia ou resistência — e ter suas cargas e repetições de acordo com ele faz do Volum um app super necessário."',
    share_nudge:'Conhece alguém que treina?', share_btn:'Compartilhar esta página', share_copied:'Link copiado!',
    footer_privacy:'Política de Privacidade', footer_terms:'Termos de Serviço',
    footer_play:'Em breve no Google Play', footer_ios:'Em breve na App Store',
    footer_copy:'© 2026 Bouncing Ball Entertainment. Todos os direitos reservados.',
    lang_label:'PT'
  }
};

let currentLang = 'en';
function t(key) {
  return (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key])
    || TRANSLATIONS.en[key] || key;
}

/* ─── HELPERS ────────────────────────────────────── */

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function plausibleEvent(name, props) {
  if (window.plausible) window.plausible(name, { props: props || {} });
}

function fetchWithTimeout(url, ms, init) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), ms);
  return fetch(url, { ...init, signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ─── LANGUAGE ───────────────────────────────────── */

function detectLang() {
  const stored = localStorage.getItem('volum_lang');
  if (stored && ['en','es','pt'].includes(stored)) return stored;
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('es')) return 'es';
  if (nav.startsWith('pt')) return 'pt';
  return 'en';
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('volum_lang', lang);
  const bcp47 = { en: 'en', es: 'es', pt: 'pt-BR' };
  document.documentElement.lang = bcp47[lang] || lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n); if (v) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const v = t(el.dataset.i18nHtml); if (v) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const v = t(el.dataset.i18nPlaceholder); if (v) el.placeholder = v;
  });

  const labelEl = document.getElementById('lang-label');
  if (labelEl) labelEl.textContent = t('lang_label');

  document.querySelectorAll('#lang-dropdown [role="option"], .nav-mobile-lang button').forEach(el => {
    const active = el.dataset.lang === lang;
    el.setAttribute('aria-selected', active ? 'true' : 'false');
    el.classList.toggle('active', active);
  });
}

function initLanguage() {
  applyLanguage(detectLang());
}

function initLangPicker() {
  const btn      = document.getElementById('lang-btn');
  const dropdown = document.getElementById('lang-dropdown');
  if (!btn || !dropdown) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  });

  function selectLang(lang) {
    plausibleEvent('Language_Changed', { language: lang });
    try { localStorage.setItem('volum_lang', lang); } catch (e) {}
    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');

    // Navigate to the language's canonical URL so the address bar, OG tags,
    // and shareable link all match. Switch in place if already on that page.
    const paths = { en: '/', es: '/es/', pt: '/pt/' };
    const p = window.location.pathname;
    const current = p.indexOf('/pt') === 0 ? 'pt' : p.indexOf('/es') === 0 ? 'es' : 'en';
    if (paths[lang] && lang !== current) {
      window.location.href = paths[lang];
      return;
    }
    applyLanguage(lang);
  }

  document.querySelectorAll('[data-lang]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      selectLang(el.dataset.lang);
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectLang(el.dataset.lang);
      }
    });
  });
}

/* ─── NAVBAR SCROLL ──────────────────────────────── */

function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ─── HAMBURGER MENU ─────────────────────────────── */

function initHamburger() {
  const btn      = document.getElementById('hamburger');
  const menu     = document.getElementById('nav-mobile');
  const langDrop = document.getElementById('lang-dropdown');
  if (!btn || !menu) return;

  function open() {
    menu.classList.add('open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Close menu');
    if (langDrop) { langDrop.setAttribute('aria-hidden', 'true'); langDrop.setAttribute('tabindex', '-1'); }
  }
  function close() {
    menu.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Open menu');
    if (langDrop) { langDrop.removeAttribute('aria-hidden'); langDrop.removeAttribute('tabindex'); }
  }
  function toggle() { menu.classList.contains('open') ? close() : open(); }

  btn.addEventListener('click', toggle);

  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) close();
  });

  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
}

/* ─── UTM CAPTURE ────────────────────────────────── */

function captureUTM(fieldId) {
  const field = document.getElementById(fieldId);
  if (!field) return;
  const params = new URLSearchParams(window.location.search);
  field.value = params.get('utm_source') || 'direct';
}

// Inject the remaining UTM parameters as hidden inputs so campaign reporting
// (medium/campaign/term/content) is captured, not just the source.
function injectUTMFields(form) {
  if (!form) return;
  const params = new URLSearchParams(window.location.search);
  ['utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(name => {
    if (form.querySelector('[name="' + name + '"]')) return;
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = params.get(name) || '';
    form.appendChild(input);
  });
}

/* ─── WAITLIST FORM ──────────────────────────────── */

function wireWaitlistForm(formId, msgId, submitBtnId, formLabel) {
  const form    = document.getElementById(formId);
  const msgEl   = document.getElementById(msgId);
  const submitBtn = document.getElementById(submitBtnId);
  if (!form || !msgEl || !submitBtn) return;

  injectUTMFields(form);

  const originalBtnText = submitBtn.textContent;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    plausibleEvent('Waitlist_Submit', { form: formLabel });

    submitBtn.disabled = true;
    submitBtn.textContent = t('sending');
    msgEl.textContent = '';
    msgEl.className = 'form-message';

    try {
      const res = await fetchWithTimeout(form.action, FETCH_TIMEOUT, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' },
      });

      if (res.ok) {
        form.style.display = 'none';
        msgEl.textContent  = t('form_success_' + formLabel);
        msgEl.className    = 'form-message form-success-msg';
        plausibleEvent('Waitlist_Success', { form: formLabel });

        if (formLabel === 'bottom') {
          const nudge = document.getElementById('share-nudge');
          if (nudge) nudge.style.display = 'block';
        }
      } else {
        throw new Error('non-ok');
      }
    } catch {
      submitBtn.disabled   = false;
      submitBtn.textContent = originalBtnText;
      msgEl.textContent    = t('form_error');
      msgEl.className      = 'form-message form-error-msg';
      plausibleEvent('Waitlist_Error', { form: formLabel });
    }
  });

  const emailInput = form.querySelector('input[type="email"]');
  if (emailInput) {
    let focusFired = false;
    emailInput.addEventListener('focus', () => {
      if (!focusFired) {
        plausibleEvent('Waitlist_Focus', { form: formLabel });
        focusFired = true;
      }
    });
  }
}

/* ─── SCROLL REVEAL ──────────────────────────────── */

function initScrollReveal() {
  if (reduceMotion) return;

  const staggerGroups = [
    '.features-grid .feature-card',
    '.steps-grid .step',
    '.stats-grid .stat-item',
    '.mockup-grid .phone-frame',
  ];

  const singles = [
    '.features .eyebrow',
    '.features h2',
    '.volume-statement .eyebrow',
    '.volume-statement h2',
    '.volume-body',
    '.how-it-works .eyebrow',
    '.how-it-works h2',
    '.real-numbers .eyebrow',
    '.real-numbers h2',
    '.real-numbers .section-sub',
    '.waitlist-section .eyebrow',
  ];

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  singles.forEach(sel => {
    const el = document.querySelector(sel);
    if (el) { el.classList.add('reveal'); obs.observe(el); }
  });

  staggerGroups.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.transitionDelay = (i * 90) + 'ms';
      obs.observe(el);
    });
  });
}

/* ─── VOLUME FORMULA REVEAL ──────────────────────── */

function initFormulaReveal() {
  const formula = document.querySelector('.volume-formula');
  if (!formula) return;

  const spans = formula.querySelectorAll('span');

  if (reduceMotion) {
    spans.forEach(s => { s.style.opacity = '1'; });
    return;
  }

  spans.forEach(s => {
    s.style.opacity = '0';
    s.style.display = 'inline-block';
  });

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        formula.classList.add('revealed');
        obs.unobserve(formula);
      }
    });
  }, { threshold: 0.6 });

  obs.observe(formula);
}

/* ─── COUNT-UP ANIMATION ─────────────────────────── */

function initCountUp() {
  const els = document.querySelectorAll('.stat-number[data-target]');
  if (!els.length) return;

  if (reduceMotion) {
    els.forEach(el => {
      el.textContent = parseInt(el.dataset.target, 10).toLocaleString();
    });
    return;
  }

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      obs.unobserve(entry.target);
      const el     = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur    = 800;
      const start  = performance.now();

      function tick(now) {
        const progress = Math.min((now - start) / dur, 1);
        const ease     = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target).toLocaleString();
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target.toLocaleString();
          el.classList.add('stat-glow');
          setTimeout(() => el.classList.remove('stat-glow'), 900);
        }
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });

  els.forEach(el => obs.observe(el));
}

/* ─── STEP LOOP CYCLE ────────────────────────────── */

function initStepLoop() {
  const steps = document.querySelectorAll('.steps-grid .step');
  const grid  = document.getElementById('steps-grid');
  if (!steps.length || reduceMotion) return;

  const isMobile = window.innerWidth < 768;

  let fill = null;
  if (!isMobile) {
    fill = document.createElement('div');
    fill.className = 'step-connector-fill';
    fill.setAttribute('aria-hidden', 'true');
    grid.appendChild(fill);
  }

  const fillScale = [0, 0.5, 1];
  let current = 0;
  let paused  = false;

  function activate(i) {
    steps.forEach((s, idx) => s.classList.toggle('loop-active', idx === i));
    if (!fill) return;
    if (i === 0) {
      fill.style.transition = 'none';
      fill.style.transform  = 'scaleX(0)';
      requestAnimationFrame(() => requestAnimationFrame(() => {
        fill.style.transition = '';
      }));
    } else {
      fill.style.transform = `scaleX(${fillScale[i]})`;
    }
  }

  activate(0);

  setInterval(() => {
    if (!paused) {
      current = (current + 1) % steps.length;
      activate(current);
    }
  }, 2500);

  grid.addEventListener('mouseenter',  () => { paused = true; });
  grid.addEventListener('mouseleave',  () => { paused = false; });
  grid.addEventListener('touchstart',  () => { paused = true; },  { passive: true });
  grid.addEventListener('touchend',    () => { paused = false; }, { passive: true });

  steps.forEach((step, i) => {
    step.addEventListener('click', () => { current = i; activate(i); });
  });
}


/* ─── SHARE BUTTON ───────────────────────────────── */

function wireShareButton() {
  const btn    = document.getElementById('share-btn');
  const copied = document.getElementById('share-copied');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    plausibleEvent('Share_Click');
    const shareData = {
      title: 'Volum: Gym Tracker',
      text:  'You always know what to lift. Check out Volum.',
      url:   window.location.href,
    };

    if (navigator.share) {
      try { await navigator.share(shareData); } catch { /* dismissed */ }
    } else {
      try {
        const shareText = `Just joined the Volum waitlist — it plans your exact weight, sets, and reps every session. Check it out: ${window.location.origin}`;
        await navigator.clipboard.writeText(shareText);
        if (copied) {
          copied.style.display = 'block';
          setTimeout(() => { copied.style.display = 'none'; }, 2500);
        }
      } catch { /* clipboard blocked */ }
    }
  });
}

/* ─── LAUNCH STATE ───────────────────────────────── */

function initLaunchState() {
  if (!IS_LAUNCHED) return;

  document.querySelectorAll('.waitlist-form').forEach(form => {
    const btn = document.createElement('a');
    btn.href      = PLAY_STORE_URL;
    btn.className = 'btn btn-accent';
    btn.textContent = 'Download on Google Play';
    btn.target    = '_blank';
    btn.rel       = 'noopener';
    form.replaceWith(btn);
  });

  const playBadge = document.getElementById('play-badge');
  if (playBadge && PLAY_STORE_URL !== '#') {
    const link = document.createElement('a');
    link.href      = PLAY_STORE_URL;
    link.className = playBadge.className + ' active';
    link.id        = 'play-badge';
    link.setAttribute('aria-label', playBadge.getAttribute('aria-label') || '');
    link.innerHTML = playBadge.innerHTML;
    link.target    = '_blank';
    link.rel       = 'noopener';
    playBadge.replaceWith(link);
  }
}

/* ─── PLAUSIBLE NAV EVENTS ───────────────────────── */

function initNavEvents() {
  const navCta = document.querySelector('.nav-cta');
  if (navCta) navCta.addEventListener('click', () => plausibleEvent('Nav_Waitlist_Click'));

}

/* ─── TESTIMONIAL CARDS ──────────────────────────── */

function initTestimonialCards() {
  document.querySelectorAll('.testimonial-card[data-href]').forEach(card => {
    card.addEventListener('click', e => {
      if (!e.target.closest('a')) {
        window.open(card.dataset.href, '_blank', 'noopener');
      }
    });
  });
}

/* ─── PLATFORM PICKER ────────────────────────────── */

function initPlatformPickers() {
  document.querySelectorAll('.platform-picker').forEach(picker => {
    const form = document.getElementById(picker.dataset.form);
    if (!form) return;
    const hidden = form.querySelector('.platform-hidden-input');
    picker.querySelectorAll('.platform-btn').forEach(btn => {
      btn.setAttribute('aria-pressed', 'false');
      btn.addEventListener('click', () => {
        picker.querySelectorAll('.platform-btn').forEach(b => {
          b.classList.toggle('btn-accent', b === btn);
          b.classList.toggle('btn-ghost', b !== btn);
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
        });
        hidden.value = btn.dataset.platform;
        const msgEl = document.getElementById(form.id.replace('waitlist-form-', '') + '-form-msg');
        if (msgEl && msgEl.classList.contains('form-error-msg')) {
          msgEl.textContent = '';
          msgEl.className   = 'form-message';
        }
      });
    });
  });
}

/* ─── PODIUM CAROUSEL (mobile) ───────────────────── */

function initPodiumCarousel() {
  if (window.innerWidth >= 768) return;
  const deck   = document.querySelector('.podium-deck');
  const center = document.querySelector('.podium-center');
  if (!deck || !center) return;

  const cards = deck.querySelectorAll('.podium-card');

  function updateActive() {
    const deckMid = deck.getBoundingClientRect().left + deck.clientWidth / 2;
    let closest = null, minDist = Infinity;
    cards.forEach(card => {
      const r = card.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - deckMid);
      if (dist < minDist) { minDist = dist; closest = card; }
    });
    cards.forEach(card => card.classList.toggle('active', card === closest));
  }

  requestAnimationFrame(() => {
    deck.scrollLeft = center.offsetLeft - (deck.clientWidth - center.clientWidth) / 2;
    updateActive();
  });

  deck.addEventListener('scroll', updateActive, { passive: true });
}

/* ─── INIT ───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initLangPicker();
  initNavbar();
  initHamburger();
  initLaunchState();

  captureUTM('utm-source-hero');
  captureUTM('utm-source-mid');
  captureUTM('utm-source-bottom');

  initPlatformPickers();

  wireWaitlistForm('waitlist-form-hero',   'hero-form-msg',   'hero-submit-btn',   'hero');
  wireWaitlistForm('waitlist-form-mid',    'mid-form-msg',    'mid-submit-btn',    'mid');
  wireWaitlistForm('waitlist-form-bottom', 'bottom-form-msg', 'bottom-submit-btn', 'bottom');

  wireShareButton();
  initNavEvents();

  initPodiumCarousel();
  initScrollReveal();
  initFormulaReveal();
  initCountUp();
  initStepLoop();
  initTestimonialCards();
});
