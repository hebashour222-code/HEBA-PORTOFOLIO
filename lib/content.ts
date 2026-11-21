export type Language = "ar" | "en";

export interface ProjectItem {
  id: string;
  slug: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  badge: { ar: string; en: string };
  clientOrOrg: { ar: string; en: string };
  status: "verified" | "pending_upload";
  summary: { ar: string; en: string };
  deliverables: { ar: string[]; en: string[] };
  description: { ar: string; en: string };
  pdfFile?: string;
  pdfTitle?: { ar: string; en: string };
  images?: string[];
  scopeNote?: { ar: string; en: string };
}

export const portfolioContent = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "عنّي",
      skills: "المهارات",
      projects: "المشاريع",
      services: "الخدمات",
      education: "التعليم والتدريب",
      contact: "تواصل معي",
      resume: "السيرة الذاتية",
      switchLang: "English",
      menu: "القائمة",
      close: "إغلاق",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "هبة عاشور إبراهيم",
      title: "أخصائية تسويق رقمي ومخططة استراتيجية",
      subtitle: "التسويق عالي الأداء، النمو، والتسويق متكامل المراحل (Full-Funnel) لقطاعات الـ B2B، الصيدلة، والتصنيع",
      description:
        "صيدلانية متخصصة في التسويق الرقمي وبناء الاستراتيجيات التسويقية لقطاعات الأعمال (B2B)، التصنيع الدوائي، والصناعات الهندسية. أدمج الدقة العلمية الصيدلانية مع قوة التخطيط الاستراتيجي وأدوات الذكاء الاصطناعي لتحويل الحلول المعقدة إلى رسائل واضحة ومؤثرة تخدم قنوات الشراء وتدعم نمو الأعمال.",
      viewWork: "استعراض الأعمال",
      contactMe: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية (PDF)",
      verifiedPill: "صيدلانية ومختصة تسويق رقمي معتمد",
      location: "القاهرة، مصر",
      currentOrg: "شركة المهندس | وكيل ضواغط الهواء B&D في مصر",
      industry: "التصنيع والصيدلة والتسويق للأعمال (B2B)",
    },
    about: {
      sectionBadge: "نبذة عنّي",
      title: "صيدلانية في عالم التسويق الرقمي والاستراتيجيات",
      paragraph1:
        "أعمل في مجال التسويق الرقمي كصيدلانية خريجة كلية الصيدلة بجامعة القاهرة. بنيت مساري المهني عند التقاطع الحيوي بين المعرفة الصيدلانية، البيئة الصناعية، واستراتيجيات التسويق الرقمي الحديثة.",
      paragraph2:
        "ينصب تركيزي على قطاعات الأعمال B2B، الصناعات الدوائية، والحلول الصناعية المعقدة. انطلاقاً من خلفيتي العلمية، أتعامل مع المنتجات والخدمات التقنية بدقة تحليلية تضمن فهم المتطلبات الفنية، وصياغة استراتيجيات محتوى وهوية تجارية تخاطب لجان الشراء المتعددة والجمهور المتخصص بوضوح وموثوقية.",
      paragraph3:
        "أركز على التخطيط الاستراتيجي، تسويق الأداء والنمو (Performance & Growth Marketing)، تحسين محركات البحث والإعلانات الممولة (SEO & SEM)، تحسين معدلات التحويل (CRO)، التسويق متكامل المراحل (Full-Funnel)، والتسويق المدعوم بالذكاء الاصطناعي (AI-Powered Marketing) لرفع كفاءة العمل وتقديم قيمة مستدامة.",
      brandGraphicTitle: "رسم الهوية الشخصية الموثقة",
      brandGraphicCaption: "الهوية الشخصية: ربط المعرفة بالحلول والتقنية بالتواصل عبر 4 ركائز: الصيدلة، التصنيع، التسويق، والذكاء الاصطناعي.",
      pillars: [
        {
          title: "الصيدلة (Pharmacy)",
          desc: "فهم عميق للتفاصيل والدقة في بيئات العمل الحساسة والمنظمة والقطاع الصحي والدوائي.",
        },
        {
          title: "التصنيع (Manufacturing)",
          desc: "التركيز على الموثوقية الصناعية، معايير الجودة، واستمرارية العمليات وخطوط الإنتاج.",
        },
        {
          title: "التسويق (Marketing)",
          desc: "تحويل الحلول الهندسية والطبية المعقدة إلى استراتيجيات ورسائل تجارية واضحة ومقنعة.",
        },
        {
          title: "الذكاء الاصطناعي (AI)",
          desc: "توظيف أدوات التكنولوجيا المتقدمة لتسريع تحليل السوق، تطوير المحتوى، واتخاذ قرارات تسويقية مدروسة.",
        },
      ],
    },
    skills: {
      sectionBadge: "المهارات والكفاءات",
      title: "مجالات الخبرة والكفاءات التخصصية",
      description: "مهارات تسويقية استراتيجية وتنفيذية موثقة ومبنية على الممارسة الحقيقية والدراسة، دون نسب وهمية.",
      categories: [
        {
          title: "استراتيجية التسويق والتموضع (Marketing Strategy & Positioning)",
          description: "صياغة استراتيجيات السوق، تحديد الفكرة الكبرى (Big Idea)، والرسائل المحورية (Core Messages)، وتموضع العلامة التجارية في الأسواق التنافسية.",
          skills: [
            "تطوير الاستراتيجيات التسويقية الشاملة",
            "تموضع العلامات التجارية (Brand Positioning)",
            "تحليل السوق والمنافسين (Market & Competitive Analysis)",
            "صياغة الرسائل المؤسسية والتنافسية (Core Messaging)",
            "تحديد الجمهور المستهدف وبناء شخصيات المشتري (Buyer Personas)",
          ],
        },
        {
          title: "تسويق الأداء والنمو (Performance & Growth Marketing)",
          description: "تخطيط مسارات النمو المبنية على البيانات، واستهداف الشرائح المؤهلة لتوليد فرص بيعية عالية القيمة.",
          skills: [
            "استراتيجيات توليد العملاء المحتملين (Lead Generation)",
            "تحليل مسارات التحويل ونقاط الاحتكاك",
            "تخطيط الحملات الرقمية متعددة القنوات",
            "إدارة ميزانيات الحملات وإشارات الجمهور",
            "مواءمة المبيعات والتسويق لقطاعات B2B",
          ],
        },
        {
          title: "SEO، SEM، CRO والتسويق متكامل المراحل (Full-Funnel)",
          description: "إدارة كافة مراحل قمع التسويق من الوعي والاهتمام حتى التقييم واتخاذ قرار الشراء.",
          skills: [
            "تحسين محركات البحث الأساسي والمحتوى المتوافق (SEO)",
            "استراتيجيات إعلانات محركات البحث والمنصات (SEM)",
            "تحسين معدلات التحويل وتجربة التصفح (CRO)",
            "هندسة قمع التسويق (Top, Middle, Bottom of Funnel)",
            "متابعة مسارات عروض الأسعار المؤهلة (RFQ Funnels)",
          ],
        },
        {
          title: "تسويق المحتوى وبناء العلامة التجارية (Content & Brand Marketing)",
          description: "كتابة وتطوير المحتوى التخصصي المعقد، وإنتاج المواد المرئية والمكتوبة لمنصات التواصل والأعمال.",
          skills: [
            "إعداد خطط وتقويمات المحتوى الشهرية (Content Calendars)",
            "كتابة النصوص التسويقية التخصصية (Copywriting & Storytelling)",
            "إدارة المحتوى لمنصة LinkedIn للشركات والمسؤولين",
            "تصميم وتجهيز الأصول البصرية والمطبوعات عبر Canva",
            "توثيق دراسات الحالة وأدلة الحلول الصناعية",
          ],
        },
        {
          title: "تسويق قطاعات B2B، الصيدلة والتصنيع (B2B, Pharma & Manufacturing)",
          description: "تخصص عميق في مخاطبة لجان الشراء المعقدة ومهندسي المصانع ومديري الإنتاج والمستشفيات.",
          skills: [
            "مخاطبة لجان الشراء متعددة الأطراف (Multi-stakeholder Decision Committees)",
            "فهم التطبيقات الصناعية والطبية (Industrial & Medical Solutions)",
            "التسويق لأنظمة الهواء المضغوط ومعدات المصانع",
            "التواصل في البيئات الصيدلانية والرعاية الصحية الحساسة",
            "ترجمة المصطلحات الفنية والهندسية إلى قيمة تجارية ملموسة",
          ],
        },
        {
          title: "التسويق بالذكاء الاصطناعي (AI-Powered Marketing)",
          description: "دمج أدوات الذكاء الاصطناعي الحديثة في أبحاث السوق، صياغة الاستراتيجيات، وأتمتة مسارات العمل.",
          skills: [
            "استخدام الذكاء الاصطناعي في تحليل البيانات والجمهور (AI Research)",
            "صياغة وتوليد أفكار المحتوى الإبداعي والاستراتيجي (Prompt Engineering)",
            "شهادة معتمدة في محو الأمية بالذكاء الاصطناعي (MCIT & Microsoft AI Literacy)",
            "تحسين سرعة ودقة إنتاج الأصول التسويقية",
            "أتمتة تقارير المحتوى وتحسين خطط النشر",
          ],
        },
      ],
    },
    projects: {
      sectionBadge: "نماذج الأعمال ودراسات الحالة",
      title: "أعمال استراتيجية ومواد تسويقية حقيقية",
      description:
        "استعراض لعينات العمل الفعلية الموثقة بملفات المشروع. تقتصر التفاصيل على ما تثبته الوثائق الرسمية دون ادعاء نتائج أو أرقام وهمية.",
      viewPdf: "فتح الوثيقة الاستراتيجية (PDF)",
      viewGallery: "معاينة منشورات الحملة",
      assetPendingBadge: "ملفات العينة بانتظار الرفع",
      verifiedBadge: "ملفات موثقة بالمشروع",
      projectsList: [
        {
          id: "bnd-strategy",
          slug: "bnd-air-compressor-egypt",
          title: {
            ar: "استراتيجية التسويق المتكاملة — B&D Air Compressors Egypt / شركة المهندس",
            en: "Complete Marketing Strategy — B&D Air Compressors Egypt / El Mohandes Company",
          },
          category: {
            ar: "استراتيجية B2B وتسويق صناعي",
            en: "B2B Industrial Strategy & Marketing",
          },
          badge: {
            ar: "وثيقة استراتيجية كاملة (102 صفحة) + 7 منشورات",
            en: "Complete Strategy Document (102 Pages) + 7 Visual Posts",
          },
          clientOrOrg: {
            ar: "شركة المهندس (الوكيل الحصري لشركة B&D العالمية في مصر)",
            en: "El Mohandes Company (Exclusive Agent of B&D Global in Egypt)",
          },
          status: "verified",
          summary: {
            ar: "إعداد استراتيجية تسويقية تنفيذية شاملة لعام 2026-2027 لتحويل تموضع شركة المهندس من مجرد مورد لمعدات منفردة إلى شريك استراتيجي لحلول الهواء المضغوط الصناعية والطبية في مصر، مع مواد نشر بصرية موجهة للقطاعات الإنتاجية.",
            en: "Development of a comprehensive 2026-2027 marketing strategy repositioning El Mohandes Company from a single equipment vendor to a strategic compressed air solutions partner for industrial and medical sectors in Egypt, backed by visual campaign assets.",
          },
          deliverables: {
            ar: [
              "وثيقة الخطة الاستراتيجية الكاملة 2026-2027 (102 صفحة)",
              "تحليل الجمهور ولجان الشراء متعددة الأطراف بالمصانع",
              "استراتيجية تحويل التموضع نحو شريك حلول موثوق",
              "تصميم ونشر سلسلة منشورات بصرية (7 نماذج) بشعار 'صنع ليتحمل أصعب التحديات' و'كمبروسر B&D قلب مصنعك'",
              "ربط المحتوى الهندسي والموثوقية بمسار عروض الأسعار المؤهلة (RFQs)",
            ],
            en: [
              "Complete 2026-2027 strategic plan document (102 pages)",
              "Multi-stakeholder procurement committee & factory audience analysis",
              "Positioning strategy: shifting to a trusted industrial solutions partner",
              "Visual campaign assets (7 posts) featuring core messages like 'Engineered for Tough Challenges'",
              "Aligning engineering reliability content with qualified RFQ generation funnels",
            ],
          },
          description: {
            ar: "تركز الدراسة على قطاع المصانع ذات الاعتماد الحرج على الهواء المضغوط (مثل الصناعات الدوائية، الغذائية، والهندسية). اشتملت الوثيقة على تدقيق تموضع السوق، مقارنة تحليلية مع المنافسين، خريطة شخصيات المشتري، ومنظومة محتوى تبرز الصيانة وقطع الغيار وجودة الهواء.",
            en: "The strategy focuses on manufacturing facilities critically dependent on compressed air (pharma, food, heavy industrial). It encompasses market positioning audits, competitor landscape analysis, buyer persona mapping, and a content architecture highlighting reliability, air treatment, and genuine service.",
          },
          pdfFile: "/assets/projects/bnd/BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027.pdf",
          pdfTitle: {
            ar: "BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027_UPDATED.pdf (102 صفحة)",
            en: "BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027_UPDATED.pdf (102 pages)",
          },
          images: [
            "/assets/projects/bnd/bnd-post-1.jpg",
            "/assets/projects/bnd/bnd-post-2.jpg",
            "/assets/projects/bnd/bnd-post-3.jpg",
            "/assets/projects/bnd/bnd-post-4.jpg",
            "/assets/projects/bnd/bnd-post-5.jpg",
            "/assets/projects/bnd/bnd-post-6.jpg",
            "/assets/projects/bnd/bnd-post-7.jpg",
          ],
        },
        {
          id: "ghost-el-mohandes",
          slug: "ghost-el-mohandes",
          title: {
            ar: "استراتيجية المحتوى الشهرية ونماذج المنشورات — Ghost El Mohandes",
            en: "30-Day Content Strategy & Post Assets — Ghost El Mohandes",
          },
          category: {
            ar: "استراتيجية محتوى وحملات رقمية",
            en: "Content Strategy & Digital Campaigns",
          },
          badge: {
            ar: "تقرير استراتيجي تنفيذي (14 صفحة) + منشورات بصرية",
            en: "Executive Strategic Report (14 Pages) + Visual Posts",
          },
          clientOrOrg: {
            ar: "Ghost El Mohandes (حوامل الشاشات والإلكترونيات - بضمان المهندس)",
            en: "Ghost El Mohandes (Screen Mounts & AV Accessories - Under El Mohandes Warranty)",
          },
          status: "verified",
          summary: {
            ar: "إعداد تقرير تنفيذي لاستراتيجية محتوى لمدة 30 يوماً مبنية على الفكرة الكبرى (Big Idea: 'بيتك أمانة') والرسالة المحورية (Core Message: 'الفرق يتفرّق')، وتخطيط شخصيات المشترين، مع تصاميم ونماذج منشورات جاهزة للنشر.",
            en: "Formulation of an executive 30-day content strategy anchored by the Big Idea ('بيتك أمانة' / Your Home is a Trust) and Core Message ('الفرق يتفرّق'), persona mapping, alongside ready-to-publish product visual posts.",
          },
          deliverables: {
            ar: [
              "تقرير استراتيجي تنفيذي للمرحلة الثانية (14 صفحة) لشهر أغسطس 2026",
              "صياغة الفكرة الكبرى للحملة وقواعد تطبيقها على كافة التنسيقات",
              "خريطة المدخلات الاستراتيجية (Strategic Input Map) وتصنيف الشرائح",
              "تصاميم بصرية لمنتجات مثل حوامل الشاشات GH06 وكابلات التوصيل عالي الدقة",
              "مصفوفة 30 يوماً من المحتوى المربوط بأهداف الثقة وحل مشكلات العميل",
            ],
            en: [
              "Executive Phase 2 Content Strategy Report (14 pages, August 2026)",
              "Big Campaign Idea formulation and cross-channel execution rules",
              "Strategic Input Map classifying target segments & buyer personas",
              "Visual designs for TV brackets (GH06) and AV accessories",
              "30-day content deployment matrix linked to trust-building and customer pain points",
            ],
          },
          description: {
            ar: "يغطي التقرير استهداف الأسر، أصحاب المحلات، والشركات الصغيرة من خلال محتوى مخصص لكل شريحة يبرز جودة الخامات وأمان الأجهزة المنزلية، مدعوماً بضمان المهندس.",
            en: "The strategy addresses residential households, retail store owners, and small businesses through segment-specific content accentuating build quality, hardware safety, and reliable warranty backing.",
          },
          pdfFile: "/assets/projects/ghost-el-mohandes/Ghost_El_Mohandes_30_Day_Content_Strategy.pdf",
          pdfTitle: {
            ar: "30-Day Content Strategy — Ghost El Mohandes (14 صفحة)",
            en: "30-Day Content Strategy — Ghost El Mohandes (14 pages)",
          },
          images: [
            "/assets/projects/ghost-el-mohandes/ghost-post-1.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-2.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-3.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-4.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-5.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-6.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-7.jpg",
          ],
        },
        {
          id: "go-align",
          slug: "go-align",
          title: {
            ar: "حملة منشورات التواصل الاجتماعي — Go Align",
            en: "Social Media Post Campaign — Go Align",
          },
          category: {
            ar: "تسويق عبر منصات التواصل الاجتماعي (Social Media Marketing)",
            en: "Social Media Marketing",
          },
          badge: {
            ar: "نطاق عمل: 5 منشورات تواصل اجتماعي",
            en: "Scope: 5 Social Media Posts",
          },
          clientOrOrg: {
            ar: "Go Align",
            en: "Go Align",
          },
          status: "pending_upload",
          summary: {
            ar: "نطاق عمل مخصص لتطوير خمسة منشورات لمنصات التواصل الاجتماعي للعلامة التجارية Go Align، يركز على صياغة الرسائل ومواءمة المحتوى مع أهداف التفاعل والوعي.",
            en: "Dedicated project scope covering the development of five social media posts for Go Align, focused on messaging alignment and engaging social communication.",
          },
          deliverables: {
            ar: [
              "صياغة نصوص خمسة منشورات لمنصات التواصل",
              "تحديد التوجيه الفني والرسائل المفتاحية لكل منشور",
              "مواءمة نبرة الصوت مع هوية العلامة التجارية",
            ],
            en: [
              "Copywriting for five targeted social media posts",
              "Creative direction and key takeaways per post",
              "Tone of voice alignment with brand identity",
            ],
          },
          description: {
            ar: "يتضمن نطاق العمل إعداد 5 منشورات تواصل اجتماعي للعلامة التجارية. نلتزم بعرض الحقائق الموثقة فقط، وملفات التصاميم والمنشورات النهائية قيد الرفع في مجلد الأصول.",
            en: "Demonstrated scope consists of 5 social media posts for the brand. In strict adherence to verified records, final visual assets are noted as pending upload in project assets.",
          },
          scopeNote: {
            ar: "تنويه الموثوقية: تفاصيل العمل مقصورة بدقة على النطاق المحدد (5 منشورات تواصل). ملفات التصاميم النهائية قيد الإضافة لأصول المعرض.",
            en: "Integrity Notice: Work details strictly reflect the defined scope (5 social media posts). Final post assets are pending upload.",
          },
        },
        {
          id: "zirex",
          slug: "zirex",
          title: {
            ar: "تخطيط حملات الرسائل النصية والإشعارات وتحديد الجمهور — ZIREX",
            en: "Audience/Persona & SMS/Push Campaign Planning — ZIREX",
          },
          category: {
            ar: "تخطيط الحملات المباشرة وإشراك الجمهور",
            en: "Audience Strategy & Direct Campaign Planning",
          },
          badge: {
            ar: "نطاق عمل: تحديد الجمهور وحملات SMS & Push",
            en: "Scope: Audience Personas & SMS/Push Planning",
          },
          clientOrOrg: {
            ar: "ZIREX",
            en: "ZIREX",
          },
          status: "pending_upload",
          summary: {
            ar: "تخطيط حملات الرسائل القصيرة (SMS) وإشعارات الهاتف (Push Notifications) مع تحديد شرائح الجمهور المستهدف وبناء شخصيات المشتري لتحقيق تفاعل مباشر ومعدلات استجابة مدروسة.",
            en: "Planning of direct SMS and push notification campaigns coupled with audience segmentation and buyer persona mapping for focused direct response.",
          },
          deliverables: {
            ar: [
              "تحديد الشرائح المستهدفة وتوصيف شخصيات الجمهور (Audience & Personas)",
              "صياغة نصوص ورسائل حملات الرسائل النصية القصيرة (SMS Copy)",
              "تخطيط إشعارات الدفع (Push Notifications) وجدولة إرسالها",
              "مواءمة الرسائل مع مراحل اهتمام العميل",
            ],
            en: [
              "Target segmentation and audience persona profiling",
              "Concise direct-response copywriting for SMS campaigns",
              "Push notification messaging sequences and triggers",
              "Funnel-aligned user messaging for direct action",
            ],
          },
          description: {
            ar: "يركز هذا العمل على صياغة رسائل قصيرة مباشرة وعالية التحويل مع رسم شرائح الجمهور المناسبة. تم توثيق النطاق طبقاً للتكليف الفعلي وملفات العينات بانتظار الإدراج في مجلد الأصول.",
            en: "This scope centers on crafting high-intent direct response messages and precise audience segmentation. The work is described strictly within the confirmed scope while sample files remain pending upload.",
          },
          scopeNote: {
            ar: "تنويه الموثوقية: العمل يشمل تخطيط شخصيات الجمهور وحملات SMS/Push فقط. لا توجد نتائج أو أرقام مختلقة؛ ملفات التخطيط قيد الرفع في مجلد الأصول.",
            en: "Integrity Notice: Scope covers persona development and SMS/push planning only. No fabricated metrics are claimed; planning files are pending asset upload.",
          },
        },
      ],
    },
    services: {
      sectionBadge: "مجالات العمل والخدمات",
      title: "حلول تسويقية متخصصة قائمة على الخبرة العملية",
      description:
        "خدمات استشارية وتنفيذية مبنية بدقة على الكفاءات المثبتة وخبرة قطاعات الـ B2B، التصنيع، والصيدلة، دون وعود غير واقعية أو أرقام مختلقة.",
      items: [
        {
          title: "التخطيط الاستراتيجي وتموضع العلامات التجارية (Strategic Marketing)",
          description:
            "تطوير استراتيجيات تسويقية متكاملة تحدد تموضع الشركة التنافسي، وتبني 'الفكرة الكبرى' (Big Idea) والرسالة المحورية التي تربط الحلول التقنية باحتياجات السوق الحقيقية.",
          features: [
            "بناء خطط التسويق التنفيذية الشاملة لقطاعات B2B والتصنيع",
            "إجراء تحليلات السوق ودراسة سلوك لجان الشراء المتعددة",
            "صياغة خريطة شخصيات المشتري (Persona Mapping)",
          ],
        },
        {
          title: "تسويق المحتوى التخصصي والـ B2B (Specialized B2B Content)",
          description:
            "تحويل المنتجات الصناعية والهندسية والطبية المعقدة إلى محتوى واضح، موثوق، وجذاب يخدم قنوات اتخاذ القرار ويسهل على العملاء تقييم العروض الفنية.",
          features: [
            "إعداد خطط المحتوى الشهرية والتقويمات التحريرية",
            "صياغة نصوص متخصصة ومقالات تعريفية هندسية وطبية",
            "إدارة وتطوير التواجد المؤسسي على منصة LinkedIn",
          ],
        },
        {
          title: "التسويق متكامل المراحل وتحسين التحويل (Full-Funnel & CRO)",
          description:
            "تصميم مسارات تسويقية تقود العميل من مرحلة الوعي الأولي عبر المحتوى التثقيفي، وصولاً إلى مرحلة التقييم الفني وطلب عروض الأسعار المؤهلة (RFQs).",
          features: [
            "هندسة مسارات الاستحواذ والتأهيل (Lead Qualification)",
            "تحسين معدلات التحويل وصفحات الهبوط",
            "متابعة إشارات الاهتمام ومواءمة جهود التسويق مع المبيعات",
          ],
        },
        {
          title: "سير العمل التسويقي بالذكاء الاصطناعي (AI-Powered Marketing)",
          description:
            "تطبيق الأدوات المدعومة بالذكاء الاصطناعي لرفع كفاءة أبحاث السوق، وتوليد الأفكار، وتطوير أصول المحتوى المتنوعة بما يسرع وتيرة الإنجاز ويحافظ على دقة المخرجات.",
          features: [
            "أبحاث السوق والجمهور باستخدام نماذج الذكاء الاصطناعي",
            "هندسة الأوامر (Prompt Engineering) لإنتاج المحتوى الاستراتيجي",
            "معرفة موثقة بشهادة محو الأمية بالذكاء الاصطناعي من MCIT ومايكروسوفت",
          ],
        },
      ],
    },
    education: {
      sectionBadge: "التعليم والتدريب والشهادات",
      title: "خلفية أكاديمية وتطوير مهني موثق",
      description: "سجل المؤهلات العلمية والشهادات الرسمية المؤكدة بالوثائق المرفقة.",
      degrees: [
        {
          title: "بكالوريوس الصيدلة",
          institution: "كلية الصيدلة — جامعة القاهرة",
          period: "أغسطس 2010 – يناير 2015",
          type: "مؤهل جامعي معتمد",
          description:
            "دراسة علمية متعمقة في العلوم الصيدلانية، علم الأدوية، مراقبة الجودة، والبيئات المنظمة. تشكل الأساس المتين لفهم القطاع الدوائي، وتدقيق التفاصيل الفنية، والتواصل مع المجتمع الطبي والصناعي.",
        },
        {
          title: "برنامج أخصائي التسويق الرقمي (Digital Marketing Specialist)",
          institution: "مبادرة مصر الرقمية (DEPI - Digital Egypt Pioneers Initiative)",
          period: "برنامج تدريبي تخصصي",
          type: "برنامج تدريب مهني متخصص",
          statusNote:
            "مسار تدريبي تخصصي في مهارات واستراتيجيات التسويق الرقمي، محركات البحث، الحملات الرقمية، وتحليل الأداء.",
          noteBadge: "مسار تدريبي معتمد",
        },
      ],
      certTitle: "الشهادات والاعتمادات المؤكدة بوثائق",
      certificate: {
        title: "شهادة إتمام: محو الأمية بالذكاء الاصطناعي (AI Literacy)",
        issuer: "وزارة الاتصالات وتكنولوجيا المعلومات (MCIT) بالتعاون مع Microsoft و Fast Lane",
        date: "يونيو 2026",
        recipient: "Heba Ashour Ibrahim Elsayed",
        signatories: [
          "د. هدى بركة — مستشار وزير الاتصالات وتكنولوجيا المعلومات لتنمية المهارات التكنولوجية",
          "د. محمد قاسم — مدير عام مايكروسوفت مصر",
        ],
        image: "/assets/certificates/ai-literacy-mcit-microsoft.jpeg",
        verifiedText: "شهادة معتمدة موثقة في ملفات الأصول",
      },
    },
    contact: {
      sectionBadge: "التواصل المهني",
      title: "لنبنِ شراكة عمل قائمة على القيمة",
      description:
        "يسعدني التواصل لمناقشة فرص التعاون في استراتيجيات التسويق لقطاعات الـ B2B، التصنيع، والرعاية الصحية، ومشاريع النمو الرقمي.",
      emailLabel: "البريد الإلكتروني المباشر",
      emailValue: "Hebashour222@gmail.com",
      linkedInLabel: "الملف الشخصي على LinkedIn",
      linkedInUrl: "https://www.linkedin.com/in/heba-ashour-d/",
      linkedInText: "linkedin.com/in/heba-ashour-d",
      locationLabel: "الموقع الجغرافي",
      locationValue: "القاهرة، جمهورية مصر العربية",
      copyEmail: "نسخ البريد الإلكتروني",
      copied: "تم النسخ بنجاح!",
      sendEmail: "إرسال رسالة عبر البريد",
      openLinkedIn: "زيارة الملف على LinkedIn",
      resumeDownloadCardTitle: "السيرة الذاتية المهنية (CV)",
      resumeDownloadCardDesc: "نسخة محدثة من السيرة الذاتية الموثقة تتضمن الخبرة العملية والمؤهلات الأكاديمية.",
      downloadResume: "تحميل السيرة الذاتية (PDF)",
      transparencyNote:
        "ملاحظة الموثوقية: يتم التواصل مباشرة عبر البريد الإلكتروني الرسمي أو منصة LinkedIn دون استخدام نماذج اتصال غير مؤكدة أو طلب أرقام هواتف خاصة.",
    },
    footer: {
      tagline: "هبة عاشور إبراهيم — أخصائية تسويق رقمي ومخططة استراتيجية لقطاعات الـ B2B، الصيدلة، والتصنيع.",
      rights: "جميع الحقوق محفوظة © 2026 هبة عاشور إبراهيم.",
      builtWith: "تم التطوير بتقنيات Next.js و TypeScript و Tailwind CSS مع الالتزام بالمعلومات الموثقة.",
      backToTop: "العودة للأعلى",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      services: "Services",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
      switchLang: "العربية",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Heba Ashour Ibrahim",
      title: "Digital Marketing Specialist & Marketing Strategist",
      subtitle: "Performance, Growth & Full-Funnel Marketing for B2B, Pharma & Manufacturing",
      description:
        "Pharmacist and digital marketing strategist specializing in B2B industries, pharmaceutical manufacturing, and engineering solutions. I combine pharmaceutical rigor and technical understanding with full-funnel strategy and AI-driven marketing workflows to turn complex capabilities into clear, high-intent messages that drive qualified business opportunities.",
      viewWork: "View My Work",
      contactMe: "Contact Me",
      downloadCv: "Download Resume (PDF)",
      verifiedPill: "Pharmacist & Certified Digital Marketing Specialist",
      location: "Cairo, Egypt",
      currentOrg: "El Mohandes Company | B&D Air Compressors Egypt",
      industry: "Pharmaceutical Manufacturing, Industrial & B2B Marketing",
    },
    about: {
      sectionBadge: "About Me",
      title: "A Pharmacist in Digital Marketing & Strategic Positioning",
      paragraph1:
        "I am a licensed pharmacist graduated from the Faculty of Pharmacy, Cairo University, working in digital marketing and marketing strategy. My professional journey thrives at the intersection of healthcare knowledge, industrial operations, and modern digital marketing.",
      paragraph2:
        "My work centers on B2B sectors, pharmaceutical manufacturing, and technical industrial solutions. Leveraging my scientific background, I approach complex technical products with precision—interpreting engineering and medical requirements to design marketing strategies, content architectures, and brand positioning that speak with authority to multi-stakeholder procurement teams and specialized decision-makers.",
      paragraph3:
        "My areas of focus include marketing strategy, performance and growth marketing, search engine optimization and marketing (SEO & SEM), conversion rate optimization (CRO), full-funnel marketing architectures, and AI-powered marketing workflows that increase execution velocity while upholding message authenticity.",
      brandGraphicTitle: "Verified Personal Branding Blueprint",
      brandGraphicCaption: "Personal Branding: Bridging knowledge with solutions and technology with communication across 4 pillars: Pharmacy, Manufacturing, Marketing, and AI.",
      pillars: [
        {
          title: "Pharmacy",
          desc: "Rigorous attention to detail and scientific precision within heavily regulated, compliance-driven healthcare environments.",
        },
        {
          title: "Manufacturing",
          desc: "Focus on industrial reliability, operational uptime, quality assurance, and continuous factory workflows.",
        },
        {
          title: "Marketing",
          desc: "Translating complex engineering and medical solutions into crystal-clear, value-driven commercial messaging.",
        },
        {
          title: "AI",
          desc: "Smart utilization of cutting-edge technology for market research, workflow acceleration, and high-quality decision making.",
        },
      ],
    },
    skills: {
      sectionBadge: "Core Competencies",
      title: "Strategic & Operational Marketing Expertise",
      description: "Demonstrated skills grounded in actual industry practice and verified project deliverables—with no arbitrary percentage bars.",
      categories: [
        {
          title: "Marketing Strategy & Positioning",
          description: "Market strategy formulation, Big Idea conception, Core Message development, and competitive differentiation.",
          skills: [
            "Comprehensive B2B Marketing Strategy Formulation",
            "Brand Positioning & Differentiation Strategy",
            "Market & Competitor Landscape Research",
            "Core Messaging & Strategic Value Propositions",
            "Buyer Persona Mapping & Decision Criteria Analysis",
          ],
        },
        {
          title: "Performance & Growth Marketing",
          description: "Data-informed growth strategies tailored for high-consideration B2B procurement cycles.",
          skills: [
            "B2B Lead Generation & Account Targeting",
            "Funnel Conversion & Drop-off Friction Analysis",
            "Multi-Channel Campaign Architecture",
            "Campaign Budget Allocation & Audience Signals",
            "Sales & Marketing Alignment for Technical Accounts",
          ],
        },
        {
          title: "SEO, SEM, CRO & Full-Funnel Marketing",
          description: "Orchestrating every stage of the buyer journey from initial awareness to qualified quote requests.",
          skills: [
            "Foundational & Content-Driven SEO",
            "High-Intent Search Engine Marketing (SEM)",
            "Conversion Rate Optimization (CRO) & Journey Mapping",
            "Full-Funnel Funnel Engineering (ToFu, MoFu, BoFu)",
            "Qualified RFQ (Request for Quote) Funnel Optimization",
          ],
        },
        {
          title: "Content & Brand Marketing",
          description: "Developing specialized, technical B2B content assets and maintaining consistent brand voice across platforms.",
          skills: [
            "Editorial Calendars & 30-Day Content Matrix Planning",
            "B2B Technical Copywriting & Narrative Crafting",
            "LinkedIn Corporate & Executive Thought Leadership",
            "Visual Asset Development & Design via Canva",
            "Industrial Case Studies & Solution Guides",
          ],
        },
        {
          title: "B2B, Pharmaceutical & Manufacturing Marketing",
          description: "Domain-specific expertise addressing procurement engineers, plant managers, and healthcare operators.",
          skills: [
            "Multi-Stakeholder Buying Committee Engagement",
            "Industrial & Medical Compressed Air Solutions",
            "Pharmaceutical & Healthcare Communication Standards",
            "Plant Reliability & Equipment Maintenance Positioning",
            "Translating Technical Specs into Clear Business Value",
          ],
        },
        {
          title: "AI-Powered Marketing",
          description: "Embedding artificial intelligence into research, strategic drafting, and asset production workflows.",
          skills: [
            "AI-Assisted Audience & Industry Market Research",
            "Strategic Prompt Engineering for Content Ideation",
            "Certified in AI Literacy (MCIT & Microsoft Official Credential)",
            "Workflow Acceleration & Structured Content Systems",
            "Automated Social Matrix & Campaign Reporting",
          ],
        },
      ],
    },
    projects: {
      sectionBadge: "Case Studies & Work Samples",
      title: "Documented Marketing Deliverables & Strategies",
      description:
        "Real work samples supported by project files. Details strictly reflect confirmed assets without invented client feedback, dates, or performance figures.",
      viewPdf: "View Strategy Document (PDF)",
      viewGallery: "Browse Campaign Post Visuals",
      assetPendingBadge: "Assets Pending Upload",
      verifiedBadge: "Verified Project Assets",
      projectsList: [
        {
          id: "bnd-strategy",
          slug: "bnd-air-compressor-egypt",
          title: {
            ar: "استراتيجية التسويق المتكاملة — B&D Air Compressors Egypt / شركة المهندس",
            en: "Complete Marketing Strategy — B&D Air Compressors Egypt / El Mohandes Company",
          },
          category: {
            ar: "استراتيجية B2B وتسويق صناعي",
            en: "B2B Industrial Strategy & Marketing",
          },
          badge: {
            ar: "وثيقة استراتيجية كاملة (102 صفحة) + 7 منشورات",
            en: "Complete Strategy Document (102 Pages) + 7 Visual Posts",
          },
          clientOrOrg: {
            ar: "شركة المهندس (الوكيل الحصري لشركة B&D العالمية في مصر)",
            en: "El Mohandes Company (Exclusive Agent of B&D Global in Egypt)",
          },
          status: "verified",
          summary: {
            ar: "إعداد استراتيجية تسويقية تنفيذية شاملة لعام 2026-2027 لتحويل تموضع شركة المهندس من مجرد مورد لمعدات منفردة إلى شريك استراتيجي لحلول الهواء المضغوط الصناعية والطبية في مصر.",
            en: "Development of a comprehensive 2026-2027 marketing strategy repositioning El Mohandes Company from a standalone equipment vendor to a strategic compressed air solutions partner across industrial and medical sectors in Egypt.",
          },
          deliverables: {
            ar: [
              "وثيقة الخطة الاستراتيجية الكاملة 2026-2027 (102 صفحة)",
              "تحليل الجمهور ولجان الشراء متعددة الأطراف بالمصانع",
              "استراتيجية تحويل التموضع نحو شريك حلول موثوق",
              "تصميم ونشر سلسلة منشورات بصرية (7 نماذج) بشعار 'صنع ليتحمل أصعب التحديات' و'كمبروسر B&D قلب مصنعك'",
              "ربط المحتوى الهندسي والموثوقية بمسار عروض الأسعار المؤهلة (RFQs)",
            ],
            en: [
              "Complete 2026-2027 strategic plan document (102 pages)",
              "Multi-stakeholder procurement committee & factory audience analysis",
              "Positioning strategy: shifting to a trusted industrial solutions partner",
              "Visual campaign assets (7 posts) featuring core messages like 'Engineered for Tough Challenges'",
              "Aligning engineering reliability content with qualified RFQ generation funnels",
            ],
          },
          description: {
            ar: "تركز الدراسة على قطاع المصانع ذات الاعتماد الحرج على الهواء المضغوط. اشتملت الوثيقة على تدقيق تموضع السوق، مقارنة تحليلية مع المنافسين، خريطة شخصيات المشتري، ومنظومة محتوى تبرز الصيانة وقطع الغيار وجودة الهواء.",
            en: "The strategy focuses on manufacturing facilities critically dependent on compressed air (pharma, food, heavy industrial). It encompasses market positioning audits, competitor landscape analysis, buyer persona mapping, and a content architecture highlighting reliability, air treatment, and genuine service.",
          },
          pdfFile: "/assets/projects/bnd/BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027.pdf",
          pdfTitle: {
            ar: "BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027_UPDATED.pdf (102 صفحة)",
            en: "BD_Air_Compressor_Egypt_Complete_Strategy_2026_2027_UPDATED.pdf (102 pages)",
          },
          images: [
            "/assets/projects/bnd/bnd-post-1.jpg",
            "/assets/projects/bnd/bnd-post-2.jpg",
            "/assets/projects/bnd/bnd-post-3.jpg",
            "/assets/projects/bnd/bnd-post-4.jpg",
            "/assets/projects/bnd/bnd-post-5.jpg",
            "/assets/projects/bnd/bnd-post-6.jpg",
            "/assets/projects/bnd/bnd-post-7.jpg",
          ],
        },
        {
          id: "ghost-el-mohandes",
          slug: "ghost-el-mohandes",
          title: {
            ar: "استراتيجية المحتوى الشهرية ونماذج المنشورات — Ghost El Mohandes",
            en: "30-Day Content Strategy & Post Assets — Ghost El Mohandes",
          },
          category: {
            ar: "استراتيجية محتوى وحملات رقمية",
            en: "Content Strategy & Digital Campaigns",
          },
          badge: {
            ar: "تقرير استراتيجي تنفيذي (14 صفحة) + منشورات بصرية",
            en: "Executive Strategic Report (14 Pages) + Visual Posts",
          },
          clientOrOrg: {
            ar: "Ghost El Mohandes (حوامل الشاشات والإلكترونيات - بضمان المهندس)",
            en: "Ghost El Mohandes (Screen Mounts & AV Accessories - Under El Mohandes Warranty)",
          },
          status: "verified",
          summary: {
            ar: "إعداد تقرير تنفيذي لاستراتيجية محتوى لمدة 30 يوماً مبنية على الفكرة الكبرى والرسالة المحورية وتخطيط شخصيات المشترين مع تصاميم ونماذج منشورات جاهزة للنشر.",
            en: "Formulation of an executive 30-day content strategy anchored by the Big Idea ('بيتك أمانة' / Your Home is a Trust) and Core Message ('الفرق يتفرّق'), persona mapping, alongside ready-to-publish product visual posts.",
          },
          deliverables: {
            ar: [
              "تقرير استراتيجي تنفيذي للمرحلة الثانية (14 صفحة) لشهر أغسطس 2026",
              "صياغة الفكرة الكبرى للحملة وقواعد تطبيقها على كافة التنسيقات",
              "خريطة المدخلات الاستراتيجية (Strategic Input Map) وتصنيف الشرائح",
              "تصاميم بصرية لمنتجات مثل حوامل الشاشات GH06 وكابلات التوصيل عالي الدقة",
              "مصفوفة 30 يوماً من المحتوى المربوط بأهداف الثقة وحل مشكلات العميل",
            ],
            en: [
              "Executive Phase 2 Content Strategy Report (14 pages, August 2026)",
              "Big Campaign Idea formulation and cross-channel execution rules",
              "Strategic Input Map classifying target segments & buyer personas",
              "Visual designs for TV brackets (GH06) and AV accessories",
              "30-day content deployment matrix linked to trust-building and customer pain points",
            ],
          },
          description: {
            ar: "يغطي التقرير استهداف الأسر، أصحاب المحلات، والشركات الصغيرة من خلال محتوى مخصص لكل شريحة يبرز جودة الخامات وأمان الأجهزة المنزلية، مدعوماً بضمان المهندس.",
            en: "The strategy addresses residential households, retail store owners, and small businesses through segment-specific content accentuating build quality, hardware safety, and reliable warranty backing.",
          },
          pdfFile: "/assets/projects/ghost-el-mohandes/Ghost_El_Mohandes_30_Day_Content_Strategy.pdf",
          pdfTitle: {
            ar: "30-Day Content Strategy — Ghost El Mohandes (14 صفحة)",
            en: "30-Day Content Strategy — Ghost El Mohandes (14 pages)",
          },
          images: [
            "/assets/projects/ghost-el-mohandes/ghost-post-1.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-2.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-3.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-4.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-5.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-6.jpg",
            "/assets/projects/ghost-el-mohandes/ghost-post-7.jpg",
          ],
        },
        {
          id: "go-align",
          slug: "go-align",
          title: {
            ar: "حملة منشورات التواصل الاجتماعي — Go Align",
            en: "Social Media Post Campaign — Go Align",
          },
          category: {
            ar: "تسويق عبر منصات التواصل الاجتماعي (Social Media Marketing)",
            en: "Social Media Marketing",
          },
          badge: {
            ar: "نطاق عمل: 5 منشورات تواصل اجتماعي",
            en: "Scope: 5 Social Media Posts",
          },
          clientOrOrg: {
            ar: "Go Align",
            en: "Go Align",
          },
          status: "pending_upload",
          summary: {
            ar: "نطاق عمل مخصص لتطوير خمسة منشورات لمنصات التواصل الاجتماعي للعلامة التجارية Go Align، يركز على صياغة الرسائل ومواءمة المحتوى مع أهداف التفاعل والوعي.",
            en: "Dedicated project scope covering the development of five social media posts for Go Align, focused on messaging alignment and engaging social communication.",
          },
          deliverables: {
            ar: [
              "صياغة نصوص خمسة منشورات لمنصات التواصل",
              "تحديد التوجيه الفني والرسائل المفتاحية لكل منشور",
              "مواءمة نبرة الصوت مع هوية العلامة التجارية",
            ],
            en: [
              "Copywriting for five targeted social media posts",
              "Creative direction and key takeaways per post",
              "Tone of voice alignment with brand identity",
            ],
          },
          description: {
            ar: "يتضمن نطاق العمل إعداد 5 منشورات تواصل اجتماعي للعلامة التجارية. نلتزم بعرض الحقائق الموثقة فقط، وملفات التصاميم والمنشورات النهائية قيد الرفع في مجلد الأصول.",
            en: "Demonstrated scope consists of 5 social media posts for the brand. In strict adherence to verified records, final visual assets are noted as pending upload in project assets.",
          },
          scopeNote: {
            ar: "تنويه الموثوقية: تفاصيل العمل مقصورة بدقة على النطاق المحدد (5 منشورات تواصل). ملفات التصاميم النهائية قيد الإضافة لأصول المعرض.",
            en: "Integrity Notice: Work details strictly reflect the defined scope (5 social media posts). Final post assets are pending upload.",
          },
        },
        {
          id: "zirex",
          slug: "zirex",
          title: {
            ar: "تخطيط حملات الرسائل النصية والإشعارات وتحديد الجمهور — ZIREX",
            en: "Audience/Persona & SMS/Push Campaign Planning — ZIREX",
          },
          category: {
            ar: "تخطيط الحملات المباشرة وإشراك الجمهور",
            en: "Audience Strategy & Direct Campaign Planning",
          },
          badge: {
            ar: "نطاق عمل: تحديد الجمهور وحملات SMS & Push",
            en: "Scope: Audience Personas & SMS/Push Planning",
          },
          clientOrOrg: {
            ar: "ZIREX",
            en: "ZIREX",
          },
          status: "pending_upload",
          summary: {
            ar: "تخطيط حملات الرسائل القصيرة (SMS) وإشعارات الهاتف (Push Notifications) مع تحديد شرائح الجمهور المستهدف وبناء شخصيات المشتري لتحقيق تفاعل مباشر ومعدلات استجابة مدروسة.",
            en: "Planning of direct SMS and push notification campaigns coupled with audience segmentation and buyer persona mapping for focused direct response.",
          },
          deliverables: {
            ar: [
              "تحديد الشرائح المستهدفة وتوصيف شخصيات الجمهور (Audience & Personas)",
              "صياغة نصوص ورسائل حملات الرسائل النصية القصيرة (SMS Copy)",
              "تخطيط إشعارات الدفع (Push Notifications) وجدولة إرسالها",
              "مواءمة الرسائل مع مراحل اهتمام العميل",
            ],
            en: [
              "Target segmentation and audience persona profiling",
              "Concise direct-response copywriting for SMS campaigns",
              "Push notification messaging sequences and triggers",
              "Funnel-aligned user messaging for direct action",
            ],
          },
          description: {
            ar: "يركز هذا العمل على صياغة رسائل قصيرة مباشرة وعالية التحويل مع رسم شرائح الجمهور المناسبة. تم توثيق النطاق طبقاً للتكليف الفعلي وملفات العينات بانتظار الإدراج في مجلد الأصول.",
            en: "This scope centers on crafting high-intent direct response messages and precise audience segmentation. The work is described strictly within the confirmed scope while sample files remain pending upload.",
          },
          scopeNote: {
            ar: "تنويه الموثوقية: العمل يشمل تخطيط شخصيات الجمهور وحملات SMS/Push فقط. لا توجد نتائج أو أرقام مختلقة؛ ملفات التخطيط قيد الرفع في مجلد الأصول.",
            en: "Integrity Notice: Scope covers persona development and SMS/push planning only. No fabricated metrics are claimed; planning files are pending asset upload.",
          },
        },
      ],
    },
    services: {
      sectionBadge: "Services & Capabilities",
      title: "Specialized Marketing Solutions Based on Proven Practice",
      description:
        "Advisory and hands-on marketing services built squarely on verified capabilities in B2B, pharmaceutical, and manufacturing industries—free of unverified claims or fake guarantees.",
      items: [
        {
          title: "Strategic Marketing & Brand Positioning",
          description:
            "Formulating end-to-end marketing strategies that establish defensible competitive positioning, define the Big Campaign Idea, and align core messaging with genuine buyer pain points.",
          features: [
            "Comprehensive B2B & industrial marketing roadmaps",
            "In-depth market research and multi-stakeholder buyer committee analysis",
            "Target persona mapping and customer journey structuring",
          ],
        },
        {
          title: "Specialized B2B & Healthcare Content Marketing",
          description:
            "Translating sophisticated industrial, medical, and engineering solutions into authoritative, engaging content that supports procurement evaluations.",
          features: [
            "Monthly content matrices and editorial calendar production",
            "Specialized technical copywriting and industrial solution briefs",
            "Corporate and executive thought leadership on LinkedIn",
          ],
        },
        {
          title: "Full-Funnel Marketing & CRO",
          description:
            "Designing marketing funnels that guide prospects from educational awareness to technical appraisal and qualified Requests for Quote (RFQs).",
          features: [
            "B2B lead acquisition and qualification architectures",
            "Conversion rate optimization and landing page refinement",
            "High-intent signal tracking and marketing-sales alignment",
          ],
        },
        {
          title: "AI-Powered Marketing Workflows",
          description:
            "Applying modern artificial intelligence tools to accelerate market research, ideate content angles, and maintain structured publishing pipelines with high quality.",
          features: [
            "AI-assisted audience insights and competitive research",
            "Custom prompt workflows for strategic and editorial content",
            "Backed by official MCIT & Microsoft AI Literacy Certification",
          ],
        },
      ],
    },
    education: {
      sectionBadge: "Education, Training & Credentials",
      title: "Academic Foundation & Verified Certifications",
      description: "Documented academic degrees and official professional training credentials.",
      degrees: [
        {
          title: "Bachelor of Pharmacy",
          institution: "Faculty of Pharmacy — Cairo University",
          period: "August 2010 – January 2015",
          type: "Official University Degree",
          description:
            "Comprehensive scientific education in pharmaceutical sciences, pharmacology, quality control, and regulated healthcare systems. Forms the rigorous bedrock for analytical thinking, medical accuracy, and industrial fluency.",
        },
        {
          title: "Digital Marketing Specialist Program",
          institution: "Digital Egypt Pioneers Initiative (DEPI) — MCIT",
          period: "Specialized Professional Program",
          type: "Professional Specialized Training",
          statusNote:
            "Advanced program track covering digital marketing strategies, SEO, SEM, digital campaigns, and data-driven performance analytics.",
          noteBadge: "Specialized Training Track",
        },
      ],
      certTitle: "Document-Verified Certification",
      certificate: {
        title: "Certificate of Completion: AI Literacy",
        issuer: "Ministry of Communications and Information Technology (MCIT) with Microsoft & Fast Lane",
        date: "June 2026",
        recipient: "Heba Ashour Ibrahim Elsayed",
        signatories: [
          "Dr. Hoda Baraka — Advisor to Minister of ICT for Technology Talents Development",
          "Dr. Mohamed Kassem — Microsoft Egypt General Manager",
        ],
        image: "/assets/certificates/ai-literacy-mcit-microsoft.jpeg",
        verifiedText: "Verified credential file preserved in project assets",
      },
    },
    contact: {
      sectionBadge: "Direct Contact",
      title: "Let's Connect & Build Value Together",
      description:
        "Open for discussions on marketing strategy, B2B industrial positioning, pharmaceutical communication, and performance growth initiatives.",
      emailLabel: "Direct Email",
      emailValue: "Hebashour222@gmail.com",
      linkedInLabel: "LinkedIn Profile",
      linkedInUrl: "https://www.linkedin.com/in/heba-ashour-d/",
      linkedInText: "linkedin.com/in/heba-ashour-d",
      locationLabel: "Location",
      locationValue: "Cairo, Egypt",
      copyEmail: "Copy Email",
      copied: "Copied to clipboard!",
      sendEmail: "Send Direct Email",
      openLinkedIn: "Visit LinkedIn Profile",
      resumeDownloadCardTitle: "Professional Resume (CV)",
      resumeDownloadCardDesc: "Updated verified resume document detailing professional journey and competencies.",
      downloadResume: "Download Resume (PDF)",
      transparencyNote:
        "Integrity Notice: Professional correspondence is conducted directly via official email and LinkedIn without unverified forms or undisclosed phone numbers.",
    },
    footer: {
      tagline: "Heba Ashour Ibrahim — Digital Marketing Specialist & Marketing Strategist for B2B, Pharma & Manufacturing.",
      rights: "All rights reserved © 2026 Heba Ashour Ibrahim.",
      builtWith: "Built with Next.js, TypeScript & Tailwind CSS adhering to verified credentials.",
      backToTop: "Back to top",
    },
  },
};
