import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Phone, Globe } from 'lucide-react';

type FormData = {
    name: string;
    phone: string;
    message: string;
    countries: string[];
};

export default function SpecialInstagramForm() {
    const navigate = useNavigate();
    const [language, setLanguage] = useState('uz');
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        message: '',
        countries: []
    });

    const countryOptions = [
        {
            value: 'russia',
            label: language === 'uz'
                ? 'Rossiya'
                : language === 'ru'
                    ? 'Россия'
                    : 'Russia'
        },
        {
            value: 'arab',
            label: language === 'uz'
                ? 'Arab davlatlari'
                : language === 'ru'
                    ? 'Арабские страны'
                    : 'Arab countries'
        },
        {
            value: 'europe',
            label: language === 'uz'
                ? 'Yevropa'
                : language === 'ru'
                    ? 'Европа'
                    : 'Europe'
        },
        {
            value: 'korea',
            label: language === 'uz'
                ? 'Janubiy Koreya'
                : language === 'ru'
                    ? 'Южная Корея'
                    : 'South Korea'
        }
    ];

    const getText = (uzText: string, ruText: string, enText: string) => {
        return language === 'uz' ? uzText : language === 'ru' ? ruText : enText;
    };

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
        e.preventDefault();

        const selectedCountries = formData.countries
            .map(country => countryOptions.find(c => c.value === country)?.label)
            .join(', ');

        try {
            // === BITRIX ===
            await fetch("https://jobex.bitrix24.kz/rest/1/i6xone91ekpq399a/crm.lead.add.json", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fields: {
                        TITLE: getText(
                            "Instagram forma orqali yangi lead",
                            "Новый лид через форму Instagram",
                            "New lead from Instagram form"
                        ),
                        NAME: formData.name,
                        PHONE: [{ VALUE: formData.phone, VALUE_TYPE: "WORK" }],
                        COMMENTS: formData.message,
                        UF_CRM_COUNTRIES: selectedCountries
                    },
                    params: { "REGISTER_SONET_EVENT": "Y" }
                })
            });

            // === TELEGRAM ===
            const telegramText = getText(
                `<b>Yangi Instagram linkdan</b>\n\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n🌍 Davlatlar: ${formData.countries.join(", ")}\n💬 Xabar: ${formData.message}`,
                `<b>Новый лид из Instagram</b>\n\n👤 Имя: ${formData.name}\n📞 Телефон: ${formData.phone}\n🌍 Страны: ${formData.countries.join(", ")}\n💬 Сообщение: ${formData.message}`,
                `<b>New lead from Instagram</b>\n\n👤 Name: ${formData.name}\n📞 Phone: ${formData.phone}\n🌍 Countries: ${formData.countries.join(", ")}\n💬 Message: ${formData.message}`
            );

            await fetch(`https://api.telegram.org/bot8358381564:AAFHwgZHiX4gP-EgnFTnGPl36xwCP3HKByk/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: -1002619344250,
                    text: telegramText,
                    parse_mode: "HTML"
                })
            });

            // Show success message
            alert(getText(
                "Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
                "Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.",
                "Your message has been sent successfully! We will contact you soon."
            ));

            // Navigate to home page after successful submission
            navigate("/");

        } catch (error) {
            console.error(getText("Xatolik yuz berdi:", "Произошла ошибка:", "Error occurred:"), error);
            alert(getText(
                "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring.",
                "Произошла ошибка. Пожалуйста, попробуйте еще раз.",
                "An error occurred. Please try again."
            ));
        }
    };

    const languageOptions = [
        { value: 'uz', label: "O'zbekcha" },
        { value: 'ru', label: 'Русский' },
        { value: 'en', label: 'English' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
            <div className="backdrop-blur-md bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 border border-white/20 w-full max-w-lg shadow-xl">

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {getText('Ismingiz', 'Ваше имя', 'Your Name')}
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={getText('Ismingiz', 'Ваше имя', 'Your Name')}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            {getText('Telefon raqam', 'Номер телефона', 'Phone Number')}
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={getText('+998 90 123 45 67', '+998 90 123 45 67', '+998 90 123 45 67')}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                            required
                        />
                    </div>

                    {/* Countries Selection */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                            <Globe className="w-4 h-4 inline mr-2" />
                            {getText(
                                "Qaysi davlatlarda ishlamoqchisiz?",
                                "В каких странах хотите работать?",
                                "In which countries do you want to work?"
                            )}
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
                            {getText('Xabaringiz', 'Ваше сообщение', 'Your Message')}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder={getText('Xabaringiz', 'Ваше сообщение', 'Your Message')}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-600 bg-white/60 dark:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all resize-none"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                        <span>{getText('Yuborish', 'Отправить', 'Submit')}</span>
                        <Send className="w-5 h-5" />
                    </button>
                </form>

                {/* Additional contact info */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        {getText(
                            "Yoki to'g'ridan-to'g'ri bog'laning:",
                            "Или свяжитесь с нами напрямую:",
                            "Or contact us directly:"
                        )}
                    </p>
                    <div className="flex justify-center space-x-6 mt-4">
                        <a href="tel:+998555118866" className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span className="text-sm">{getText("Qo'ng'iroq qilish", "Позвонить", "Call")}</span>
                        </a>
                        <a href="https://t.me/jobex_uz" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 transition-colors">
                            <Send className="w-4 h-4" />
                            <span className="text-sm">Telegram</span>
                        </a>
                    </div>
                </div>

                <div className="mt-4 flex justify-center space-x-4">
                    {languageOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => setLanguage(option.value)}
                            className={`text-sm px-3 py-1 rounded transition-colors ${
                                language === option.value
                                    ? 'bg-sky-500 text-white'
                                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                            }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}