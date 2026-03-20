// i18n.js — Language switching for Read It Now website
// Usage: include this script, then call setLang('it') or setLang('en')
// All translatable short texts: <element data-i18n="key">
// Long texts (privacy, faq answers): <div class="lang-block" data-lang="it|en">

const translations = {
  it: {
    // NAV
    nav_support:  'Supporto',
    nav_privacy:  'Privacy',

    // HOME — hero
    hero_badge:    'Disponibile su App Store',
    hero_title_1:  'La tua libreria,',
    hero_title_2:  'sempre con te',
    hero_sub:      'Tieni traccia di ogni libro che leggi, stai leggendo o vuoi leggere. Sessioni di lettura, statistiche, recensioni — tutto in un\'unica app.',
    hero_appstore_label: 'Scarica su',
    hero_appstore_store: 'App Store',
    hero_phone_label: 'Anteprima',

    // HOME — features
    features_label:    'Funzionalità',
    features_title:    'Tutto quello che ti serve',
    features_sub:      'Semplice, elegante, pensato per i lettori veri.',
    feature_1_title:   'Libreria organizzata',
    feature_1_desc:    'Tre stati chiari — da leggere, in lettura, finito. Cerca, filtra e ordina con facilità.',
    feature_2_title:   'Sessioni di lettura',
    feature_2_desc:    'Avvia una sessione e tieni traccia delle pagine lette. Cronologia completa delle sessioni.',
    feature_3_title:   'Statistiche e progressi',
    feature_3_desc:    'Guarda quante pagine hai letto, il tempo dedicato e la tua crescita nel tempo.',
    feature_4_title:   'Recensioni personali',
    feature_4_desc:    'Lascia un voto e un tuo commento ai libri finiti. La tua libreria, la tua voce.',

    // HOME — screenshots
    screenshots_label: 'Schermate',
    screenshots_title: 'Vedi l\'app in azione',
    screenshots_sub:   'Screenshot in arrivo dopo il lancio.',
    screen_1: 'Libreria',
    screen_2: 'In lettura',
    screen_3: 'Sessione',
    screen_4: 'Statistiche',
    screen_5: 'Dettaglio libro',

    // FOOTER
    footer_privacy:   'Privacy Policy',
    footer_support:   'Supporto',
    footer_contact:   'Contatti',
    footer_copy:      '© 2026 Franco Torriani · Read It Now · Fatto con ❤️ in Italia',

    // SUPPORT — mini hero
    support_title: 'Supporto',
    support_sub:   'Come possiamo aiutarti?',

    // SUPPORT — faq
    faq_label: 'FAQ',
    faq_title: 'Domande frequenti',
    faq_q1: 'Come aggiungo un libro alla mia libreria?',
    faq_q2: 'Come funzionano le sessioni di lettura?',
    faq_q3: 'I miei dati si sincronizzano tra dispositivi?',
    faq_q4: 'Come elimino un libro?',
    faq_q5: 'Posso usare l\'app senza connessione internet?',
    faq_q6: 'Come contatto il supporto?',

    // SUPPORT — contact
    contact_title:  'Hai altre domande?',
    contact_sub:    'Scrivici via email, rispondiamo entro 48 ore.',
    contact_btn:    'Scrivi al supporto',
    contact_note:   'Risposta entro 48 ore lavorative',

    // PRIVACY
    privacy_title:          'Privacy Policy',
    privacy_last_modified:  'Ultimo aggiornamento:',
  },

  en: {
    // NAV
    nav_support:  'Support',
    nav_privacy:  'Privacy',

    // HOME — hero
    hero_badge:    'Available on the App Store',
    hero_title_1:  'Your library,',
    hero_title_2:  'always with you',
    hero_sub:      'Track every book you read, are reading, or want to read. Reading sessions, statistics, reviews — all in one app.',
    hero_appstore_label: 'Download on the',
    hero_appstore_store: 'App Store',
    hero_phone_label: 'Preview',

    // HOME — features
    features_label:    'Features',
    features_title:    'Everything you need',
    features_sub:      'Simple, elegant, built for real readers.',
    feature_1_title:   'Organized library',
    feature_1_desc:    'Three clear states — want to read, reading, finished. Search, filter, and sort with ease.',
    feature_2_title:   'Reading sessions',
    feature_2_desc:    'Start a session and track pages read. Full session history at your fingertips.',
    feature_3_title:   'Stats and progress',
    feature_3_desc:    'See how many pages you\'ve read, time spent, and your growth over time.',
    feature_4_title:   'Personal reviews',
    feature_4_desc:    'Rate and write notes on finished books. Your library, your voice.',

    // HOME — screenshots
    screenshots_label: 'Screenshots',
    screenshots_title: 'See the app in action',
    screenshots_sub:   'Real screenshots coming after launch.',
    screen_1: 'Library',
    screen_2: 'Reading',
    screen_3: 'Session',
    screen_4: 'Statistics',
    screen_5: 'Book detail',

    // FOOTER
    footer_privacy:   'Privacy Policy',
    footer_support:   'Support',
    footer_contact:   'Contact',
    footer_copy:      '© 2026 Franco Torriani · Read It Now · Made with ❤️ in Italy',

    // SUPPORT — mini hero
    support_title: 'Support',
    support_sub:   'How can we help you?',

    // SUPPORT — faq
    faq_label: 'FAQ',
    faq_title: 'Frequently Asked Questions',
    faq_q1: 'How do I add a book to my library?',
    faq_q2: 'How do reading sessions work?',
    faq_q3: 'Do my data sync across devices?',
    faq_q4: 'How do I delete a book?',
    faq_q5: 'Can I use the app without an internet connection?',
    faq_q6: 'How do I contact support?',

    // SUPPORT — contact
    contact_title:  'Still have questions?',
    contact_sub:    'Send us an email — we reply within 48 hours.',
    contact_btn:    'Contact support',
    contact_note:   'Response within 48 business hours',

    // PRIVACY
    privacy_title:          'Privacy Policy',
    privacy_last_modified:  'Last updated:',
  }
};

function setLang(lang) {
  if (!translations[lang]) return;

  // Update short texts
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update long-text blocks (privacy policy, FAQ answers)
  document.querySelectorAll('.lang-block').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update toggle button states
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Persist preference
  try { localStorage.setItem('rin_lang', lang); } catch(e) {}
}

function initLang() {
  let lang = 'it';
  try { lang = localStorage.getItem('rin_lang') || 'it'; } catch(e) {}
  if (!translations[lang]) lang = 'it';
  setLang(lang);
}

// Auto-init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
