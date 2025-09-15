import {LanguageProvider} from './language-context';
import {ThemeProvider} from './theme-provider';
import SpecialInstagramForm from "./form/SpecialInstagramForm.tsx";


export default function InstagramPage() {
    return (
        <ThemeProvider defaultTheme="light">
            <LanguageProvider>
                    <SpecialInstagramForm />
            </LanguageProvider>
        </ThemeProvider>
    );
}
