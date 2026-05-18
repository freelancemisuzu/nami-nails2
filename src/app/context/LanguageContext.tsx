import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'jp';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    hero: {
      title: "NAMI NAILS",
      subtitle: "Elevated care for hands that tell your story",
    },
    services: {
      heading: "SERVICES",
      bookNow: "Book Now",
      list: [
        {
          title: "one color",
          description: "A luxurious hand treatment with organic products and precision shaping",
          price: "¥6,500",
          duration: "60 min"
        },
        {
          title: "French nail",
          description: "A classic and sophisticated look with clean white tips",
          price: "¥7,500",
          duration: "75 min"
        },
        {
          title: "Gel Extensions",
          description: "Natural-looking gel extensions crafted to perfection",
          price: "¥9,500",
          duration: "120 min"
        },
        {
          title: "Natural Care",
          description: "Nourishing treatment focused on nail health and restoration",
          price: "¥5,500",
          duration: "45 min"
        },
        {
          title: "nail art",
          description: "Bespoke designs tailored to your vision and aesthetic",
          price: "¥8,500+",
          duration: "90+ min"
        },
        {
          title: "foot gel",
          description: "Durable and beautiful gel color for your toes, including foot bath and care",
          price: "¥7,500",
          duration: "75 min"
        }
      ],
      notice: "※All prices include tax.\n※Gel off and nail care are included in all courses.\n※If you need nail removal, please select 'Off included' when booking."
    },
    about: {
      title: "WHERE CRAFT\nMEETS CARE",
      p1: "At Nami Nails, we believe in the ritual of self-care. Each service is a moment of intentional beauty, where expert technique meets organic luxury.",
      p2: "Our approach is rooted in the philosophy that your nails deserve the same elevated attention as any wellness practice. We use only premium, sustainable products that nourish as they beautify.",
      p3: "Founded on principles of mindful beauty, Nami Nails offers a sanctuary where time slows down and every detail is considered."
    },
    booking: {
      title: "READY TO\nELEVATE?",
      subtitle: "Reserve your sanctuary moment",
      button: "Book Your Appointment",
      hours: "HOURS",
      location: "LOCATION",
      contact: "CONTACT",
      address: "123 Organic Lane\nDowntown District\nCA 90210",
      monFri: "Mon–Fri: 10am–7pm",
      sat: "Sat: 9am–6pm",
      sun: "Sun: Closed",
      phone: "(555) 123-4567"
    },
    location: {
      findUs: "Find Us",
      heading: "LOCATION",
      addressLabel: "Address",
      addressText: "123 Organic Lane, Downtown District\nTokyo, Japan 100-0005",
      hoursLabel: "Opening Hours",
      contactLabel: "Contact",
      phoneText: "(555) 123-4567",
      phoneLink: "tel:+15551234567",
      getDirections: "Get Directions →",
      accessNote: "5 minutes walk from Tokyo Station A2 Exit",
      monFri: "Monday – Friday",
      monFriTime: "10:00 am – 7:00 pm",
      sat: "Saturday",
      satTime: "9:00 am – 6:00 pm",
      sun: "Sunday",
      closed: "Closed"
    },
    footer: {
      description: "A boutique sanctuary for conscious nail artistry and mindful care.",
      links: "QUICK LINKS",
      social: "FOLLOW US",
      rights: "© 2024 NAMI NAILS. ALL RIGHTS RESERVED."
    },
    header: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      location: "Location",
      bookNow: "Book Now"
    },
    faq: {
      heading: "FAQ",
      list: [
        {
          q: "Is there parking available?",
          a: "Please use the nearby coin parking lots as we do not have dedicated parking."
        },
        {
          q: "Can I use credit cards?",
          a: "Yes, we accept all major credit cards and electronic payment methods."
        },
        {
          q: "Can I bring my children?",
          a: "Yes, children are welcome. Please let us know in advance so we can prepare."
        },
        {
          q: "Is same-day booking possible?",
          a: "Yes, depending on availability. Please check Hotpepper Beauty or call us for real-time status."
        },
        {
          q: "How long do gel nails typically last?",
          a: "Generally, gel nails last about 3 to 4 weeks depending on your daily routine. We recommend professional removal or maintenance at around 3 to 4 weeks to ensure the health of your natural nails."
        },
        {
          q: "Is it possible to get gel nails if my nails are thin or weak?",
          a: "Yes! We specialize in natural nail health. Our nail care specialists will evaluate your nail condition and select a gentle base gel (such as non-sanding gel) that minimizes stress and helps protect and strengthen your nails."
        }
      ]
    }
  },
  jp: {
    hero: {
      title: "NAMI NAILS",
      subtitle: "Elevated care for hands that tell your story",
    },
    services: {
      heading: "SERVICES",
      bookNow: "ご予約はこちら",
      list: [
        {
          title: "one color",
          description: "爪の形を整え、甘皮をケアするベーシックなコースです。清潔感のある指先に仕上げます。",
          price: "¥6,500",
          duration: "60分"
        },
        {
          title: "French nail",
          description: "王道でありながら洗練された印象を与えるフレンチネイル。指先をより美しく、長く見せます。",
          price: "¥7,500",
          duration: "75分"
        },
        {
          title: "Gel Extensions",
          description: "爪の長さを出し、強度を持たせるジェルエクステンション。自爪のような自然な仕上がりです。",
          price: "¥9,500",
          duration: "120分"
        },
        {
          title: "Natural Care",
          description: "自爪の健康を第一に考えた、保湿と栄養補給に特化したトリートメントです。",
          price: "¥5,500",
          duration: "45分"
        },
        {
          title: "nail art",
          description: "お客様のご要望に合わせたデザインを施します。繊細なニュアンスアートや、あなただけのこだわりを形にします。",
          price: "¥8,500+",
          duration: "90分〜"
        },
        {
          title: "foot gel",
          description: "フットバスと甘皮ケアが含まれた、持ちが良く艶やかなフットジェル。足元から美しさを整えます。",
          price: "¥7,500",
          duration: "75分"
        }
      ],
      notice: "※全てのメニューは税込表示となります。\n※全てのコースにジェルオフ・お爪のケア等も含まれております。\n※ ネイルオフがある際は、ご予約時に「オフあり」をご選択ください。"
    },
    about: {
      title: "Our Salon",
      p1: "「あなたの『好き』を、アートに宿して。」",
      p2: "決められたサンプルから選ぶだけでは物足りない。\n今の気分や、心惹かれる色、あなただけのこだわり。",
      p3: "繊細なニュアンスと、今の空気感を纏ったデザインで、\n鏡を見るよりも、指先を見るのが楽しみになる毎日を。\nまるで一つの作品を身に纏うような、高揚感のある体験をご提案します"
    },
    booking: {
      title: "READY TO\nELEVATE?",
      subtitle: "Reserve your sanctuary moment",
      button: "ご予約はこちら",
      hours: "営業時間",
      location: "アクセス",
      contact: "お問い合わせ",
      address: "123 オーガニック・レーン\nダウンタウン地区\nCA 90210",
      monFri: "月曜–金曜: 10am–7pm",
      sat: "土曜: 9am–6pm",
      sun: "日曜: 定休日",
      phone: "(555) 123-4567"
    },
    location: {
      findUs: "アクセス",
      heading: "LOCATION",
      addressLabel: "住所",
      addressText: "東京都千代田区丸の内1-1-1\n123 オーガニック・レーン",
      hoursLabel: "営業時間",
      contactLabel: "お問い合わせ",
      phoneText: "03-5555-1234",
      phoneLink: "tel:+81355551234",
      getDirections: "ルート案内 →",
      accessNote: "東京駅A2出口より徒歩５分",
      monFri: "Monday – Friday",
      monFriTime: "10:00 am – 7:00 pm",
      sat: "Saturday",
      satTime: "9:00 am – 6:00 pm",
      sun: "Sunday",
      closed: "Closed"
    },
    footer: {
      description: "A boutique sanctuary for conscious nail artistry and mindful care.",
      links: "QUICK LINKS",
      social: "FOLLOW US",
      rights: "© 2024 NAMI NAILS. ALL RIGHTS RESERVED."
    },
    header: {
      services: "Services",
      about: "About",
      gallery: "Gallery",
      location: "Location",
      bookNow: "予約する"
    },
    faq: {
      heading: "FAQ",
      list: [
        {
          q: "駐車場はありますか？",
          a: "専用駐車場はございませんので、近隣のコインパーキングをご利用ください。"
        },
        {
          q: "クレジットカードは使えますか？",
          a: "はい、各種クレジットカード、交通系IC、電子マネーがご利用いただけます。"
        },
        {
          q: "子供連れでも大丈夫ですか？",
          a: "はい、お子様連れでも大歓迎です。事前にお知らせいただければ幸いです。"
        },
        {
          q: "当日の予約は可能ですか？",
          a: "空き状況によりますので、ホットペッパービューティーまたはお電話にてご確認ください。"
        },
        {
          q: "ジェルの持ちはどのくらいですか？",
          a: "お客様のライフスタイルにもよりますが、一般的には3〜4週間程度です。自爪の健康を維持するため、3〜4週間での定期的なオフやメンテナンスを推奨しております。"
        },
        {
          q: "爪が薄い・弱いのですが施術は可能ですか？",
          a: "はい、可能です！当サロンでは自爪を削らない爪に優しいジェル（ノンサンディングジェルなど）を導入し、健康状態に合わせた丁寧な施術を行います。お気軽にご相談ください。"
        }
      ]
    }
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('jp');

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = translations[language];
    if (!result) return path;
    for (const key of keys) {
      if (result === null || typeof result !== 'object' || result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
