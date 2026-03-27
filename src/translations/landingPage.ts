export interface Translation {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
    ctaButtons: {
      getMedicalCare: string;
      contactHospital: string;
    };
    doctorsBadge: string;
    service24Hour: string;
    howWeWork: string;
  };
  about: {
    pillTag: string;
    heading: string;
    standard: string;
    description: string;
    features: {
      modernEquipment: {
        title: string;
        description: string;
      };
      expertDoctors: {
        title: string;
        description: string;
      };
    };
    watchStory: string;
  };
  trustExpertise: {
    pillTag: string;
    heading: string;
    priority: string;
    description: string;
    features: {
      personalizedTreatment: {
        title: string;
        description: string;
      };
      advancedSurgical: {
        title: string;
        description: string;
      };
      comprehensiveAftercare: {
        title: string;
        description: string;
      };
    };
    badge: string;
  };
  specializedCare: {
    pillTag: string;
    heading: string;
    facilities: string;
    description: string;
  };
  services: {
    emergency: {
      name: string;
      desc: string;
    };
    obstetrics: {
      name: string;
      desc: string;
    };
    pediatrics: {
      name: string;
      desc: string;
    };
    internalMedicine: {
      name: string;
      desc: string;
    };
    generalSurgery: {
      name: string;
      desc: string;
    };
    laboratory: {
      name: string;
      desc: string;
    };
  };
  doctors: {
    director: {
      name: string;
      specialty: string;
      bio: string;
    };
    generalPractitioner: {
      name: string;
      specialty: string;
      bio: string;
    };
    emergencyTeam: {
      name: string;
      specialty: string;
      bio: string;
    };
    nursingStaff: {
      name: string;
      specialty: string;
      bio: string;
    };
  };
  facilities: {
    emergency: {
      tag: string;
      title: string;
      description: string;
      hours: string;
      contact: string;
    };
    obstetrics: {
      tag: string;
      title: string;
      description: string;
      hours: string;
      contact: string;
    };
    pediatrics: {
      tag: string;
      title: string;
      description: string;
      hours: string;
      contact: string;
    };
  };
}

export const translations: Record<string, Translation> = {
  EN: {
    hero: {
      badge: "Nekemte, Oromia Region, Ethiopia",
      heading: "Abba Sena General Hospital",
      subheading: "Nekemte's Leading 250-Bed Hospital. Comprehensive healthcare for Western Oromia, serving over 5 million people with emergency, maternity, pediatric, and general medical services.",
      ctaButtons: {
        getMedicalCare: "Get Medical Care",
        contactHospital: "Contact Hospital"
      },
      doctorsBadge: "Serving over 5 million people in Western Oromia",
      service24Hour: "24 hour service",
      howWeWork: "How We Work"
    },
    about: {
      pillTag: "About Abba Sena General Hospital",
      heading: "We are Setting the",
      standard: "Standard",
      description: "Established in 2014, Abba Sena General Hospital is a private nonprofit institution serving over 5 million people in Western Oromia. We provide 24/7 emergency care, maternity and pediatric services (approximately 4,000 births per year), and inpatient/outpatient general medicine. Our mission is to deliver compassionate, quality healthcare to Nekemte and beyond.",
      features: {
        modernEquipment: {
          title: "Modern Equipment",
          description: "Latest technology for precise diagnostics."
        },
        expertDoctors: {
          title: "Expert Doctors",
          description: "World-renowned medical specialists."
        }
      },
      watchStory: "Watch Our Story"
    },
    trustExpertise: {
      pillTag: "Trust & Expertise",
      heading: "Your Health is Our",
      priority: "Priority",
      description: "We combine decades of experience with the latest medical breakthroughs to provide you with a healthcare experience that is safe, effective, and deeply personal.",
      features: {
        personalizedTreatment: {
          title: "Personalized Treatment Plans",
          description: "Tailored care specifically for your unique health needs."
        },
        advancedSurgical: {
          title: "Advanced Surgical Procedures",
          description: "Minimally invasive techniques for faster recovery."
        },
        comprehensiveAftercare: {
          title: "Comprehensive Aftercare",
          description: "Ongoing support and monitoring throughout your recovery."
        }
      },
      badge: "Top Rated Hospital 2018"
    },
    specializedCare: {
      pillTag: "Specialized Care",
      heading: "Our World-Class",
      facilities: "Facilities",
      description: "We provide specialized care across multiple departments, each equipped with the latest medical technology."
    },
    services: {
      emergency: {
        name: "Emergency Services",
        desc: "24/7 emergency care for trauma and acute medical conditions."
      },
      obstetrics: {
        name: "Obstetrics & Gynecology",
        desc: "Comprehensive maternity care with approximately 4,000 births per year."
      },
      pediatrics: {
        name: "Pediatrics",
        desc: "Specialized healthcare for infants, children, and adolescents."
      },
      internalMedicine: {
        name: "Internal Medicine",
        desc: "Adult inpatient and outpatient care for various medical conditions."
      },
      generalSurgery: {
        name: "General Surgery",
        desc: "Surgical services including minor and major operations."
      },
      laboratory: {
        name: "Laboratory & Radiology",
        desc: "Diagnostic imaging and laboratory testing services."
      }
    },
    doctors: {
      director: {
        name: "Dr. Abebè",
        specialty: "Hospital Director",
        bio: "Leading Abba Sena Hospital with dedication to quality healthcare for Western Oromia."
      },
      generalPractitioner: {
        name: "Dr. Mitiku Deresa",
        specialty: "General Practitioner",
        bio: "Providing comprehensive medical care to our community."
      },
      emergencyTeam: {
        name: "Medical Team",
        specialty: "Emergency Services",
        bio: "Our dedicated emergency team provides 24/7 critical care."
      },
      nursingStaff: {
        name: "Nursing Staff",
        specialty: "Patient Care",
        bio: "Compassionate nursing care for all patients."
      }
    },
    facilities: {
      emergency: {
        tag: "24/7 Care",
        title: "Emergency Department",
        description: "Our Emergency Department provides 24/7 critical care for trauma and acute medical conditions, serving the community of Western Oromia.",
        hours: "24/7 Emergency Service",
        contact: "Emergency Team"
      },
      obstetrics: {
        tag: "Maternity Care",
        title: "Obstetrics & Gynecology",
        description: "Comprehensive maternity care with approximately 4,000 births per year. Our dedicated team ensures safe deliveries and maternal health.",
        hours: "24/7 Maternity Services",
        contact: "OB/GYN Team"
      },
      pediatrics: {
        tag: "Child Care",
        title: "Pediatric Ward",
        description: "Specialized healthcare for infants, children, and adolescents in a child-friendly environment.",
        hours: "24/7 Pediatric Care",
        contact: "Pediatrics Team"
      }
    }
  },
  AF: {
    hero: {
      badge: "Nekemte, Oromia, Ethiopia",
      heading: "Hospitala Guddaa Abbaa Seenaa",
      subheading: "Hospitala Nekemte qofa bu'aa 250 qaba. Fayyaa guutuu Oromia Dhihaatti, miseensota 5 miiliyoonii ol ta'an fayyadamaa, yeroo hunda tajaajila, da'umsa, daa'immanii, fi tajaajila fayyaa waliigalaa kennu.",
      ctaButtons: {
        getMedicalCare: "Fayyaa Argadhu",
        contactHospital: "Hospitala Qunnami"
      },
      doctorsBadge: "Miseensota 5 miiliyoonii ol Oromia Dhihaatti tajaajilu",
      service24Hour: "Tajaajila sa'aatii 24",
      howWeWork: "Akka Nu Hojjennu"
    },
    about: {
      pillTag: "Waa'ee Hospitala Guddaa Abba Sena",
      heading: "Istaandardii",
      standard: "Istaandardii",
      description: "Bara 2014tti kaka'ame, Hospitala Guddaa Abba Sena iddoo dhaabbataa miseensota 5 miiliyoonii ol Oromia Dhihaatti tajaajiluudha. Tajaajila yeroo hunda, da'umsa fi tajaajila daa'immanii (waggii 4,000 ol du'a), fi tajaajila fayyaa waliigalaa kennu. Kaayyoo keenya fayyaa nagaan, qulqullinaa Nekemte fi alaatti kennuudha.",
      features: {
        modernEquipment: {
          title: "Meeshaalee Ammayyaa",
          description: "Teknooloojiiwwan dhugaa fi qulqullinaa fayyaa."
        },
        expertDoctors: {
          title: "Doktoraalee Oggeessota",
          description: "Oggeessota fayyaa addunyaa keessatti beekaman."
        }
      },
      watchStory: "Seenaa Keenya Ilaali"
    },
    trustExpertise: {
      pillTag: "Ammantuu fi Ogummaa",
      heading: "Fayyaa Keenya",
      priority: "Kan Durii",
      description: "Waggoota hedduu muuxannoo fi ogeeyyii fayyaa ammayyaa walitti qabnee, muuxannoo fayyaa nagaan, bu'aa qaba, fi dhuunfaa ta'e kennu.",
      features: {
        personalizedTreatment: {
          title: "Karoota Yaala Dhuunfaa",
          description: "Tajaajila dhuunfaa fayyaa keessaniif qophaa'e."
        },
        advancedSurgical: {
          title: "Qaama Qaamaa Guddinaa",
          description: "Toftaalee xixiqqaa bu'uuraan akka daftee boqochuu."
        },
        comprehensiveAftercare: {
          title: "Bulchiinsa Guutuu",
          description: "Deeggarsa fi eegumsa yeroo hunda boqochuu keessaniif."
        }
      },
      badge: "Hospitala Gabaasa Olaanaa 2018"
    },
    specializedCare: {
      pillTag: "Tajaajila Addaa",
      heading: "Addunyaa",
      facilities: "Iddoolee",
      description: "Tajaajila addaa kutaa hedduu keessatti kennu, tokko tokkoon meeshaalee fayyaa ammayyaan qophaa'e."
    },
    services: {
      emergency: {
        name: "Tajaajila Ariifachiisaa",
        desc: "Tajaajila yeroo hunda qaama xiqqaa fi dhukkuba hatattamaa."
      },
      obstetrics: {
        name: "Da'umsa fi Naannoo Dubartii",
        desc: "Tajaajila da'umsa guutuu waggii 4,000 ol du'a."
      },
      pediatrics: {
        name: "Daa'immanii",
        desc: "Tajaajila fayyaa addaa daa'immanii fi barattootaaf."
      },
      internalMedicine: {
        name: "Qaama Keessaa",
        desc: "Tajaajila guyyaa fi yeroo hunda dhukkuba gosa garaagaraa."
      },
      generalSurgery: {
        name: "Qaama Qaamaa Waliigalaa",
        desc: "Tajaajila qaama qaamaa xiqqaa fi guddaa."
      },
      laboratory: {
        name: "Meeshalee Qorannoo fi Raajii",
        desc: "Tajaajila qorannoo fi raajii fayyaa."
      }
    },
    doctors: {
      director: {
        name: "Dr. Abebè",
        specialty: "Bulchaa Hospitala",
        bio: "Hospitala Abba Sena qulqullinaa fayyaa Oromia Dhihaatti qofa bulchu."
      },
      generalPractitioner: {
        name: "Dr. Mitiku Deresa",
        specialty: "Doktora Waliigalaa",
        bio: "Tajaajila fayyaa guutuu hawaasaa keenyaaf kennu."
      },
      emergencyTeam: {
        name: "Garee Ogeessota",
        specialty: "Tajaajila Ariifachiisaa",
        bio: "Garee keenya tajaajila yeroo hunda kennu."
      },
      nursingStaff: {
        name: "Hojjataa Bulchiinsa",
        specialty: "Bulchiinsa Dhukkubtootaa",
        bio: "Bulchiinsa jaalala dhukkubtoota hundaaf."
      }
    },
    facilities: {
      emergency: {
        tag: "Tajaajila 24/7",
        title: "Kutaa Ariifachiisaa",
        description: "Kutaa Ariifachiisaa keenya tajaajila yeroo hunda qaama xiqqaa fi dhukkuba hatattamaa, hawaasaa Oromia Dhihaatti kennu.",
        hours: "Tajaajila Ariifachiisaa 24/7",
        contact: "Garee Ariifachiisaa"
      },
      obstetrics: {
        tag: "Bulchiinsa Da'umsaa",
        title: "Da'umsa fi Naannoo Dubartii",
        description: "Tajaajila da'umsa guutuu waggii 4,000 ol du'a. Garee keenya da'umsa nagaan fi fayyaa haadhaaf mirkaneessu.",
        hours: "Tajaajila Da'umsaa 24/7",
        contact: "Garee Da'umsaa"
      },
      pediatrics: {
        tag: "Bulchiinsa Daa'immanii",
        title: "Kutaa Daa'immanii",
        description: "Tajaajila fayyaa addaa daa'immanii fi barattootaaf, bakka daa'immanii fayyadamanii.",
        hours: "Tajaajila Daa'immanii 24/7",
        contact: "Garee Daa'immanii"
      }
    }
  },
  AM: {
    hero: {
      badge: "ነቀምት፣ ኦሮሚያ፣ ኢትዮጵያ",
      heading: "አባ ሰና ግዥ ሆስፒታል",
      subheading: "የነቀምት ዋና 250 አልጋ ሆስፒታል። ለምዕራብ ኦሮሚያ ሙሉ የጤና አገልግሎት፣ ከ5 ሚሊዮን በላይ ሰዎችን በአደጋ ጊዜ፣ የእናትነት፣ የሕፃናት እና አጠቃላይ የሕክምና አገልግሎቶች አገልግሎት ይሰጣል።",
      ctaButtons: {
        getMedicalCare: "ሕክምና ያግኙ",
        contactHospital: "ሆስፒታሉን ያግኙ"
      },
      doctorsBadge: "ከ5 ሚሊዮን በላይ ሰዎችን በምዕራብ ኦሮሚያ አገልግሎት ይሰጣል",
      service24Hour: "24 ሰዓት አገልግሎት",
      howWeWork: "እንዴት እንሰራለን"
    },
    about: {
      pillTag: "ስለ አባ ሰና ግዥ ሆስፒታል",
      heading: "እኛ የ",
      standard: "መደበኛ",
      description: "በ2014 የተመሰረተው አባ ሰና ግዥ ሆስፒታል ከ5 ሚሊዮን በላይ ሰዎችን በምዕራብ ኦሮሚያ የሚያገለግል የግል ያልሆነ ተቋም ነው። 24/7 የአደጋ ጊዜ እንክብካቤ፣ የእናትነት እና የሕፃናት አገልግሎቶች (በአመት ወደ 4,000 የሚደርስ የልደት) እና የውስጥ/የውጭ አጠቃላይ ሕክምና እንሰጣለን። ተልእኮአችን ለነቀምት እና ከዚያ በላይ ለሆኑ ሰዎች ሩህሩህ፣ ጥራት ያለው ጤና አገልግሎት ማቅረብ ነው።",
      features: {
        modernEquipment: {
          title: "ዘመናዊ መሳሪያዎች",
          description: "ለትክክለኛ ምርመራ የዘመኑ ቴክኖሎጂ።"
        },
        expertDoctors: {
          title: "ባለሙያ ሐኪሞች",
          description: "በዓለም ዝናብ ያለው የሕክምና ባለሙያዎች።"
        }
      },
      watchStory: "ታሪካችንን ይመልከቱ"
    },
    trustExpertise: {
      pillTag: "እምነት እና ባለሙያነት",
      heading: "ጤናዎ የ",
      priority: "ቅድሚያ",
      description: "ከዓመታት ልምድ ከዘመናዊ የሕክምና አዳዲስ ውጤቶች ጋር በማዋሃድ፣ ደህንነቱ የተጠበቀ፣ ውጤታማ እና ግልጽ የሆነ የጤና አገልግሎት እንሰጥዎታለን።",
      features: {
        personalizedTreatment: {
          title: "የግል የሕክምና ዕቅዶች",
          description: "ለእርስዎ ልዩ የጤና ፍላጎት የተዘጋጀ እንክብካቤ።"
        },
        advancedSurgical: {
          title: "የላቀ የቀዶ ጥገና ሂደቶች",
          description: "ለፍጥነት የመዳን ዘዴዎች።"
        },
        comprehensiveAftercare: {
          title: "ሙሉ የድህረ እንክብካቤ",
          description: "በማዳን ወቅት የሚቀጥል ድጋፍ እና ክትትል።"
        }
      },
      badge: "ከፍተኛ ደረጃ ያለው ሆስፒታል 2018"
    },
    specializedCare: {
      pillTag: "ልዩ እንክብካቤ",
      heading: "ዓለም አቀፍ",
      facilities: "መገልገያዎች",
      description: "በብዙ ክፍሎች ልዩ እንክብካቤ እንሰጣለን፣ እያንዳንዱ በዘመናዊ የሕክምና ቴክኖሎጂ የታጠቀ።"
    },
    services: {
      emergency: {
        name: "የአደጋ ጊዜ አገልግሎቶች",
        desc: "ለጉዳት እና ለአደገኛ የሕክምና ሁኔታዎች 24/7 የአደጋ ጊዜ እንክብካቤ።"
      },
      obstetrics: {
        name: "የእናትነት እና የሴቶች ሕክምና",
        desc: "በአመት ወደ 4,000 የሚደርስ የልደት ሙሉ የእናትነት እንክብካቤ።"
      },
      pediatrics: {
        name: "የሕፃናት ሕክምና",
        desc: "ለሕፃናት፣ ለህጻናት እና ለወጣቶች ልዩ የጤና አገልግሎት።"
      },
      internalMedicine: {
        name: "የውስጥ ሕክምና",
        desc: "ለየተለያዩ የሕክምና ሁኔታዎች የአዋቂዎች የውስጥ እና የውጭ እንክብካቤ።"
      },
      generalSurgery: {
        name: "አጠቃላይ ቀዶ ጥገና",
        desc: "አነስተኛ እና ትልልቅ ቀዶ ጥገና ያካትታል።"
      },
      laboratory: {
        name: "የ实验室 እና የራዲዮሎጂ",
        desc: "የምርመራ ምስል እና የ实验室 ሙከራ አገልግሎቶች።"
      }
    },
    doctors: {
      director: {
        name: "ዶ/ር አበበ",
        specialty: "የሆስፒታል ዳይሬክተር",
        bio: "ለምዕራብ ኦሮሚያ ጥራት ያለው ጤና አገልግሎት በተስፋ ማድረግ አባ ሰና ሆስፒታልን መምራት።"
      },
      generalPractitioner: {
        name: "ዶ/ር ምቲኩ ደረሳ",
        specialty: "አጠቃላይ ሐኪም",
        bio: "ለማህበረሰባችን ሙሉ የሕክምና አገልግሎት ማቅረብ።"
      },
      emergencyTeam: {
        name: "የሕክምና ቡድን",
        specialty: "የአደጋ ጊዜ አገልግሎቶች",
        bio: "የእኛ ቁርጠኛ የአደጋ ጊዜ ቡድን 24/7 ወሳኝ እንክብካቤ ይሰጣል።"
      },
      nursingStaff: {
        name: "የነርስ ሰራተኞች",
        specialty: "የታካሚ እንክብካቤ",
        bio: "ለሁሉም ታካሚዎች ሩህሩህ የነርስ እንክብካቤ።"
      }
    },
    facilities: {
      emergency: {
        tag: "24/7 እንክብካቤ",
        title: "የአደጋ ጊዜ ክፍል",
        description: "የእኛ የአደጋ ጊዜ ክፍል ለጉዳት እና ለአደገኛ የሕክምና ሁኔታዎች 24/7 ወሳኝ እንክብካቤ ይሰጣል፣ ለምዕራብ ኦሮሚያ ማህበረሰብ ያገለግላል።",
        hours: "24/7 የአደጋ ጊዜ አገልግሎት",
        contact: "የአደጋ ጊዜ ቡድን"
      },
      obstetrics: {
        tag: "የእናትነት እንክብካቤ",
        title: "የእናትነት እና የሴቶች ሕክምና",
        description: "በአመት ወደ 4,000 የሚደርስ የልደት ሙሉ የእናትነት እንክብካቤ። የእኛ ቁርጠኛ ቡድን ደህንነቱ የተጠበቀ የልደት እና የእናት ጤና ያረጋግጣል።",
        hours: "24/7 የእናትነት አገልግሎቶች",
        contact: "የእናትነት ቡድን"
      },
      pediatrics: {
        tag: "የሕፃናት እንክብካቤ",
        title: "የሕፃናት ክፍል",
        description: "ለሕፃናት፣ ለህጻናት እና ለወጣቶች በሕፃናት ተስማሚ አካባቢ ልዩ የጤና አገልግሎት።",
        hours: "24/7 የሕፃናት እንክብካቤ",
        contact: "የሕፃናት ቡድን"
      }
    }
  }
};

export const getTranslation = (language: string): Translation => {
  return translations[language] || translations['EN'];
};
