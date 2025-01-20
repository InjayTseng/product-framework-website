class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'en';
        this.translations = {};
    }

    async init() {
        // Load translations
        await this.loadTranslations();
        
        // Initial translation
        this.translate();
        
        // Set up language switcher
        this.setupLanguageSwitcher();
    }

    async loadTranslations() {
        try {
            const response = await fetch('/i18n/translations.json');
            this.translations = await response.json();
        } catch (error) {
            console.error('Failed to load translations:', error);
        }
    }

    translate() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = this.getTranslation(key);
            if (translation) {
                if (element.tagName === 'INPUT' && element.type === 'placeholder') {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Update HTML lang attribute
        document.documentElement.lang = this.currentLang;
    }

    getTranslation(key) {
        if (!this.translations[this.currentLang]) return key;
        
        const keys = key.split('.');
        let translation = this.translations[this.currentLang];
        
        for (const k of keys) {
            if (translation && translation[k]) {
                translation = translation[k];
            } else {
                return key;
            }
        }
        
        return translation;
    }

    setLanguage(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('lang', lang);
            this.translate();
            
            // Update language switcher
            document.querySelectorAll('.lang-switch').forEach(btn => {
                btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
            });
            
            // Dispatch event for components that need to know about language changes
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
        }
    }

    setupLanguageSwitcher() {
        const switcherHtml = `
            <div class="language-switcher">
                <button class="lang-switch ${this.currentLang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
                <button class="lang-switch ${this.currentLang === 'zh_tw' ? 'active' : ''}" data-lang="zh_tw">繁</button>
                <button class="lang-switch ${this.currentLang === 'zh_cn' ? 'active' : ''}" data-lang="zh_cn">简</button>
            </div>
        `;
        
        // Insert language switcher into the nav
        const nav = document.querySelector('nav');
        if (nav) {
            nav.insertAdjacentHTML('beforeend', switcherHtml);
            
            // Add event listeners
            document.querySelectorAll('.lang-switch').forEach(btn => {
                btn.addEventListener('click', () => {
                    const lang = btn.getAttribute('data-lang');
                    this.setLanguage(lang);
                });
            });
        }
    }
}

// Create and export instance
const i18n = new I18n();
export default i18n;
