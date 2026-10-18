const places = [
  {
    id: "catba",
    name: "Thị trấn Cát Bà",
    tag: "Biển · Ăn uống · Lưu trú",
    description: "Trung tâm du lịch với bãi biển, nhà hàng, khách sạn và dịch vụ tham quan.",
    highlights: [
      "Bãi tắm Cát Cò và bãi Tùng Thu",
      "Bến tàu tham quan vịnh Lan Hạ",
      "Nhà hàng, chợ và phố ẩm thực",
      "Pháo đài Thần công: kiểm tra tình trạng mở cửa"
    ],
    stay: "Nhiều lựa chọn khách sạn, nhà nghỉ và homestay. Phù hợp với người muốn thuận tiện ăn uống và di chuyển.",
    tip: "Mùa cao điểm nên đặt trước. Hỏi giá hải sản và xác nhận các khoản phụ thu.",
    category: "sea",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
    map: "Cat Ba Town, Hai Phong, Vietnam"
  },
  {
    id: "gialuan",
    name: "Gia Luận",
    tag: "Cửa ngõ · Cảnh quan",
    description: "Khu vực phía bắc đảo, gắn với tuyến kết nối từ phía vịnh Hạ Long và cung đường xuyên đảo.",
    highlights: [
      "Cung đường xuyên đảo",
      "Cảnh quan núi đá vôi",
      "Các điểm dừng ngắm cảnh phù hợp tuyến",
      "Kết nối với trung tâm Cát Bà"
    ],
    stay: "Tìm cơ sở lưu trú nhỏ quanh khu vực. Xác nhận phương tiện trung chuyển và khoảng cách thực tế.",
    tip: "Kiểm tra lịch phương tiện và thời gian di chuyển trước khi khởi hành.",
    category: "nature",
    image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80",
    map: "Gia Luan, Cat Ba, Hai Phong, Vietnam"
  },
  {
    id: "phulong",
    name: "Phù Long",
    tag: "Cửa ngõ · Sinh thái",
    description: "Khu vực cửa ngõ phía tây đảo, gần các tuyến kết nối qua Cát Hải và vùng sinh thái ven biển.",
    highlights: [
      "Cảnh quan cửa ngõ đảo",
      "Tìm hiểu hệ sinh thái vùng triều tại điểm được phép",
      "Các tuyến kết nối về trung tâm",
      "Khám phá cảnh quan địa phương"
    ],
    stay: "Có thể cân nhắc cơ sở lưu trú ở khu vực cửa ngõ nếu phù hợp lịch trình. Kiểm tra địa chỉ và phương tiện.",
    tip: "Không tự ý đi vào khu vực sinh thái nhạy cảm hoặc nơi có biển cấm.",
    category: "nature",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    map: "Phu Long, Cat Ba, Hai Phong, Vietnam"
  },
  {
    id: "xuandam",
    name: "Xuân Đám",
    tag: "Làng quê · Yên bình",
    description: "Khu vực có không gian nông thôn và cảnh quan xanh, phù hợp với chuyến đi chậm.",
    highlights: [
      "Đường làng và cảnh quan nông thôn",
      "Ẩm thực tại cơ sở địa phương",
      "Kết hợp hành trình xuyên đảo",
      "Tìm hiểu đời sống cộng đồng"
    ],
    stay: "Có thể tìm homestay hoặc nhà nghỉ nhỏ. Hỏi trước về bữa ăn, phương tiện đưa đón và tiện ích.",
    tip: "Tôn trọng không gian riêng của cư dân; hỏi trước khi chụp ảnh.",
    category: "culture",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=900&q=80",
    map: "Xuan Dam, Cat Ba, Hai Phong, Vietnam"
  },
  {
    id: "khesau",
    name: "Khe Sâu",
    tag: "Thiên nhiên · Khám phá",
    description: "Tên khu vực cần được xác nhận vị trí cụ thể trước khi sử dụng để đặt dịch vụ hoặc lên tuyến.",
    highlights: [
      "Xác nhận địa điểm với người dân địa phương",
      "Kiểm tra đường đi và điểm đón",
      "Kết hợp hoạt động thiên nhiên được phép",
      "Lưu địa chỉ hoặc ghim bản đồ chính xác"
    ],
    stay: "Không nên đặt phòng chỉ dựa vào tên khu vực. Yêu cầu địa chỉ đầy đủ và vị trí bản đồ.",
    tip: "Đây là địa danh cần xác minh thêm. Đừng thanh toán trước khi xác nhận đúng vị trí và cơ sở.",
    category: "nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    map: "Khe Sau, Cat Ba, Vietnam"
  },
  {
    id: "tranchau",
    name: "Trân Châu",
    tag: "Nông thôn · Văn hóa",
    description: "Khu vực nông thôn thích hợp để tìm hiểu đời sống địa phương và cảnh quan xanh.",
    highlights: [
      "Đường làng và cảnh quan nông thôn",
      "Món ăn địa phương theo mùa",
      "Kết hợp các điểm trên tuyến xuyên đảo",
      "Trải nghiệm văn hóa cộng đồng có hướng dẫn"
    ],
    stay: "Kiểm tra các cơ sở lưu trú nhỏ, tiện ích và phương án di chuyển buổi tối.",
    tip: "Hỏi trước khi vào đất tư hoặc chụp ảnh người dân.",
    category: "culture",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=80",
    map: "Tran Chau, Cat Ba, Hai Phong, Vietnam"
  },
  {
    id: "viethai",
    name: "Làng Việt Hải",
    tag: "Làng sinh thái · Rừng",
    description: "Làng nằm giữa vùng núi rừng Cát Bà, thường được kết hợp trong hành trình sinh thái.",
    highlights: [
      "Khám phá làng theo tuyến phù hợp",
      "Đi bộ hoặc đạp xe tại khu vực được phép",
      "Tìm hiểu đời sống cộng đồng",
      "Ngắm cảnh quan rừng và núi đá vôi"
    ],
    stay: "Có thể tìm cơ sở lưu trú quy mô nhỏ. Xác nhận bữa ăn, phương tiện và giờ nhận khách.",
    tip: "Chuẩn bị nước uống, đi theo tuyến cho phép và hạn chế tiếng ồn.",
    category: "nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
    map: "Viet Hai Village, Cat Ba, Vietnam"
  },
  {
    id: "hienhao",
    name: "Hiền Hào",
    tag: "Làng quê · Không gian xanh",
    description: "Khu vực làng quê có thể kết hợp trong hành trình tìm hiểu cảnh quan và đời sống địa phương.",
    highlights: [
      "Cảnh quan nông thôn",
      "Ẩm thực địa phương",
      "Đường xuyên đảo",
      "Kết hợp các điểm tham quan lân cận"
    ],
    stay: "Ưu tiên cơ sở có địa chỉ rõ ràng, đánh giá gần đây và thông tin liên hệ xác minh được.",
    tip: "Xác nhận phương tiện trở về trung tâm nếu lưu trú ở khu vực xa.",
    category: "culture",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
    map: "Hien Hao, Cat Ba, Hai Phong, Vietnam"
  }
];

// Từ điển giao diện.
// Các nội dung mô tả địa điểm chi tiết hiện được viết bằng tiếng Việt.
const translations = {
  vi: {
    destinations: "Điểm đến", experiences: "Trải nghiệm", food: "Ẩm thực",
    planner: "Lịch trình", guide: "Cẩm nang",
    eyebrow: "DI SẢN THIÊN NHIÊN · HẢI PHÒNG",
    heroTitle: "Chạm vào<br><em>miền xanh</em><br>Cát Bà.",
    heroText: "Khám phá những vịnh biển xanh, núi đá vôi kỳ vĩ, rừng nguyên sinh và nhịp sống bình yên của người dân đảo.",
    explore: "Khám phá ngay ↗", makePlan: "Lên lịch trình",
    islands: "đảo lớn nhỏ", heritage: "Di sản thế giới", seasons: "Nhiều trải nghiệm",
    searchLabel: "Bạn muốn tìm gì?", searchPlaceholder: "Tên địa điểm, hoạt động...",
    areaLabel: "Khu vực", allAreas: "Tất cả khu vực", searchButton: "Tìm kiếm ↗",
    destTitle: "Mỗi vùng đất, một câu chuyện.",
    destText: "Chọn một khu vực để khám phá cảnh quan, hoạt động, gợi ý lưu trú và bản đồ.",
    aboutEyebrow: "VẺ ĐẸP THIÊN NHIÊN",
    aboutTitle: "Một di sản sống cần được gìn giữ.",
    aboutText: "Quần đảo Cát Bà nổi bật với cảnh quan núi đá vôi, hệ sinh thái biển và rừng phong phú. Du lịch có trách nhiệm giúp bảo vệ thiên nhiên và sinh kế của cộng đồng địa phương.",
    eco1: "Mang bình nước cá nhân, hạn chế nhựa dùng một lần.",
    eco2: "Không xả rác, lấy san hô hoặc làm phiền động vật hoang dã.",
    eco3: "Tuân thủ hướng dẫn tại vườn quốc gia và khu bảo tồn.",
    experienceTitle: "Trải nghiệm đáng nhớ",
    exp1Title: "Du ngoạn vịnh Lan Hạ",
    exp1Text: "Ngắm núi đá vôi, làng chài và các bãi biển nhỏ. Kiểm tra thời tiết và lịch tàu trước khi đi.",
    exp2Title: "Khám phá rừng",
    exp2Text: "Tìm hiểu hệ sinh thái Vườn quốc gia Cát Bà theo tuyến được phép.",
    exp3Title: "Tắm biển",
    exp3Text: "Thư giãn tại những bãi biển mở cửa và tuân thủ hướng dẫn an toàn.",
    exp4Title: "Khám phá làng quê",
    exp4Text: "Tìm hiểu đời sống địa phương và thưởng thức món ăn theo mùa.",
    foodTitle: "Hương vị Cát Bà",
    foodText: "Hỏi rõ giá theo cân, phí chế biến và tổng tiền trước khi gọi món.",
    food1Title: "Hải sản tươi",
    food1Text: "Ghẹ, bề bề, mực, cá biển và các loại hải sản theo mùa.",
    food2Title: "Món địa phương",
    food2Text: "Khám phá các món ăn địa phương tại cơ sở có thông tin giá rõ ràng.",
    food3Title: "Bữa ăn theo mùa",
    food3Text: "Kết hợp hải sản, rau xanh và những món phù hợp khẩu vị.",
    plannerEyebrow: "YOUR TRIP, YOUR WAY",
    plannerTitle: "Thiết kế chuyến đi của riêng bạn.",
    plannerText: "Tạo lịch trình gợi ý và dự toán sơ bộ. Đây không phải báo giá chính thức.",
    duration: "Thời lượng", day1: "1 ngày", day2: "2 ngày 1 đêm",
    day3: "3 ngày 2 đêm", people: "Số người", travelStyle: "Phong cách",
    budget: "Tiết kiệm", comfort: "Thoải mái", nature: "Thiên nhiên",
    createPlan: "Tạo lịch trình ↗",
    guideTitle: "Cẩm nang trước chuyến đi",
    guide1Title: "Di chuyển",
    guide1Text: "Kiểm tra lịch phà, phương tiện trung chuyển và thời gian di chuyển trước khi khởi hành.",
    guide2Title: "Khách sạn & homestay",
    guide2Text: "Trung tâm thuận tiện ăn uống; vùng làng quê có thể yên tĩnh hơn. Xác nhận địa chỉ, giá và chính sách hủy.",
    guide3Title: "Thời tiết",
    guide3Text: "Gió lớn hoặc mưa có thể làm thay đổi hoạt động biển. Kiểm tra dự báo và thông báo của nhà cung cấp.",
    guide4Title: "Ngân sách",
    guide4Text: "Dự trù chi phí đi lại, phòng nghỉ, ăn uống và vé hoạt động.",
    disclaimer: "Website không đặt phòng hoặc bán vé. Thông tin giá, lịch trình và hoạt động cần được xác nhận trực tiếp với nhà cung cấp. Các tên khu vực cũ được dùng để định vị du lịch; hãy xác nhận địa chỉ hành chính hiện hành khi đặt dịch vụ.",
    faqTitle: "Câu hỏi thường gặp",
    faq1q: "Nên đi Cát Bà mấy ngày?",
    faq1a: "Hai ngày một đêm phù hợp để kết hợp trung tâm, biển và một hoạt động chính. Ba ngày hai đêm cho phép khám phá thêm rừng và làng quê.",
    faq2q: "Có nên đặt phòng trước?",
    faq2a: "Nên đặt trước vào cuối tuần, mùa hè và dịp lễ. Kiểm tra tổng giá, phụ thu và chính sách hủy.",
    faq3q: "Vịnh Lan Hạ có luôn hoạt động?",
    faq3a: "Không. Thời tiết, an toàn và quy định có thể làm thay đổi hoặc hủy chuyến.",
    footerText: "Cẩm nang khám phá thiên nhiên, văn hóa và ẩm thực Cát Bà.",
    footerNote: "Thông tin tham khảo, không phải cổng đặt dịch vụ.",
    chatButton: "Hỏi trợ lý du lịch", chatSubtitle: "Trợ lý hỏi đáp mẫu",
    chatWelcome: "Xin chào! Bạn có thể hỏi về lịch trình, nơi ở, ẩm thực hoặc cách di chuyển.",
    chatPlaceholder: "Nhập câu hỏi..."
  },
  en: {
    destinations: "Destinations", experiences: "Experiences", food: "Food",
    planner: "Itinerary", guide: "Travel guide",
    eyebrow: "NATURAL HERITAGE · HAI PHONG",
    heroTitle: "Discover<br><em>the blue</em><br>of Cat Ba.",
    heroText: "Explore blue bays, dramatic limestone mountains, green forests and the peaceful life of an island community.",
    explore: "Explore now ↗", makePlan: "Plan a trip",
    islands: "islands and islets", heritage: "World Heritage", seasons: "Experiences all year",
    searchLabel: "What are you looking for?", searchPlaceholder: "Place or activity...",
    areaLabel: "Area", allAreas: "All areas", searchButton: "Search ↗",
    destTitle: "Every place has a story.",
    destText: "Explore local scenery, activities, accommodation suggestions and maps.",
    aboutEyebrow: "NATURAL BEAUTY",
    aboutTitle: "A living heritage worth protecting.",
    aboutText: "Cat Ba combines limestone scenery, marine ecosystems and rich forests. Responsible tourism helps protect nature and local livelihoods.",
    eco1: "Bring a reusable water bottle.",
    eco2: "Do not litter, collect coral or disturb wildlife.",
    eco3: "Follow national park and protected-area rules.",
    experienceTitle: "Memorable experiences",
    exp1Title: "Cruise Lan Ha Bay",
    exp1Text: "See limestone karsts, fishing villages and small beaches. Check weather and boat schedules first.",
    exp2Title: "Explore the forest",
    exp2Text: "Discover Cat Ba National Park on permitted routes.",
    exp3Title: "Enjoy the beach",
    exp3Text: "Relax at open beaches and follow safety instructions.",
    exp4Title: "Explore local villages",
    exp4Text: "Discover local life and seasonal food.",
    foodTitle: "Taste Cat Ba",
    foodText: "Ask about seafood weight, preparation fees and the total price before ordering.",
    food1Title: "Fresh seafood", food1Text: "Crab, mantis shrimp, squid, fish and seasonal seafood.",
    food2Title: "Local dishes", food2Text: "Try local food at places with clear pricing.",
    food3Title: "Seasonal meals", food3Text: "Enjoy seafood, vegetables and dishes to suit your taste.",
    plannerEyebrow: "YOUR TRIP, YOUR WAY",
    plannerTitle: "Build your own trip.",
    plannerText: "Create a suggested itinerary and rough budget. This is not an official quote.",
    duration: "Duration", day1: "1 day", day2: "2 days / 1 night",
    day3: "3 days / 2 nights", people: "Travellers", travelStyle: "Travel style",
    budget: "Budget", comfort: "Comfort", nature: "Nature", createPlan: "Build itinerary ↗",
    guideTitle: "Before you go", guide1Title: "Transport",
    guide1Text: "Check ferry schedules, transfers and travel times before departure.",
    guide2Title: "Hotels & homestays",
    guide2Text: "The centre is convenient for dining; villages may be quieter. Confirm address, final price and cancellation policy.",
    guide3Title: "Weather",
    guide3Text: "Rain or strong winds can change marine activities. Check forecasts and operator updates.",
    guide4Title: "Budget", guide4Text: "Budget for transport, accommodation, food and activities.",
    disclaimer: "This website does not sell tickets or book rooms. Confirm prices and schedules with providers. Former area names are retained for travel orientation; confirm current official addresses.",
    faqTitle: "Frequently asked questions",
    faq1q: "How many days should I spend in Cat Ba?",
    faq1a: "Two days and one night suits the town, beaches and one main activity. Three days allows more time for forests and villages.",
    faq2q: "Should I book accommodation in advance?",
    faq2a: "Book ahead for weekends, summer and holidays. Check the total price, extra fees and cancellation policy.",
    faq3q: "Are Lan Ha Bay tours always available?",
    faq3a: "No. Weather, safety conditions and local rules may change or cancel trips.",
    footerText: "A guide to Cat Ba's nature, culture and food.",
    footerNote: "For reference only; not a booking platform.",
    chatButton: "Ask the travel assistant", chatSubtitle: "Sample travel assistant",
    chatWelcome: "Hello! Ask me about itineraries, accommodation, food or transport.",
    chatPlaceholder: "Type your question..."
  }
};

// Các ngôn ngữ khác có bản dịch giao diện chính.
// Nội dung mô tả địa điểm chi tiết cần được dịch đầy đủ trước khi phát hành chính thức.
const extraTranslations = {
  zh: {
    destinations: "目的地", experiences: "体验", food: "美食",
    planner: "行程规划", guide: "旅行指南",
    heroTitle: "探索<br><em>蔚蓝</em><br>吉婆岛。",
    explore: "立即探索 ↗", makePlan: "规划行程",
    destTitle: "每个地方都有故事。", experienceTitle: "难忘的体验",
    foodTitle: "品味吉婆岛", plannerTitle: "规划你的旅程",
    guideTitle: "出发前指南", chatButton: "询问旅行助手"
  },
  ja: {
    destinations: "観光地", experiences: "体験", food: "グルメ",
    planner: "旅程", guide: "旅行ガイド",
    heroTitle: "カットバの<br><em>青い世界</em><br>へ。",
    explore: "探索する ↗", makePlan: "旅程を作成",
    destTitle: "それぞれの場所に物語がある。",
    experienceTitle: "忘れられない体験", foodTitle: "カットバの味",
    plannerTitle: "自分だけの旅を作ろう", guideTitle: "旅行前のガイド",
    chatButton: "旅行アシスタントに質問"
  },
  ko: {
    destinations: "여행지", experiences: "체험", food: "음식",
    planner: "일정", guide: "여행 안내",
    heroTitle: "깟바의<br><em>푸른 세계</em><br>로.",
    explore: "탐험하기 ↗", makePlan: "여행 계획",
    destTitle: "모든 장소에는 이야기가 있습니다.",
    experienceTitle: "기억에 남는 경험", foodTitle: "깟바의 맛",
    plannerTitle: "나만의 여행 만들기", guideTitle: "여행 전 안내",
    chatButton: "여행 도우미에게 질문"
  },
  fr: {
    destinations: "Destinations", experiences: "Expériences", food: "Cuisine",
    planner: "Itinéraire", guide: "Guide",
    heroTitle: "Découvrez<br><em>le bleu</em><br>de Cát Bà.",
    explore: "Explorer ↗", makePlan: "Planifier",
    destTitle: "Chaque lieu a son histoire.",
    experienceTitle: "Des expériences mémorables", foodTitle: "Les saveurs de Cát Bà",
    plannerTitle: "Créez votre voyage", guideTitle: "Avant de partir",
    chatButton: "Demander à l'assistant"
  },
  es: {
    destinations: "Destinos", experiences: "Experiencias", food: "Gastronomía",
    planner: "Itinerario", guide: "Guía",
    heroTitle: "Descubre<br><em>el azul</em><br>de Cát Bà.",
    explore: "Explorar ↗", makePlan: "Planificar",
    destTitle: "Cada lugar tiene una historia.",
    experienceTitle: "Experiencias memorables", foodTitle: "Sabores de Cát Bà",
    plannerTitle: "Crea tu viaje", guideTitle: "Antes de viajar",
    chatButton: "Preguntar al asistente"
  },
  de: {
    destinations: "Reiseziele", experiences: "Erlebnisse", food: "Essen",
    planner: "Reiseplan", guide: "Reiseführer",
    heroTitle: "Entdecke<br><em>das Blau</em><br>von Cát Bà.",
    explore: "Entdecken ↗", makePlan: "Reise planen",
    destTitle: "Jeder Ort erzählt eine Geschichte.",
    experienceTitle: "Unvergessliche Erlebnisse", foodTitle: "Der Geschmack von Cát Bà",
    plannerTitle: "Plane deine Reise", guideTitle: "Vor der Reise",
    chatButton: "Reiseassistent fragen"
  },
  ru: {
    destinations: "Места", experiences: "Впечатления", food: "Еда",
    planner: "Маршрут", guide: "Путеводитель",
    heroTitle: "Откройте<br><em>синюю</em><br>Катбу.",
    explore: "Исследовать ↗", makePlan: "Планировать",
    destTitle: "У каждого места своя история.",
    experienceTitle: "Незабываемые впечатления", foodTitle: "Вкус Катбы",
    plannerTitle: "Создайте свой маршрут", guideTitle: "Перед поездкой",
    chatButton: "Спросить помощника"
  },
  th: {
    destinations: "สถานที่", experiences: "ประสบการณ์", food: "อาหาร",
    planner: "แผนการเดินทาง", guide: "คู่มือ",
    heroTitle: "สัมผัส<br><em>โลกสีฟ้า</em><br>กั๊ตบา",
    explore: "สำรวจเลย ↗", makePlan: "วางแผนทริป",
    destTitle: "ทุกสถานที่มีเรื่องราว",
    experienceTitle: "ประสบการณ์น่าจดจำ", foodTitle: "รสชาติแห่งกั๊ตบา",
    plannerTitle: "สร้างทริปของคุณ", guideTitle: "คู่มือก่อนเดินทาง",
    chatButton: "ถามผู้ช่วยท่องเที่ยว"
  }
};

let currentLanguage = "vi";

function translatePage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  const dictionary = {
    ...(translations.en),
    ...(translations[language] || {}),
    ...(extraTranslations[language] || {})
  };

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    if (dictionary[key] !== undefined) {
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key] !== undefined) {
      element.placeholder = dictionary[key];
    }
  });

  renderPlaces();
}

const grid = document.getElementById("destinationGrid");
const searchInput = document.getElementById("searchInput");
const areaFilter = document.getElementById("areaFilter");

function renderPlaces() {
  const keyword = searchInput.value.trim().toLocaleLowerCase();
  const selectedArea = areaFilter.value;

  const filtered = places.filter(place => {
    const text = [
      place.name,
      place.tag,
      place.description,
      place.highlights.join(" ")
    ].join(" ").toLocaleLowerCase();

    const matchesKeyword = text.includes(keyword);
    const matchesArea =
      selectedArea === "all" || place.name === selectedArea;

    return matchesKeyword && matchesArea;
  });

  grid.replaceChildren();

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "disclaimer";
    empty.textContent = currentLanguage === "en"
      ? "No places found. Try another keyword."
      : "Không tìm thấy địa điểm phù hợp. Hãy thử từ khóa khác.";
    grid.appendChild(empty);
    return;
  }

  filtered.forEach(place => {
    const card = document.createElement("article");
    card.className = "destination-card";

    const image = document.createElement("img");
    image.src = place.image;
    image.alt = place.name;
    image.loading = "lazy";

    const content = document.createElement("div");
    content.className = "card-content";

    const tag = document.createElement("span");
    tag.className = "card-tag";
    tag.textContent = place.tag;

    const title = document.createElement("h3");
    title.textContent = place.name;

    const description = document.createElement("p");
    description.textContent = place.description;

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const detailButton = document.createElement("button");
    detailButton.type = "button";
    detailButton.textContent =
      currentLanguage === "en" ? "View details" : "Xem chi tiết";
    detailButton.addEventListener("click", () => showPlaceDetails(place));

    const mapLink = document.createElement("a");
    mapLink.href =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(place.map);
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapLink.textContent =
      currentLanguage === "en" ? "Open map ↗" : "Mở bản đồ ↗";

    actions.append(detailButton, mapLink);
    content.append(tag, title, description, actions);
    card.append(image, content);
    grid.appendChild(card);
  });
}

function showPlaceDetails(place) {
  const isEnglish = currentLanguage === "en";

  const lines = [
    `${place.name}`,
    "",
    isEnglish ? "Overview:" : "Giới thiệu:",
    place.description,
    "",
    isEnglish ? "Highlights:" : "Điểm nên khám phá:",
    ...place.highlights.map(item => `• ${item}`),
    "",
    isEnglish ? "Accommodation:" : "Lưu trú:",
    place.stay,
    "",
    isEnglish ? "Travel tip:" : "Mẹo du lịch:",
    place.tip
  ];

  const message = lines.join("\n");

  // Tạo cửa sổ chi tiết an toàn bằng văn bản.
  const dialog = document.createElement("dialog");
  dialog.className = "place-dialog";

  const box = document.createElement("div");
  box.className = "dialog-content";

  const heading = document.createElement("h2");
  heading.textContent = place.name;

  const detail = document.createElement("p");
  detail.style.whiteSpace = "pre-line";
  detail.textContent = message;

  const map = document.createElement("a");
  map.className = "button primary";
  map.target = "_blank";
  map.rel = "noopener noreferrer";
  map.href = "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(place.map);
  map.textContent = isEnglish ? "Open map ↗" : "Mở bản đồ ↗";

  const close = document.createElement("button");
  close.className = "button secondary";
  close.textContent = isEnglish ? "Close" : "Đóng";
  close.addEventListener("click", () => dialog.close());

  box.append(heading, detail, map, close);
  dialog.appendChild(box);
  document.body.appendChild(dialog);

  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  dialog.showModal();
}

// Tìm kiếm
document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();
  renderPlaces();
  document.getElementById("destinations").scrollIntoView({
    behavior: "smooth"
  });
});

searchInput.addEventListener("input", renderPlaces);
areaFilter.addEventListener("change", renderPlaces);

// Chuyển ngôn ngữ
document.getElementById("language").addEventListener("change", event => {
  translatePage(event.target.value);
});

// Menu trên điện thoại
document.getElementById("menuButton").addEventListener("click", () => {
  document.getElementById("navigation").classList.toggle("open");
});

document.querySelectorAll("#navigation a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navigation").classList.remove("open");
  });
});

// Lập lịch trình và dự toán tham khảo
document.getElementById("plannerForm").addEventListener("submit", event => {
  event.preventDefault();

  const days = Number(document.getElementById("days").value);
  const people = Math.max(
    1,
    Math.min(30, Number(document.getElementById("people").value) || 1)
  );
  const style = document.getElementById("travelStyle").value;

  const rates = {
    budget: { stay: 280000, food: 260000, activities: 250000, travel: 220000 },
    comfort: { stay: 550000, food: 400000, activities: 450000, travel: 300000 },
    nature: { stay: 420000, food: 320000, activities: 500000, travel: 280000 }
  };

  const rate = rates[style];
  const perPerson =
    rate.stay * Math.max(0, days - 1) +
    rate.food * days +
    rate.activities * days +
    rate.travel;

  const total = perPerson * people;
  const money = new Intl.NumberFormat("vi-VN").format(total) + "đ";
  const perPersonMoney =
    new Intl.NumberFormat("vi-VN").format(perPerson) + "đ";

  let itinerary;

  if (days === 1) {
    itinerary = [
      "Buổi sáng: đến đảo, tham quan trung tâm.",
      "Buổi trưa: ăn tại cơ sở có giá rõ ràng.",
      "Buổi chiều: chọn bãi biển hoặc điểm tham quan đang mở cửa."
    ];
  } else if (days === 2) {
    itinerary = [
      "Ngày 1: đến đảo, nhận phòng, khám phá trung tâm và bãi biển.",
      "Ngày 2: chọn tour vịnh Lan Hạ hoặc hoạt động thiên nhiên được phép."
    ];
  } else {
    itinerary = [
      "Ngày 1: đến đảo, khám phá trung tâm và bãi biển.",
      "Ngày 2: tham quan vịnh hoặc Vườn quốc gia theo điều kiện thực tế.",
      "Ngày 3: khám phá khu vực làng quê rồi khởi hành về."
    ];
  }

  const result = document.getElementById("planResult");
  result.replaceChildren();
  result.classList.add("visible");

  const heading = document.createElement("h3");
  heading.textContent = "🧭 Lịch trình gợi ý";

  const list = document.createElement("ol");
  itinerary.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  const budget = document.createElement("p");
  budget.textContent =
    `Dự toán sơ bộ cho ${people} người: ${money} ` +
    `(khoảng ${perPersonMoney}/người).`;

  const note = document.createElement("small");
  note.textContent =
    "Ước tính minh họa, không phải báo giá. Có thể chưa gồm mọi khoản phí. " +
    "Hãy kiểm tra giá thực tế trước khi đặt dịch vụ.";

  result.append(heading, list, budget, note);
});

// Trợ lý hỏi đáp mẫu — chưa kết nối AI trực tuyến
const chatPanel = document.getElementById("chatPanel");
const chatMessages = document.getElementById("chatMessages");

document.getElementById("chatToggle").addEventListener("click", () => {
  chatPanel.classList.toggle("open");
});

document.getElementById("chatClose").addEventListener("click", () => {
  chatPanel.classList.remove("open");
});

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = `message ${type}`;
  message.textContent = text;
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotAnswer(question) {
  const q = question.toLocaleLowerCase();

  if (/ngân sách|chi phí|budget|cost/.test(q)) {
    return "Ngân sách chỉ mang tính tham khảo. Chi phí gồm di chuyển, phòng nghỉ, ăn uống và hoạt động; thay đổi theo mùa, số người và chất lượng dịch vụ. Hãy dùng công cụ lập lịch trình phía trên để tính sơ bộ.";
  }

  if (/lịch trình|2 ngày|itinerary|schedule/.test(q)) {
    return "Gợi ý 2 ngày 1 đêm:\nNgày 1: đến đảo, nhận phòng, khám phá trung tâm và bãi biển.\nNgày 2: chọn tour vịnh Lan Hạ hoặc hoạt động thiên nhiên được phép.\nKiểm tra thời tiết, lịch tàu và thời gian trở về trước khi đi.";
  }

  if (/khách sạn|homestay|lưu trú|hotel|stay|phòng/.test(q)) {
    return "Trung tâm Cát Bà phù hợp nếu bạn muốn thuận tiện ăn uống và đi lại. Các khu vực làng quê có thể yên tĩnh hơn nhưng cần kiểm tra phương tiện. Hãy xác nhận địa chỉ, giá cuối cùng, phụ thu và chính sách hủy trực tiếp với cơ sở lưu trú.";
  }

  if (/ăn gì|ẩm thực|hải sản|food|seafood/.test(q)) {
    return "Bạn có thể thử hải sản theo mùa như ghẹ, bề bề, mực và cá biển. Hãy hỏi giá theo cân, phí chế biến và tổng tiền trước khi gọi món. Nếu bị dị ứng thực phẩm, hãy hỏi kỹ thành phần.";
  }

  if (/đi bằng|di chuyển|phà|transport|ferry/.test(q)) {
    return "Hãy kiểm tra lịch phà và các tuyến vận chuyển đang hoạt động trước khi khởi hành tại cổng thông tin Hải Phòng: https://haiphong.gov.vn/. Lịch và giá có thể thay đổi.";
  }

  if (/vịnh lan hạ|lan ha|bay/.test(q)) {
    return "Vịnh Lan Hạ nổi bật với núi đá vôi và cảnh quan biển. Tour có thể thay đổi theo thời tiết và quy định. Hãy chọn đơn vị có phép, xác nhận điểm đón và không đi nếu điều kiện không an toàn.";
  }

  return "Mình là trợ lý mẫu chạy ngay trong trình duyệt, chưa kết nối mô hình AI trực tuyến. Bạn có thể hỏi về lịch trình, ngân sách, nơi ở, ẩm thực, vịnh Lan Hạ hoặc phương tiện di chuyển. Với thông tin cập nhật theo ngày, hãy kiểm tra nguồn chính thức.";
}

function sendChat(question) {
  const text = question.trim();
  if (!text) return;

  addMessage(text, "user");

  // Trả lời theo các chủ đề được lập trình sẵn.
  window.setTimeout(() => {
    addMessage(getBotAnswer(text), "bot");
  }, 180);
}

document.getElementById("chatForm").addEventListener("submit", event => {
  event.preventDefault();

  const input = document.getElementById("chatInput");
  sendChat(input.value);
  input.value = "";
});

document.querySelectorAll("[data-question]").forEach(button => {
  button.addEventListener("click", () => {
    sendChat(button.dataset.question);
  });
});

// Khởi tạo trang
renderPlaces();
translatePage("vi");
