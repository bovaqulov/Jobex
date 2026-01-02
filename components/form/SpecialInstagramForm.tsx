import { useState } from 'react';
import { Send, Phone, Globe } from 'lucide-react';


type FormData = {
    name: string;
    phone: string;
    message: string;
    countries: string[];
};


export default function SpecialInstagramForm() {
    const [language, setLanguage] = useState('uz');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        message: '',
        countries: []
    });

    const countryOptions = [
        { value: 'russia', label: language === 'uz' ? 'Rossiya' : 'Россия' },
        { value: 'arab', label: language === 'uz' ? 'Arab davlatlari' : 'Арабские страны' },
        { value: 'europe', label: language === 'uz' ? 'Yevropa' : 'Европа' },
        { value: 'korea', label: language === 'uz' ? 'Janubiy Koreya' : 'Южная Корея' }
    ];

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCountryChange = (countryValue: string) => {
        setFormData(prev => ({
            ...prev,
            countries: prev.countries.includes(countryValue)
                ? prev.countries.filter(c => c !== countryValue)
                : [...prev.countries, countryValue]
        }));
    };

    const handleSubmit = async (e: any) => {

        const selectedCountries = formData.countries
            .map(country => countryOptions.find(c => c.value === country)?.label)
            .join(', ');

        // === BITRIX ===
        await fetch("https://jobex.bitrix24.kz/rest/1/i6xone91ekpq399a/crm.lead.add.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fields: {
                    TITLE: "Instagram forma orqali yangi lead",
                    NAME: formData.name,
                    PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
                    COMMENTS: formData.message,
                    UF_CRM_COUNTRIES: selectedCountries
                },
                params: { "REGISTER_SONET_EVENT": "Y" }
            })
        });

        // === TELEGRAM ===
        await fetch(`https://api.telegram.org/bot8358381564:AAFHwgZHiX4gP-EgnFTnGPl36xwCP3HKByk/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                chat_id: -1002619344250,
                text: `
<b>Yangi Instagram linkdan</b>\n
👤 Ism: ${formData.name}
📞 Telefon: ${formData.phone}
🌍 Davlatlar: ${formData.countries.join(", ")}
💬 Xabar: ${formData.message}
        `,
                parse_mode: "HTML"
            })
        });


        alert(language === 'uz'
            ? "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz."
            : "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время."
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-white/20 w-full max-w-lg shadow-xl">

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {language === 'uz' ? 'Ismingiz' : 'Ваше имя'}
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={language === 'uz' ? 'Ismingiz' : 'Ваше имя'}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {language === 'uz' ? 'Telefon raqam' : 'Номер телефона'}
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={language === 'uz' ? '+998 90 123 45 67' : '+998 90 123 45 67'}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            required
                        />
                    </div>

                    {/* Countries Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            <Globe className="w-4 h-4 inline mr-2" />
                            {language === 'uz' ? "Qaysi davlatlarda ishlamoqchisiz?" : "В каких странах хотите работать?"}
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                            {countryOptions.map((country) => (
                                <label
                                    key={country.value}
                                    className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                                        formData.countries.includes(country.value)
                                            ? 'bg-sky-50 dark:bg-sky-900/20 border-sky-500 text-sky-700 dark:text-sky-300'
                                            : 'bg-white/60 dark:bg-gray-800/60 border-gray-200 dark:border-gray-600 hover:border-sky-300'
                                    }`}
                                >
                                    <input
                                        type="checkbox"
                                        checked={formData.countries.includes(country.value)}
                                        onChange={() => handleCountryChange(country.value)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-4 h-4 rounded border mr-3 flex items-center justify-center ${
                                            formData.countries.includes(country.value)
                                                ? 'bg-sky-500 border-sky-500'
                                                : 'border-gray-300 dark:border-gray-600'
                                        }`}
                                    >
                                        {formData.countries.includes(country.value) && (
                                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                        )}
                                    </div>
                                    <span className="text-sm font-medium">{country.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {language === 'uz' ? 'Xabaringiz' : 'Ваше сообщение'}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder={language === 'uz' ? 'Xabaringiz' : 'Ваше сообщение'}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                        <span>{language === 'uz' ? 'Yuborish' : 'Отправить'}</span>
                        <Send className="w-5 h-5" />
                    </button>
                </form>

                {/* Additional contact info */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        {language === 'uz' ? "Yoki to'g'ridan-to'g'ri bog'laning:" : "Или свяжитесь с нами напрямую:"}
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="tel:+998555118866" className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">{language === 'uz' ? "Qo'ng'iroq qilish" : "Позвонить"}</span>
                        </a>
                        <a href="https://t.me/jobex_uz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors">
                            <Send className="w-4 h-4" />
                            <span className="text-sm">Telegram</span>
                        </a>
                    </div>
                </div>

                {/* Language Toggle */}
                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setLanguage(language === 'uz' ? 'ru' : 'uz')}
                        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                    >
                        {language === 'uz' ? 'Русский' : "O'zbekcha"}
                    </button>
                </div>
            </div>
        </div>
    );
}
