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
    hero_badge:    'Novità — Read It Now 2.0',
    hero_title_1:  'La tua libreria,',
    hero_title_2:  'sempre con te',
    hero_sub:      'Traccia ogni libro che leggi: sessioni cronometrate, statistiche complete, sfide annuali e il tuo riepilogo di fine anno.',
    hero_appstore_label: 'Scarica su',
    hero_appstore_store: 'App Store',
    hero_phone_label: 'Anteprima',

    // HOME — features
    features_label:    'Funzionalità',
    features_title:    'Tutto quello che ti serve',
    features_sub:      'Semplice, elegante, pensato per i lettori veri.',
    feature_1_title:   'Libreria organizzata',
    feature_1_desc:    'Tre stati chiari — da leggere, in lettura, finito. Cerca, filtra e ordina con facilità.',
    feature_2_title:   'Timer di lettura',
    feature_2_desc:    'Cronometra ogni sessione e aggiorna le pagine lette in tempo reale, libro per libro.',
    feature_3_title:   'Statistiche complete',
    feature_3_desc:    'Libri, ore, velocità di lettura, generi e autori preferiti: tutto sotto controllo.',
    feature_4_title:   'Sfida di lettura',
    feature_4_desc:    'Fissa un obiettivo annuale di libri e segui i progressi con proiezioni in tempo reale.',
    feature_5_title:   'Riepilogo annuale',
    feature_5_desc:    'Il riepilogo della tua lettura a fine anno, pronto da condividere.',
    feature_6_title:   'Citazioni e note',
    feature_6_desc:    'Salva le frasi che ami e le tue riflessioni, e condividile in un tocco.',

    // HOME — screenshots
    screenshots_label: 'Schermate',
    screenshots_title: 'Vedi l\'app in azione',
    screenshots_sub:   'Le novità della versione 2.0.',
    screen_1: 'In lettura',
    screen_2: 'Progresso di lettura',
    screen_3: 'Timer sessione',
    screen_4: 'Libreria',
    screen_5: 'Aggiungi libri',
    screen_6: 'Statistiche',
    screen_7: 'Sfida di lettura',
    screen_8: 'Tempo di lettura',
    screen_9: 'Riepilogo annuale',
    screen_10: 'Generi e autori',
    screen_11: 'Citazioni',
    screen_12: 'Dettaglio libro',
    screen_13: 'Libri completati',

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
    faq_q3: 'Come funziona la sfida di lettura?',
    faq_q4: 'Cos\'è il riepilogo annuale?',
    faq_q5: 'Posso salvare citazioni e note sui libri?',
    faq_q6: 'I miei dati si sincronizzano tra dispositivi?',
    faq_q7: 'Come elimino un libro?',
    faq_q8: 'Posso usare l\'app senza connessione internet?',
    faq_q9: 'Come contatto il supporto?',

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
    hero_badge:    'New — Read It Now 2.0',
    hero_title_1:  'Your library,',
    hero_title_2:  'always with you',
    hero_sub:      'Track every book you read: timed sessions, full stats, yearly challenges, and your end-of-year recap.',
    hero_appstore_label: 'Download on the',
    hero_appstore_store: 'App Store',
    hero_phone_label: 'Preview',

    // HOME — features
    features_label:    'Features',
    features_title:    'Everything you need',
    features_sub:      'Simple, elegant, built for real readers.',
    feature_1_title:   'Organized library',
    feature_1_desc:    'Three clear states — want to read, reading, finished. Search, filter, and sort with ease.',
    feature_2_title:   'Reading timer',
    feature_2_desc:    'Time every session and update pages read in real time, book by book.',
    feature_3_title:   'Full statistics',
    feature_3_desc:    'Books, hours, reading speed, favorite genres and authors — all in one place.',
    feature_4_title:   'Reading challenge',
    feature_4_desc:    'Set a yearly book goal and track your progress with real-time projections.',
    feature_5_title:   'Yearly Recap',
    feature_5_desc:    'Your year in reading, recapped and ready to share.',
    feature_6_title:   'Quotes and notes',
    feature_6_desc:    'Save the lines you love and your thoughts, and share them in one tap.',

    // HOME — screenshots
    screenshots_label: 'Screenshots',
    screenshots_title: 'See the app in action',
    screenshots_sub:   'What\'s new in version 2.0.',
    screen_1: 'Currently reading',
    screen_2: 'Reading progress',
    screen_3: 'Session timer',
    screen_4: 'Library',
    screen_5: 'Add books',
    screen_6: 'Statistics',
    screen_7: 'Reading challenge',
    screen_8: 'Reading time',
    screen_9: 'Yearly Recap',
    screen_10: 'Genres & authors',
    screen_11: 'Quotes',
    screen_12: 'Book detail',
    screen_13: 'Finished books',

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
    faq_q3: 'How does the reading challenge work?',
    faq_q4: 'What is the yearly recap?',
    faq_q5: 'Can I save quotes and notes on books?',
    faq_q6: 'Do my data sync across devices?',
    faq_q7: 'How do I delete a book?',
    faq_q8: 'Can I use the app without an internet connection?',
    faq_q9: 'How do I contact support?',

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

  // Update language-specific images
  document.querySelectorAll('[data-src-' + lang + ']').forEach(el => {
    el.src = el.dataset['src' + lang.charAt(0).toUpperCase() + lang.slice(1)];
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
