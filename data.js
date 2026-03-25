// 巨鲸兽药 - 产品数据
// 此文件存储所有产品信息，可通过后台管理界面编辑

const COMPANY_INFO = {
    name: "四川巨鲸兽药销售有限公司",
    nameEn: "GIANT WHALE",
    slogan: "守护动物健康<br><span>共创美好未来</span>",
    description: "福建巨鲸生物科技集团是一家集饲料营养研发、生产和销售为一体的大型农牧企业集团，拥有29家分子公司，饲料年产能超过800万吨。四川巨鲸兽药销售有限公司是集团控股的动物保健品销售公司，拥有通过农业部新版GMP认证的17种剂型和8个车间及18条生产线，是GSP认证企业，销售网络遍及全国二十多个省市。",
    established: "2015",
    address: "四川省德阳市中江县经济开发区",
    phone: "",
    email: "",
    stats: {
        years: "10+",
        products: "30+",
        customers: "5000+"
    },
    highlights: ["GMP认证", "GSP认证", "17种剂型", "18条生产线", "全国销售网络"],
    features: [
        "粉针剂、粉剂/散剂/预混剂、片剂(含中药提取)/颗粒剂(含中药提取)/丸剂(含中药提取)/胶囊剂",
        "最终灭菌小容量注射剂(含中药提取)/最终灭菌大容量非静脉注射剂(含中药提取)/口服溶液剂(含中药提取)",
        "消毒剂(固体)、非氯消毒剂(液体)/杀虫剂/透皮溶液剂/搽剂、中药提取(甘草浸膏)"
    ]
};

const PRODUCTS = [
    {
        id: 1,
        name: "板青颗粒",
        spec: "500g × 20袋/件",
        category: "清热解毒",
        image: "images/banqing.png",
        icon: "⚡",
        highlights: ["清热解毒", "凉血利咽", "抗菌消炎", "抗病毒"],
        description: "高纯度超浓缩颗粒，选用优质板蓝根、大青叶精心研制。具有清热解毒、凉血利咽，抗菌消炎、抗病毒、增加免疫力的功效。",
        ingredients: "板蓝根、大青叶",
        effects: [
            "防治重症感冒、口蹄疫、圆环",
            "防治温热型疾病及细菌、病毒混合感染",
            "增加免疫力，提高机体抗病能力"
        ],
        usage: {
            method: "治疗：猪、牛、羊每公斤体重0.2克，分早晚各一次灌服\n混饮：本品1000克兑水1吨\n拌料：本品1000克拌料0.5吨，连用5-7天",
            note: "保健用量减半"
        },
        featured: false
    },
    {
        id: 2,
        name: "肥美健",
        spec: "1000g/袋 × 15袋/桶",
        category: "促生长",
        image: "images/feimeijian.png",
        icon: "🌿",
        highlights: ["降低料肉比", "缩短出栏", "提高屠宰率"],
        description: "促生长型饲料添加剂，含有共轭亚油酸、植物提取素、多种维生素、寡聚糖、活性多肽等多种活性成分，全面促进动物生长。",
        ingredients: "共轭亚油酸、植物提取素、多种维生素、寡聚糖、活性多肽、复合氨基酸、水解矿物质",
        effects: [
            "降低脂肪生成率，提高瘦肉率",
            "促进小肠绒毛生长，提高吸收率",
            "补充必需氨基酸，调节激素平衡"
        ],
        usage: {
            method: "全程添加：每1kg本品拌料500kg\n后期催肥：每1kg本品拌料330kg，连用30天\n代替油脂：每1kg本品拌料200kg",
            note: "20kg以上猪使用至出栏"
        },
        featured: false
    },
    {
        id: 3,
        name: "复方麻黄散",
        spec: "500g/包 × 20包/件",
        category: "止咳平喘",
        image: "images/fufangmahuang.png",
        icon: "🌿",
        highlights: ["中药超微粉", "止咳平喘", "适口性好"],
        description: "中药组方精制，含有麻黄、桔梗、薄荷、氯化铵、黄芪等成分。超微粉碎工艺，起效快，麻黄含量约为麻杏石甘散的2.5倍。",
        ingredients: "麻黄、桔梗、薄荷、氯化铵(31.5%)、黄芪",
        effects: [
            "强大止咳平喘、强心宣肺",
            "排脓利器，专排肺脓",
            "调节免疫功能，增加肺部免疫力"
        ],
        usage: {
            method: "支原体肺炎：本品1-2kg+替米考星1kg拌料1吨\n胸膜肺炎：本品2kg+氟苯尼考1kg拌料1吨",
            note: "散剂易于分散、溶出快、吸收快、起效快"
        },
        featured: false
    },
    {
        id: 4,
        name: "芪板青颗粒",
        spec: "500g/袋 × 20袋/箱",
        category: "抗病毒",
        image: "images/qibanqing.png",
        icon: "🔬",
        highlights: ["纯", "强", "稳", "速溶"],
        description: "浸膏颗粒型，含有板蓝根、大青叶、黄芪、蒲公英、金银花、甘草等成分。黄芪多糖纯度85%以上，药物活性强。",
        ingredients: "板蓝根、大青叶、黄芪、蒲公英、金银花、甘草",
        effects: [
            "独特抗病毒功效，减少蓝耳病、猪流感发生",
            "有效防治天气多变引起的猪流感",
            "减少应激，提高抗应激能力"
        ],
        usage: {
            method: "常规保健：500g拌料1吨或饮水1-2吨\n仔猪断奶：断奶前3天至后7天\n免疫前后：500g拌料1吨或饮水2000L",
            note: "视疾病程度可加倍使用"
        },
        featured: true
    },
    {
        id: 5,
        name: "威邦元 2.0",
        spec: "1000g/袋",
        category: "抗病毒",
        image: "images/weibangyuan2.png",
        icon: "🛡️",
        highlights: ["囊膜病毒克星", "蓝耳病毒", "流感病毒"],
        description: "专为囊膜病毒设计，含α-单月桂酸甘油酯、核苷酸、糖萜素、黄芪提取物、金银花提取物等有效成分，抑制病毒复制和传播。",
        ingredients: "α-单月桂酸甘油酯、核苷酸、糖萜素、黄芪提取物、金银花提取物",
        effects: [
            "有效抑制蓝耳病毒、传染性胃肠炎、伪狂犬",
            "提高T淋巴细胞转化率，增强免疫力",
            "改善母猪生殖机能，提高发情配种率"
        ],
        usage: {
            method: "后备种猪：本品1000g拌料1000kg，连用10-15天\n母猪群：每月定期使用10-15天\n保育猪：断奶一周后使用10-15天",
            note: "混合时需混合均匀"
        },
        featured: true
    },
    {
        id: 6,
        name: "威邦元",
        spec: "200g/包 × 5包/桶 × 6桶/箱",
        category: "抗病毒",
        image: "images/weibangyuan.png",
        icon: "🛡️",
        highlights: ["囊膜克星", "蓝耳病毒", "流感病毒"],
        description: "经典款囊膜病毒抑制剂，含α-单月桂酸甘油酯、核苷酸、糖萜素等成分，有效改善母猪繁殖性能。",
        ingredients: "α-单月桂酸甘油酯、核苷酸、糖萜素、黄芪提取物、金银花提取物",
        effects: [
            "改善母猪生殖机能，提高发情配种率",
            "清热解毒，促进内毒素排出",
            "有助于体温恢复正常"
        ],
        usage: {
            method: "后备种猪：本品1000g拌料1000kg，连用10-15天\n母猪群：每月定期使用10-15天\n保育猪：断奶一周后使用10-15天",
            note: "包装开启后最好一次性用完"
        },
        featured: false
    },
    {
        id: 7,
        name: "茵栀解毒颗粒",
        spec: "500g × 20包/件",
        category: "保肝护肾",
        image: "images/yinzhijiedu.png",
        icon: "💧",
        highlights: ["利湿退黄", "清热解毒", "保肝护肾"],
        description: "含茵陈、栀子、虎杖、黄芩、钩藤等成分。速溶配方，入水即溶，不堵水线。保肝解毒，强肾排毒，双重保护。",
        ingredients: "茵陈、栀子、虎杖、黄芩、钩藤",
        effects: [
            "保肝解毒：修复受损肝功能，恢复酶系统",
            "强肾排毒：增强肾脏过滤功能",
            "防治病毒性肝炎、药物性肝炎"
        ],
        usage: {
            method: "混饲或混饮：每1吨料或2吨水添加本品1000g\n连用：3-5天",
            note: "重症用量加倍"
        },
        featured: false
    }
];

// 保存数据到localStorage
function saveData() {
    localStorage.setItem('giantWhale_data', JSON.stringify({
        company: COMPANY_INFO,
        products: PRODUCTS
    }));
}

// 从localStorage加载数据
function loadData() {
    const saved = localStorage.getItem('giantWhale_data');
    if (saved) {
        const data = JSON.parse(saved);
        Object.assign(COMPANY_INFO, data.company);
        PRODUCTS.length = 0;
        data.products.forEach(p => PRODUCTS.push(p));
    }
}

// 初始化
loadData();
