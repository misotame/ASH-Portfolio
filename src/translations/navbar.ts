export interface NavbarTranslation {
  logo: string;
  bookAppointment: string;
  language: string;
}

export const navbarTranslations: Record<string, NavbarTranslation> = {
  EN: {
    logo: "Abba Sena Hospital",
    bookAppointment: "Book Appointment",
    language: "Language"
  },
  AF: {
    logo: "Hospitala Abba Sena",
    bookAppointment: "Appointmeentii Buufuu",
    language: "Afaan"
  },
  AM: {
    logo: "አባ ሰና ሆስፒታል",
    bookAppointment: "ቀጠሮ ያዝኩ",
    language: "ቋንቋ"
  }
};

export const getNavbarTranslation = (language: string): NavbarTranslation => {
  return navbarTranslations[language] || navbarTranslations['EN'];
};
