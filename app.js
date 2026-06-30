/* Public share build: rawText fields removed on 2026-06-30. */
﻿const dataDates = ["2026-06-29", "2026-06-28", "2026-06-26", "2026-06-25", "2026-06-24", "2026-06-23", "2026-06-22", "2026-06-21", "2026-06-19", "2026-06-18", "2026-06-17"];

const sectors = [
  {
    name: "AI",
    color: "#2f668d",
    children: [
      ["光模块", 89, 5],
      ["光纤", 82, 3],
      ["PCB", 88, 6],
      ["电容电感", 91, 6],
      ["AI电源", 83, 4],
      ["液冷", 84, 4],
      ["存储/HBM", 78, 3],
      ["先进封装", 74, 3],
      ["端侧AI", 61, 2],
    ],
  },
  {
    name: "国产",
    color: "#1f7a4d",
    children: [
      ["国产算力", 92, 5],
      ["国产半导体设备", 76, 3],
      ["国产半导体零部件", 71, 3],
    ],
  },
  {
    name: "锂电",
    color: "#b98024",
    children: [
      ["锂矿", 54, 1],
      ["锂电材料", 63, 2],
      ["锂电池", 58, 2],
      ["储能", 69, 3],
    ],
  },
  {
    name: "有色",
    color: "#8b5d3d",
    children: [
      ["铜", 76, 3],
      ["铝", 57, 1],
      ["黄金", 64, 2],
      ["钨", 86, 5],
      ["锡", 73, 3],
      ["稀土", 80, 4],
    ],
  },
  {
    name: "其他",
    color: "#7062a8",
    children: [
      ["红利", 62, 2],
      ["弱跟踪池", 35, 0],
    ],
  },
];

const sectorDetails = {
  PCB: {
    score: 88,
    revision: "+22%",
    meta: "6 条精选 · PCB 上游",
    date: "2026-06-18",
    changes: [
      {
        title: "铜箔 HVLP4 加速量化",
        summary:
          "高速 PCB 对低轮廓铜箔要求提升，HVLP3/4 成为台系和头部 CCL 厂验证重点。若订单从送样进入小批量，铜箔环节的估值锚会从锂电铜箔切到 AI 服务器 PCB 铜箔。",
        companies: [
          { name: "铜冠铜箔", role: "PCB铜箔弹性", highlight: "" },
          { name: "德福科技", role: "HVLP送样", highlight: "" },
          { name: "宝鼎科技", role: "铜箔扩产", highlight: "" },
          { name: "江西铜业", role: "铜箔平台", highlight: "HVLP3 通过台光验证", joke: true },
        ],
      },
      {
        title: "CCL 行业涨价",
        summary:
          "AI 服务器 PCB 价值量提升，叠加电子布、铜箔、树脂等上游约束，CCL 具备成本推动和需求拉动的双重涨价逻辑。",
        companies: [
          { name: "生益科技", role: "A股 CCL 龙头", highlight: "" },
          { name: "建滔积层板", role: "港股 CCL 龙头", highlight: "官宣 CCL 产品价格上涨 15%", joke: true },
          { name: "华正新材", role: "高频高速板材", highlight: "" },
        ],
      },
      {
        title: "RCC 架构缓解电子布紧缺",
        summary:
          "光模块 PCB 中 RCC 纯树脂直涂铜箔方案可减少玻纤布依赖，若被验证，可能改变部分 PCB 上游材料的弹性排序。",
        companies: [
          { name: "迅捷兴", role: "RCC新工艺", highlight: "段子提到高端光模块 PCB 的 RCC 架构机会", joke: true },
          { name: "兴森科技", role: "载板/MSAP", highlight: "" },
        ],
      },
    ],
  },
  电容电感: {
    score: 91,
    revision: "+26%",
    meta: "6 条精选 · 被动元件通胀",
    date: "2026-06-18",
    changes: [
      {
        title: "MLCC 粉体、镍粉、高容产品多点共振",
        summary:
          "国瓷材料、博迁新材、昀冢科技、江海股份等多次出现，说明交易点从单一涨价扩展到 AI 服务器被动元件价值量重估。",
        companies: [
          { name: "国瓷材料", role: "MLCC陶瓷粉体", highlight: "多条段子重复提到高端粉体与重稀土约束", joke: true },
          { name: "博迁新材", role: "MLCC镍粉", highlight: "H股递表 + 高端镍粉弹性", joke: true },
          { name: "昀冢科技", role: "高容MLCC", highlight: "高容产品涨价与产能爬坡", joke: true },
          { name: "江海股份", role: "MLPC/超级电容", highlight: "AI服务器电容链条延伸", joke: true },
        ],
      },
      {
        title: "AI服务器用量驱动品类扩张",
        summary:
          "段子提到 AMD MI450 等新平台 MLCC 用量提升，后续应跟踪单机用量、产品规格和价格传导。",
        companies: [
          { name: "风华高科", role: "A股MLCC", highlight: "" },
          { name: "三环集团", role: "陶瓷元件", highlight: "" },
          { name: "火炬电子", role: "电容平台", highlight: "超级电容并购带来 AI 电源新叙事", joke: true },
        ],
      },
    ],
  },
  光模块: {
    score: 89,
    revision: "+18%",
    meta: "5 条精选 · 结构件/材料/测试",
    date: "2026-06-18",
    changes: [
      {
        title: "1.6T 带动材料和测试设备扩散",
        summary:
          "高功耗和高速率推动结构件、锡膏、采样示波器、液冷连接器等非传统光模块标的被重新挖掘。",
        companies: [
          { name: "斯瑞新材", role: "铜合金壳体", highlight: "800G/1.6T 光模块壳体中小批量供货", joke: true },
          { name: "唯特偶", role: "T7锡膏", highlight: "T7 超细锡粉/锡膏切入 800G/1.6T 光模块", joke: true },
          { name: "联讯仪器", role: "采样示波器", highlight: "1.6T 采样示波器壁垒被强调", joke: true },
        ],
      },
      {
        title: "光模块液冷从 0 到 1",
        summary:
          "1.6T 光模块功耗提升，液冷由辅助散热进入主流散热讨论，连接器和结构件公司可能受益。",
        companies: [
          { name: "奕东电子", role: "cage/液冷IO", highlight: "段子反复命中光模块 cage 和液冷 IO", joke: true },
          { name: "鼎通科技", role: "连接器", highlight: "" },
          { name: "达瑞电子", role: "热管理材料", highlight: "" },
        ],
      },
    ],
  },
  钨: {
    score: 86,
    revision: "+19%",
    meta: "5 条精选 · 资源 + PCB耗材",
    date: "2026-06-18",
    changes: [
      {
        title: "钨价上行叠加 PCB 钻针耗材",
        summary:
          "钨不只是资源品，还被映射到高端棒材、钻针、PCB 耗材，计算器应拆成资源价格和加工利润两层。",
        companies: [
          { name: "中钨高新", role: "钨资源/金洲精工", highlight: "段子强调高长径比钻针及棒料紧缺", joke: true },
          { name: "厦门钨业", role: "钨资源", highlight: "同时被纳入钨丝、六氟化钨和 MLCC 逻辑", joke: true },
          { name: "鼎泰高科", role: "PCB钻针", highlight: "" },
          { name: "欧科亿", role: "刀具/棒材", highlight: "" },
        ],
      },
    ],
  },
  国产算力: {
    score: 92,
    revision: "+17%",
    meta: "5 条精选 · 国产芯片重估",
    date: "2026-06-18",
    changes: [
      {
        title: "国产 GPU 价格和毛利率预期上移",
        summary:
          "段子提到国产算力供不应求、头部厂商涨价、新产品回片和互联网大厂加量采购。该方向需要用订单、ASP、良率三件事验证。",
        companies: [
          { name: "寒武纪", role: "国产AI芯片", highlight: "多条算力段子重点提及", joke: true },
          { name: "海光信息", role: "国产算力", highlight: "国产算力组合核心标的", joke: true },
          { name: "中科曙光", role: "服务器/生态", highlight: "" },
        ],
      },
    ],
  },
  AI电源: {
    score: 83,
    revision: "+15%",
    meta: "4 条精选 · 电源/备电/超容",
    date: "2026-06-18",
    changes: [
      {
        title: "AIDC 电源和瞬时备电成为新分支",
        summary:
          "AI 服务器功率密度提升后，电源、超级电容、MLPC、边柜备电等环节开始被资金关注。",
        companies: [
          { name: "江海股份", role: "MLPC/超级电容", highlight: "AI服务器电容持续通胀", joke: true },
          { name: "火炬电子", role: "电容平台", highlight: "收购超级电容股权，打开 AI 电源叙事", joke: true },
          { name: "崧盛股份", role: "AI电源", highlight: "AI电源送样北美客户", joke: true },
          { name: "鹏辉能源", role: "AIDC备电", highlight: "AIDC专用电芯小批量交付", joke: true },
        ],
      },
    ],
  },
};

const signals = [
// BEGIN AUTO IMPORT ZSXQ SIGNALS
{
  "date": "2026-06-29",
  "title": "半导体设备｜前无古人后无来者之贝塔",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "存储/HBM",
    "先进封装",
    "北方华创",
    "中微公司",
    "拓荆科技",
    "精测电子",
    "芯源微"
  ],
  "source": "段子",
  "sourceTitle": "半导体设备｜前无古人后无来者之贝塔",
  "importance": 9.5,
  "confidence": 8.2,
  "upside": 57,
  "summary": "来源/title：半导体设备｜前无古人后无来者之贝塔。韩国存储举国扩产、海外设备排期到2028年、先进封装同步加码，设备空间被上修至4000亿元，前后道设备共同进入高景气。",
  "summaryBody": "韩国存储举国扩产、海外设备排期到2028年、先进封装同步加码，设备空间被上修至4000亿元，前后道设备共同进入高景气。",
  "rawText": "",
  "topicId": "45544512554841118"
},
{
  "date": "2026-06-29",
  "title": "海力士/三星发布合计3130万亿韩元半导体投资计划",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "存储/HBM",
    "拓荆科技",
    "微导纳米",
    "中微公司",
    "精测电子",
    "中科飞测",
    "芯源微"
  ],
  "source": "段子",
  "sourceTitle": "海力士/三星发布合计3130万亿韩元半导体投资计划",
  "importance": 9.4,
  "confidence": 8.1,
  "upside": 56,
  "summary": "来源/title：海力士/三星发布合计3130万亿韩元半导体投资计划。韩国存储扩产叠加腾讯长鑫DRAM长协，继续看好存储扩产产业链的设备、材料和零部件。",
  "summaryBody": "韩国存储扩产叠加腾讯长鑫DRAM长协，继续看好存储扩产产业链的设备、材料和零部件。",
  "rawText": "",
  "topicId": "45544512524444518"
},
{
  "date": "2026-06-29",
  "title": "东方通信-半导体｜半导体设备市场天花板打开",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "AI芯片",
    "存储/HBM",
    "北方华创",
    "中微公司",
    "拓荆科技",
    "华海清科",
    "华峰测控"
  ],
  "source": "段子",
  "sourceTitle": "东方通信-半导体｜半导体设备市场天花板打开",
  "importance": 9.4,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：东方通信-半导体｜半导体设备市场天花板打开。AI平权需要持续扩产，测算大陆本轮峰值设备投资约5000亿元，国产设备订单空间被上修。",
  "summaryBody": "AI平权需要持续扩产，测算大陆本轮峰值设备投资约5000亿元，国产设备订单空间被上修。",
  "rawText": "",
  "topicId": "22255214284258441"
},
{
  "date": "2026-06-29",
  "title": "功率半导体｜二轮调价全面开启",
  "sector": "AI",
  "tags": [
    "MOSFET",
    "功率半导体",
    "AI电源",
    "SiC",
    "华润微",
    "士兰微",
    "天岳先进",
    "芯联集成"
  ],
  "source": "段子",
  "sourceTitle": "功率半导体｜二轮调价全面开启",
  "importance": 9.1,
  "confidence": 7.6,
  "upside": 55,
  "summary": "来源/title：功率半导体｜二轮调价全面开启。央视定调功率半导体涨价+缺货，AI需求挤占产能，MOSFET/SiC/功率IDM进入二轮调价。",
  "summaryBody": "央视定调功率半导体涨价+缺货，AI需求挤占产能，MOSFET/SiC/功率IDM进入二轮调价。",
  "rawText": "",
  "topicId": "22255214858422251"
},
{
  "date": "2026-06-29",
  "title": "Txy｜半导体设备&国产算力",
  "sector": "国产",
  "tags": [
    "国产算力",
    "国产半导体设备",
    "GPU",
    "ASIC",
    "富创精密",
    "联动科技",
    "芯原股份",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "Txy｜半导体设备&国产算力",
  "importance": 9.0,
  "confidence": 7.7,
  "upside": 54,
  "summary": "来源/title：Txy｜半导体设备&国产算力。半导体设备两个月前前瞻判断兑现；国产算力新增GPU测试机联动科技、ASIC产能逻辑芯原股份两条线索。",
  "summaryBody": "半导体设备两个月前前瞻判断兑现；国产算力新增GPU测试机联动科技、ASIC产能逻辑芯原股份两条线索。",
  "rawText": "",
  "topicId": "22255214852288481"
},
{
  "date": "2026-06-29",
  "title": "东北计算机｜20260629行业更新",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "DRAM",
    "NAND",
    "MLCC",
    "玻璃基板",
    "MOSFET",
    "功率半导体",
    "三星电机"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜20260629行业更新",
  "importance": 9.0,
  "confidence": 7.7,
  "upside": 54,
  "summary": "来源/title：东北计算机｜20260629行业更新。韩国大规模存储扩产、美光强季报和千亿长单坐实AI内存周期，同时提及模拟及功率半导体7月新一轮涨价。",
  "summaryBody": "韩国大规模存储扩产、美光强季报和千亿长单坐实AI内存周期，同时提及模拟及功率半导体7月新一轮涨价。",
  "rawText": "",
  "topicId": "45544512551814158"
},
{
  "date": "2026-06-29",
  "title": "MLCC｜重视7月起原厂调价和调产",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "三星电机",
    "太阳诱电",
    "太诱",
    "风华高科",
    "三环集团",
    "华新科"
  ],
  "source": "卖方私信",
  "sourceTitle": "MLCC｜重视7月起原厂调价和调产",
  "importance": 9.0,
  "confidence": 7.6,
  "upside": 54,
  "summary": "来源/title：MLCC｜重视7月起原厂调价和调产。三星电机长协订单有进展，太诱7月对消费级部分料号涨价50-150%，日系转产AI服务器引发消费类供需失衡。",
  "summaryBody": "三星电机长协订单有进展，太诱7月对消费级部分料号涨价50-150%，日系转产AI服务器引发消费类供需失衡。",
  "rawText": "",
  "topicId": "82255214248555442"
},
{
  "date": "2026-06-29",
  "title": "天风电子｜半导体硅片涨价驱动大涨",
  "sector": "国产",
  "tags": [
    "国产半导体零部件",
    "硅片",
    "半导体硅片",
    "SOI",
    "重掺硅片",
    "沪硅产业",
    "立昂微",
    "西安奕斯伟"
  ],
  "source": "大涨大跌",
  "sourceTitle": "天风电子｜半导体硅片涨价驱动大涨",
  "importance": 9.0,
  "confidence": 7.4,
  "upside": 54,
  "summary": "来源/title：天风电子｜半导体硅片涨价驱动大涨。硅片行业从底部左侧进入景气右侧，AI算力、存储扩产、功率器件和国产替代推动12英寸硅片量价齐升。",
  "summaryBody": "硅片行业从底部左侧进入景气右侧，AI算力、存储扩产、功率器件和国产替代推动12英寸硅片量价齐升。",
  "rawText": "",
  "topicId": "55522515182255814"
},
{
  "date": "2026-06-29",
  "title": "具有高端功能的PCB永远紧缺&溢价",
  "sector": "AI",
  "tags": [
    "PCB",
    "mSAP",
    "三次电源PCB",
    "中富电路",
    "兴森科技",
    "红板科技",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "具有高端功能的PCB永远紧缺&溢价",
  "importance": 8.9,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：具有高端功能的PCB永远紧缺&溢价。中富电路三次电源PCB、兴森科技ABF/BT/Msap、红板科技mSAP产能锁定被重点推荐。",
  "summaryBody": "中富电路三次电源PCB、兴森科技ABF/BT/Msap、红板科技mSAP产能锁定被重点推荐。",
  "rawText": "",
  "topicId": "14422481281221412"
},
{
  "date": "2026-06-29",
  "title": "电子布景气仍在加速",
  "sector": "AI",
  "tags": [
    "PCB",
    "电子布",
    "CCL",
    "中国巨石",
    "建滔集团",
    "建滔积层板",
    "国际复材",
    "中材科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "电子布景气仍在加速",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：电子布景气仍在加速。科技调仓和获利盘导致回调，但电子布6-7月价格加速、CCL同步涨价，供需缺口仍在扩大。",
  "summaryBody": "科技调仓和获利盘导致回调，但电子布6-7月价格加速、CCL同步涨价，供需缺口仍在扩大。",
  "rawText": "",
  "topicId": "14422481524424222"
},
{
  "date": "2026-06-29",
  "title": "强推中船特气",
  "sector": "有色",
  "tags": [
    "钨",
    "六氟化钨",
    "WF6",
    "中船特气",
    "存储/HBM",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "强推中船特气",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：强推中船特气。中国对日制裁加严、钨为两用物项之一，海外WF6供给下半年预计收缩；存储扩产带动六氟化钨需求。",
  "summaryBody": "中国对日制裁加严、钨为两用物项之一，海外WF6供给下半年预计收缩；存储扩产带动六氟化钨需求。",
  "rawText": "",
  "topicId": "22255214512288281"
},
{
  "date": "2026-06-29",
  "title": "存储&先进封装猛猛扩产，利好上游设备&零部件",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "国产半导体零部件",
    "存储/HBM",
    "先进封装",
    "拓荆科技",
    "中微公司",
    "微导纳米",
    "北方华创"
  ],
  "source": "卖方私信",
  "sourceTitle": "存储&先进封装猛猛扩产，利好上游设备&零部件",
  "importance": 8.8,
  "confidence": 7.2,
  "upside": 53,
  "summary": "来源/title：存储&先进封装猛猛扩产，利好上游设备&零部件。设备和零部件清单明确，作为今日设备链广谱扩产信号补充。",
  "summaryBody": "设备和零部件清单明确，作为今日设备链广谱扩产信号补充。",
  "rawText": "",
  "topicId": "45544512451814218"
},
{
  "date": "2026-06-29",
  "title": "先进封装进入超级景气周期",
  "sector": "AI",
  "tags": [
    "先进封装",
    "GPU",
    "ASIC",
    "HBM",
    "DRAM",
    "长电科技",
    "甬矽电子",
    "盛合晶微"
  ],
  "source": "卖方私信",
  "sourceTitle": "先进封装进入超级景气周期",
  "importance": 8.8,
  "confidence": 7.2,
  "upside": 53,
  "summary": "来源/title：先进封装进入超级景气周期。国产GPU、ASIC、HBM、DRAM等AI芯片爆量带动先进封装扩产，长电、甬矽、盛合晶微等密集投资。",
  "summaryBody": "国产GPU、ASIC、HBM、DRAM等AI芯片爆量带动先进封装扩产，长电、甬矽、盛合晶微等密集投资。",
  "rawText": "",
  "topicId": "82255214512242542"
},
{
  "date": "2026-06-29",
  "title": "东吴环保公用｜美埃科技",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "国产半导体零部件",
    "存储/HBM",
    "洁净室",
    "FFU",
    "美埃科技",
    "台积电",
    "美光"
  ],
  "source": "段子",
  "sourceTitle": "东吴环保公用｜美埃科技",
  "importance": 8.7,
  "confidence": 7.3,
  "upside": 52,
  "summary": "来源/title：东吴环保公用｜美埃科技。AI与存储扩产带动洁净室FFU和耗材需求，公司作为半导体洁净核心设备与耗材龙头受益。",
  "summaryBody": "AI与存储扩产带动洁净室FFU和耗材需求，公司作为半导体洁净核心设备与耗材龙头受益。",
  "rawText": "",
  "topicId": "82255214284251542"
},
{
  "date": "2026-06-29",
  "title": "东吴电子｜先进封装集体扩产",
  "sector": "AI",
  "tags": [
    "先进封装",
    "甬矽电子",
    "通富微电",
    "盛合晶微",
    "长电科技",
    "汇成股份",
    "佰维存储",
    "晶方科技"
  ],
  "source": "段子",
  "sourceTitle": "东吴电子｜先进封装集体扩产",
  "importance": 8.7,
  "confidence": 7.3,
  "upside": 52,
  "summary": "来源/title：东吴电子｜先进封装集体扩产。多家OSAT同步扩产先进封装，AI算力、2.5D/3D/Chiplet和存储国产替代带动设备、零部件、材料和载板机会。",
  "summaryBody": "多家OSAT同步扩产先进封装，AI算力、2.5D/3D/Chiplet和存储国产替代带动设备、零部件、材料和载板机会。",
  "rawText": "",
  "topicId": "45544512554888158"
},
{
  "date": "2026-06-29",
  "title": "光纤0629｜拨乱反正，等待主升",
  "sector": "AI",
  "tags": [
    "光纤",
    "MPO",
    "CPO",
    "NPO",
    "长飞光纤",
    "亨通光电",
    "通鼎互联",
    "长盈通"
  ],
  "source": "卖方私信",
  "sourceTitle": "光纤0629｜拨乱反正，等待主升",
  "importance": 8.7,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：光纤0629｜拨乱反正，等待主升。光纤两年内不会光伏化，北美涨价刚开始，中报预告季继续拥抱确定性。",
  "summaryBody": "光纤两年内不会光伏化，北美涨价刚开始，中报预告季继续拥抱确定性。",
  "rawText": "",
  "topicId": "22255214854444881"
},
{
  "date": "2026-06-29",
  "title": "国盛电新｜AI电源行业点评",
  "sector": "AI",
  "tags": [
    "AI电源",
    "800V HVDC",
    "SST",
    "麦格米特",
    "欧陆通",
    "富特科技",
    "台达",
    "光宝科技"
  ],
  "source": "段子",
  "sourceTitle": "国盛电新｜AI电源行业点评",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：国盛电新｜AI电源行业点评。AI服务器电源高景气延续，800V HVDC推动供配电架构升级，大陆厂商逐步起量。",
  "summaryBody": "AI服务器电源高景气延续，800V HVDC推动供配电架构升级，大陆厂商逐步起量。",
  "rawText": "",
  "topicId": "14422481448511552"
},
{
  "date": "2026-06-29",
  "title": "国联民生计算机｜DeepSeek v4翻倍涨价",
  "sector": "AI",
  "tags": [
    "AI",
    "DeepSeek",
    "国产算力",
    "Token",
    "大模型"
  ],
  "source": "卖方私信",
  "sourceTitle": "国联民生计算机｜DeepSeek v4翻倍涨价",
  "importance": 8.5,
  "confidence": 7.1,
  "upside": 51,
  "summary": "来源/title：国联民生计算机｜DeepSeek v4翻倍涨价。DeepSeek面向开发者通知高峰时段价格全面翻倍，大模型开启AI产业正循环。",
  "summaryBody": "DeepSeek面向开发者通知高峰时段价格全面翻倍，大模型开启AI产业正循环。",
  "rawText": "",
  "topicId": "14422481445252452"
},
{
  "date": "2026-06-29",
  "title": "DB电新&AI｜洪田股份更新",
  "sector": "AI",
  "tags": [
    "PCB",
    "铜箔",
    "PCB设备",
    "mSAP",
    "LDI设备",
    "洪田股份",
    "东莞速远",
    "洪镭光学"
  ],
  "source": "卖方私信",
  "sourceTitle": "DB电新&AI｜洪田股份更新",
  "importance": 8.5,
  "confidence": 7.0,
  "upside": 51,
  "summary": "来源/title：DB电新&AI｜洪田股份更新。锂电铜箔设备、PCB电镀设备、LDI设备多资产共振，PCB设备订单排满且产能预计翻倍。",
  "summaryBody": "锂电铜箔设备、PCB电镀设备、LDI设备多资产共振，PCB设备订单排满且产能预计翻倍。",
  "rawText": "",
  "topicId": "82255214288528822"
},
{
  "date": "2026-06-29",
  "title": "大族激光调研更新0629",
  "sector": "AI",
  "tags": [
    "光纤",
    "空芯光纤",
    "预制棒",
    "大族激光",
    "领纤科技",
    "科技"
  ],
  "source": "段子",
  "sourceTitle": "大族激光调研更新0629",
  "importance": 8.4,
  "confidence": 7.1,
  "upside": 50,
  "summary": "来源/title：大族激光调研更新0629。光纤预制棒首期计划明年6月投产，领纤科技加快推进空芯光纤商业化。",
  "summaryBody": "光纤预制棒首期计划明年6月投产，领纤科技加快推进空芯光纤商业化。",
  "rawText": "",
  "topicId": "45544512554858428"
},
{
  "date": "2026-06-28",
  "title": "开源电子｜近期半导体设备相关信息汇总",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "国产半导体零部件",
    "存储",
    "半导体设备",
    "神工股份",
    "珂玛科技",
    "华峰测控",
    "强一股份"
  ],
  "source": "卖方私信",
  "sourceTitle": "开源电子｜近期半导体设备相关信息汇总",
  "importance": 9.4,
  "confidence": 8.1,
  "upside": 56,
  "summary": "来源/title：开源电子｜近期半导体设备相关信息汇总。韩国和美光Capex上修、苹果寻求长鑫采购获批、日本设备商向上游提价，指向半导体设备/零部件成为扩产瓶颈。",
  "summaryBody": "韩国和美光Capex上修、苹果寻求长鑫采购获批、日本设备商向上游提价，指向半导体设备/零部件成为扩产瓶颈。",
  "rawText": "",
  "topicId": "45544512488554848"
},
{
  "date": "2026-06-28",
  "title": "天风电新｜PCB产业链三大观点更新0628",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "铜箔",
    "电子布",
    "载板",
    "铜冠铜箔",
    "海亮股份",
    "方邦股份"
  ],
  "source": "段子",
  "sourceTitle": "天风电新｜PCB产业链三大观点更新0628",
  "importance": 9.4,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：天风电新｜PCB产业链三大观点更新0628。二代布/HVLP3-4、T布/载体铜箔、CCL和载板被作为PCB链条最强涨价弹性方向，预计下周CCL涨价10%+。",
  "summaryBody": "二代布/HVLP3-4、T布/载体铜箔、CCL和载板被作为PCB链条最强涨价弹性方向，预计下周CCL涨价10%+。",
  "rawText": "",
  "topicId": "22255212114454111"
},
{
  "date": "2026-06-28",
  "title": "MLCC周观点更新260628",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "村田",
    "三星",
    "国巨",
    "华科",
    "华新科",
    "太诱"
  ],
  "source": "段子",
  "sourceTitle": "MLCC周观点更新260628",
  "importance": 9.3,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：MLCC周观点更新260628。Rubin超预期导致高端产能被占满，村田暂停接单清理产能，7月原厂涨价催化密集，MLCC被判断只是涨价开始。",
  "summaryBody": "Rubin超预期导致高端产能被占满，村田暂停接单清理产能，7月原厂涨价催化密集，MLCC被判断只是涨价开始。",
  "rawText": "",
  "topicId": "45544512488258118"
},
{
  "date": "2026-06-28",
  "title": "CT新兴产业｜真实的光纤扩产壁垒和需求",
  "sector": "AI",
  "tags": [
    "光纤",
    "MPO",
    "CPO",
    "NPO",
    "保偏光纤",
    "长飞光纤",
    "烽火通信",
    "长盈通"
  ],
  "source": "卖方私信",
  "sourceTitle": "CT新兴产业｜真实的光纤扩产壁垒和需求",
  "importance": 9.2,
  "confidence": 8.0,
  "upside": 55,
  "summary": "来源/title：CT新兴产业｜真实的光纤扩产壁垒和需求。供给端高纯硅料、设备、工艺和环评多重约束，需求端AI数据中心、CPO/NPO、无人机和运营商共振，光纤涨价弹性继续释放。",
  "summaryBody": "供给端高纯硅料、设备、工艺和环评多重约束，需求端AI数据中心、CPO/NPO、无人机和运营商共振，光纤涨价弹性继续释放。",
  "rawText": "",
  "topicId": "45544515111554418"
},
{
  "date": "2026-06-28",
  "title": "东北计算机｜PCB发函确认涨价，上游材料涨价传导开启",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "铜箔",
    "树脂",
    "硅微粉",
    "宏和科技",
    "中材科技"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜PCB发函确认涨价，上游材料涨价传导开启",
  "importance": 9.1,
  "confidence": 7.9,
  "upside": 55,
  "summary": "来源/title：东北计算机｜PCB发函确认涨价，上游材料涨价传导开启。板厂告知函确认PCB核心材料缺货、交期拉长、涨价同步，上游材料进入超级卖方市场。",
  "summaryBody": "板厂告知函确认PCB核心材料缺货、交期拉长、涨价同步，上游材料进入超级卖方市场。",
  "rawText": "",
  "topicId": "45544515254258528"
},
{
  "date": "2026-06-28",
  "title": "260628｜继续享受设备和涨价线的主升",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "存储",
    "MLCC",
    "模拟",
    "Fab",
    "拓荆科技",
    "北方华创",
    "精测电子"
  ],
  "source": "卖方私信",
  "sourceTitle": "260628｜继续享受设备和涨价线的主升",
  "importance": 9.1,
  "confidence": 7.6,
  "upside": 55,
  "summary": "来源/title：260628｜继续享受设备和涨价线的主升。设备、存储、MLCC、模拟、Fab被归为本轮硬件涨价和扩产主线，重点推荐拓荆、北方华创、精测、广钢、珂玛等。",
  "summaryBody": "设备、存储、MLCC、模拟、Fab被归为本轮硬件涨价和扩产主线，重点推荐拓荆、北方华创、精测、广钢、珂玛等。",
  "rawText": "",
  "topicId": "55522584212481424"
},
{
  "date": "2026-06-28",
  "title": "DW电子｜东芯股份：SLC NAND利基涨价核心标的",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "SLC NAND",
    "MLC NAND",
    "东芯股份",
    "砺算",
    "工业存储",
    "网通",
    "存储"
  ],
  "source": "段子",
  "sourceTitle": "DW电子｜东芯股份：SLC NAND利基涨价核心标的",
  "importance": 9.0,
  "confidence": 7.8,
  "upside": 54,
  "summary": "来源/title：DW电子｜东芯股份：SLC NAND利基涨价核心标的。SLC Q1/Q2涨价50%，Q3仍有望再涨50%，东芯存储利润与砺算期权被同步重估。",
  "summaryBody": "SLC Q1/Q2涨价50%，Q3仍有望再涨50%，东芯存储利润与砺算期权被同步重估。",
  "rawText": "",
  "topicId": "22255214588422821"
},
{
  "date": "2026-06-28",
  "title": "东北计算机｜20260628行业周报",
  "sector": "AI",
  "tags": [
    "AI",
    "PCB",
    "玻璃基板",
    "液冷",
    "AI电源",
    "存储/HBM",
    "光纤",
    "电容电感"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜20260628行业周报",
  "importance": 8.9,
  "confidence": 7.5,
  "upside": 53,
  "summary": "来源/title：东北计算机｜20260628行业周报。继续关注业绩线和0-1产业链，强调PCB上游、玻璃基板、液冷/电源、存储、光纤、电容，并纳入大族激光光纤预制棒项目。",
  "summaryBody": "继续关注业绩线和0-1产业链，强调PCB上游、玻璃基板、液冷/电源、存储、光纤、电容，并纳入大族激光光纤预制棒项目。",
  "rawText": "",
  "topicId": "14422481252818252"
},
{
  "date": "2026-06-28",
  "title": "中信通信｜华丰科技调研更新0628",
  "sector": "国产",
  "tags": [
    "国产算力",
    "光模块",
    "CPO",
    "NPO",
    "Socket连接器",
    "华丰科技",
    "光迅科技",
    "华工科技"
  ],
  "source": "段子",
  "sourceTitle": "中信通信｜华丰科技调研更新0628",
  "importance": 8.8,
  "confidence": 7.5,
  "upside": 53,
  "summary": "来源/title：中信通信｜华丰科技调研更新0628。昇腾950线模组6月大规模交付，NPO Socket和6.4T硅光NPO打开国产算力光铜互联弹性。",
  "summaryBody": "昇腾950线模组6月大规模交付，NPO Socket和6.4T硅光NPO打开国产算力光铜互联弹性。",
  "rawText": "",
  "topicId": "14422484881882512"
},
{
  "date": "2026-06-28",
  "title": "DBJSJ｜周观点更新0628",
  "sector": "AI",
  "tags": [
    "AI",
    "PCB",
    "CCL",
    "存储/HBM",
    "光纤",
    "电容电感",
    "液冷",
    "AI电源"
  ],
  "source": "段子",
  "sourceTitle": "DBJSJ｜周观点更新0628",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：DBJSJ｜周观点更新0628。把PCB上游、存储、光纤、电容、液冷电源、玻璃基板、扩产链、国产链放进同一条周末业绩线和0-1产业链框架。",
  "summaryBody": "把PCB上游、存储、光纤、电容、液冷电源、玻璃基板、扩产链、国产链放进同一条周末业绩线和0-1产业链框架。",
  "rawText": "",
  "topicId": "14422481221152442"
},
{
  "date": "2026-06-28",
  "title": "AI材料观点更新0628",
  "sector": "AI",
  "tags": [
    "AI",
    "PCB",
    "电子布",
    "树脂",
    "硅微粉",
    "电子气体",
    "六氟化钨",
    "超临界二氧化碳"
  ],
  "source": "段子",
  "sourceTitle": "AI材料观点更新0628",
  "importance": 8.8,
  "confidence": 7.3,
  "upside": 53,
  "summary": "来源/title：AI材料观点更新0628。电子布、树脂、硅微粉、六氟化钨、超临界二氧化碳、玻璃基板、精细氟化工被放入AI材料涨价链条。",
  "summaryBody": "电子布、树脂、硅微粉、六氟化钨、超临界二氧化碳、玻璃基板、精细氟化工被放入AI材料涨价链条。",
  "rawText": "",
  "topicId": "22255212112222411"
},
{
  "date": "2026-06-28",
  "title": "旗滨集团｜玻璃基板产业化提速",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "旗滨集团",
    "UTG",
    "导电玻璃",
    "高硼硅低介电玻璃"
  ],
  "source": "卖方私信",
  "sourceTitle": "旗滨集团｜玻璃基板产业化提速",
  "importance": 8.7,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：旗滨集团｜玻璃基板产业化提速。公司拟定增14.3亿元投向UTG制造平台及玻璃基板等项目，200×200mm产品已小批量送样验证。",
  "summaryBody": "公司拟定增14.3亿元投向UTG制造平台及玻璃基板等项目，200×200mm产品已小批量送样验证。",
  "rawText": "",
  "topicId": "14422484152855112"
},
{
  "date": "2026-06-28",
  "title": "华创电新｜三星电机MLCC再签美国P大单",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "三星电机",
    "AI服务器",
    "三环集团",
    "风华高科",
    "信维通信",
    "AI"
  ],
  "source": "段子",
  "sourceTitle": "华创电新｜三星电机MLCC再签美国P大单",
  "importance": 8.7,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：华创电新｜三星电机MLCC再签美国P大单。三星电机与美国P谈判AI服务器MLCC订单，合同规模约5000亿韩元，强化AI MLCC订单外溢逻辑。",
  "summaryBody": "三星电机与美国P谈判AI服务器MLCC订单，合同规模约5000亿韩元，强化AI MLCC订单外溢逻辑。",
  "rawText": "",
  "topicId": "82255212114182482"
},
{
  "date": "2026-06-28",
  "title": "康宁｜GlassBridge澄清声明",
  "sector": "AI",
  "tags": [
    "光纤",
    "光模块",
    "CPO",
    "GlassBridge",
    "玻璃基板",
    "FAU",
    "康宁",
    "光互连"
  ],
  "source": "段子",
  "sourceTitle": "康宁｜GlassBridge澄清声明",
  "importance": 8.6,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：康宁｜GlassBridge澄清声明。GlassBridge是CPO互补型耦合方案，不替代光纤和FAU，2026-2027主流算力硬件仍以传统光纤耦合方案为主。",
  "summaryBody": "GlassBridge是CPO互补型耦合方案，不替代光纤和FAU，2026-2027主流算力硬件仍以传统光纤耦合方案为主。",
  "rawText": "",
  "topicId": "82255212148815822"
},
{
  "date": "2026-06-28",
  "title": "申万宏源通信｜周观点更新",
  "sector": "AI",
  "tags": [
    "光模块",
    "光纤",
    "CPO",
    "NPO",
    "GlassBridge",
    "FAU",
    "MPO",
    "致尚科技"
  ],
  "source": "段子",
  "sourceTitle": "申万宏源通信｜周观点更新",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：申万宏源通信｜周观点更新。GlassBridge推动FAU/无源器件讨论，光纤涨价仍为错杀修复方向，NPO/CPO多路线并存。",
  "summaryBody": "GlassBridge推动FAU/无源器件讨论，光纤涨价仍为错杀修复方向，NPO/CPO多路线并存。",
  "rawText": "",
  "topicId": "14422484812145252"
},
{
  "date": "2026-06-28",
  "title": "中泰建材&化工｜高纯二氧化碳或短缺",
  "sector": "其他",
  "tags": [
    "国产半导体材料",
    "电子气体",
    "高纯二氧化碳",
    "超临界清洗",
    "广钢气体",
    "金宏气体",
    "三星电子",
    "SK海力士"
  ],
  "source": "段子",
  "sourceTitle": "中泰建材&化工｜高纯二氧化碳或短缺",
  "importance": 8.5,
  "confidence": 7.2,
  "upside": 51,
  "summary": "来源/title：中泰建材&化工｜高纯二氧化碳或短缺。炼化开工下降导致半导体超临界清洗用高纯CO2库存跌破一个月，液态二氧化碳较年初涨约20%。",
  "summaryBody": "炼化开工下降导致半导体超临界清洗用高纯CO2库存跌破一个月，液态二氧化碳较年初涨约20%。",
  "rawText": "",
  "topicId": "45544512445481418"
},
{
  "date": "2026-06-28",
  "title": "国金前沿制造｜瑞松科技强call",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "GlassBridge",
    "MPO",
    "CPO",
    "瑞松科技",
    "光纤",
    "自动化设备"
  ],
  "source": "段子",
  "sourceTitle": "国金前沿制造｜瑞松科技强call",
  "importance": 8.5,
  "confidence": 7.1,
  "upside": 51,
  "summary": "来源/title：国金前沿制造｜瑞松科技强call。康宁GlassBridge降低被动耦合难度，高芯MPO加速，瑞松MPO自动化设备重复位移精度0.3微米受益。",
  "summaryBody": "康宁GlassBridge降低被动耦合难度，高芯MPO加速，瑞松MPO自动化设备重复位移精度0.3微米受益。",
  "rawText": "",
  "topicId": "82255212112242542"
},
{
  "date": "2026-06-28",
  "title": "周观点260628｜两鸟在林，不如一鸟在手",
  "sector": "国产",
  "tags": [
    "国产算力",
    "CPO",
    "NPO",
    "半导体设备",
    "机器人",
    "寒武纪",
    "沐曦股份",
    "摩尔线程"
  ],
  "source": "段子",
  "sourceTitle": "周观点260628｜两鸟在林，不如一鸟在手",
  "importance": 8.5,
  "confidence": 7.0,
  "upside": 51,
  "summary": "来源/title：周观点260628｜两鸟在林，不如一鸟在手。国产算力被定义为算力大芯片主线，Q2业绩兑现是重要拐点，同时关注CPO半导体化和设备零部件。",
  "summaryBody": "国产算力被定义为算力大芯片主线，Q2业绩兑现是重要拐点，同时关注CPO半导体化和设备零部件。",
  "rawText": "",
  "topicId": "14422484881422152"
},
{
  "date": "2026-06-28",
  "title": "东财建筑建材｜基板产业链专家交流",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "IC基板",
    "光模块基板",
    "ABF膜",
    "上峰材料",
    "旗滨集团",
    "兴森科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "东财建筑建材｜基板产业链专家交流",
  "importance": 8.3,
  "confidence": 6.8,
  "upside": 50,
  "summary": "来源/title：东财建筑建材｜基板产业链专家交流。AI及存储下游推动IC基板、玻璃基板、光模块基板需求增长，兴森、上峰、旗滨等扩产被再次跟踪。",
  "summaryBody": "AI及存储下游推动IC基板、玻璃基板、光模块基板需求增长，兴森、上峰、旗滨等扩产被再次跟踪。",
  "rawText": "",
  "topicId": "14422481221588152"
},
{
  "date": "2026-06-28",
  "title": "储能｜欧盟首签储能三方协议",
  "sector": "其他",
  "tags": [
    "储能",
    "工商储",
    "欧洲储能",
    "德业股份",
    "阳光电源",
    "海博思创",
    "艾罗能源",
    "固德威"
  ],
  "source": "段子",
  "sourceTitle": "储能｜欧盟首签储能三方协议",
  "importance": 8.0,
  "confidence": 6.8,
  "upside": 48,
  "summary": "来源/title：储能｜欧盟首签储能三方协议。2030年前欧盟储能需求200GW、2026年初仅55GW，工商储装机2026-2028年CAGR约40%+。",
  "summaryBody": "2030年前欧盟储能需求200GW、2026年初仅55GW，工商储装机2026-2028年CAGR约40%+。",
  "rawText": "",
  "topicId": "14422484884482482"
},
{
  "date": "2026-06-28",
  "title": "广发非银｜继续推荐券商板块",
  "sector": "其他",
  "tags": [
    "红利",
    "券商",
    "保险",
    "江苏金租",
    "中国船舶租赁",
    "渤海租赁",
    "国泰海通",
    "中金公司"
  ],
  "source": "段子",
  "sourceTitle": "广发非银｜继续推荐券商板块",
  "importance": 7.6,
  "confidence": 6.8,
  "upside": 46,
  "summary": "来源/title：广发非银｜继续推荐券商板块。筹码结构、业绩、估值和中报预增催化支持券商修复，同时提到7月部分资金有望重回红利股。",
  "summaryBody": "筹码结构、业绩、估值和中报预增催化支持券商修复，同时提到7月部分资金有望重回红利股。",
  "rawText": "",
  "topicId": "55522585885428184"
},
{
  "date": "2026-06-26",
  "title": "东北计算机｜PCB涨价更新：继续看好PCB&PCB上游板块0626",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "树脂",
    "硅微粉",
    "凌玮科技",
    "德福科技",
    "厦门钨业"
  ],
  "source": "卖方私信",
  "sourceTitle": "东北计算机｜PCB涨价更新：继续看好PCB&PCB上游板块0626",
  "importance": 9.5,
  "confidence": 8.2,
  "upside": 57,
  "summary": "来源/title：东北计算机｜PCB涨价更新：继续看好PCB&PCB上游板块0626。建滔、生益、南亚等大厂订单排满，交期拉长到2-3个月并限购，PCB涨价被判断刚开始，有望复刻CCL路线。",
  "summaryBody": "建滔、生益、南亚等大厂订单排满，交期拉长到2-3个月并限购，PCB涨价被判断刚开始，有望复刻CCL路线。",
  "rawText": "",
  "topicId": "22255212255141821"
},
{
  "date": "2026-06-26",
  "title": "东北计算机｜日系电容厂商鲁比康发布涨价函",
  "sector": "AI",
  "tags": [
    "电容电感",
    "铝电解电容",
    "导电性高分子铝固体电容",
    "薄膜电容",
    "鲁比康",
    "江海股份",
    "艾华集团",
    "法拉电子"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜日系电容厂商鲁比康发布涨价函",
  "importance": 9.4,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：东北计算机｜日系电容厂商鲁比康发布涨价函。鲁比康涨价覆盖铝电解、高分子铝固体、薄膜电容，2026年8月1日到货执行新价，强化AI电容通胀主线。",
  "summaryBody": "鲁比康涨价覆盖铝电解、高分子铝固体、薄膜电容，2026年8月1日到货执行新价，强化AI电容通胀主线。",
  "rawText": "",
  "topicId": "22255212212585541"
},
{
  "date": "2026-06-26",
  "title": "天风机械｜玻璃基板专家调研要点260626",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "TGV",
    "京东方",
    "安捷利美维",
    "沃格光电",
    "帝尔激光",
    "大族激光"
  ],
  "source": "卖方私信",
  "sourceTitle": "天风机械｜玻璃基板专家调研要点260626",
  "importance": 9.3,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：天风机械｜玻璃基板专家调研要点260626。玻璃芯基板已进入商业样阶段，国内仅京东方、安捷利美维、沃格光电处于商业样；TGV激光、PVD、电镀成为关键环节。",
  "summaryBody": "玻璃芯基板已进入商业样阶段，国内仅京东方、安捷利美维、沃格光电处于商业样；TGV激光、PVD、电镀成为关键环节。",
  "rawText": "",
  "topicId": "55522585512841484"
},
{
  "date": "2026-06-26",
  "title": "国金通信｜光通信大跌点评",
  "sector": "AI",
  "tags": [
    "光模块",
    "光通信",
    "光纤",
    "存储",
    "中际旭创",
    "天孚通信",
    "光库科技",
    "仕佳光子"
  ],
  "source": "段子",
  "sourceTitle": "国金通信｜光通信大跌点评",
  "importance": 9.2,
  "confidence": 8.0,
  "upside": 55,
  "summary": "来源/title：国金通信｜光通信大跌点评。国金认为今日光通信大跌主要是贝塔、AI分歧、光纤扩产和长鑫上市资金切换，基本面未边际恶化，强调光存两旺。",
  "summaryBody": "国金认为今日光通信大跌主要是贝塔、AI分歧、光纤扩产和长鑫上市资金切换，基本面未边际恶化，强调光存两旺。",
  "rawText": "",
  "topicId": "22255212221842221"
},
{
  "date": "2026-06-26",
  "title": "财通唐佳｜今天一定要捞国产算力0626",
  "sector": "国产",
  "tags": [
    "国产算力",
    "国产AI芯片",
    "GPU",
    "ASIC",
    "寒武纪",
    "芯原股份",
    "华虹宏力",
    "智谱"
  ],
  "source": "段子",
  "sourceTitle": "财通唐佳｜今天一定要捞国产算力0626",
  "importance": 9.1,
  "confidence": 7.8,
  "upside": 55,
  "summary": "来源/title：财通唐佳｜今天一定要捞国产算力0626。国产算力关注度显著提升，智谱新模型使国产大模型到国产算力叙事闭环，芯原Q2订单和业绩验证被视为行情触发点。",
  "summaryBody": "国产算力关注度显著提升，智谱新模型使国产大模型到国产算力叙事闭环，芯原Q2订单和业绩验证被视为行情触发点。",
  "rawText": "",
  "topicId": "55522585518852524"
},
{
  "date": "2026-06-26",
  "title": "帝尔激光｜再Call玻璃基板TGV",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "TGV",
    "CPO",
    "帝尔激光",
    "东威科技",
    "三孚新科",
    "芯碁微装"
  ],
  "source": "段子",
  "sourceTitle": "帝尔激光｜再Call玻璃基板TGV",
  "importance": 9.0,
  "confidence": 7.6,
  "upside": 54,
  "summary": "来源/title：帝尔激光｜再Call玻璃基板TGV。玻璃基板从芯片封装扩展到CPO，26年小批量、27年后量产推进；帝尔激光被强调为TGV核心设备标的。",
  "summaryBody": "玻璃基板从芯片封装扩展到CPO，26年小批量、27年后量产推进；帝尔激光被强调为TGV核心设备标的。",
  "rawText": "",
  "topicId": "22255212221212151"
},
{
  "date": "2026-06-26",
  "title": "XYGF｜二季度业绩&订单有望超预期",
  "sector": "国产",
  "tags": [
    "国产算力",
    "ASIC",
    "芯原股份",
    "CPU",
    "DSP",
    "NRE",
    "Meta",
    "海南Fab"
  ],
  "source": "卖方私信",
  "sourceTitle": "XYGF｜二季度业绩&订单有望超预期",
  "importance": 9.0,
  "confidence": 7.6,
  "upside": 54,
  "summary": "来源/title：XYGF｜二季度业绩&订单有望超预期。5-6月新签订单约80-100亿，上半年在手订单有望230亿，全年400-500亿，二季度业绩可能扭转市场质疑。",
  "summaryBody": "5-6月新签订单约80-100亿，上半年在手订单有望230亿，全年400-500亿，二季度业绩可能扭转市场质疑。",
  "rawText": "",
  "topicId": "45544515585248418"
},
{
  "date": "2026-06-26",
  "title": "王子新材｜薄膜电容产能扩张，AI和核聚变订单推进",
  "sector": "AI",
  "tags": [
    "电容电感",
    "薄膜电容",
    "超级电容",
    "AI电源",
    "HVDC",
    "SST",
    "王子新材",
    "宁波新容"
  ],
  "source": "卖方私信",
  "sourceTitle": "王子新材｜薄膜电容产能扩张，AI和核聚变订单推进",
  "importance": 8.9,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：王子新材｜薄膜电容产能扩张，AI和核聚变订单推进。宁波新容电容收入25年5-6亿，27年满产可达10-15亿产值，Q3末扩产完成，AI客户订单有望推进。",
  "summaryBody": "宁波新容电容收入25年5-6亿，27年满产可达10-15亿产值，Q3末扩产完成，AI客户订单有望推进。",
  "rawText": "",
  "topicId": "45544515815514458"
},
{
  "date": "2026-06-26",
  "title": "戈碧迦｜康宁玻璃桥技术引领CPO-FAU方案新变革",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "康宁",
    "Glass Bridge",
    "CPO",
    "FAU",
    "TGV",
    "戈碧迦"
  ],
  "source": "段子",
  "sourceTitle": "戈碧迦｜康宁玻璃桥技术引领CPO-FAU方案新变革",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：戈碧迦｜康宁玻璃桥技术引领CPO-FAU方案新变革。康宁Glass Bridge被描述为CPO/NPO玻璃基光纤-硅光芯片耦合连接器，加速玻璃基板产业化。",
  "summaryBody": "康宁Glass Bridge被描述为CPO/NPO玻璃基光纤-硅光芯片耦合连接器，加速玻璃基板产业化。",
  "rawText": "",
  "topicId": "22255212221211451"
},
{
  "date": "2026-06-26",
  "title": "hcdx｜光纤板块调整点评",
  "sector": "AI",
  "tags": [
    "光纤",
    "A1",
    "A2",
    "光纤扩产",
    "长飞光纤",
    "亨通光电",
    "中天科技",
    "永鼎股份"
  ],
  "source": "段子",
  "sourceTitle": "hcdx｜光纤板块调整点评",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：hcdx｜光纤板块调整点评。板块调整来自扩产情绪和短期涨幅累积，但A1/A2需求缺口仍扩大，紧缺预计持续到27年底，夏天价格仍有上行可能。",
  "summaryBody": "板块调整来自扩产情绪和短期涨幅累积，但A1/A2需求缺口仍扩大，紧缺预计持续到27年底，夏天价格仍有上行可能。",
  "rawText": "",
  "topicId": "82255212225545452"
},
{
  "date": "2026-06-26",
  "title": "天风电子｜半导体设备零部件将成为全球扩产最大瓶颈",
  "sector": "国产",
  "tags": [
    "国产半导体零部件",
    "陶瓷结构件",
    "MFC",
    "真空泵",
    "真空阀",
    "珂玛科技",
    "江丰电子",
    "鼎龙股份"
  ],
  "source": "段子",
  "sourceTitle": "天风电子｜半导体设备零部件将成为全球扩产最大瓶颈",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：天风电子｜半导体设备零部件将成为全球扩产最大瓶颈。最缺方向被归纳为陶瓷结构件、MFC、真空泵、真空阀，全球设备厂倒逼零部件厂扩产。",
  "summaryBody": "最缺方向被归纳为陶瓷结构件、MFC、真空泵、真空阀，全球设备厂倒逼零部件厂扩产。",
  "rawText": "",
  "topicId": "14422484448288512"
},
{
  "date": "2026-06-26",
  "title": "MLCC超级周期开启：原厂低阶产品加速提价",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "天利控股集团",
    "风华高科",
    "小尺寸低容",
    "AI料号"
  ],
  "source": "段子",
  "sourceTitle": "MLCC超级周期开启：原厂低阶产品加速提价",
  "importance": 8.8,
  "confidence": 7.0,
  "upside": 53,
  "summary": "来源/title：MLCC超级周期开启：原厂低阶产品加速提价。华科7月1日起再度调高渠道供货价，小尺寸低容0201规格涨幅超100%，天利小尺寸MLCC利润弹性被强调。",
  "summaryBody": "华科7月1日起再度调高渠道供货价，小尺寸低容0201规格涨幅超100%，天利小尺寸MLCC利润弹性被强调。",
  "rawText": "",
  "topicId": "22255212225882881"
},
{
  "date": "2026-06-26",
  "title": "华创新材料｜江丰电子：AI拉动高端靶材量价齐升",
  "sector": "有色",
  "tags": [
    "国产半导体材料",
    "靶材",
    "零部件",
    "设备",
    "江丰电子",
    "铜靶",
    "钽靶",
    "钨靶"
  ],
  "source": "段子",
  "sourceTitle": "华创新材料｜江丰电子：AI拉动高端靶材量价齐升",
  "importance": 8.7,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：华创新材料｜江丰电子：AI拉动高端靶材量价齐升。3D NAND/HBM拉动铜、钽、钨等高端靶材需求共振，公司从靶材向零部件和设备延伸。",
  "summaryBody": "3D NAND/HBM拉动铜、钽、钨等高端靶材需求共振，公司从靶材向零部件和设备延伸。",
  "rawText": "",
  "topicId": "45544515521422488"
},
{
  "date": "2026-06-26",
  "title": "工业富联｜从代工厂向全栈AI基础设施供应商升维",
  "sector": "AI",
  "tags": [
    "AI",
    "工业富联",
    "英伟达",
    "CPO",
    "LPU",
    "CPU",
    "Vera",
    "CMX"
  ],
  "source": "段子",
  "sourceTitle": "工业富联｜从代工厂向全栈AI基础设施供应商升维",
  "importance": 8.7,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：工业富联｜从代工厂向全栈AI基础设施供应商升维。英伟达硬件堆栈从GPU扩展到CPO/LPU/CPU/CMX，公司价值捕获从JDM代工转向全栈AI基础设施。",
  "summaryBody": "英伟达硬件堆栈从GPU扩展到CPO/LPU/CPU/CMX，公司价值捕获从JDM代工转向全栈AI基础设施。",
  "rawText": "",
  "topicId": "22255212241814221"
},
{
  "date": "2026-06-26",
  "title": "开源电新｜宗申动力：已出货海外超容柜+BBU",
  "sector": "AI",
  "tags": [
    "AI电源",
    "超级电容",
    "BBU",
    "HVDC",
    "宗申动力",
    "东莞锂智慧",
    "NV",
    "GB300"
  ],
  "source": "卖方私信",
  "sourceTitle": "开源电新｜宗申动力：已出货海外超容柜+BBU",
  "importance": 8.7,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：开源电新｜宗申动力：已出货海外超容柜+BBU。HVDC架构下超级电容成为标配，宗申已获海外订单，Q4预计单月出200个电容柜。",
  "summaryBody": "HVDC架构下超级电容成为标配，宗申已获海外订单，Q4预计单月出200个电容柜。",
  "rawText": "",
  "topicId": "22255244145145241"
},
{
  "date": "2026-06-26",
  "title": "华泰电子｜江化微：平台化成型，高端化加速",
  "sector": "AI",
  "tags": [
    "国产半导体材料",
    "湿电子化学品",
    "江化微",
    "华虹",
    "华力",
    "中芯",
    "长鑫",
    "存储"
  ],
  "source": "段子",
  "sourceTitle": "华泰电子｜江化微：平台化成型，高端化加速",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：华泰电子｜江化微：平台化成型，高端化加速。上海国资委成为第一大股东后平台化加速，产品覆盖先进逻辑和存储工艺，Q3业绩进入加速拐点期。",
  "summaryBody": "上海国资委成为第一大股东后平台化加速，产品覆盖先进逻辑和存储工艺，Q3业绩进入加速拐点期。",
  "rawText": "",
  "topicId": "45544515551412118"
},
{
  "date": "2026-06-26",
  "title": "鼎通科技｜继续重点推荐鼎通科技+奕东电子",
  "sector": "AI",
  "tags": [
    "光模块",
    "鼎通科技",
    "奕东电子",
    "cage",
    "液冷板",
    "IO连接器",
    "精密结构件",
    "液冷"
  ],
  "source": "卖方私信",
  "sourceTitle": "鼎通科技｜继续重点推荐鼎通科技+奕东电子",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：鼎通科技｜继续重点推荐鼎通科技+奕东电子。cage+液冷板+IO连接器精密结构件壁垒在精密模具、高频高速信号屏蔽和跨界液冷板设计。",
  "summaryBody": "cage+液冷板+IO连接器精密结构件壁垒在精密模具、高频高速信号屏蔽和跨界液冷板设计。",
  "rawText": "",
  "topicId": "14422484448282212"
},
{
  "date": "2026-06-26",
  "title": "浙商大制造｜永鼎股份",
  "sector": "AI",
  "tags": [
    "光纤",
    "光芯片",
    "超导",
    "永鼎股份",
    "鼎芯光电",
    "东部超导",
    "EML",
    "硅光"
  ],
  "source": "段子",
  "sourceTitle": "浙商大制造｜永鼎股份",
  "importance": 8.5,
  "confidence": 7.2,
  "upside": 51,
  "summary": "来源/title：浙商大制造｜永鼎股份。公司受益光纤涨价，棒纤缆完整产业链扩产推进，同时光芯片和超导带材打开第二曲线。",
  "summaryBody": "公司受益光纤涨价，棒纤缆完整产业链扩产推进，同时光芯片和超导带材打开第二曲线。",
  "rawText": "",
  "topicId": "82255212245225842"
},
{
  "date": "2026-06-26",
  "title": "申万计算机｜软通动力：Token工厂签单头部大模型厂商",
  "sector": "国产",
  "tags": [
    "国产算力",
    "Token工厂",
    "软通动力",
    "液冷服务器",
    "国产卡",
    "海外卡",
    "算力租赁",
    "算力订阅"
  ],
  "source": "卖方私信",
  "sourceTitle": "申万计算机｜软通动力：Token工厂签单头部大模型厂商",
  "importance": 8.5,
  "confidence": 7.2,
  "upside": 51,
  "summary": "来源/title：申万计算机｜软通动力：Token工厂签单头部大模型厂商。公司与头部大模型厂商签订推理服务协议，北京壹号Token工厂日产Token 1.4万亿。",
  "summaryBody": "公司与头部大模型厂商签订推理服务协议，北京壹号Token工厂日产Token 1.4万亿。",
  "rawText": "",
  "topicId": "22255244148458511"
},
{
  "date": "2026-06-26",
  "title": "申万宏源TMT-电子｜奥来德：三大业务+玻璃基PSPI",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "PSPI",
    "奥来德",
    "京东方",
    "天马",
    "维信诺",
    "OLED"
  ],
  "source": "段子",
  "sourceTitle": "申万宏源TMT-电子｜奥来德：三大业务+玻璃基PSPI",
  "importance": 8.5,
  "confidence": 7.0,
  "upside": 51,
  "summary": "来源/title：申万宏源TMT-电子｜奥来德：三大业务+玻璃基PSPI。PSPI被定位为AI先进封装核心材料，预计切入京东方链并形成第二曲线。",
  "summaryBody": "PSPI被定位为AI先进封装核心材料，预计切入京东方链并形成第二曲线。",
  "rawText": "",
  "topicId": "14422484442521142"
},
{
  "date": "2026-06-26",
  "title": "信维通信｜大陆最高端MLCC资产入表，看2000e+市值",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "信维通信",
    "高端MLCC",
    "AI服务器"
  ],
  "source": "卖方私信",
  "sourceTitle": "信维通信｜大陆最高端MLCC资产入表，看2000e+市值",
  "importance": 8.5,
  "confidence": 6.8,
  "upside": 51,
  "summary": "来源/title：信维通信｜大陆最高端MLCC资产入表，看2000e+市值。段子再次强调信维通信高端MLCC资产质量和客户产品结构，作为MLCC涨价链条的弹性方向。",
  "summaryBody": "段子再次强调信维通信高端MLCC资产质量和客户产品结构，作为MLCC涨价链条的弹性方向。",
  "rawText": "",
  "topicId": "82255212221518812"
},
{
  "date": "2026-06-26",
  "title": "HYDZ｜重点推荐晶方科技",
  "sector": "AI",
  "tags": [
    "先进封装",
    "CPO",
    "MLA",
    "TSV",
    "晶方科技",
    "Anteryon",
    "光通信",
    "半导体"
  ],
  "source": "卖方私信",
  "sourceTitle": "HYDZ｜重点推荐晶方科技",
  "importance": 8.4,
  "confidence": 7.0,
  "upside": 50,
  "summary": "来源/title：HYDZ｜重点推荐晶方科技。核心看点为CPO，高毛利MLA有较大概率切入光通信，搭配TSV工艺做CPO垂直堆叠封装。",
  "summaryBody": "核心看点为CPO，高毛利MLA有较大概率切入光通信，搭配TSV工艺做CPO垂直堆叠封装。",
  "rawText": "",
  "topicId": "55522585515545844"
},
{
  "date": "2026-06-26",
  "title": "华大九天｜华为韬定律进展，国产EDA滞涨分支",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "EDA",
    "华大九天",
    "华为",
    "半导体软件",
    "国产替代"
  ],
  "source": "卖方私信",
  "sourceTitle": "华大九天｜华为韬定律进展，国产EDA滞涨分支",
  "importance": 8.4,
  "confidence": 6.8,
  "upside": 50,
  "summary": "来源/title：华大九天｜华为韬定律进展，国产EDA滞涨分支。段子提示华大九天为国产链唯一滞涨分支EDA，受大客户华为进展催化。",
  "summaryBody": "段子提示华大九天为国产链唯一滞涨分支EDA，受大客户华为进展催化。",
  "rawText": "",
  "topicId": "22255212241585451"
},
{
  "date": "2026-06-26",
  "title": "天准科技｜增持矽行半导体",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "天准科技",
    "矽行半导体",
    "明场检测设备",
    "存储",
    "CPO",
    "PCB",
    "LDI"
  ],
  "source": "段子",
  "sourceTitle": "天准科技｜增持矽行半导体",
  "importance": 8.3,
  "confidence": 7.0,
  "upside": 50,
  "summary": "来源/title：天准科技｜增持矽行半导体。28nm明场检测进入头部晶圆厂验证，存储厂持续对接；CPO精密测量和PCB LDI/激光钻孔订单进入放量。",
  "summaryBody": "28nm明场检测进入头部晶圆厂验证，存储厂持续对接；CPO精密测量和PCB LDI/激光钻孔订单进入放量。",
  "rawText": "",
  "topicId": "55522585558582484"
},
{
  "date": "2026-06-26",
  "title": "国机精工｜金刚石散热大涨，重视下一代散热方案",
  "sector": "AI",
  "tags": [
    "先进封装",
    "金刚石散热",
    "国机精工",
    "四方达",
    "力量钻石",
    "黄河旋风",
    "沃尔德",
    "九州一轨"
  ],
  "source": "卖方私信",
  "sourceTitle": "国机精工｜金刚石散热大涨，重视下一代散热方案",
  "importance": 8.2,
  "confidence": 6.8,
  "upside": 49,
  "summary": "来源/title：国机精工｜金刚石散热大涨，重视下一代散热方案。AI芯片功耗提高推动金刚石散热成为潜在方案，热沉片和金刚石/金属复合材料落地较快。",
  "summaryBody": "AI芯片功耗提高推动金刚石散热成为潜在方案，热沉片和金刚石/金属复合材料落地较快。",
  "rawText": "",
  "topicId": "55522585185541554"
},
{
  "date": "2026-06-26",
  "title": "中信主题策略｜金洲管道：液冷王储",
  "sector": "AI",
  "tags": [
    "液冷",
    "金洲管道",
    "闪麟时代",
    "液冷数据中心",
    "第三方液冷供应模式"
  ],
  "source": "段子",
  "sourceTitle": "中信主题策略｜金洲管道：液冷王储",
  "importance": 8.1,
  "confidence": 6.8,
  "upside": 49,
  "summary": "来源/title：中信主题策略｜金洲管道：液冷王储。旗下闪麟时代已在上海、安徽、浙江、甘肃建成多个液冷数据中心项目，第三方液冷供应模式开始商用落地。",
  "summaryBody": "旗下闪麟时代已在上海、安徽、浙江、甘肃建成多个液冷数据中心项目，第三方液冷供应模式开始商用落地。",
  "rawText": "",
  "topicId": "45544515551588258"
},
{
  "date": "2026-06-26",
  "title": "濮耐股份｜玻璃基板与电子布高纯氧化镁供应合作",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "电子布",
    "氧化镁",
    "濮耐股份",
    "玻璃桥",
    "AI"
  ],
  "source": "卖方私信",
  "sourceTitle": "濮耐股份｜玻璃基板与电子布高纯氧化镁供应合作",
  "importance": 8.1,
  "confidence": 6.6,
  "upside": 49,
  "summary": "来源/title：濮耐股份｜玻璃基板与电子布高纯氧化镁供应合作。公司被作为玻璃基板后排弹性标的讨论，转型AI新材料并与玻璃基板/电子布建立高纯氧化镁合作。",
  "summaryBody": "公司被作为玻璃基板后排弹性标的讨论，转型AI新材料并与玻璃基板/电子布建立高纯氧化镁合作。",
  "rawText": "",
  "topicId": "82255212221548822"
},
{
  "date": "2026-06-25",
  "title": "DB算力｜电子布位置：对标存储五倍涨幅，CCL和电子布仍在低水位",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "中国巨石",
    "中材科技",
    "国际复材",
    "金安国纪",
    "建滔积层板"
  ],
  "source": "段子",
  "sourceTitle": "DB算力｜电子布位置：对标存储五倍涨幅，CCL和电子布仍在低水位",
  "importance": 9.6,
  "confidence": 8.2,
  "upside": 58,
  "summary": "来源/title：DB算力｜电子布位置：对标存储五倍涨幅，CCL和电子布仍在低水位。电子布和CCL供需缺口预计到2027年底前难缓解，7月初7628电子布或继续跳涨，电子布/CCL被类比为存储涨价弹性。",
  "summaryBody": "电子布和CCL供需缺口预计到2027年底前难缓解，7月初7628电子布或继续跳涨，电子布/CCL被类比为存储涨价弹性。",
  "rawText": "",
  "topicId": "14422411844184812"
},
{
  "date": "2026-06-25",
  "title": "东北计算机｜0625复盘：江海电容涨价，继续看好存储、PCB上游、玻璃基板",
  "sector": "AI",
  "tags": [
    "电容电感",
    "江海股份",
    "存储",
    "德明利",
    "大普微",
    "佰维存储",
    "德福科技",
    "远东股份"
  ],
  "source": "卖方私信",
  "sourceTitle": "东北计算机｜0625复盘：江海电容涨价，继续看好存储、PCB上游、玻璃基板",
  "importance": 9.4,
  "confidence": 8.1,
  "upside": 56,
  "summary": "来源/title：东北计算机｜0625复盘：江海电容涨价，继续看好存储、PCB上游、玻璃基板。江海电容620开始涨价，Q3供需缺口有望扩大；同时继续看好存储、PCB上游、光纤和玻璃基板方向。",
  "summaryBody": "江海电容620开始涨价，Q3供需缺口有望扩大；同时继续看好存储、PCB上游、光纤和玻璃基板方向。",
  "rawText": "",
  "topicId": "14422411145285152"
},
{
  "date": "2026-06-25",
  "title": "广发电子｜美光全面超预期，长协重塑存储商业模式",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "美光",
    "DRAM",
    "NAND",
    "SCA",
    "长协",
    "ASML",
    "EUV"
  ],
  "source": "卖方私信",
  "sourceTitle": "广发电子｜美光全面超预期，长协重塑存储商业模式",
  "importance": 9.2,
  "confidence": 8.3,
  "upside": 55,
  "summary": "来源/title：广发电子｜美光全面超预期，长协重塑存储商业模式。美光收入、毛利率与指引全面超预期，16份战略客户协议覆盖DRAM 20%和NAND 33%产量，最低保证收入100B美元。",
  "summaryBody": "美光收入、毛利率与指引全面超预期，16份战略客户协议覆盖DRAM 20%和NAND 33%产量，最低保证收入100B美元。",
  "rawText": "",
  "topicId": "45544522258118828"
},
{
  "date": "2026-06-25",
  "title": "东北计算机｜康宁推出下一代玻璃光互连组件Glass Bridge",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "康宁",
    "Glass Bridge",
    "CPO",
    "PIC",
    "HBM",
    "大族激光"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜康宁推出下一代玻璃光互连组件Glass Bridge",
  "importance": 9.2,
  "confidence": 8.0,
  "upside": 55,
  "summary": "来源/title：东北计算机｜康宁推出下一代玻璃光互连组件Glass Bridge。康宁Glass Bridge可直接连接PIC与光纤，面向CPO及玻璃基板半导体封装市场，同时段子提及HBM混合铜键合散热改善和大族激光光纤项目。",
  "summaryBody": "康宁Glass Bridge可直接连接PIC与光纤，面向CPO及玻璃基板半导体封装市场，同时段子提及HBM混合铜键合散热改善和大族激光光纤项目。",
  "rawText": "",
  "topicId": "82255244128141242"
},
{
  "date": "2026-06-25",
  "title": "国金计算机&科技｜唯科科技：康宁GlassBridge方案离不开TMT小型化插芯",
  "sector": "AI",
  "tags": [
    "光模块",
    "CPO",
    "NPO",
    "康宁",
    "GlassBridge",
    "唯科科技",
    "MT插芯",
    "TMT插芯"
  ],
  "source": "段子",
  "sourceTitle": "国金计算机&科技｜唯科科技：康宁GlassBridge方案离不开TMT小型化插芯",
  "importance": 9.1,
  "confidence": 7.8,
  "upside": 55,
  "summary": "来源/title：国金计算机&科技｜唯科科技：康宁GlassBridge方案离不开TMT小型化插芯。GlassBridge被拆解为玻璃基板内置离子交换波导+TMT小型化插芯界面，MT插芯供需紧张并临近涨价节点。",
  "summaryBody": "GlassBridge被拆解为玻璃基板内置离子交换波导+TMT小型化插芯界面，MT插芯供需紧张并临近涨价节点。",
  "rawText": "",
  "topicId": "55522544851248484"
},
{
  "date": "2026-06-25",
  "title": "中船特气｜钨粉管制加强，存储需求旺盛，WF6提价周期启动",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "钨",
    "六氟化钨",
    "中船特气",
    "美光",
    "钨粉",
    "WF6",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "中船特气｜钨粉管制加强，存储需求旺盛，WF6提价周期启动",
  "importance": 9.1,
  "confidence": 7.8,
  "upside": 55,
  "summary": "来源/title：中船特气｜钨粉管制加强，存储需求旺盛，WF6提价周期启动。美光长期供货协议、钨产品出口管制加强和5月钨粉出口归零共同强化六氟化钨供需紧张逻辑。",
  "summaryBody": "美光长期供货协议、钨产品出口管制加强和5月钨粉出口归零共同强化六氟化钨供需紧张逻辑。",
  "rawText": "",
  "topicId": "22255244125155821"
},
{
  "date": "2026-06-25",
  "title": "AI元器件｜法拉电子、艾华集团、宏发股份继续推荐",
  "sector": "AI",
  "tags": [
    "电容电感",
    "法拉电子",
    "艾华集团",
    "宏发股份",
    "江海股份",
    "薄膜电容",
    "铝电解电容",
    "MLPC"
  ],
  "source": "卖方私信",
  "sourceTitle": "AI元器件｜法拉电子、艾华集团、宏发股份继续推荐",
  "importance": 9.0,
  "confidence": 8.0,
  "upside": 54,
  "summary": "来源/title：AI元器件｜法拉电子、艾华集团、宏发股份继续推荐。AIDC用电高压化推升薄膜电容、铝电解电容和高压直流继电器需求，法拉电子、艾华集团、宏发股份给出明确空间测算。",
  "summaryBody": "AIDC用电高压化推升薄膜电容、铝电解电容和高压直流继电器需求，法拉电子、艾华集团、宏发股份给出明确空间测算。",
  "rawText": "",
  "topicId": "14422411151225522"
},
{
  "date": "2026-06-25",
  "title": "中泰电子｜美光业绩大超预期，存储长协带来商业模式改变",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "美光",
    "DRAM",
    "NAND",
    "兆易创新",
    "北京君正",
    "普冉股份",
    "国科微"
  ],
  "source": "卖方私信",
  "sourceTitle": "中泰电子｜美光业绩大超预期，存储长协带来商业模式改变",
  "importance": 9.0,
  "confidence": 8.0,
  "upside": 54,
  "summary": "来源/title：中泰电子｜美光业绩大超预期，存储长协带来商业模式改变。美光盘后大涨，存储供需显著紧张；长协即使按最低价格也可带来远高于以往周期峰值的毛利率。",
  "summaryBody": "美光盘后大涨，存储供需显著紧张；长协即使按最低价格也可带来远高于以往周期峰值的毛利率。",
  "rawText": "",
  "topicId": "55522544414242514"
},
{
  "date": "2026-06-25",
  "title": "浙商大制造｜大族激光：25.2亿元光纤及预制棒项目，收购领纤科技",
  "sector": "AI",
  "tags": [
    "光纤",
    "大族激光",
    "永通智造",
    "张家港大族",
    "领纤科技",
    "空芯光纤",
    "预制棒",
    "光通信新材料"
  ],
  "source": "段子",
  "sourceTitle": "浙商大制造｜大族激光：25.2亿元光纤及预制棒项目，收购领纤科技",
  "importance": 8.9,
  "confidence": 8.0,
  "upside": 53,
  "summary": "来源/title：浙商大制造｜大族激光：25.2亿元光纤及预制棒项目，收购领纤科技。公司拟建设6000万芯公里光纤及2000吨预制棒项目，并收购领纤科技51%股权，补齐石英-光棒-光纤链条和空芯光纤布局。",
  "summaryBody": "公司拟建设6000万芯公里光纤及2000吨预制棒项目，并收购领纤科技51%股权，补齐石英-光棒-光纤链条和空芯光纤布局。",
  "rawText": "",
  "topicId": "22255244128545441"
},
{
  "date": "2026-06-25",
  "title": "hx新材料｜六氟化钨5月出口价环比大涨40%，存储材料接力",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "六氟化钨",
    "中船特气",
    "中巨芯",
    "和远气体",
    "昊华科技",
    "雅克科技",
    "三祥新材"
  ],
  "source": "段子",
  "sourceTitle": "hx新材料｜六氟化钨5月出口价环比大涨40%，存储材料接力",
  "importance": 8.9,
  "confidence": 7.6,
  "upside": 53,
  "summary": "来源/title：hx新材料｜六氟化钨5月出口价环比大涨40%，存储材料接力。六氟化钨5月出口均价环比上涨40.5%，材料端被认为随海外库存见底和存储需求上行而进入提价周期。",
  "summaryBody": "六氟化钨5月出口均价环比上涨40.5%，材料端被认为随海外库存见底和存储需求上行而进入提价周期。",
  "rawText": "",
  "topicId": "22255244128542541"
},
{
  "date": "2026-06-25",
  "title": "长荣股份｜电子布与CCL检测设备，鸿华视像全球龙一",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "长荣股份",
    "鸿华视像",
    "台光",
    "台耀",
    "联茂"
  ],
  "source": "段子",
  "sourceTitle": "长荣股份｜电子布与CCL检测设备，鸿华视像全球龙一",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：长荣股份｜电子布与CCL检测设备，鸿华视像全球龙一。电子布/PP/CCL检测设备为高阶PCB良率关键环节，鸿华视像在电子布与CCL视觉检测设备份额约70%+，电子布扩产带来设备增量。",
  "summaryBody": "电子布/PP/CCL检测设备为高阶PCB良率关键环节，鸿华视像在电子布与CCL视觉检测设备份额约70%+，电子布扩产带来设备增量。",
  "rawText": "",
  "topicId": "82255244122425482"
},
{
  "date": "2026-06-25",
  "title": "CPO板块｜康宁Glass Bridge观点更新：补充而非替代FAU",
  "sector": "AI",
  "tags": [
    "光模块",
    "CPO",
    "康宁",
    "Glass Bridge",
    "FAU",
    "OE",
    "MPO",
    "MMC"
  ],
  "source": "卖方私信",
  "sourceTitle": "CPO板块｜康宁Glass Bridge观点更新：补充而非替代FAU",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：CPO板块｜康宁Glass Bridge观点更新：补充而非替代FAU。该观点澄清Glass Bridge主要针对未来高纤需求，现有FAU仍会广泛使用，产业真实增量仍在OE通胀、耦合测试精度和器件价值量提升。",
  "summaryBody": "该观点澄清Glass Bridge主要针对未来高纤需求，现有FAU仍会广泛使用，产业真实增量仍在OE通胀、耦合测试精度和器件价值量提升。",
  "rawText": "",
  "topicId": "14422411118282822"
},
{
  "date": "2026-06-25",
  "title": "中科曙光｜国产高端存储ParaStor F9000双榜第一",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "国产算力",
    "中科曙光",
    "ParaStor F9000",
    "scaleX40",
    "RDMA",
    "曙光智算",
    "交换机"
  ],
  "source": "段子",
  "sourceTitle": "中科曙光｜国产高端存储ParaStor F9000双榜第一",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：中科曙光｜国产高端存储ParaStor F9000双榜第一。ParaStor F9000在IO500生产型全节点和10节点榜单双第一，强化国产高端存储和AI算力存储细分市场逻辑。",
  "summaryBody": "ParaStor F9000在IO500生产型全节点和10节点榜单双第一，强化国产高端存储和AI算力存储细分市场逻辑。",
  "rawText": "",
  "topicId": "55522544811428144"
},
{
  "date": "2026-06-25",
  "title": "东北计算机｜莲花控股：纽菲斯ABF膜供应商，玻璃基板新场景增量",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "莲花控股",
    "纽菲斯",
    "ABF膜",
    "光模块",
    "AI手机主板",
    "AI"
  ],
  "source": "卖方私信",
  "sourceTitle": "东北计算机｜莲花控股：纽菲斯ABF膜供应商，玻璃基板新场景增量",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：东北计算机｜莲花控股：纽菲斯ABF膜供应商，玻璃基板新场景增量。纽菲斯ABF膜9层及以下已技术过关，9-11层为国内企业唯一突破，玻璃基板、光模块、AI手机主板带来新场景需求。",
  "summaryBody": "纽菲斯ABF膜9层及以下已技术过关，9-11层为国内企业唯一突破，玻璃基板、光模块、AI手机主板带来新场景需求。",
  "rawText": "",
  "topicId": "82255244454188252"
},
{
  "date": "2026-06-25",
  "title": "有研粉材｜高端锡粉、散热铜粉、MLCC铜/镍粉送样",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "有研粉材",
    "铜粉",
    "镍粉",
    "锡粉",
    "光模块",
    "华为昇腾"
  ],
  "source": "卖方私信",
  "sourceTitle": "有研粉材｜高端锡粉、散热铜粉、MLCC铜/镍粉送样",
  "importance": 8.5,
  "confidence": 7.1,
  "upside": 51,
  "summary": "来源/title：有研粉材｜高端锡粉、散热铜粉、MLCC铜/镍粉送样。有研粉材跟踪笔记提到光模块高端锡粉、华为昇腾散热铜粉、MLCC铜粉和镍粉送样，粉体材料向AI与电容材料延伸。",
  "summaryBody": "有研粉材跟踪笔记提到光模块高端锡粉、华为昇腾散热铜粉、MLCC铜粉和镍粉送样，粉体材料向AI与电容材料延伸。",
  "rawText": "",
  "topicId": "45544522154288148"
},
{
  "date": "2026-06-25",
  "title": "天承科技｜PCB、MSAP、玻璃基板核心材料电镀+沉铜",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "天承科技",
    "PCB",
    "MSAP",
    "电镀",
    "沉铜",
    "半导体"
  ],
  "source": "卖方私信",
  "sourceTitle": "天承科技｜PCB、MSAP、玻璃基板核心材料电镀+沉铜",
  "importance": 8.4,
  "confidence": 6.8,
  "upside": 50,
  "summary": "来源/title：天承科技｜PCB、MSAP、玻璃基板核心材料电镀+沉铜。天承科技被作为低估涨价股讨论，PCB稳定增长、MSAP扩增、玻璃基板核心材料电镀和沉铜环节断档领先。",
  "summaryBody": "天承科技被作为低估涨价股讨论，PCB稳定增长、MSAP扩增、玻璃基板核心材料电镀和沉铜环节断档领先。",
  "rawText": "",
  "topicId": "82255244415182812"
},
{
  "date": "2026-06-25",
  "title": "浙商轻工｜仙鹤股份：电容器纸期权尚未定价",
  "sector": "AI",
  "tags": [
    "电容电感",
    "仙鹤股份",
    "电容器纸",
    "NKK",
    "高压电容纸",
    "国产验证"
  ],
  "source": "段子",
  "sourceTitle": "浙商轻工｜仙鹤股份：电容器纸期权尚未定价",
  "importance": 8.3,
  "confidence": 7.2,
  "upside": 50,
  "summary": "来源/title：浙商轻工｜仙鹤股份：电容器纸期权尚未定价。全球高端电容纸供给偏紧，下游加速国产验证，仙鹤450V以上产品进入日系客户测试，26年9月新增1万吨高压产品。",
  "summaryBody": "全球高端电容纸供给偏紧，下游加速国产验证，仙鹤450V以上产品进入日系客户测试，26年9月新增1万吨高压产品。",
  "rawText": "",
  "topicId": "82255244155585452"
},
{
  "date": "2026-06-24",
  "title": "东吴机械｜长川科技最新更新0624：市场低估了AI算力芯片放量",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "长川科技",
    "国产算力",
    "AI芯片",
    "GPU",
    "SoC测试机",
    "存储测试机",
    "半导体设备"
  ],
  "source": "卖方私信",
  "sourceTitle": "东吴机械｜长川科技最新更新0624：市场低估了AI算力芯片放量",
  "importance": 9.5,
  "confidence": 8.3,
  "upside": 57,
  "summary": "来源/title：东吴机械｜长川科技最新更新0624：市场低估了AI算力芯片放量。长川Q2业绩超预期只是开始，测试机国产替代龙一、国产算力GPU放量、存储测试机单价通胀三线共振，年内目标市值看2500-3000亿。",
  "summaryBody": "长川Q2业绩超预期只是开始，测试机国产替代龙一、国产算力GPU放量、存储测试机单价通胀三线共振，年内目标市值看2500-3000亿。",
  "rawText": "",
  "topicId": "55522544188484114"
},
{
  "date": "2026-06-24",
  "title": "宏柏新材｜高端光纤级四氯化硅、电子级正硅酸乙酯与纳米硅重估",
  "sector": "AI",
  "tags": [
    "光纤",
    "宏柏新材",
    "四氯化硅",
    "正硅酸乙酯",
    "纳米硅",
    "半导体材料",
    "先进封装",
    "北美光纤"
  ],
  "source": "卖方私信",
  "sourceTitle": "宏柏新材｜高端光纤级四氯化硅、电子级正硅酸乙酯与纳米硅重估",
  "importance": 9.2,
  "confidence": 7.8,
  "upside": 55,
  "summary": "来源/title：宏柏新材｜高端光纤级四氯化硅、电子级正硅酸乙酯与纳米硅重估。高纯四氯化硅海外进展顺利、电子级正硅酸乙酯绑定台系头部、纳米硅路线打通，分部估值给出400亿目标市值。",
  "summaryBody": "高纯四氯化硅海外进展顺利、电子级正硅酸乙酯绑定台系头部、纳米硅路线打通，分部估值给出400亿目标市值。",
  "rawText": "",
  "topicId": "45544522842485288"
},
{
  "date": "2026-06-24",
  "title": "天风电新｜洁美科技：离型膜客户拓展与量价结构三升",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "洁美科技",
    "离型膜",
    "载带",
    "昀冢科技",
    "国瓷材料",
    "博迁新材"
  ],
  "source": "段子",
  "sourceTitle": "天风电新｜洁美科技：离型膜客户拓展与量价结构三升",
  "importance": 9.1,
  "confidence": 8.0,
  "upside": 55,
  "summary": "来源/title：天风电新｜洁美科技：离型膜客户拓展与量价结构三升。洁美科技离型膜实现日韩和非日系客户全覆盖，产能满产、产品结构高端化、下半年全品类涨价20%+，核心业务合计目标市值700亿以上。",
  "summaryBody": "洁美科技离型膜实现日韩和非日系客户全覆盖，产能满产、产品结构高端化、下半年全品类涨价20%+，核心业务合计目标市值700亿以上。",
  "rawText": "",
  "topicId": "55522544188581184"
},
{
  "date": "2026-06-24",
  "title": "天风电子｜迅捷兴：RCC小单落地，光模块验证推进，玻璃基板拓展",
  "sector": "AI",
  "tags": [
    "PCB",
    "光模块",
    "迅捷兴",
    "RCC",
    "玻璃基板",
    "先进封装",
    "1.6T",
    "ABF"
  ],
  "source": "卖方私信",
  "sourceTitle": "天风电子｜迅捷兴：RCC小单落地，光模块验证推进，玻璃基板拓展",
  "importance": 8.9,
  "confidence": 7.8,
  "upside": 53,
  "summary": "来源/title：天风电子｜迅捷兴：RCC小单落地，光模块验证推进，玻璃基板拓展。迅捷兴RCC工艺拿到小批量订单，并配合多家头部光模块厂商推进1.6T送样验证，同时RCC可拓展玻璃基板增层应用。",
  "summaryBody": "迅捷兴RCC工艺拿到小批量订单，并配合多家头部光模块厂商推进1.6T送样验证，同时RCC可拓展玻璃基板增层应用。",
  "rawText": "",
  "topicId": "45544522855522448"
},
{
  "date": "2026-06-24",
  "title": "东北计算机｜液冷：Rubin平台实现数据中心能效系统级重构",
  "sector": "AI",
  "tags": [
    "液冷",
    "AI",
    "Rubin",
    "英维克",
    "飞龙股份",
    "思泉新材",
    "江南新材",
    "五洋自控"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜液冷：Rubin平台实现数据中心能效系统级重构",
  "importance": 8.9,
  "confidence": 7.6,
  "upside": 53,
  "summary": "来源/title：东北计算机｜液冷：Rubin平台实现数据中心能效系统级重构。Rubin全面液冷推动AI数据中心进入能效拐点，液冷从主题预期走向订单兑现，英维克、飞龙、思泉、江南、五洋、金富等被反复提及。",
  "summaryBody": "Rubin全面液冷推动AI数据中心进入能效拐点，液冷从主题预期走向订单兑现，英维克、飞龙、思泉、江南、五洋、金富等被反复提及。",
  "rawText": "",
  "topicId": "22255244821244811"
},
{
  "date": "2026-06-24",
  "title": "广发机械｜WSTS大幅上修半导体市场规模，坚定看好半导体设备",
  "sector": "国产",
  "tags": [
    "国产半导体设备",
    "长川科技",
    "强一股份",
    "联讯仪器",
    "华峰测控",
    "精智达",
    "精测电子",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "广发机械｜WSTS大幅上修半导体市场规模，坚定看好半导体设备",
  "importance": 8.8,
  "confidence": 7.5,
  "upside": 53,
  "summary": "来源/title：广发机械｜WSTS大幅上修半导体市场规模，坚定看好半导体设备。WSTS大幅上修2026全球半导体市场规模预测，存储涨价带来扩容，景气向半导体设备和国产封测设备传导。",
  "summaryBody": "WSTS大幅上修2026全球半导体市场规模预测，存储涨价带来扩容，景气向半导体设备和国产封测设备传导。",
  "rawText": "",
  "topicId": "55522544115582224"
},
{
  "date": "2026-06-24",
  "title": "财通计算机｜东阳光：IDC和算力租赁，打造tokens工厂业务闭环",
  "sector": "AI",
  "tags": [
    "AI",
    "算力租赁",
    "东阳光",
    "秦淮数据",
    "IDC",
    "积层箔",
    "AI电源",
    "液冷"
  ],
  "source": "卖方私信",
  "sourceTitle": "财通计算机｜东阳光：IDC和算力租赁，打造tokens工厂业务闭环",
  "importance": 8.8,
  "confidence": 7.0,
  "upside": 53,
  "summary": "来源/title：财通计算机｜东阳光：IDC和算力租赁，打造tokens工厂业务闭环。东阳光拟并购秦淮数据切入算力基础设施，叠加积层箔导入AI服务器电源、液冷冷板布局和制冷剂盈利确定性，看1800亿市值。",
  "summaryBody": "东阳光拟并购秦淮数据切入算力基础设施，叠加积层箔导入AI服务器电源、液冷冷板布局和制冷剂盈利确定性，看1800亿市值。",
  "rawText": "",
  "topicId": "45544522858182518"
},
{
  "date": "2026-06-24",
  "title": "全面液冷验证加速｜英特尔、英维克、嘉实多完成冷板工质验证",
  "sector": "AI",
  "tags": [
    "液冷",
    "英维克",
    "英特尔",
    "嘉实多",
    "申菱环境",
    "高澜股份",
    "川环科技",
    "领益智造"
  ],
  "source": "段子",
  "sourceTitle": "全面液冷验证加速｜英特尔、英维克、嘉实多完成冷板工质验证",
  "importance": 8.7,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：全面液冷验证加速｜英特尔、英维克、嘉实多完成冷板工质验证。单相冷板液冷工质完成长周期验证，液冷从主题预期进入平台认证和生态验证阶段，利好系统方案、弹性部件和液冷扩散链。",
  "summaryBody": "单相冷板液冷工质完成长周期验证，液冷从主题预期进入平台认证和生态验证阶段，利好系统方案、弹性部件和液冷扩散链。",
  "rawText": "",
  "topicId": "82255244844441442"
},
{
  "date": "2026-06-24",
  "title": "昀冢科技｜15亿高性能MLCC项目拟投，产能瓶颈与国产替代强化",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "昀冢科技",
    "三环集团",
    "风华高科",
    "火炬电子",
    "国瓷材料",
    "博迁新材"
  ],
  "source": "段子",
  "sourceTitle": "昀冢科技｜15亿高性能MLCC项目拟投，产能瓶颈与国产替代强化",
  "importance": 8.7,
  "confidence": 7.4,
  "upside": 52,
  "summary": "来源/title：昀冢科技｜15亿高性能MLCC项目拟投，产能瓶颈与国产替代强化。昀冢控股子公司拟投15亿元高性能MLCC项目，现有产线满负荷，扩产从“MLCC相关公司”切向“国产替代原厂”。",
  "summaryBody": "昀冢控股子公司拟投15亿元高性能MLCC项目，现有产线满负荷，扩产从“MLCC相关公司”切向“国产替代原厂”。",
  "rawText": "",
  "topicId": "45544522811228888"
},
{
  "date": "2026-06-24",
  "title": "中泰电子｜立讯精密：液冷预期差大，AI通讯弹性极大",
  "sector": "AI",
  "tags": [
    "液冷",
    "光模块",
    "立讯精密",
    "MGX",
    "UQD",
    "MQD",
    "铜连接",
    "Rubin"
  ],
  "source": "段子",
  "sourceTitle": "中泰电子｜立讯精密：液冷预期差大，AI通讯弹性极大",
  "importance": 8.7,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：中泰电子｜立讯精密：液冷预期差大，AI通讯弹性极大。立讯进入NV MGX生态名录，Manifold、UQD/MQD、液冷Busbar在列；光模块自动化与铜连接Rubin背板进展顺利，AI通讯弹性被重估。",
  "summaryBody": "立讯进入NV MGX生态名录，Manifold、UQD/MQD、液冷Busbar在列；光模块自动化与铜连接Rubin背板进展顺利，AI通讯弹性被重估。",
  "rawText": "",
  "topicId": "55522544152245424"
},
{
  "date": "2026-06-24",
  "title": "中泰电子｜长电科技拟投资78亿成立高端先进封测工厂",
  "sector": "AI",
  "tags": [
    "先进封装",
    "长电科技",
    "封测",
    "AI芯片",
    "数据中心",
    "光通信",
    "2.5D",
    "3D封装"
  ],
  "source": "段子",
  "sourceTitle": "中泰电子｜长电科技拟投资78亿成立高端先进封测工厂",
  "importance": 8.6,
  "confidence": 7.5,
  "upside": 52,
  "summary": "来源/title：中泰电子｜长电科技拟投资78亿成立高端先进封测工厂。长电拟在上海临港建设面向HPC、AI、数据中心和光通信的高端先进封测工厂，强化大陆封测在AI先进封装链条中的重要性。",
  "summaryBody": "长电拟在上海临港建设面向HPC、AI、数据中心和光通信的高端先进封测工厂，强化大陆封测在AI先进封装链条中的重要性。",
  "rawText": "",
  "topicId": "55522544184125824"
},
{
  "date": "2026-06-24",
  "title": "中泰电子零部件｜历史性扩产机遇下，高弹性上游产业链",
  "sector": "国产",
  "tags": [
    "国产半导体零部件",
    "富创精密",
    "臻宝科技",
    "江丰电子",
    "珂玛科技",
    "新莱应材",
    "恒运昌",
    "正帆科技"
  ],
  "source": "段子",
  "sourceTitle": "中泰电子零部件｜历史性扩产机遇下，高弹性上游产业链",
  "importance": 8.6,
  "confidence": 7.1,
  "upside": 52,
  "summary": "来源/title：中泰电子零部件｜历史性扩产机遇下，高弹性上游产业链。AI驱动存储和先进逻辑扩产，设备订单高增并传导到零部件供应紧张和涨价预期，国产零部件具备出海、扩份额和涨价弹性。",
  "summaryBody": "AI驱动存储和先进逻辑扩产，设备订单高增并传导到零部件供应紧张和涨价预期，国产零部件具备出海、扩份额和涨价弹性。",
  "rawText": "",
  "topicId": "45544522851521548"
},
{
  "date": "2026-06-24",
  "title": "MLCC进入前所未有涨价周期，关注利和兴",
  "sector": "AI",
  "tags": [
    "电容电感",
    "MLCC",
    "利和兴",
    "江门工厂",
    "九江工厂",
    "AI服务器",
    "高容MLCC",
    "涨价"
  ],
  "source": "卖方私信",
  "sourceTitle": "MLCC进入前所未有涨价周期，关注利和兴",
  "importance": 8.6,
  "confidence": 7.0,
  "upside": 52,
  "summary": "来源/title：MLCC进入前所未有涨价周期，关注利和兴。AI服务器客户对MLCC价格脱敏但重视供应稳定，利和兴江门散单、九江高容产能、散单涨价和毛利率修复形成利润快速释放逻辑。",
  "summaryBody": "AI服务器客户对MLCC价格脱敏但重视供应稳定，利和兴江门散单、九江高容产能、散单涨价和毛利率修复形成利润快速释放逻辑。",
  "rawText": "",
  "topicId": "45544522848288558"
},
{
  "date": "2026-06-24",
  "title": "国信汽车｜液冷系列07：26Q3有望迎来新一轮液冷行情",
  "sector": "AI",
  "tags": [
    "液冷",
    "银轮股份",
    "飞龙股份",
    "三花智控",
    "川环科技",
    "溯联股份",
    "腾龙股份",
    "祥鑫科技"
  ],
  "source": "段子",
  "sourceTitle": "国信汽车｜液冷系列07：26Q3有望迎来新一轮液冷行情",
  "importance": 8.5,
  "confidence": 7.1,
  "upside": 51,
  "summary": "来源/title：国信汽车｜液冷系列07：26Q3有望迎来新一轮液冷行情。谷歌新批订单、供应商大会和液冷订单兑现共振，汽车零部件液冷标的被重点推荐，银轮看600亿+、飞龙看400亿+。",
  "summaryBody": "谷歌新批订单、供应商大会和液冷订单兑现共振，汽车零部件液冷标的被重点推荐，银轮看600亿+、飞龙看400亿+。",
  "rawText": "",
  "topicId": "22255244821485551"
},
{
  "date": "2026-06-24",
  "title": "东吴传媒海外｜存储利空抢跑，静待美光验证双击",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "SK海力士",
    "美光",
    "三星电子",
    "闪迪",
    "兆易创新",
    "普冉股份",
    "DRAM"
  ],
  "source": "段子",
  "sourceTitle": "东吴传媒海外｜存储利空抢跑，静待美光验证双击",
  "importance": 8.5,
  "confidence": 7.0,
  "upside": 51,
  "summary": "来源/title：东吴传媒海外｜存储利空抢跑，静待美光验证双击。6月23日存储股价下挫被解释为情绪与持仓驱动的避险出清，而非基本面拐点；AI驱动存储供需紧缺和价格高位仍是核心逻辑。",
  "summaryBody": "6月23日存储股价下挫被解释为情绪与持仓驱动的避险出清，而非基本面拐点；AI驱动存储供需紧缺和价格高位仍是核心逻辑。",
  "rawText": "",
  "topicId": "14422411542218142"
},
{
  "date": "2026-06-24",
  "title": "摩尔线程｜S5000万卡集群落地，互联网客户有望突破",
  "sector": "国产",
  "tags": [
    "国产算力",
    "摩尔线程",
    "S5000",
    "国产AI芯片",
    "AI训练",
    "万卡集群",
    "AIPC",
    "智算中心"
  ],
  "source": "段子",
  "sourceTitle": "摩尔线程｜S5000万卡集群落地，互联网客户有望突破",
  "importance": 8.5,
  "confidence": 6.9,
  "upside": 51,
  "summary": "来源/title：摩尔线程｜S5000万卡集群落地，互联网客户有望突破。摩尔线程展示S5000训推一体智算卡、SGX5000一体机，万卡级智算集群落地，近期互联网客户突破带来国产AI芯片放量预期。",
  "summaryBody": "摩尔线程展示S5000训推一体智算卡、SGX5000一体机，万卡级智算集群落地，近期互联网客户突破带来国产AI芯片放量预期。",
  "rawText": "",
  "topicId": "22255244841522221"
},
{
  "date": "2026-06-24",
  "title": "美光财报跟踪｜DRAM、产能分配、HBM利润率与NAND瓶颈",
  "sector": "AI",
  "tags": [
    "存储/HBM",
    "美光",
    "DRAM",
    "HBM",
    "NAND",
    "AI服务器",
    "数据中心SSD",
    "通用DRAM"
  ],
  "source": "段子",
  "sourceTitle": "美光财报跟踪｜DRAM、产能分配、HBM利润率与NAND瓶颈",
  "importance": 8.4,
  "confidence": 6.8,
  "upside": 50,
  "summary": "来源/title：美光财报跟踪｜DRAM、产能分配、HBM利润率与NAND瓶颈。美光财报需要跟踪通用DRAM价格、产能分配措辞、HBM利润率和NAND是否被AI需求绑定，用来判断存储景气是否仍处卖方市场。",
  "summaryBody": "美光财报需要跟踪通用DRAM价格、产能分配措辞、HBM利润率和NAND是否被AI需求绑定，用来判断存储景气是否仍处卖方市场。",
  "rawText": "",
  "topicId": "82255244811444822"
},
{
  "date": "2026-06-24",
  "title": "高斯贝尔｜碳氢高频覆铜板卡位AI算力通信",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "高斯贝尔",
    "碳氢高频覆铜板",
    "PPO",
    "光模块",
    "AI服务器",
    "军工"
  ],
  "source": "段子",
  "sourceTitle": "高斯贝尔｜碳氢高频覆铜板卡位AI算力通信",
  "importance": 8.2,
  "confidence": 6.5,
  "upside": 49,
  "summary": "来源/title：高斯贝尔｜碳氢高频覆铜板卡位AI算力通信。高斯贝尔碳氢高频覆铜板和高速PPO板材切入AI、5G、军工、光模块基材，产能释放和国产替代带来业绩拐点预期。",
  "summaryBody": "高斯贝尔碳氢高频覆铜板和高速PPO板材切入AI、5G、军工、光模块基材，产能释放和国产替代带来业绩拐点预期。",
  "rawText": "",
  "topicId": "55522544152285424"
},
{
  "date": "2026-06-23",
  "title": "天风海外科技｜下跌点评",
  "sector": "AI",
  "tags": [
    "AI",
    "科技股大跌",
    "海外科技",
    "存储/HBM",
    "CSP",
    "Capex担忧",
    "三星电子",
    "SK海力士"
  ],
  "source": "段子",
  "sourceTitle": "天风海外科技｜下跌点评",
  "importance": 9.3,
  "confidence": 8.2,
  "upside": 56,
  "summary": "来源/title：天风海外科技｜下跌点评。韩国杠杆ETF监管担忧触发半导体下跌，叠加CSP大跌后市场重新交易AI Capex侵蚀FCF和融资需求担忧；天风认为这些扰动与基本面直接关系有限，存储仍是首选方向，CSP不会停止AI投入。",
  "summaryBody": "韩国杠杆ETF监管担忧触发半导体下跌，叠加CSP大跌后市场重新交易AI Capex侵蚀FCF和融资需求担忧；天风认为这些扰动与基本面直接关系有限，存储仍是首选方向，CSP不会停止AI投入。",
  "rawText": "",
  "topicId": "45544525188488818"
},
{
  "date": "2026-06-23",
  "title": "天风电新｜PCB产业链调整再call",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "铜箔",
    "载板",
    "科技股大跌",
    "建滔集团",
    "华正新材"
  ],
  "source": "段子",
  "sourceTitle": "天风电新｜PCB产业链调整再call",
  "importance": 9.0,
  "confidence": 8.0,
  "upside": 54,
  "summary": "来源/title：天风电新｜PCB产业链调整再call。今日PCB板块暴力调整，天风电新认为SemiAnalysis所谓PCB降价是谣言，更多是前期涨幅较高后的健康调整；载板、CCL、电子布和铜箔价格/供需仍在上行。",
  "summaryBody": "今日PCB板块暴力调整，天风电新认为SemiAnalysis所谓PCB降价是谣言，更多是前期涨幅较高后的健康调整；载板、CCL、电子布和铜箔价格/供需仍在上行。",
  "rawText": "",
  "topicId": "14422414852812582"
},
{
  "date": "2026-06-23",
  "title": "东北计算机｜PCB上游调整点评：调整即机会",
  "sector": "AI",
  "tags": [
    "PCB",
    "AI",
    "科技股大跌",
    "德福科技",
    "凌玮科技",
    "联瑞新材",
    "圣泉集团",
    "东材科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "东北计算机｜PCB上游调整点评：调整即机会",
  "importance": 8.8,
  "confidence": 7.6,
  "upside": 53,
  "summary": "来源/title：东北计算机｜PCB上游调整点评：调整即机会。PCB上游今日调整较大，东北计算机认为属于正常回调，通胀仍是2026年最强主线，2-3季度整体业绩进入集中0到1爆发期，继续看多Q2-Q3 PCB产业链机会。",
  "summaryBody": "PCB上游今日调整较大，东北计算机认为属于正常回调，通胀仍是2026年最强主线，2-3季度整体业绩进入集中0到1爆发期，继续看多Q2-Q3 PCB产业链机会。",
  "rawText": "",
  "topicId": "82255242415518812"
},
{
  "date": "2026-06-23",
  "title": "AI大跌点评｜谷歌AI关键人才流失与Capex担忧",
  "sector": "AI",
  "tags": [
    "AI",
    "科技股大跌",
    "Capex担忧",
    "光模块",
    "存储/HBM",
    "国产算力",
    "智谱",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "AI大跌点评｜谷歌AI关键人才流失与Capex担忧",
  "importance": 8.8,
  "confidence": 6.8,
  "upside": 53,
  "summary": "来源/title：AI大跌点评｜谷歌AI关键人才流失与Capex担忧。今天AI大跌主要来自谷歌AI关键人才流失引发模型分化和Capex担忧，同时季度末偏离资金回流风险释放；段子认为不影响算力、存储、光核心资产产业趋势。",
  "summaryBody": "今天AI大跌主要来自谷歌AI关键人才流失引发模型分化和Capex担忧，同时季度末偏离资金回流风险释放；段子认为不影响算力、存储、光核心资产产业趋势。",
  "rawText": "",
  "topicId": "45544525215414458"
},
{
  "date": "2026-06-23",
  "title": "中际旭创｜光通信板块调整点评：压价传闻扰动情绪",
  "sector": "AI",
  "tags": [
    "光模块",
    "AI",
    "科技股大跌",
    "中际旭创",
    "新易盛",
    "NPO",
    "CW",
    "MPO"
  ],
  "source": "卖方私信",
  "sourceTitle": "中际旭创｜光通信板块调整点评：压价传闻扰动情绪",
  "importance": 8.7,
  "confidence": 7.5,
  "upside": 52,
  "summary": "来源/title：中际旭创｜光通信板块调整点评：压价传闻扰动情绪。光通信调整主要受英伟达要求光模块降价10%传闻扰动；段子认为年度价格调整属行业惯例，临时额外压价概率低，800G/1.6T需求持续上修、供需偏紧，不改行业高景气。",
  "summaryBody": "光通信调整主要受英伟达要求光模块降价10%传闻扰动；段子认为年度价格调整属行业惯例，临时额外压价概率低，800G/1.6T需求持续上修、供需偏紧，不改行业高景气。",
  "rawText": "",
  "topicId": "45544525211484818"
},
{
  "date": "2026-06-23",
  "title": "PCB传言不可惧｜AI新材料全家桶更新0623",
  "sector": "AI",
  "tags": [
    "PCB",
    "CCL",
    "电子布",
    "铜箔",
    "科技股大跌",
    "中国巨石",
    "铜冠铜箔",
    "宏和科技"
  ],
  "source": "段子",
  "sourceTitle": "PCB传言不可惧｜AI新材料全家桶更新0623",
  "importance": 8.5,
  "confidence": 6.8,
  "upside": 51,
  "summary": "来源/title：PCB传言不可惧｜AI新材料全家桶更新0623。盘面主要交易正交背板delay和英伟达压价传闻，段子认为7月普通电子布、台湾铜箔、低DK二代布仍有涨价预期，调整反而给AI新材料链条提供窗口。",
  "summaryBody": "盘面主要交易正交背板delay和英伟达压价传闻，段子认为7月普通电子布、台湾铜箔、低DK二代布仍有涨价预期，调整反而给AI新材料链条提供窗口。",
  "rawText": "",
  "topicId": "45544525188142858"
},
{
  "date": "2026-06-22",
  "title": "国盛有色｜钨：最强对日替代涨价金属，AI金属之王",
  "sector": "有色",
  "tags": [
    "钨",
    "有色",
    "中钨高新",
    "厦门钨业",
    "江钨装备",
    "翔鹭钨业",
    "中船特气",
    "昊华科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "国盛有色｜钨：最强对日替代涨价金属，AI金属之王",
  "importance": 9.4,
  "confidence": 8.1,
  "upside": 56,
  "summary": "来源/title：国盛有色｜钨：最强对日替代涨价金属，AI金属之王。中国对日钨出口通道接近关闭，日本钨原料、六氟化钨与PCB钨棒供应链受冲击；国产高纯钨粉、六氟化钨和PCB棒材替代窗口打开，中钨高新、厦门钨业、江钨装备、翔鹭钨业等受益。",
  "summaryBody": "中国对日钨出口通道接近关闭，日本钨原料、六氟化钨与PCB钨棒供应链受冲击；国产高纯钨粉、六氟化钨和PCB棒材替代窗口打开，中钨高新、厦门钨业、江钨装备、翔鹭钨业等受益。",
  "rawText": "",
  "topicId": "55522545115181484"
},
{
  "date": "2026-06-22",
  "title": "天风电新｜再CALL液冷：Q2先看波纹管代工，Q3看好板块行情",
  "sector": "AI",
  "tags": [
    "液冷",
    "AI",
    "Rubin",
    "金富科技",
    "五洋自控",
    "英维克",
    "NV",
    "Manifold"
  ],
  "source": "段子",
  "sourceTitle": "天风电新｜再CALL液冷：Q2先看波纹管代工，Q3看好板块行情",
  "importance": 9.0,
  "confidence": 7.9,
  "upside": 54,
  "summary": "来源/title：天风电新｜再CALL液冷：Q2先看波纹管代工，Q3看好板块行情。NV官方博客再次强调Rubin 100%全液冷架构；天风电新优先推荐Q2最快看到业绩的波纹管+Manifold代工链金富科技、五洋自控，Q3看英维克等Tier1批量出货共振。",
  "summaryBody": "NV官方博客再次强调Rubin 100%全液冷架构；天风电新优先推荐Q2最快看到业绩的波纹管+Manifold代工链金富科技、五洋自控，Q3看英维克等Tier1批量出货共振。",
  "rawText": "",
  "topicId": "manual-liquid-cooling-tf-power-20260622"
},
{
  "date": "2026-06-22",
  "title": "东北计算机｜英伟达Rubin平台全面液冷，看好液冷Q3拐点性机会",
  "sector": "AI",
  "tags": [
    "液冷",
    "AI",
    "Rubin",
    "远东股份",
    "英维克",
    "江南新材",
    "五洋自控",
    "捷邦科技"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜英伟达Rubin平台全面液冷，看好液冷Q3拐点性机会",
  "importance": 8.9,
  "confidence": 7.7,
  "upside": 53,
  "summary": "来源/title：东北计算机｜英伟达Rubin平台全面液冷，看好液冷Q3拐点性机会。东北计算机提示液冷Q3拐点，核心看好NV第三方代工链和绑定紧密厂商、G链电子泵、国内CSP液冷链。",
  "summaryBody": "东北计算机提示液冷Q3拐点，核心看好NV第三方代工链和绑定紧密厂商、G链电子泵、国内CSP液冷链。",
  "rawText": "",
  "topicId": "manual-liquid-cooling-ne-computer-rubin-20260622"
},
{
  "date": "2026-06-22",
  "title": "国金电新｜远东股份重点关注：AIDC光纤量价齐升",
  "sector": "AI",
  "tags": [
    "光纤",
    "光模块",
    "科技",
    "远东股份",
    "长飞光纤",
    "亨通光电",
    "中天科技",
    "AI"
  ],
  "source": "段子",
  "sourceTitle": "国金电新｜远东股份重点关注：AIDC光纤量价齐升",
  "importance": 8.8,
  "confidence": 7.4,
  "upside": 53,
  "summary": "来源/title：国金电新｜远东股份重点关注：AIDC光纤量价齐升。AIDC光纤需求从光缆延伸到跳线与高价值连接，远东股份当前订单和扩产规划被重点关注，若2027年出货兑现，市值锚有望上移。",
  "summaryBody": "AIDC光纤需求从光缆延伸到跳线与高价值连接，远东股份当前订单和扩产规划被重点关注，若2027年出货兑现，市值锚有望上移。",
  "rawText": "",
  "topicId": "22255242244254411"
},
{
  "date": "2026-06-22",
  "title": "东吴机械｜长川科技Q2业绩超预期，国产测试机龙头SoC&存储测试机双轮驱动",
  "sector": "国产",
  "tags": [
    "科技",
    "先进封装",
    "半导体设备",
    "长川科技",
    "AI芯片",
    "HBM",
    "AI",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "东吴机械｜长川科技Q2业绩超预期，国产测试机龙头SoC&存储测试机双轮驱动",
  "importance": 8.7,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：东吴机械｜长川科技Q2业绩超预期，国产测试机龙头SoC&存储测试机双轮驱动。长川科技Q2业绩超预期，SoC、存储、AI芯片与先进封装测试需求共振，国产测试机平台属性强化。",
  "summaryBody": "长川科技Q2业绩超预期，SoC、存储、AI芯片与先进封装测试需求共振，国产测试机平台属性强化。",
  "rawText": "",
  "topicId": "55522545585544854"
},
{
  "date": "2026-06-22",
  "title": "DBDZ｜液冷板块更新：英伟达展出MGX生态合作伙伴，国内企业参与度提升",
  "sector": "AI",
  "tags": [
    "液冷",
    "AI",
    "MGX",
    "比亚迪电子",
    "英维克",
    "立讯精密",
    "领益智造",
    "蓝思科技"
  ],
  "source": "段子",
  "sourceTitle": "DBDZ｜液冷板块更新：英伟达展出MGX生态合作伙伴，国内企业参与度提升",
  "importance": 8.6,
  "confidence": 7.2,
  "upside": 52,
  "summary": "来源/title：DBDZ｜液冷板块更新：英伟达展出MGX生态合作伙伴，国内企业参与度提升。第四届链博会英伟达展出MGX生态合作伙伴，国内企业在整机、机柜、集管、CDU、快接、冷板、电源、母线排、滑轨和机箱等环节参与度提升。",
  "summaryBody": "第四届链博会英伟达展出MGX生态合作伙伴，国内企业在整机、机柜、集管、CDU、快接、冷板、电源、母线排、滑轨和机箱等环节参与度提升。",
  "rawText": "",
  "topicId": "manual-liquid-cooling-dbdz-mgx-20260622"
},
{
  "date": "2026-06-22",
  "title": "工大高科｜云锋基金携半导体国资杀入，TGV玻璃基板龙头注入预期",
  "sector": "AI",
  "tags": [
    "先进封装",
    "玻璃基板",
    "TGV",
    "工大高科",
    "云天半导体",
    "沃格光电",
    "凯盛科技"
  ],
  "source": "段子",
  "sourceTitle": "工大高科｜云锋基金携半导体国资杀入，TGV玻璃基板龙头注入预期",
  "importance": 8.6,
  "confidence": 6.6,
  "upside": 52,
  "summary": "来源/title：工大高科｜云锋基金携半导体国资杀入，TGV玻璃基板龙头注入预期。玻璃基板放入先进封装跟踪，云天半导体TGV/板级封装预期映射到工大高科，主题弹性高但需验证资产注入节奏。",
  "summaryBody": "玻璃基板放入先进封装跟踪，云天半导体TGV/板级封装预期映射到工大高科，主题弹性高但需验证资产注入节奏。",
  "rawText": "",
  "topicId": "14422414411151442"
},
{
  "date": "2026-06-22",
  "title": "广合科技｜AI PCB扩产规划与云擎二期",
  "sector": "AI",
  "tags": [
    "科技",
    "PCB",
    "AI",
    "广合科技",
    "AI服务器"
  ],
  "source": "段子",
  "sourceTitle": "广合科技｜AI PCB扩产规划与云擎二期",
  "importance": 8.0,
  "confidence": 6.4,
  "upside": 48,
  "summary": "来源/title：广合科技｜AI PCB扩产规划与云擎二期。AI PCB扩产和高多层需求继续强化，广合科技因新增产能和客户验证进入科技方向跟踪。",
  "summaryBody": "AI PCB扩产和高多层需求继续强化，广合科技因新增产能和客户验证进入科技方向跟踪。",
  "rawText": "",
  "topicId": "82255242212444582"
},
{
  "date": "2026-06-22",
  "title": "东方钽业｜薄膜铌酸锂与钽铌资源重估",
  "sector": "有色",
  "tags": [
    "有色",
    "钽铌",
    "铌酸锂",
    "东方钽业",
    "天通股份",
    "稀美资源",
    "光模块",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "东方钽业｜薄膜铌酸锂与钽铌资源重估",
  "importance": 7.8,
  "confidence": 6.0,
  "upside": 47,
  "summary": "来源/title：东方钽业｜薄膜铌酸锂与钽铌资源重估。薄膜铌酸锂材料受光模块高速调制需求关注，东方钽业因钽铌资源和材料属性进入有色科技映射。",
  "summaryBody": "薄膜铌酸锂材料受光模块高速调制需求关注，东方钽业因钽铌资源和材料属性进入有色科技映射。",
  "rawText": "",
  "topicId": "55522545112428514"
},
{
  "date": "2026-06-22",
  "title": "教育招聘｜高股息与低估值修复",
  "sector": "其他",
  "tags": [
    "红利",
    "其他",
    "高股息",
    "行动教育",
    "东方教育"
  ],
  "source": "卖方私信",
  "sourceTitle": "教育招聘｜高股息与低估值修复",
  "importance": 7.5,
  "confidence": 6.3,
  "upside": 45,
  "summary": "来源/title：教育招聘｜高股息与低估值修复。红利放入其他分类跟踪，行动教育、东方教育等高股息公司在业绩修复和分红预期下获得重新关注。",
  "summaryBody": "红利放入其他分类跟踪，行动教育、东方教育等高股息公司在业绩修复和分红预期下获得重新关注。",
  "rawText": "",
  "topicId": "55522545151145284"
},
{
  "date": "2026-06-22",
  "title": "中信证券金属｜稀土产业链电话会：供需重塑，定价新生",
  "sector": "有色",
  "tags": [
    "稀土",
    "有色",
    "重稀土",
    "氧化镝",
    "中稀有色",
    "中国稀土",
    "北方稀土",
    "盛和资源"
  ],
  "source": "调研日程",
  "sourceTitle": "中信证券金属｜稀土产业链电话会：供需重塑，定价新生",
  "importance": 7.4,
  "confidence": 5.6,
  "upside": 44,
  "summary": "来源/title：中信证券金属｜稀土产业链电话会：供需重塑，定价新生。稀土方向进入有色跟踪，重点关注重稀土、氧化镝和供需重塑带来的定价权变化。",
  "summaryBody": "稀土方向进入有色跟踪，重点关注重稀土、氧化镝和供需重塑带来的定价权变化。",
  "rawText": "",
  "topicId": "14422414525844122"
},
{
  "date": "2026-06-21",
  "title": "钨：最强“对日替代”涨价金属，AI金属之王",
  "sector": "有色",
  "tags": [
    "钨",
    "中钨高新",
    "厦门钨业",
    "江钨装备",
    "翔鹭钨业",
    "中船特气",
    "昊华科技",
    "中巨芯"
  ],
  "source": "段子",
  "sourceTitle": "钨：最强“对日替代”涨价金属，AI金属之王",
  "importance": 9.4,
  "confidence": 8.0,
  "upside": 56,
  "summary": "来源/title：钨：最强“对日替代”涨价金属，AI金属之王。中国对日钨出口通道接近关闭，日本钨原料、六氟化钨与PCB钨棒供应链受冲击；国产高纯钨粉、六氟化钨和PCB棒材替代窗口打开，中钨高新、厦门钨业、江钨装备、翔鹭钨业等受益。",
  "summaryBody": "中国对日钨出口通道接近关闭，日本钨原料、六氟化钨与PCB钨棒供应链受冲击；国产高纯钨粉、六氟化钨和PCB棒材替代窗口打开，中钨高新、厦门钨业、江钨装备、翔鹭钨业等受益。",
  "rawText": "",
  "topicId": "manual-tungsten-20260621-ai-metal-king"
},
{
  "date": "2026-06-21",
  "title": "天风电新｜CCL观点更新0621",
  "sector": "AI",
  "tags": [
    "电子布",
    "CCL",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "天风电新｜CCL观点更新0621",
  "importance": 9.2,
  "confidence": 3.7,
  "upside": 55,
  "summary": "来源/title：天风电新｜CCL观点更新0621。继续看好一体化CCL主升浪。目前CCL不含税235元，到年底300元，只需再涨两轮、每轮10%-15%，判断大概率。成本假设电子布年底10元/米，CCL成本174元，上游完全自供成本97元...",
  "summaryBody": "继续看好一体化CCL主升浪。目前CCL不含税235元，到年底300元，只需再涨两轮、每轮10%-15%，判断大概率。成本假设电子布年底10元/米，CCL成本174元，上游完全自供成本97元...",
  "rawText": "",
  "topicId": "14422415184152252"
},
{
  "date": "2026-06-21",
  "title": "东北计算机｜周观点更新0621",
  "sector": "AI",
  "tags": [
    "电子布",
    "铜箔",
    "CCL",
    "PCB",
    "国产算力",
    "存储"
  ],
  "source": "卖方私信",
  "sourceTitle": "东北计算机｜周观点更新0621",
  "importance": 8.5,
  "confidence": 3.7,
  "upside": 51,
  "summary": "来源/title：东北计算机｜周观点更新0621。CCL涨价频率提速，H1业绩确定性加强；上游树脂、硅微粉、PCB棒材预期差加强，铜箔和电子布确定性加强。关注存储和国产算力Q2业绩确定性，HDD涨价，DRAM和NAND Q3斜率有望继续。藤...",
  "summaryBody": "CCL涨价频率提速，H1业绩确定性加强；上游树脂、硅微粉、PCB棒材预期差加强，铜箔和电子布确定性加强。关注存储和国产算力Q2业绩确定性，HDD涨价，DRAM和NAND Q3斜率有望继续。藤...",
  "rawText": "",
  "topicId": "14422414225855842"
},
{
  "date": "2026-06-21",
  "title": "东北计算机｜PCB上游继续16+17",
  "sector": "AI",
  "tags": [
    "铜箔",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "东北计算机｜PCB上游继续16+17",
  "importance": 8.1,
  "confidence": 3.7,
  "upside": 49,
  "summary": "来源/title：东北计算机｜PCB上游继续16+17。6月21日两场专家会：1）铜箔-pcb上游系列16，嘉宾某铜箔供应商；2）树脂-pcb上游系列17，嘉宾某树脂供应商。主持赵宇阳/廖岚琪。说明东北计算机继续密集跟踪PCB上游铜箔和树脂...",
  "summaryBody": "6月21日两场专家会：1）铜箔-pcb上游系列16，嘉宾某铜箔供应商；2）树脂-pcb上游系列17，嘉宾某树脂供应商。主持赵宇阳/廖岚琪。说明东北计算机继续密集跟踪PCB上游铜箔和树脂...",
  "rawText": "",
  "topicId": "82255248414882412"
},
{
  "date": "2026-06-21",
  "title": "天风电新｜CCL之后布局载板和铜箔0621",
  "sector": "AI",
  "tags": [
    "铜箔",
    "CCL",
    "PCB"
  ],
  "source": "调研日程",
  "sourceTitle": "天风电新｜CCL之后布局载板和铜箔0621",
  "importance": 7.8,
  "confidence": 3.7,
  "upside": 47,
  "summary": "来源/title：天风电新｜CCL之后布局载板和铜箔0621。铜箔库存极速下降，涨价在即；26Q3交易重点为Rubin带动H3-4放量和BT载板放量。H3-4弹性标的铜冠、海亮，铜冠龙一，海亮潜在市值空间更大，PCB铜箔重估，明年利润40亿...",
  "summaryBody": "铜箔库存极速下降，涨价在即；26Q3交易重点为Rubin带动H3-4放量和BT载板放量。H3-4弹性标的铜冠、海亮，铜冠龙一，海亮潜在市值空间更大，PCB铜箔重估，明年利润40亿...",
  "rawText": "",
  "topicId": "14422415181522882"
},
{
  "date": "2026-06-21",
  "title": "东北计算机｜铜箔进展更新pcb上游16",
  "sector": "AI",
  "tags": [
    "铜箔",
    "PCB"
  ],
  "source": "调研日程",
  "sourceTitle": "东北计算机｜铜箔进展更新pcb上游16",
  "importance": 7.8,
  "confidence": 3.7,
  "upside": 47,
  "summary": "来源/title：东北计算机｜铜箔进展更新pcb上游16。6月21日17:00举行铜箔专家会，嘉宾为某铜箔供应商，主持东北计算机赵宇阳/廖岚琪。信号含义：东北计算机继续加密跟踪PCB上游铜箔产业链，属于用户指定卖方title和铜箔重点方向，...",
  "summaryBody": "6月21日17:00举行铜箔专家会，嘉宾为某铜箔供应商，主持东北计算机赵宇阳/廖岚琪。信号含义：东北计算机继续加密跟踪PCB上游铜箔产业链，属于用户指定卖方title和铜箔重点方向，...",
  "rawText": "",
  "topicId": "14422415181552242"
},
{
  "date": "2026-06-21",
  "title": "周观点260621",
  "sector": "国产",
  "tags": [
    "科技",
    "国产算力"
  ],
  "source": "卖方私信",
  "sourceTitle": "周观点260621",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "来源/title：周观点260621。CPO/OCS量产前夕，CPO亚洲供应链推进，年底到明年初有几万台CPO交换机小量试水；NVL576提高GPU:OE至1:6，设备和光器件受益。国产算力需求可能超预期，二线芯片需求外溢并开启涨价，标的寒...",
  "summaryBody": "CPO/OCS量产前夕，CPO亚洲供应链推进，年底到明年初有几万台CPO交换机小量试水；NVL576提高GPU:OE至1:6，设备和光器件受益。国产算力需求可能超预期，二线芯片需求外溢并开启涨价，标的寒...",
  "rawText": "",
  "topicId": "45544525484111858"
},
{
  "date": "2026-06-21",
  "title": "禾盛新材｜国产算力",
  "sector": "AI",
  "tags": [
    "AI",
    "科技",
    "国产算力"
  ],
  "source": "卖方私信",
  "sourceTitle": "禾盛新材｜国产算力",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "来源/title：禾盛新材｜国产算力。算力供需失衡和上游成本上涨推动国产AI芯片进入涨价窗口，逻辑从国产替代升级为涨价加订单。互联网及科技大厂加速抢购本土算力芯片，头部国产芯片厂商供应链韧性更强。相关标的：海光信息、寒武纪、禾盛新材、恒铭达...",
  "summaryBody": "算力供需失衡和上游成本上涨推动国产AI芯片进入涨价窗口，逻辑从国产替代升级为涨价加订单。互联网及科技大厂加速抢购本土算力芯片，头部国产芯片厂商供应链韧性更强。相关标的：海光信息、寒武纪、禾盛新材、恒铭达...",
  "rawText": "",
  "topicId": "14422414224521212"
},
{
  "date": "2026-06-21",
  "title": "旗滨集团｜AI新材料",
  "sector": "AI",
  "tags": [
    "AI",
    "钨",
    "电子布",
    "科技",
    "PCB"
  ],
  "source": "卖方私信",
  "sourceTitle": "旗滨集团｜AI新材料",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "来源/title：旗滨集团｜AI新材料。电子布板块表现突出，AI高速高频PCB拉动Low-DK一代/二代布、Low-CTE等高端电子布用量和价值量提升，特种电子布供不应求或延续到2027年，普通电子布也有连续涨价预期。PCB钻针板块因M9板...",
  "summaryBody": "电子布板块表现突出，AI高速高频PCB拉动Low-DK一代/二代布、Low-CTE等高端电子布用量和价值量提升，特种电子布供不应求或延续到2027年，普通电子布也有连续涨价预期。PCB钻针板块因M9板...",
  "rawText": "",
  "topicId": "82255242552521452"
},
{
  "date": "2026-06-21",
  "title": "分析师盈利预期上修",
  "sector": "AI",
  "tags": [
    "AI",
    "科技",
    "PCB"
  ],
  "source": "卖方私信",
  "sourceTitle": "分析师盈利预期上修",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "来源/title：分析师盈利预期上修。中报业绩预期上修视角关注三类方向：1）AI算力硬件，包括半导体、光通信、PCB；2）先进制造，包括AI上游设备、电池储能、船舶；3）上游资源品，受到AI需求拉动的小金属、塑料，以及能源金属、炼化、农化、...",
  "summaryBody": "中报业绩预期上修视角关注三类方向：1）AI算力硬件，包括半导体、光通信、PCB；2）先进制造，包括AI上游设备、电池储能、船舶；3）上游资源品，受到AI需求拉动的小金属、塑料，以及能源金属、炼化、农化、...",
  "rawText": "",
  "topicId": "55522545221112144"
},
{
  "date": "2026-06-21",
  "title": "力诺药包｜AI材料观点更新0621",
  "sector": "AI",
  "tags": [
    "AI",
    "钨",
    "电子布",
    "MLCC",
    "科技"
  ],
  "source": "段子",
  "sourceTitle": "力诺药包｜AI材料观点更新0621",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：力诺药包｜AI材料观点更新0621。AI材料关注电子布缺口和涨价，二代布对应国际复材、中材科技，CTE对应宏和科技和中材科技，普通电子布关注中国巨石及7月涨价节奏。硅微粉龙头联瑞新材上涨，逻辑为需求超级加倍、填充比例大幅提...",
  "summaryBody": "AI材料关注电子布缺口和涨价，二代布对应国际复材、中材科技，CTE对应宏和科技和中材科技，普通电子布关注中国巨石及7月涨价节奏。硅微粉龙头联瑞新材上涨，逻辑为需求超级加倍、填充比例大幅提...",
  "rawText": "",
  "topicId": "14422414258254182"
},
{
  "date": "2026-06-21",
  "title": "存储周期强度与持续度",
  "sector": "AI",
  "tags": [
    "AI",
    "科技",
    "存储"
  ],
  "source": "段子",
  "sourceTitle": "存储周期强度与持续度",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：存储周期强度与持续度。观点认为AI带来的存储供给约束会持续到2028年，AI挤占利基存储产能效应加剧，26Q1利基存储价格已跳涨，Q2开始涨价弹性将持续放大。看好A股存储设计二三季度业绩弹性，26年估值约20-30倍。催化...",
  "summaryBody": "观点认为AI带来的存储供给约束会持续到2028年，AI挤占利基存储产能效应加剧，26Q1利基存储价格已跳涨，Q2开始涨价弹性将持续放大。看好A股存储设计二三季度业绩弹性，26年估值约20-30倍。催化...",
  "rawText": "",
  "topicId": "45544525484151858"
},
{
  "date": "2026-06-21",
  "title": "天风通信周观点",
  "sector": "AI",
  "tags": [
    "AI",
    "光模块",
    "光纤"
  ],
  "source": "段子",
  "sourceTitle": "天风通信周观点",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：天风通信周观点。光模块/NPO/CPO/光芯片持续上修，推理tokens高增，800G和1.6T需求持续上修，scale-up释放光互联增量，新技术包括NPO、CPO、2.4T、3.2T、XPO、OCS。光纤光缆短期看Q2...",
  "summaryBody": "光模块/NPO/CPO/光芯片持续上修，推理tokens高增，800G和1.6T需求持续上修，scale-up释放光互联增量，新技术包括NPO、CPO、2.4T、3.2T、XPO、OCS。光纤光缆短期看Q2...",
  "rawText": "",
  "topicId": "14422414252115422"
},
{
  "date": "2026-06-21",
  "title": "华泰通信｜藤仓上修业绩",
  "sector": "AI",
  "tags": [
    "AI",
    "光纤"
  ],
  "source": "段子",
  "sourceTitle": "华泰通信｜藤仓上修业绩",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：华泰通信｜藤仓上修业绩。日本光纤龙头藤仓大幅上修业绩指引，验证光纤光缆和MPO高景气。光纤光缆量价齐升，国内光纤企业加快开拓北美并突破MPO布线，藤仓涨价后北美AI数通光纤涨价有望继续。MPO供应商受益，Q2业绩有望环比提...",
  "summaryBody": "日本光纤龙头藤仓大幅上修业绩指引，验证光纤光缆和MPO高景气。光纤光缆量价齐升，国内光纤企业加快开拓北美并突破MPO布线，藤仓涨价后北美AI数通光纤涨价有望继续。MPO供应商受益，Q2业绩有望环比提...",
  "rawText": "",
  "topicId": "14422414252848152"
},
{
  "date": "2026-06-21",
  "title": "瑞松科技0621",
  "sector": "AI",
  "tags": [
    "科技"
  ],
  "source": "段子",
  "sourceTitle": "瑞松科技0621",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：瑞松科技0621。藤仓周五15cm、夜盘继续18cm，需求端β高景气验证。藤仓大幅上修FY27财年业绩指引，上修幅度46.8%，证明MPO量和芯数双重通胀。MPO设备弹性来自MPO贝塔叠加自动化率提升，器件高景气可能带来设...",
  "summaryBody": "藤仓周五15cm、夜盘继续18cm，需求端β高景气验证。藤仓大幅上修FY27财年业绩指引，上修幅度46.8%，证明MPO量和芯数双重通胀。MPO设备弹性来自MPO贝塔叠加自动化率提升，器件高景气可能带来设...",
  "rawText": "",
  "topicId": "82255242585124482"
},
{
  "date": "2026-06-21",
  "title": "华西中小盘｜全球重视SiC",
  "sector": "AI",
  "tags": [
    "AI"
  ],
  "source": "段子",
  "sourceTitle": "华西中小盘｜全球重视SiC",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：华西中小盘｜全球重视SiC。韩国将下一代功率半导体SiC等定义为核心战略产业；三星电子晶圆代工讨论重启8英寸SiC产线。英特尔CEO提及从材料层面寻找突破，布局GaN、SiC、InP。台积电向部分企业提出12英寸中介层Si...",
  "summaryBody": "韩国将下一代功率半导体SiC等定义为核心战略产业；三星电子晶圆代工讨论重启8英寸SiC产线。英特尔CEO提及从材料层面寻找突破，布局GaN、SiC、InP。台积电向部分企业提出12英寸中介层Si...",
  "rawText": "",
  "topicId": "22255242588518481"
},
{
  "date": "2026-06-21",
  "title": "华鑫电子周观点",
  "sector": "AI",
  "tags": [
    "AI",
    "科技",
    "玻璃基板",
    "国产算力",
    "存储"
  ],
  "source": "段子",
  "sourceTitle": "华鑫电子周观点",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "来源/title：华鑫电子周观点。科技进攻方向包括国产算力AI芯片、算力租赁、国产存储、海外算力及上游核心物料、玻璃基板、IC载板。国产算力受智谱GLM-5.2开源和性能强、陆家嘴论坛科技表述催化，AI芯片因核心物料涨价传导至产品价格提升，...",
  "summaryBody": "科技进攻方向包括国产算力AI芯片、算力租赁、国产存储、海外算力及上游核心物料、玻璃基板、IC载板。国产算力受智谱GLM-5.2开源和性能强、陆家嘴论坛科技表述催化，AI芯片因核心物料涨价传导至产品价格提升，...",
  "rawText": "",
  "topicId": "45544525484524818"
},
{
  "date": "2026-06-21",
  "title": "格林美高纯钨粉",
  "sector": "有色",
  "tags": [
    "钨"
  ],
  "source": "卖方私信",
  "sourceTitle": "格林美高纯钨粉",
  "importance": 7.0,
  "confidence": 2.5,
  "upside": 42,
  "summary": "来源/title：格林美高纯钨粉。致电证券部，公司有高纯钨粉，未来该业务产品占比会提升到50%以上。方向：钨、半导体材料；证据链较短，需要后续确认产能、客户、利润弹性。状态：watch，利多。",
  "summaryBody": "致电证券部，公司有高纯钨粉，未来该业务产品占比会提升到50%以上。方向：钨、半导体材料；证据链较短，需要后续确认产能、客户、利润弹性。状态：watch，利多。",
  "rawText": "",
  "topicId": "22255242588512551"
},
{
  "date": "2026-06-21",
  "title": "本周交流情况更新",
  "sector": "AI",
  "tags": [
    "光模块"
  ],
  "source": "卖方私信",
  "sourceTitle": "本周交流情况更新",
  "importance": 7.0,
  "confidence": 2.5,
  "upside": 42,
  "summary": "来源/title：本周交流情况更新。行业普遍量价齐升：光模块供不应求，年降幅度显著降低，散单明显上涨；硅光PIC供不应求；MPO跳线行业大幅扩产，Q2业绩普遍创历史新高，MMC/更高密度带动价格上行；FAU保底翻倍以上产能增长，NPO/CP...",
  "summaryBody": "行业普遍量价齐升：光模块供不应求，年降幅度显著降低，散单明显上涨；硅光PIC供不应求；MPO跳线行业大幅扩产，Q2业绩普遍创历史新高，MMC/更高密度带动价格上行；FAU保底翻倍以上产能增长，NPO/CP...",
  "rawText": "",
  "topicId": "14422414224244122"
},
{
  "date": "2026-06-21",
  "title": "光远新材招股书梳理",
  "sector": "AI",
  "tags": [
    "电子布",
    "CCL"
  ],
  "source": "段子",
  "sourceTitle": "光远新材招股书梳理",
  "importance": 6.6,
  "confidence": 2.5,
  "upside": 40,
  "summary": "来源/title：光远新材招股书梳理。光远新材具备一步池窑法成熟、海外客户全、特种电子布产销量国内第一等特点。25年和26Q1低介电电子布销量2947万米和1258万米；26Q1低介电布均价27元，米毛利19元，估算单米净利15元以上。26...",
  "summaryBody": "光远新材具备一步池窑法成熟、海外客户全、特种电子布产销量国内第一等特点。25年和26Q1低介电电子布销量2947万米和1258万米；26Q1低介电布均价27元，米毛利19元，估算单米净利15元以上。26...",
  "rawText": "",
  "topicId": "55522545212482844"
},
{
  "date": "2026-06-21",
  "title": "智谱GLM-5.2",
  "sector": "其他",
  "tags": [
    "JFT"
  ],
  "source": "卖方私信",
  "sourceTitle": "智谱GLM-5.2",
  "importance": 1.2,
  "confidence": 1.0,
  "upside": 7,
  "summary": "来源/title：智谱GLM-5.2。美国商务部限制Anthropic最新模型全球访问后，智谱GLM-5.2全量开放并开源，多榜单进入全球前三，开发者反馈接近海外顶级模型；MaaS平台ARR约17亿元，同比提升60倍，2026Q1 API涨...",
  "summaryBody": "美国商务部限制Anthropic最新模型全球访问后，智谱GLM-5.2全量开放并开源，多榜单进入全球前三，开发者反馈接近海外顶级模型；MaaS平台ARR约17亿元，同比提升60倍，2026Q1 API涨...",
  "rawText": "",
  "topicId": "14422414224521182"
},
{
  "date": "2026-06-21",
  "title": "佰维存储｜存储行业跟踪",
  "sector": "AI",
  "tags": [
    "佰维存储",
    "存储"
  ],
  "source": "段子",
  "sourceTitle": "佰维存储｜存储行业跟踪",
  "importance": 0.8,
  "confidence": 1.0,
  "upside": 5,
  "summary": "来源/title：佰维存储｜存储行业跟踪。DDR5 16Gb均价4月至今上涨24%，DDR4 16Gb 6月至今上涨12%；MLC 64Gb年初至今涨273%，SLC 1Gb涨152%。TrendForce显示26Q2 DRAM合约价环增5...",
  "summaryBody": "DDR5 16Gb均价4月至今上涨24%，DDR4 16Gb 6月至今上涨12%；MLC 64Gb年初至今涨273%，SLC 1Gb涨152%。TrendForce显示26Q2 DRAM合约价环增5...",
  "rawText": "",
  "topicId": "82255242585251412"
},
{
  "date": "2026-06-21",
  "title": "天风汽车｜DrMOS更新7",
  "sector": "其他",
  "tags": [
    "DrMOS更新（7）"
  ],
  "source": "段子",
  "sourceTitle": "天风汽车｜DrMOS更新7",
  "importance": 0.8,
  "confidence": 1.0,
  "upside": 5,
  "summary": "来源/title：天风汽车｜DrMOS更新7。晶合集成已为杰华特准备年化约10万片12寸晶圆产能用于DrMOS扩产；由于需求旺盛，晶合相关产能有望每年增加10万片，匹配电源芯片产能由2万片/月增至中期6万片/月。按单片晶圆1200美元、晶圆...",
  "summaryBody": "晶合集成已为杰华特准备年化约10万片12寸晶圆产能用于DrMOS扩产；由于需求旺盛，晶合相关产能有望每年增加10万片，匹配电源芯片产能由2万片/月增至中期6万片/月。按单片晶圆1200美元、晶圆...",
  "rawText": "",
  "topicId": "14422414252452422"
},
{
  "date": "2026-06-19",
  "title": "斯迪克MLCC离型膜现有外销月产3000万平，下月开始5000万平，新增12亿平总产",
  "sector": "其他",
  "tags": [
    "MLCC"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.6,
  "confidence": 2.5,
  "upside": 40,
  "summary": "斯迪克MLCC离型膜现有外销月产3000万平，下月开始5000万平，新增12亿平总产能达20亿平每年；新增12亿平对应营收23亿元、净利5.43亿元，涨价10%净利7-8亿元，涨价20%净利9.6-10亿元；已对接村田、太阳诱电验证。",
  "summaryBody": "斯迪克MLCC离型膜现有外销月产3000万平，下月开始5000万平，新增12亿平总产能达20亿平每年；新增12亿平对应营收23亿元、净利5.43亿元，涨价10%净利7-8亿元，涨价20%净利9.6-10亿元；已对接村田、太阳诱电验证。",
  "rawText": "",
  "topicId": "45544528244828148"
},
{
  "date": "2026-06-18",
  "title": "AI上游材料更新覆盖MLCC粉体、高频高速树脂PPO/ODV/BCB、PTFE/PF",
  "sector": "AI",
  "tags": [
    "AI",
    "MLCC"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "AI上游材料更新覆盖MLCC粉体、高频高速树脂PPO/ODV/BCB、PTFE/PFA/氟化液等，属于AI硬件上游材料总括型线索，可作为多个细分材料方向的摘要证据。",
  "summaryBody": "AI上游材料更新覆盖MLCC粉体、高频高速树脂PPO/ODV/BCB、PTFE/PFA/氟化液等，属于AI硬件上游材料总括型线索，可作为多个细分材料方向的摘要证据。",
  "rawText": "",
  "topicId": "82255248518528142"
},
{
  "date": "2026-06-18",
  "title": "江海产业链调研更新提到AI服务器超级电容从选配到标配、MLPC供需缺口、牛角电容和h",
  "sector": "AI",
  "tags": [
    "AI",
    "MLCC"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 7.7,
  "confidence": 2.5,
  "upside": 46,
  "summary": "江海产业链调研更新提到AI服务器超级电容从选配到标配、MLPC供需缺口、牛角电容和hybrid电容需求，属于AI服务器被动元件涨价链条，和MLCC/被动元件逻辑相邻。",
  "summaryBody": "江海产业链调研更新提到AI服务器超级电容从选配到标配、MLPC供需缺口、牛角电容和hybrid电容需求，属于AI服务器被动元件涨价链条，和MLCC/被动元件逻辑相邻。",
  "rawText": "",
  "topicId": "45544528441548858"
},
{
  "date": "2026-06-18",
  "title": "广发机械跟踪AI PCB钻针，上游高端棒材份额集中，住友部分产品停止销售，下半年或缺",
  "sector": "AI",
  "tags": [
    "AI",
    "钨",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "广发机械跟踪AI PCB钻针，上游高端棒材份额集中，住友部分产品停止销售，下半年或缺棒料，提及中钨高新、欧科亿等，匹配钨、AI行业、PCB钻针。",
  "summaryBody": "广发机械跟踪AI PCB钻针，上游高端棒材份额集中，住友部分产品停止销售，下半年或缺棒料，提及中钨高新、欧科亿等，匹配钨、AI行业、PCB钻针。",
  "rawText": "",
  "topicId": "82255248855124552"
},
{
  "date": "2026-06-18",
  "title": "菲利华段子提到电子布/Q布，AI算力驱动高性能电子布需求，超薄石英电子布处于客户端测",
  "sector": "AI",
  "tags": [
    "AI",
    "电子布"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "菲利华段子提到电子布/Q布，AI算力驱动高性能电子布需求，超薄石英电子布处于客户端测试认证阶段，匹配电子布和AI行业。",
  "summaryBody": "菲利华段子提到电子布/Q布，AI算力驱动高性能电子布需求，超薄石英电子布处于客户端测试认证阶段，匹配电子布和AI行业。",
  "rawText": "",
  "topicId": "22255248512448581"
},
{
  "date": "2026-06-18",
  "title": "国瓷材料段子聚焦AI服务器拉动MLCC粉体，高端粉体产能和出货扩张，同时叠加重稀土管",
  "sector": "AI",
  "tags": [
    "AI",
    "MLCC",
    "稀土"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "国瓷材料段子聚焦AI服务器拉动MLCC粉体，高端粉体产能和出货扩张，同时叠加重稀土管制、氮化铝粉体、齿科氧化锆等多个材料逻辑，和卖方私信中多条国瓷内容互相印证。",
  "summaryBody": "国瓷材料段子聚焦AI服务器拉动MLCC粉体，高端粉体产能和出货扩张，同时叠加重稀土管制、氮化铝粉体、齿科氧化锆等多个材料逻辑，和卖方私信中多条国瓷内容互相印证。",
  "rawText": "",
  "topicId": "82255248888482522"
},
{
  "date": "2026-06-18",
  "title": "天风金属新材料继续推荐博迁新材，强调其为A股MLCC高端材料标的，高端80nm镍粉、",
  "sector": "AI",
  "tags": [
    "AI",
    "MLCC"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "天风金属新材料继续推荐博迁新材，强调其为A股MLCC高端材料标的，高端80nm镍粉、三星链条、AI趋势下MLCC镍粉量价弹性和H股递表催化。",
  "summaryBody": "天风金属新材料继续推荐博迁新材，强调其为A股MLCC高端材料标的，高端80nm镍粉、三星链条、AI趋势下MLCC镍粉量价弹性和H股递表催化。",
  "rawText": "",
  "topicId": "82255248521451442"
},
{
  "date": "2026-06-18",
  "title": "中信主题策略梳理AI液冷，强调Rubin平台液冷、1.6T光模块功耗上升带来光模块液",
  "sector": "AI",
  "tags": [
    "AI",
    "光模块",
    "液冷",
    "科技"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "中信主题策略梳理AI液冷，强调Rubin平台液冷、1.6T光模块功耗上升带来光模块液冷从0到1，推荐奕东电子、鼎通科技、达瑞电子、金洲管道、飞龙股份，匹配AI行业和光模块。",
  "summaryBody": "中信主题策略梳理AI液冷，强调Rubin平台液冷、1.6T光模块功耗上升带来光模块液冷从0到1，推荐奕东电子、鼎通科技、达瑞电子、金洲管道、飞龙股份，匹配AI行业和光模块。",
  "rawText": "",
  "topicId": "55522541258545584"
},
{
  "date": "2026-06-18",
  "title": "段子提示后续液冷板块机会，横向新品类中提到光模块差异化竞争液冷赛道，推荐奕东电子、鼎",
  "sector": "AI",
  "tags": [
    "AI",
    "光模块",
    "液冷",
    "科技"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 7.3,
  "confidence": 2.5,
  "upside": 44,
  "summary": "段子提示后续液冷板块机会，横向新品类中提到光模块差异化竞争液冷赛道，推荐奕东电子、鼎通科技，匹配光模块与AI行业。",
  "summaryBody": "段子提示后续液冷板块机会，横向新品类中提到光模块差异化竞争液冷赛道，推荐奕东电子、鼎通科技，匹配光模块与AI行业。",
  "rawText": "",
  "topicId": "45544528422848818"
},
{
  "date": "2026-06-18",
  "title": "唯特偶段子提到T7超细锡粉/锡膏用于800G/1.6T光模块，国产替代空间较大，属于",
  "sector": "AI",
  "tags": [
    "光模块"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 7.0,
  "confidence": 2.5,
  "upside": 42,
  "summary": "唯特偶段子提到T7超细锡粉/锡膏用于800G/1.6T光模块，国产替代空间较大，属于光模块材料端线索。",
  "summaryBody": "唯特偶段子提到T7超细锡粉/锡膏用于800G/1.6T光模块，国产替代空间较大，属于光模块材料端线索。",
  "rawText": "",
  "topicId": "55522541244515144"
},
{
  "date": "2026-06-18",
  "title": "财通电子新科技调研昀冢科技，提到高容MLCC产品涨价、产能爬坡，26年底年化产量目标",
  "sector": "其他",
  "tags": [
    "MLCC",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 7.0,
  "confidence": 2.5,
  "upside": 42,
  "summary": "财通电子新科技调研昀冢科技，提到高容MLCC产品涨价、产能爬坡，26年底年化产量目标约1400亿颗、27年底目标约2400亿颗，匹配MLCC。",
  "summaryBody": "财通电子新科技调研昀冢科技，提到高容MLCC产品涨价、产能爬坡，26年底年化产量目标约1400亿颗、27年底目标约2400亿颗，匹配MLCC。",
  "rawText": "",
  "topicId": "82255248551214152"
},
{
  "date": "2026-06-18",
  "title": "卖方私信判断MLCC厂商后续集体调涨价格具备确定性，6-8月会看到更多产业催化，重点",
  "sector": "其他",
  "tags": [
    "MLCC",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 7.0,
  "confidence": 2.5,
  "upside": 42,
  "summary": "卖方私信判断MLCC厂商后续集体调涨价格具备确定性，6-8月会看到更多产业催化，重点提及风华高科、三环集团、商络电子、洁美科技、博迁新材、国瓷材料、昀冢科技等，匹配MLCC。",
  "summaryBody": "卖方私信判断MLCC厂商后续集体调涨价格具备确定性，6-8月会看到更多产业催化，重点提及风华高科、三环集团、商络电子、洁美科技、博迁新材、国瓷材料、昀冢科技等，匹配MLCC。",
  "rawText": "",
  "topicId": "55522541221111854"
},
{
  "date": "2026-06-18",
  "title": "段子同时覆盖中钨高新、鼎泰高科、厦门钨业，逻辑包含光伏钨丝、六氟化钨、PCB钻针以及",
  "sector": "AI",
  "tags": [
    "AI",
    "钨",
    "MLCC",
    "PCB",
    "稀土"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.8,
  "confidence": 2.2,
  "upside": 41,
  "summary": "段子同时覆盖中钨高新、鼎泰高科、厦门钨业，逻辑包含光伏钨丝、六氟化钨、PCB钻针以及MLCC用重稀土，匹配钨、厦门钨业、MLCC、AI PCB链条。",
  "summaryBody": "段子同时覆盖中钨高新、鼎泰高科、厦门钨业，逻辑包含光伏钨丝、六氟化钨、PCB钻针以及MLCC用重稀土，匹配钨、厦门钨业、MLCC、AI PCB链条。",
  "rawText": "",
  "topicId": "14422415524428522"
},
{
  "date": "2026-06-18",
  "title": "东吴金属新材料提到博迁新材递表港交所、全球第二大MLCC镍粉厂商、高端镍粉国产替代和",
  "sector": "其他",
  "tags": [
    "MLCC"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.6,
  "confidence": 2.5,
  "upside": 40,
  "summary": "东吴金属新材料提到博迁新材递表港交所、全球第二大MLCC镍粉厂商、高端镍粉国产替代和高端产能释放，匹配MLCC。",
  "summaryBody": "东吴金属新材料提到博迁新材递表港交所、全球第二大MLCC镍粉厂商、高端镍粉国产替代和高端产能释放，匹配MLCC。",
  "rawText": "",
  "topicId": "55522541281525514"
},
{
  "date": "2026-06-18",
  "title": "锡粉锡膏专家更新提到光模块等高端锡膏的助焊剂壁垒、锡粉市场格局与高阶粉价格体系，匹配",
  "sector": "AI",
  "tags": [
    "光模块"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.6,
  "confidence": 2.5,
  "upside": 40,
  "summary": "锡粉锡膏专家更新提到光模块等高端锡膏的助焊剂壁垒、锡粉市场格局与高阶粉价格体系，匹配光模块材料链，并与唯特偶T7锡膏段子交叉验证。",
  "summaryBody": "锡粉锡膏专家更新提到光模块等高端锡膏的助焊剂壁垒、锡粉市场格局与高阶粉价格体系，匹配光模块材料链，并与唯特偶T7锡膏段子交叉验证。",
  "rawText": "",
  "topicId": "45544528422418558"
},
{
  "date": "2026-06-18",
  "title": "天风电子提到迅捷兴RCC新架构，传统高端PCB依赖玻纤布和CCL，RCC以纯树脂直涂",
  "sector": "AI",
  "tags": [
    "电子布",
    "铜箔",
    "CCL",
    "光模块",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.6,
  "confidence": 2.5,
  "upside": 40,
  "summary": "天风电子提到迅捷兴RCC新架构，传统高端PCB依赖玻纤布和CCL，RCC以纯树脂直涂铜箔方式减少玻纤消耗，可用于光模块PCB，匹配CCL、电子布、铜箔、光模块。",
  "summaryBody": "天风电子提到迅捷兴RCC新架构，传统高端PCB依赖玻纤布和CCL，RCC以纯树脂直涂铜箔方式减少玻纤消耗，可用于光模块PCB，匹配CCL、电子布、铜箔、光模块。",
  "rawText": "",
  "topicId": "55522541245841544"
},
{
  "date": "2026-06-18",
  "title": "国瓷材料高端MLCC陶瓷粉体受稀土管制和日系原料承压影响，有份额提升和价格弹性；齿科",
  "sector": "有色",
  "tags": [
    "MLCC",
    "稀土"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 6.5,
  "confidence": 2.2,
  "upside": 39,
  "summary": "国瓷材料高端MLCC陶瓷粉体受稀土管制和日系原料承压影响，有份额提升和价格弹性；齿科氧化锆、氮化铝粉体也可能受日系供给收缩带来涨价和替代机会。",
  "summaryBody": "国瓷材料高端MLCC陶瓷粉体受稀土管制和日系原料承压影响，有份额提升和价格弹性；齿科氧化锆、氮化铝粉体也可能受日系供给收缩带来涨价和替代机会。",
  "rawText": "",
  "topicId": "55522541111244584"
},
{
  "date": "2026-06-18",
  "title": "卖方私信提到电子布与国产织机，普通电子布涨价、特种布价格尚未启动，国产织机订单受益，",
  "sector": "AI",
  "tags": [
    "电子布"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 6.5,
  "confidence": 2.2,
  "upside": 39,
  "summary": "卖方私信提到电子布与国产织机，普通电子布涨价、特种布价格尚未启动，国产织机订单受益，匹配电子布并可与建滔、菲利华链条交叉验证。",
  "summaryBody": "卖方私信提到电子布与国产织机，普通电子布涨价、特种布价格尚未启动，国产织机订单受益，匹配电子布并可与建滔、菲利华链条交叉验证。",
  "rawText": "",
  "topicId": "45544528848241428"
},
{
  "date": "2026-06-18",
  "title": "奕东电子段子提到光模块cage和液冷IO连接器，关联鼎通科技、1.6T、CPO/NP",
  "sector": "AI",
  "tags": [
    "光模块",
    "液冷",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 6.5,
  "confidence": 2.2,
  "upside": 39,
  "summary": "奕东电子段子提到光模块cage和液冷IO连接器，关联鼎通科技、1.6T、CPO/NPO等方向，匹配光模块结构件与连接器链条。",
  "summaryBody": "奕东电子段子提到光模块cage和液冷IO连接器，关联鼎通科技、1.6T、CPO/NPO等方向，匹配光模块结构件与连接器链条。",
  "rawText": "",
  "topicId": "82255248544421822"
},
{
  "date": "2026-06-18",
  "title": "PCB上游跟踪提到金安国纪、江南新材、中化国际等，包含CCL调价、铜粉涨价、PPO材",
  "sector": "AI",
  "tags": [
    "AI",
    "铜箔",
    "CCL",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.3,
  "confidence": 1.8,
  "upside": 38,
  "summary": "PCB上游跟踪提到金安国纪、江南新材、中化国际等，包含CCL调价、铜粉涨价、PPO材料和AI PCB上游材料变化，匹配CCL、铜箔/铜粉、AI行业。",
  "summaryBody": "PCB上游跟踪提到金安国纪、江南新材、中化国际等，包含CCL调价、铜粉涨价、PPO材料和AI PCB上游材料变化，匹配CCL、铜箔/铜粉、AI行业。",
  "rawText": "",
  "topicId": "55522541128828844"
},
{
  "date": "2026-06-18",
  "title": "ZX机械看好中钨高新，提到章源钨业6月下半月长单采购报价上调，中钨作为钨资源龙头受益",
  "sector": "有色",
  "tags": [
    "钨"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.1,
  "confidence": 2.2,
  "upside": 37,
  "summary": "ZX机械看好中钨高新，提到章源钨业6月下半月长单采购报价上调，中钨作为钨资源龙头受益，同时强调金洲精工高长径比钻针及棒料紧缺带来的高壁垒和利润弹性。",
  "summaryBody": "ZX机械看好中钨高新，提到章源钨业6月下半月长单采购报价上调，中钨作为钨资源龙头受益，同时强调金洲精工高长径比钻针及棒料紧缺带来的高壁垒和利润弹性。",
  "rawText": "",
  "topicId": "82255248518124212"
},
{
  "date": "2026-06-18",
  "title": "天风电新更新海亮股份铜箔业务，提到锂电铜箔盈利、PCB铜箔追赶、HVLP送样和海外扩",
  "sector": "AI",
  "tags": [
    "铜箔",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 6.1,
  "confidence": 2.2,
  "upside": 37,
  "summary": "天风电新更新海亮股份铜箔业务，提到锂电铜箔盈利、PCB铜箔追赶、HVLP送样和海外扩产盈利弹性，匹配铜箔关注词。",
  "summaryBody": "天风电新更新海亮股份铜箔业务，提到锂电铜箔盈利、PCB铜箔追赶、HVLP送样和海外扩产盈利弹性，匹配铜箔关注词。",
  "rawText": "",
  "topicId": "82255248544824412"
},
{
  "date": "2026-06-18",
  "title": "卖方私信提到联讯仪器和优利德在光模块测试方向，1.6T采样示波器、光模块仪器订单等，",
  "sector": "AI",
  "tags": [
    "光模块"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 6.0,
  "confidence": 1.8,
  "upside": 36,
  "summary": "卖方私信提到联讯仪器和优利德在光模块测试方向，1.6T采样示波器、光模块仪器订单等，匹配光模块设备链。",
  "summaryBody": "卖方私信提到联讯仪器和优利德在光模块测试方向，1.6T采样示波器、光模块仪器订单等，匹配光模块设备链。",
  "rawText": "",
  "topicId": "45544528422214558"
},
{
  "date": "2026-06-18",
  "title": "AMD最新MI450的MLCC用量从原1440颗提升到10544颗，提及三环、风华、",
  "sector": "AI",
  "tags": [
    "AI",
    "MLCC"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 5.7,
  "confidence": 1.0,
  "upside": 34,
  "summary": "AMD最新MI450的MLCC用量从原1440颗提升到10544颗，提及三环、风华、国瓷，指向AI服务器平台对MLCC需求弹性。",
  "summaryBody": "AMD最新MI450的MLCC用量从原1440颗提升到10544颗，提及三环、风华、国瓷，指向AI服务器平台对MLCC需求弹性。",
  "rawText": "",
  "topicId": "14422415552484122"
},
{
  "date": "2026-06-18",
  "title": "国瓷材料MLCC介质粉体高端粉体今年起量，全年预计接近1000吨，三星电机预计三季度",
  "sector": "AI",
  "tags": [
    "MLCC"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 5.0,
  "confidence": 1.0,
  "upside": 30,
  "summary": "国瓷材料MLCC介质粉体高端粉体今年起量，全年预计接近1000吨，三星电机预计三季度逐步上量；下游MLCC涨价更多是贸易商炒作，海外原厂未见明显普涨；硅微粉M7/M8客户验证，年底2000吨产能投放。",
  "summaryBody": "国瓷材料MLCC介质粉体高端粉体今年起量，全年预计接近1000吨，三星电机预计三季度逐步上量；下游MLCC涨价更多是贸易商炒作，海外原厂未见明显普涨；硅微粉M7/M8客户验证，年底2000吨产能投放。",
  "rawText": "",
  "topicId": "14422415442141852"
},
{
  "date": "2026-06-18",
  "title": "斯瑞新材段子提到800G/1.6T光模块高强高导铜合金壳体已经中小批量供货，客户包括",
  "sector": "AI",
  "tags": [
    "光模块",
    "科技"
  ],
  "source": "卖方私信",
  "sourceTitle": "",
  "importance": 5.0,
  "confidence": 1.0,
  "upside": 30,
  "summary": "斯瑞新材段子提到800G/1.6T光模块高强高导铜合金壳体已经中小批量供货，客户包括剑桥科技、索尔思、天孚通信等，同时有铜金刚石工艺和航天/核聚变材料延展。",
  "summaryBody": "斯瑞新材段子提到800G/1.6T光模块高强高导铜合金壳体已经中小批量供货，客户包括剑桥科技、索尔思、天孚通信等，同时有铜金刚石工艺和航天/核聚变材料延展。",
  "rawText": "",
  "topicId": "45544528848125518"
},
{
  "date": "2026-06-18",
  "title": "建滔链条段子提到基层板/CCL、特种电子布、铜箔等PCB上游供给紧张，特种布与铜箔可",
  "sector": "AI",
  "tags": [
    "电子布",
    "铜箔",
    "CCL",
    "PCB"
  ],
  "source": "段子",
  "sourceTitle": "",
  "importance": 4.6,
  "confidence": 1.0,
  "upside": 28,
  "summary": "建滔链条段子提到基层板/CCL、特种电子布、铜箔等PCB上游供给紧张，特种布与铜箔可能成为后续瓶颈，匹配关注词CCL、电子布、铜箔。",
  "summaryBody": "建滔链条段子提到基层板/CCL、特种电子布、铜箔等PCB上游供给紧张，特种布与铜箔可能成为后续瓶颈，匹配关注词CCL、电子布、铜箔。",
  "rawText": "",
  "topicId": "14422415528141182"
},
// END AUTO IMPORT ZSXQ SIGNALS
  {
    date: "2026-06-18",
    title: "电容电感链条出现多点共振",
    sector: "AI",
    tags: ["电容电感", "国瓷材料", "博迁新材", "昀冢科技"],
    source: "段子 + 卖方私信",
    importance: 9.1,
    confidence: 7.4,
    upside: 62,
    summary:
      "国瓷粉体、博迁镍粉、昀冢高容 MLCC、江海 MLPC/超级电容多次出现，逻辑从单点涨价扩散到 AI 服务器被动元件通胀。",
  },
  {
    date: "2026-06-18",
    title: "PCB 上游从 CCL 扩散到铜箔、RCC 和药水",
    sector: "AI",
    tags: ["PCB", "电子布", "CCL", "铜箔", "建滔积层板"],
    source: "段子",
    importance: 8.8,
    confidence: 6.8,
    upside: 55,
    summary:
      "建滔、海亮、菲利华、泰坦股份、迅捷兴 RCC 方案同时命中，价格上修和供给约束是主线，需观察涨价能否转 EPS。",
  },
  {
    date: "2026-06-18",
    title: "中钨高新/厦门钨业进入 PCB 钻针链",
    sector: "有色",
    tags: ["钨", "中钨高新", "厦门钨业", "PCB钻针"],
    source: "段子",
    importance: 8.6,
    confidence: 6.6,
    upside: 48,
    summary:
      "钨价上行叠加高端棒材、钻针供给紧张，资源品属性和 PCB 耗材属性同时被讨论，适合建立计算器跟踪。",
  },
  {
    date: "2026-06-18",
    title: "光模块链从结构件扩展到锡膏、测试和液冷",
    sector: "AI",
    tags: ["光模块", "斯瑞新材", "唯特偶", "联讯仪器", "奕东电子"],
    source: "卖方私信",
    importance: 8.2,
    confidence: 6.8,
    upside: 36,
    summary:
      "800G/1.6T 光模块铜合金壳体、T7 锡膏、采样示波器、cage 与液冷连接器同时出现，细分小票弹性较多。",
  },
  {
    date: "2026-06-18",
    title: "国产算力价格与利润率预期上移",
    sector: "国产",
    tags: ["国产算力", "寒武纪", "海光信息", "东吴计算机"],
    source: "段子",
    importance: 7.8,
    confidence: 5.6,
    upside: 34,
    summary:
      "多条内容提到国产 GPU 供不应求、价格重估和互联网厂商加量采购，偏板块 beta，需用订单和价格验证。",
  },
  {
    date: "2026-06-18",
    title: "AI电源从服务器电源扩展到超级电容和备电",
    sector: "AI",
    tags: ["AI电源", "江海股份", "火炬电子", "崧盛股份", "鹏辉能源"],
    source: "段子 + 卖方私信",
    importance: 7.7,
    confidence: 6.1,
    upside: 38,
    summary:
      "AI服务器功率密度提高，MLPC、超级电容、AIDC备电、电源送样共同构成新支线，适合按单柜价值量拆计算器。",
  },
  {
    date: "2026-06-17",
    title: "PCB 上游涨价仍在发酵",
    sector: "AI",
    tags: ["PCB", "电子布", "CCL"],
    source: "卖方私信",
    importance: 7.2,
    confidence: 5.4,
    upside: 24,
    summary: "前一日 PCB 上游已出现涨价预热，6月18日进一步扩散到铜箔、RCC 和 CCL。",
  },
];

const sellSideCalculators = [
  {
    company: "铜冠铜箔",
    date: "2026-06-21",
    source: "天风电新",
    title: "PCB铜箔重估：H3-4放量与Rubin周期",
    oldTarget: 500,
    target: 1000,
    currentCap: 500,
    upside: 100,
    revision: 100,
    confidence: "中高",
    assumptions: [
      "天风电新提示PCB铜箔从价格修复切到盈利与市值重估",
      "按明年40亿利润与估值重估框架，目标市值区间上修至500-1000亿",
      "Rubin与H3/H4高阶材料放量是主要弹性假设",
    ],
  },
  {
    company: "海亮股份",
    date: "2026-06-21",
    source: "天风电新",
    title: "H3/H4铜箔弹性：潜在市值空间上修",
    oldTarget: 500,
    target: 1000,
    currentCap: 500,
    upside: 100,
    revision: 100,
    confidence: "中",
    assumptions: [
      "天风电新将海亮列为PCB铜箔后续重点弹性方向",
      "以高阶铜箔放量和库存下降后的涨价传导作为核心假设",
      "目标市值先按板块重估区间占位，后续等待卖方明细口径校准",
    ],
  },
  {
    company: "华正新材",
    date: "2026-06-21",
    source: "东北计算机 / 天风电新",
    title: "CCL涨价主升浪：A股CCL弹性标的",
    oldTarget: 200,
    target: 400,
    currentCap: 200,
    upside: 100,
    revision: 100,
    confidence: "中",
    assumptions: [
      "东北计算机强调CCL涨价频次和上游材料确认度继续抬升",
      "天风电新提示CCL仍有翻倍空间，A股弹性标的包括华正新材",
      "单公司市值目标为板块弹性占位，需用后续卖方原文数字复核",
    ],
  },
  {
    company: "金安国纪",
    date: "2026-06-21",
    source: "东北计算机 / 天风电新",
    title: "CCL涨价扩散：低市值弹性标的上修",
    oldTarget: 150,
    target: 300,
    currentCap: 150,
    upside: 100,
    revision: 100,
    confidence: "观察",
    assumptions: [
      "CCL报价与上游电子布、铜箔、树脂约束形成共振",
      "按板块翻倍空间先做市值计算器占位",
      "后续需要补充公司订单、价格传导和利润弹性明细",
    ],
  },
  {
    company: "宝鼎科技",
    date: "2026-06-21",
    source: "东北计算机 / 天风电新",
    title: "CCL链条补涨：弹性标的目标市值占位上修",
    oldTarget: 120,
    target: 240,
    currentCap: 120,
    upside: 100,
    revision: 100,
    confidence: "观察",
    assumptions: [
      "天风电新将宝鼎科技纳入A股CCL弹性观察方向",
      "用CCL板块翻倍空间先建立交易台计算器",
      "该条目为中期占位，需继续跟踪卖方目标市值和盈利假设",
    ],
  },
  {
    company: "国瓷材料",
    date: "2026-06-18",
    source: "卖方私信",
    title: "AI MLCC粉体 + 重稀土约束",
    oldTarget: 620,
    target: 820,
    currentCap: 520,
    upside: 58,
    revision: 32,
    confidence: "中高",
    assumptions: [
      "高端 MLCC 粉体出货持续提升",
      "重稀土约束推动国产陶瓷粉体份额提升",
      "按 AI 服务器用量上修远期利润中枢",
    ],
  },
  {
    company: "国瓷材料",
    date: "2026-06-15",
    source: "段子",
    title: "MLCC粉体国产替代",
    oldTarget: 540,
    target: 620,
    currentCap: 500,
    upside: 24,
    revision: 15,
    confidence: "中",
    assumptions: ["高端粉体放量", "三星链条逐步上量", "齿科氧化锆维持稳定贡献"],
  },
  {
    company: "江西铜业",
    date: "2026-06-18",
    source: "段子",
    title: "HVLP3通过台光验证，铜箔估值锚切换",
    oldTarget: 980,
    target: 1260,
    currentCap: 980,
    upside: 29,
    revision: 29,
    confidence: "中",
    assumptions: [
      "HVLP3 通过台光验证",
      "PCB铜箔从送样进入小批量后给予更高估值",
      "铜主业托底，铜箔提供弹性",
    ],
  },
  {
    company: "中钨高新",
    date: "2026-06-18",
    source: "段子",
    title: "钨价上行 + 金洲精工钻针棒材弹性",
    oldTarget: 430,
    target: 550,
    currentCap: 430,
    upside: 28,
    revision: 28,
    confidence: "中",
    assumptions: [
      "钨精矿长单报价继续上行",
      "高长径比钻针和棒料紧缺",
      "资源利润与 PCB 耗材利润双线重估",
    ],
  },
  {
    company: "唯特偶",
    date: "2026-06-18",
    source: "卖方私信",
    title: "T7锡膏导入800G/1.6T光模块",
    oldTarget: 180,
    target: 225,
    currentCap: 160,
    upside: 41,
    revision: 25,
    confidence: "中",
    assumptions: ["T7超细锡粉/锡膏切入高端光模块", "国产替代空间打开", "按光模块材料小票弹性估值"],
  },
  {
    company: "斯瑞新材",
    date: "2026-06-18",
    source: "卖方私信",
    title: "800G/1.6T光模块铜合金壳体",
    oldTarget: null,
    target: null,
    currentCap: 190,
    upside: null,
    revision: null,
    confidence: "观察",
    assumptions: ["有段子边际更新，但暂未看到明确目标市值计算器"],
  },
];

let selectedDate = latestDate();
let selectedSector = "全部";
let heatMode = "heat";
const modalStack = [];
let currentModalState = null;

const el = (id) => document.getElementById(id);

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function signalSourceTitle(signal) {
  if (!signal) return "";
  return (signal.sourceTitle || "").trim();
}

function signalSummaryText(signal) {
  if (!signal) return "";
  const body = (signal.summaryBody || "").trim();
  if (body) return body;
  return String(signal.summary || "").replace(/^来源\/title：[^。]*。?/, "").trim();
}

function signalRawText(signal) {
  if (!signal) return "";
  return (signal.rawText || signal.summary || "").trim();
}

function rawBodyText(signal) {
  return signalRawText(signal).replace(/^来源\/title：[^。]*。?/, "").trim();
}

function latestDate() {
  return [...dataDates].sort().at(-1);
}

function renderDateFilter() {
  el("dateFilter").innerHTML = [...dataDates]
    .sort()
    .reverse()
    .map((date) => `<option value="${date}">${formatDateLabel(date)}</option>`)
    .join("");
  el("dateFilter").value = selectedDate;
  el("topEyebrow").textContent = `${selectedDate} · A股产业情报台`;
}

function renderNav() {
  const groups = sectors
    .map(
      (sector) => {
        const selectedInGroup =
          selectedSector !== "全部" &&
          (selectedSector === sector.name || sector.children.some(([name]) => name === selectedSector));
        return `
        <details class="nav-group" ${selectedInGroup ? "open" : ""}>
          <summary data-sector-group="${sector.name}"><span>${sector.name}</span><span>${sector.children.length}</span></summary>
          <div class="nav-items">
            <button class="nav-item ${selectedSector === sector.name ? "active" : ""}" data-sector="${sector.name}">
              ${sector.name}全景
            </button>
            ${sector.children
              .map(
                ([name]) => `
                  <button class="nav-item ${selectedSector === name ? "active" : ""}" data-sector="${name}">
                    ${name}
                  </button>`
              )
              .join("")}
          </div>
        </details>`;
      }
    )
    .join("");

  el("industryNav").innerHTML = `
    <button class="all-button ${selectedSector === "全部" ? "active" : ""}" data-sector="全部" type="button">
      <span>ALL</span>
      <small>全部行业</small>
    </button>
    ${groups}
  `;

  document.querySelectorAll("[data-sector]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSector = button.dataset.sector;
      renderAll();
    });
  });
  document.querySelectorAll("[data-sector-group]").forEach((summary) => {
    summary.addEventListener("click", (event) => {
      event.preventDefault();
      selectedSector = summary.dataset.sectorGroup;
      renderAll();
    });
  });
}

function modeScore(value) {
  if (heatMode === "revision") return Math.min(100, value + 8);
  if (heatMode === "risk") return Math.max(12, 100 - value);
  return value;
}

function industryKeywords(name) {
  const aliases = {
    AI: ["AI服务器", "算力"],
    PCB: ["PCB", "CCL", "电子布", "铜箔", "树脂", "硅微粉", "HVLP", "M8"],
    光模块: ["光模块", "CPO", "NPO", "MPO", "OCS", "藤仓", "光通信"],
    光纤: ["光纤", "光缆", "AIDC光纤", "G654", "空心光纤", "保偏光纤", "远东股份", "长飞", "亨通", "中天"],
    电容电感: ["电容", "电感", "MLCC", "国瓷", "陶瓷粉体"],
    AI电源: ["AI电源", "电源", "服务器电源", "AIDC备电"],
    液冷: ["液冷", "冷板", "散热"],
    "存储/HBM": ["存储", "HBM", "DRAM", "NAND"],
    先进封装: ["先进封装", "IC载板", "载板", "玻璃基板", "TGV", "CoWoS", "CoPoS", "TCB", "板级封装"],
    端侧AI: ["端侧AI", "端侧", "AI眼镜"],
    国产: ["国产", "国产算力", "半导体设备", "半导体零部件"],
    国产算力: ["国产AI芯片", "国产芯片", "AI芯片", "GPU", "CPU", "ASIC", "寒武纪", "海光", "昇腾", "沐曦", "摩尔线程", "壁仞", "昆仑芯", "平头哥"],
    国产半导体设备: ["半导体设备", "设备"],
    国产半导体零部件: ["半导体零部件", "零部件"],
    锂电: ["锂电", "电池", "储能", "锂矿"],
    有色: ["铜", "铝", "钨", "锡", "稀土", "黄金"],
    铜: ["铜矿", "铜资源", "紫金矿业", "洛阳钼业", "江西铜业", "云南铜业", "铜陵有色", "西部矿业", "金诚信"],
    铝: ["铝"],
    钨: ["钨", "中钨高新", "厦门钨业"],
    锡: ["锡", "锡膏"],
    稀土: ["稀土", "重稀土", "氧化镝", "镨钕", "稀土产业链", "中稀有色"],
    红利: ["红利", "高股息", "股息率", "分红", "派息", "现金流"],
  };
  return [name, ...(aliases[name] || [])].filter(Boolean);
}

function isDomesticComputeSignal(signal) {
  const text = [signal.title, signal.sector, signal.source, signal.summary, signal.rawText, ...(signal.tags || [])].join(" ");
  const computeTerms = ["国产AI芯片", "国产芯片", "AI芯片", "GPU", "CPU", "ASIC", "昇腾", "寒武纪", "海光", "沐曦", "摩尔线程", "壁仞", "昆仑芯", "平头哥"];
  return computeTerms.some((term) => text.includes(term));
}

function isCopperResourceSignal(signal) {
  const text = [signal.title, signal.sector, signal.source, signal.summary, signal.rawText, ...(signal.tags || [])].join(" ");
  const copperFoilTerms = ["铜箔", "PCB", "CCL", "HVLP", "H3", "H4", "电子布", "树脂", "硅微粉"];
  const resourceTerms = ["铜矿", "铜资源", "紫金矿业", "洛阳钼业", "江西铜业", "云南铜业", "铜陵有色", "西部矿业", "金诚信"];
  if (copperFoilTerms.some((term) => text.includes(term)) && !resourceTerms.some((term) => text.includes(term))) return false;
  return resourceTerms.some((term) => text.includes(term));
}

function isTungstenSignal(signal) {
  const titleText = [signal.title, signal.sourceTitle].join(" ");
  const visibleText = [signal.title, signal.sourceTitle, signal.summary, ...(signal.tags || [])].join(" ");
  const text = [visibleText, signal.rawText].join(" ");
  const strongTerms = ["六氟化钨", "PCB钨棒", "钨棒", "钨粉", "钨矿", "钨价", "钨钢", "碳化钨", "高纯钨", "钨原料", "钨出口", "中钨高新", "厦门钨业", "江钨", "翔鹭钨业", "中船特气"];
  const incidentalTerms = ["电子布", "玻璃基板", "国际复材", "中材科技", "宏和科技", "中国巨石", "旗滨集团", "Low-DK", "Low-CTE"];
  const titleHasTungsten = strongTerms.some((term) => titleText.includes(term));
  const hasStrongTungsten = strongTerms.some((term) => visibleText.includes(term));
  const isIncidentalMaterials = incidentalTerms.some((term) => visibleText.includes(term)) && !titleHasTungsten;
  return hasStrongTungsten && !isIncidentalMaterials;
}

function signalMatchesIndustryContent(signal, name) {
  if (name === "国产算力") return isDomesticComputeSignal(signal);
  if (name === "铜") return isCopperResourceSignal(signal);
  if (name === "钨") return isTungstenSignal(signal);
  const keywords = industryKeywords(name).map((item) => item.toLowerCase());
  const text = [signal.title, signal.sector, signal.source, signal.summary, ...(signal.tags || [])]
    .join(" ")
    .toLowerCase();
  return keywords.some((keyword) => text.includes(keyword));
}

function signalMatchesIndustry(signal, name) {
  return signal.date === selectedDate && signalMatchesIndustryContent(signal, name);
}

function signalsForIndustry(name) {
  return signals
    .filter((signal) => signalMatchesIndustry(signal, name))
    .sort((a, b) => (b.importance || 0) - (a.importance || 0))
    .slice(0, 8);
}

function latestIndustryDate(name) {
  const dates = [];
  const staticDetail = sectorDetails[name];
  if (staticDetail?.date) dates.push(staticDetail.date);
  signals.forEach((signal) => {
    if (signalMatchesIndustryContent(signal, name)) dates.push(signal.date);
  });
  return dates
    .filter(Boolean)
    .sort()
    .at(-1) || "";
}

function industryCardStatus(name, detail) {
  if (detail) {
    return {
      hasToday: true,
      left: `当日 ${detail.changes.length} 条边际`,
      right: "查看详情",
    };
  }
  const lastDate = latestIndustryDate(name);
  return {
    hasToday: false,
    left: lastDate ? `${formatDateLabel(lastDate)}边际` : "暂无边际",
    right: lastDate ? "最近更新" : "",
  };
}

const industryOnlyTerms = new Set([
  "AI",
  "PCB",
  "CCL",
  "电子布",
  "铜箔",
  "树脂",
  "硅微粉",
  "科技",
  "国产算力",
  "存储",
  "光模块",
  "光纤",
  "先进封装",
  "玻璃基板",
  "MLCC",
  "钨",
  "铜",
  "稀土",
  "红利",
  "锂电",
  "有色",
  "半导体设备",
  "半导体零部件",
  "储能",
  "JFT",
]);

const companyCatalog = [
  "建滔集团",
  "建滔积层板",
  "生益科技",
  "华正新材",
  "金安国纪",
  "宝鼎科技",
  "铜冠铜箔",
  "海亮股份",
  "方邦股份",
  "江西铜业",
  "联瑞新材",
  "光远新材",
  "旗滨集团",
  "国际复材",
  "中材科技",
  "宏和科技",
  "中国巨石",
  "国瓷材料",
  "博迁新材",
  "昀冢科技",
  "风华高科",
  "江海股份",
  "斯瑞新材",
  "唯特偶",
  "联讯仪器",
  "奕东电子",
  "鼎通科技",
  "达瑞电子",
  "海光信息",
  "寒武纪",
  "禾盛新材",
  "恒铭达",
  "佰维存储",
  "中钨高新",
  "厦门钨业",
  "江钨装备",
  "翔鹭钨业",
  "中船特气",
  "昊华科技",
  "中巨芯",
  "和远气体",
  "章源钨业",
  "格林美",
  "晶合集成",
  "远东股份",
  "长飞光纤",
  "亨通光电",
  "中天科技",
  "永鼎股份",
  "特发信息",
  "太辰光",
  "工大高科",
  "云天半导体",
  "沃格光电",
  "凯盛科技",
  "长川科技",
  "大族激光",
  "唯科科技",
  "茂莱光学",
  "长荣股份",
  "鸿华视像",
  "法拉电子",
  "艾华集团",
  "宏发股份",
  "仙鹤股份",
  "有研粉材",
  "有研新材",
  "中科曙光",
  "亚翔集成",
  "德明利",
  "大普微",
  "北京君正",
  "国科微",
  "拓荆科技",
  "中微公司",
  "北方华创",
  "雅克科技",
  "三祥新材",
  "西安奕材",
  "沪硅产业",
  "立昂微",
  "莲花控股",
  "纽菲斯",
  "容大感光",
  "汇成股份",
  "上峰材料",
  "京东方",
  "力诺药包",
  "国机精工",
  "宏柏新材",
  "洁美科技",
  "迅捷兴",
  "东阳光",
  "秦淮数据",
  "强一股份",
  "华峰测控",
  "精智达",
  "精测电子",
  "富创精密",
  "臻宝科技",
  "江丰电子",
  "珂玛科技",
  "新莱应材",
  "正帆科技",
  "申菱环境",
  "高澜股份",
  "同飞股份",
  "曙光数创",
  "川环科技",
  "飞荣达",
  "依米康",
  "银轮股份",
  "三花智控",
  "溯联股份",
  "腾龙股份",
  "祥鑫科技",
  "长电科技",
  "洁美科技",
  "利和兴",
  "三环集团",
  "火炬电子",
  "力源信息",
  "商络电子",
  "美光科技",
  "兆易创新",
  "普冉股份",
  "摩尔线程",
  "高斯贝尔",
  "联茂",
  "中际旭创",
  "新易盛",
  "智谱",
  "德福科技",
  "凌玮科技",
  "圣泉集团",
  "东材科技",
  "呈和科技",
  "世名科技",
  "中化国际",
  "杰美特",
  "新锐股份",
  "深南电路",
  "兴森科技",
  "天承科技",
  "泰金新能",
  "芯碁微装",
  "石英股份",
  "帝尔激光",
  "光华科技",
  "华海诚科",
  "行动教育",
  "东方教育",
  "中稀有色",
  "中国稀土",
  "北方稀土",
  "盛和资源",
  "华宏科技",
  "东方钽业",
  "天通股份",
  "稀美资源",
  "罗博特科",
  "广合科技",
  "比亚迪电子",
  "英维克",
  "立讯精密",
  "领益智造",
  "蓝思科技",
  "恒铭达",
  "欧陆通",
  "麦格米特",
  "金富科技",
  "飞龙股份",
  "思泉新材",
  "江南新材",
  "五洋自控",
  "捷邦科技",
  "王子新材",
  "信维通信",
  "天利控股集团",
  "宗申动力",
  "工业富联",
  "奥来德",
  "濮耐股份",
  "戈碧迦",
  "彩虹股份",
  "安捷利美维",
  "东威科技",
  "三孚新科",
  "华兴源创",
  "晶方科技",
  "天准科技",
  "江化微",
  "京仪装备",
  "盛剑环境",
  "鼎龙股份",
  "星源材质",
  "软通动力",
  "金洲管道",
  "博汇股份",
  "亚翔集成",
  "中国建材",
  "华大九天",
  "东芯股份",
  "神工股份",
  "广钢气体",
  "华新科",
  "太诱",
  "三星电机",
  "深南电路",
  "胜宏科技",
  "鹏鼎控股",
  "菲利华",
  "同宇新材",
  "宏昌电子",
  "瑞松科技",
  "长盈通",
  "通鼎互联",
  "光迅科技",
  "华工科技",
  "源杰科技",
  "东山精密",
  "长光华芯",
  "灿勤科技",
  "华丰科技",
  "锐捷网络",
  "紫光股份",
  "概伦电子",
  "江海股份",
  "嘉德利",
  "昀冢科技",
  "京泉华",
  "海伦哲",
  "飞龙股份",
  "臻宝科技",
  "华源控股",
  "多氟多",
  "巨化股份",
  "金宏气体",
  "德业股份",
  "阳光电源",
  "海博思创",
  "艾罗能源",
  "固德威",
  "锦浪科技",
  "鹏辉能源",
  "亿纬锂能",
  "禾迈股份",
  "盛弘股份",
  "江苏金租",
  "中国船舶租赁",
  "渤海租赁",
];

function titleCompanyHints(signal) {
  const text = `${signal.title || ""} ${signal.summary || ""}`;
  if (text.includes("PCB涨价更新") || text.includes("继续看好PCB&PCB上游")) {
    return ["凌玮科技", "德福科技", "厦门钨业", "东材科技", "宏和科技", "圣泉集团"];
  }
  if (text.includes("日系电容厂商鲁比康") || text.includes("鲁比康发布涨价函")) {
    return ["江海股份", "艾华集团", "法拉电子", "王子新材"];
  }
  if (text.includes("王子新材")) return ["王子新材"];
  if (text.includes("MLCC周观点")) return ["三环集团", "风华高科", "信维通信", "国瓷材料", "华新科", "三星电机"];
  if (text.includes("三星电机MLCC")) return ["三环集团", "风华高科", "信维通信", "国瓷材料", "三星电机"];
  if (text.includes("MLCC超级周期") || text.includes("天利控股集团")) return ["天利控股集团", "风华高科", "信维通信"];
  if (text.includes("信维通信") && text.includes("MLCC")) return ["信维通信"];
  if (text.includes("东芯股份") || text.includes("SLC NAND")) return ["东芯股份", "普冉股份", "兆易创新"];
  if (text.includes("近期半导体设备相关信息汇总")) return ["神工股份", "珂玛科技", "华峰测控", "强一股份"];
  if (text.includes("继续享受设备和涨价线")) return ["拓荆科技", "北方华创", "精测电子", "广钢气体", "珂玛科技", "普冉股份"];
  if (text.includes("PCB产业链三大观点")) return ["铜冠铜箔", "海亮股份", "方邦股份", "建滔集团", "金安国纪", "宝鼎科技"];
  if (text.includes("PCB发函确认涨价")) return ["宏和科技", "中材科技", "中国巨石", "国际复材", "德福科技", "华正新材"];
  if (text.includes("20260628行业周报")) return ["大族激光", "京东方", "长飞光纤", "英维克", "大普微", "江海股份"];
  if (text.includes("DBJSJ") || text.includes("业绩线&0-1产业链")) return ["德明利", "凌玮科技", "远东股份", "飞龙股份", "京东方", "三孚新科"];
  if (text.includes("真实的光纤扩产壁垒")) return ["长飞光纤", "亨通光电", "中天科技", "永鼎股份", "特发信息", "通鼎互联"];
  if (text.includes("GlassBridge澄清") || text.includes("GlassBridge玻璃基光互连")) return ["长飞光纤", "亨通光电", "中天科技", "太辰光", "光库科技"];
  if (text.includes("瑞松科技") || text.includes("MPO自动化")) return ["瑞松科技", "大族激光", "茂莱光学"];
  if (text.includes("基板产业链专家交流")) return ["上峰材料", "旗滨集团", "兴森科技", "深南电路", "生益科技", "大族激光"];
  if (text.includes("旗滨集团") && text.includes("定增")) return ["旗滨集团", "凯盛科技", "力诺药包"];
  if (text.includes("AI材料观点更新0628")) return ["中国巨石", "中材科技", "国际复材", "中船特气", "国瓷材料", "多氟多"];
  if (text.includes("高纯二氧化碳")) return ["广钢气体", "金宏气体"];
  if (text.includes("欧盟首签储能")) return ["德业股份", "阳光电源", "海博思创", "艾罗能源", "固德威", "盛弘股份"];
  if (text.includes("继续推荐券商板块")) return ["江苏金租", "中国船舶租赁", "渤海租赁"];
  if (text.includes("华丰科技调研") || text.includes("Socket连接器")) return ["华丰科技", "光迅科技", "华工科技", "锐捷网络", "紫光股份"];
  if (text.includes("玻璃基板专家调研")) return ["京东方", "安捷利美维", "沃格光电", "帝尔激光", "大族激光"];
  if (text.includes("再Call玻璃基板TGV")) return ["帝尔激光", "东威科技", "三孚新科", "芯碁微装", "大族激光", "华兴源创"];
  if (text.includes("康宁") && text.includes("玻璃桥")) return ["戈碧迦", "彩虹股份", "旗滨集团", "力诺药包", "京东方", "凯盛科技"];
  if (text.includes("奥来德")) return ["奥来德", "京东方", "天马", "维信诺"];
  if (text.includes("濮耐股份")) return ["濮耐股份"];
  if (text.includes("光通信大跌点评")) return ["中际旭创", "天孚通信", "光库科技", "亨通光电", "杭电股份"];
  if (text.includes("光纤板块调整点评")) return ["长飞光纤", "亨通光电", "中天科技", "永鼎股份"];
  if (text.includes("永鼎股份")) return ["永鼎股份"];
  if (text.includes("国产算力") || text.includes("今天一定要捞国产算力")) return ["寒武纪", "芯原股份", "华虹宏力"];
  if (text.includes("XYGF")) return ["芯原股份"];
  if (text.includes("华大九天")) return ["华大九天"];
  if (text.includes("江化微")) return ["江化微"];
  if (text.includes("设备零部件") && text.includes("最大瓶颈")) return ["珂玛科技", "江丰电子", "鼎龙股份", "北方华创", "京仪装备", "新莱应材"];
  if (text.includes("江丰电子") && text.includes("靶材")) return ["江丰电子"];
  if (text.includes("天准科技")) return ["天准科技"];
  if (text.includes("晶方科技")) return ["晶方科技"];
  if (text.includes("工业富联")) return ["工业富联"];
  if (text.includes("宗申动力")) return ["宗申动力"];
  if (text.includes("软通动力")) return ["软通动力"];
  if (text.includes("金洲管道")) return ["金洲管道"];
  if (text.includes("金刚石散热")) return ["国机精工", "四方达", "力量钻石", "黄河旋风", "沃尔德"];
  if (text.includes("电子布位置") || text.includes("对标存储产品5倍涨幅")) {
    return ["中国巨石", "中材科技", "国际复材", "金安国纪", "建滔积层板", "华正新材"];
  }
  if (text.includes("电子布与CCL检测设备") || text.includes("鸿华视像")) return ["长荣股份"];
  if (text.includes("GlassBridge") || text.includes("Glass Bridge") || text.includes("康宁新方案")) {
    if (text.includes("唯科科技") || text.includes("插芯")) return ["唯科科技", "大族激光", "茂莱光学"];
    return ["大族激光", "唯科科技", "茂莱光学", "长飞光纤"];
  }
  if (text.includes("大族激光") || text.includes("领纤科技")) return ["大族激光"];
  if (text.includes("AI元器件") || text.includes("法拉电子") || text.includes("艾华集团")) return ["法拉电子", "艾华集团", "江海股份", "宏发股份"];
  if (text.includes("仙鹤股份") || text.includes("电容器纸")) return ["仙鹤股份"];
  if (text.includes("有研粉材")) return ["有研粉材", "有研新材"];
  if (text.includes("美光全面超预期") || text.includes("美光业绩大超预期")) return ["美光科技", "兆易创新", "北京君正", "普冉股份", "国科微", "精智达"];
  if (text.includes("ParaStor") || text.includes("中科曙光")) return ["中科曙光"];
  if (text.includes("六氟化钨") || text.includes("WF6")) return ["中船特气", "中巨芯", "和远气体", "昊华科技", "雅克科技", "江丰电子"];
  if (text.includes("莲花控股") || text.includes("纽菲斯")) return ["莲花控股"];
  if (text.includes("天承科技")) return ["天承科技"];
  if (text.includes("长川科技最新更新") || text.includes("市场低估了AI算力芯片放量")) {
    return ["长川科技", "华峰测控", "联讯仪器", "精智达", "强一股份", "精测电子"];
  }
  if (text.includes("宏柏新材") || text.includes("四氯化硅") || text.includes("正硅酸乙酯")) {
    return ["宏柏新材", "长飞光纤", "中天科技"];
  }
  if (text.includes("洁美科技")) return ["洁美科技", "昀冢科技", "三环集团", "风华高科", "国瓷材料", "博迁新材"];
  if (text.includes("迅捷兴") || text.includes("RCC小单")) return ["迅捷兴"];
  if (text.includes("东阳光") || text.includes("tokens工厂")) return ["东阳光", "秦淮数据", "中际旭创"];
  if (text.includes("WSTS") || text.includes("半导体市场规模")) return ["长川科技", "强一股份", "联讯仪器", "华峰测控", "精智达", "精测电子"];
  if (text.includes("零部件") && text.includes("历史性扩产")) return ["富创精密", "臻宝科技", "江丰电子", "珂玛科技", "新莱应材", "正帆科技"];
  if (text.includes("冷板工质验证")) return ["英维克", "申菱环境", "高澜股份", "川环科技", "飞荣达", "领益智造"];
  if (text.includes("液冷系列07")) return ["银轮股份", "飞龙股份", "三花智控", "川环科技", "溯联股份", "祥鑫科技"];
  if (text.includes("长电科技")) return ["长电科技"];
  if (text.includes("昀冢科技点评")) return ["昀冢科技", "三环集团", "风华高科", "火炬电子", "国瓷材料", "博迁新材"];
  if (text.includes("利和兴")) return ["利和兴"];
  if (text.includes("美光财报") || text.includes("存储利空抢跑")) return ["美光科技", "SK海力士", "三星电子", "兆易创新", "普冉股份"];
  if (text.includes("摩尔线程")) return ["摩尔线程"];
  if (text.includes("立讯精密")) return ["立讯精密"];
  if (text.includes("高斯贝尔")) return ["高斯贝尔", "生益科技", "联茂"];
  if (text.includes("AI金属之王") || text.includes("对日替代") || text.includes("六氟化钨") || text.includes("PCB钨棒")) {
    return ["中钨高新", "厦门钨业", "江钨装备", "翔鹭钨业", "中船特气", "昊华科技"];
  }
  if (text.includes("CCL观点")) return ["建滔集团", "华正新材", "金安国纪", "宝鼎科技"];
  if (text.includes("周观点更新0621")) return ["华正新材", "金安国纪", "铜冠铜箔", "海亮股份", "联瑞新材"];
  if (text.includes("CCL之后布局载板") || text.includes("铜箔进展")) return ["铜冠铜箔", "海亮股份", "方邦股份"];
  if (text.includes("旗滨集团")) return ["旗滨集团", "国际复材", "中材科技", "宏和科技", "中国巨石"];
  if (text.includes("力诺药包")) return ["国际复材", "中材科技", "宏和科技", "中国巨石", "联瑞新材", "国瓷材料"];
  if (text.includes("光远新材")) return ["光远新材"];
  if (text.includes("本周交流情况")) return ["斯瑞新材", "唯特偶", "联讯仪器", "奕东电子"];
  if (text.includes("下跌点评") && text.includes("天风海外科技")) return ["三星电子", "SK海力士"];
  if (text.includes("谷歌AI关键人才") || text.includes("AI大跌点评")) return ["智谱", "中际旭创", "新易盛", "寒武纪", "海光信息"];
  if (text.includes("光通信板块调整点评") || text.includes("压价传闻")) return ["中际旭创", "新易盛", "太辰光", "长飞光纤"];
  if (text.includes("PCB上游调整点评")) return ["德福科技", "凌玮科技", "联瑞新材", "圣泉集团", "宏和科技", "厦门钨业"];
  if (text.includes("PCB产业链调整再call")) return ["建滔集团", "华正新材", "金安国纪", "宝鼎科技", "深南电路", "兴森科技"];
  if (text.includes("PCB传言不可惧") || text.includes("AI新材料全家桶")) return ["中国巨石", "铜冠铜箔", "宏和科技", "国际复材", "中材科技", "方邦股份"];
  if (text.includes("天风通信")) return ["藤仓", "中际旭创", "新易盛", "天孚通信"];
  if (text.includes("远东股份") || text.includes("AIDC光纤")) return ["远东股份", "长飞光纤", "亨通光电", "中天科技"];
  if (text.includes("MGX") || text.includes("Rubin") || text.includes("液冷")) return ["远东股份", "英维克", "比亚迪电子", "立讯精密", "领益智造", "飞龙股份"];
  if (text.includes("波纹管") || text.includes("再CALL液冷") || text.includes("Switch tray")) return ["金富科技", "五洋自控", "英维克"];
  if (text.includes("玻璃基板") || text.includes("TGV") || text.includes("云天半导体")) return ["工大高科", "云天半导体", "沃格光电", "凯盛科技"];
  if (text.includes("长川科技")) return ["长川科技"];
  if (text.includes("高股息") || text.includes("股息率")) return ["行动教育", "东方教育"];
  if (text.includes("稀土") || text.includes("氧化镝")) return ["中稀有色", "中国稀土", "北方稀土", "盛和资源", "华宏科技"];
  if (text.includes("铌酸锂") || text.includes("东方钽业")) return ["东方钽业", "天通股份", "稀美资源"];
  return [];
}

function companiesForSignal(signal) {
  const text = [signal.title, signal.summary, ...(signal.tags || [])].join(" ");
  const scanned = companyCatalog.filter((company) => text.includes(company));
  const taggedCompanies = (signal.tags || []).filter((tag) => {
    if (industryOnlyTerms.has(tag)) return false;
    if (/^[A-Za-z0-9./+-]+$/.test(tag)) return false;
    if (tag.length <= 1) return false;
    return /公司|集团|股份|科技|材料|新材|电子|通信|仪器|存储|信息|铜业|铜箔|复材|巨石|钨业|高新|国纪/.test(tag);
  });
  return Array.from(new Set([...titleCompanyHints(signal), ...scanned, ...taggedCompanies])).slice(0, 6);
}

function shortText(text, max = 46) {
  const clean = String(text || "").replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max - 1)}…` : clean;
}

function sentenceWithCompany(company, signal) {
  const text = signalRawText(signal).replace(/^来源\/title：[^。]*。?/, "");
  const sentences = text.split(/[。；;！!？?\n]/).map((item) => item.trim()).filter(Boolean);
  return sentences.find((sentence) => sentence.includes(company)) || "";
}

function isBroadCompanyRecommendation(sentence, company) {
  if (!sentence) return false;
  const mentioned = companyCatalog.filter((name) => name !== company && sentence.includes(name));
  return mentioned.length >= 2 || /相关标的|标的|关注|对应|港股|A股|系列|包括|分别为/.test(sentence);
}

function broadThemeSummary(signal) {
  const text = `${signal.title || ""} ${signal.summary || ""} ${signal.rawText || ""}`;
  if (text.includes("GlassBridge") || text.includes("Glass Bridge")) return "受益康宁CPO玻璃光互连新技术";
  if (text.includes("电容") || text.includes("MLCC")) return "受益AI电容供需缺口/涨价";
  if (text.includes("CCL")) return "受益CCL价格上涨";
  if (text.includes("电子布")) return "受益电子布缺口/涨价";
  if (text.includes("铜箔")) return "受益PCB铜箔重估";
  if (text.includes("六氟化钨")) return "受益六氟化钨国产替代";
  if (text.includes("钨")) return "受益钨产业链重估";
  if (text.includes("光纤") || text.includes("光缆")) return "受益AIDC光纤量价齐升";
  if (text.includes("液冷") || text.includes("MGX") || text.includes("Rubin")) return "受益英伟达MGX/Rubin液冷生态扩容";
  if (text.includes("玻璃基板") || text.includes("TGV")) return "受益先进封装玻璃基板产业化";
  if (text.includes("稀土")) return "受益稀土供需重塑";
  if (text.includes("红利") || text.includes("高股息")) return "高股息和业绩确定性重估";
  if (text.includes("国产算力")) return "受益国产AI芯片放量";
  return "";
}

function companyUpdateSummary(company, signal) {
  const explicit = sentenceWithCompany(company, signal);
  if (explicit && !isBroadCompanyRecommendation(explicit, company)) return shortText(explicit, 48);

  const text = `${signal.title || ""} ${signal.summary || ""} ${signal.rawText || ""}`;
  const cclNames = new Set(["华正新材", "金安国纪", "宝鼎科技"]);
  if (company === "王子新材") return "宁波新容薄膜电容扩产，AIDC客户订单推进";
  if (company === "天利控股集团") return "0201小尺寸MLCC涨价弹性最大";
  if (company === "信维通信") return "高端MLCC资产入表，AI服务器料号弹性";
  if (company === "宗申动力") return "海外超容柜+BBU订单，Q4电容柜出货兑现";
  if (company === "工业富联") return "从JDM代工升维为全栈AI基础设施供应商";
  if (company === "奥来德") return "玻璃基PSPI进入京东方链，打开第二曲线";
  if (company === "濮耐股份") return "高纯氧化镁切入玻璃基板/电子布材料";
  if (company === "戈碧迦" || company === "彩虹股份" || company === "旗滨集团") return "受益康宁玻璃桥带动原片端关注";
  if (company === "安捷利美维") return "国内少数玻璃芯基板商业样推进方";
  if (company === "东威科技" || company === "三孚新科" || company === "华兴源创") return "玻璃基板TGV/电镀/检测设备先行";
  if (company === "晶方科技") return "MLA+TSV切入CPO垂直堆叠封装";
  if (company === "天准科技") return "明场检测、CPO测量和PCB设备同步放量";
  if (company === "江化微") return "湿电子化学品导入华虹/华力/中芯等大厂";
  if (company === "京仪装备" || company === "盛剑环境") return "半导体扩产带动真空泵/配套设备紧缺";
  if (company === "鼎龙股份") return "陶瓷结构件等设备零部件紧缺方向";
  if (company === "星源材质") return "MFC核心压电陶瓷结构件突破预期";
  if (company === "软通动力") return "Token工厂签单头部模型厂，液冷服务器产线配套";
  if (company === "金洲管道") return "闪麟时代液冷数据中心项目商用落地";
  if (company === "博汇股份") return "切入AI液冷算力，液冷子公司已盈利";
  if (company === "华大九天") return "国产EDA滞涨分支，受益华为产业链进展";
  if (company === "芯原股份") return "Q2订单和业绩双验证，国产ASIC重估窗口";
  if (company === "华虹宏力") return "国产算力资金关注度抬升的核心标签";
  if (company === "光库科技" || company === "仕佳光子" || company === "杭电股份") return "光通信大跌后，产业高景气未变";
  if (company === "东芯股份") return "SLC NAND涨价核心标的，Q2利润兑现预期强化";
  if (company === "神工股份") return "半导体设备零部件瓶颈下的硅材料/零部件首推";
  if (company === "广钢气体") return "设备扩产与高纯气体涨价链条共振";
  if (company === "金宏气体") return "高纯二氧化碳库存下降，半导体气体价格弹性";
  if (company === "华新科" || company === "太诱" || company === "三星电机") return "AI服务器MLCC订单和7月涨价催化";
  if (company === "瑞松科技") return "GlassBridge降低耦合难度，高芯MPO设备受益";
  if (company === "长盈通" || company === "通鼎互联") return "保偏光纤量产壁垒高，CPO/NPO需求打开";
  if (company === "华丰科技") return "昇腾950线模组放量，NPO Socket打开弹性";
  if (company === "光迅科技" || company === "华工科技") return "国内超节点NPO引擎及光模块供应链受益";
  if (company === "锐捷网络" || company === "紫光股份") return "数通交换机受益国产算力网络扩张";
  if (company === "深南电路" || company === "兴森科技") return "载板国产化先行，受益供不应求与稼动率提升";
  if (company === "胜宏科技" || company === "鹏鼎控股") return "PCB涨价传导确认，板厂盈利弹性上修";
  if (company === "菲利华" || company === "同宇新材" || company === "宏昌电子") return "电子布/树脂链条受益PCB材料通胀";
  if (company === "嘉德利") return "电容Q3高斜率方向的弹性标的";
  if (company === "京泉华" || company === "海伦哲") return "AI电源链条进入Q3-Q4拉货窗口";
  if (company === "华源控股") return "半导体设备扩产链低位弹性标的";
  if (company === "多氟多") return "G5级氢氟酸批量供应头部晶圆厂";
  if (company === "巨化股份") return "PFA万吨产线量产并通过关键验证";
  if (company === "德业股份" || company === "阳光电源" || company === "海博思创") return "欧盟储能协议强化工商储装机弹性";
  if (company === "艾罗能源" || company === "固德威" || company === "盛弘股份") return "欧洲工商储渗透率提升带来订单弹性";
  if (company === "江苏金租" || company === "中国船舶租赁" || company === "渤海租赁") return "7月资金可能重回红利/低估值资产";
  if (company === "中国巨石") return "7628电子布价格中枢上修，利润展望被抬升";
  if (company === "中材科技" || company === "国际复材") return "电子布涨价和二代布景气带来利润弹性";
  if (company === "长荣股份" || company === "鸿华视像") return "鸿华视像电子布/CCL检测设备份额约70%+";
  if (company === "唯科科技") return "康宁GlassBridge带动TMT/MT插芯需求重估";
  if (company === "茂莱光学") return "北美光学客户和硅光检测对接提供增量预期";
  if (company === "大族激光") return "25.2亿光纤/预制棒项目叠加领纤科技收购";
  if (company === "法拉电子") return "AIDC高压化推动薄膜电容需求和估值空间";
  if (company === "艾华集团") return "牛角电容/MLPC卡位AI服务器送样";
  if (company === "宏发股份") return "800V高压直流继电器进入AIDC送样阶段";
  if (company === "仙鹤股份") return "高端电容器纸国产验证和新产能释放";
  if (company === "有研粉材") return "MLCC铜/镍粉送样，光模块高端锡粉放量";
  if (company === "有研新材") return "靶材和粉体材料受益存储材料景气";
  if (company === "中科曙光") return "ParaStor F9000双榜第一，国产高端存储验证";
  if (company === "亚翔集成") return "美光资本开支上修，洁净室订单弹性";
  if (company === "德明利" || company === "大普微" || company === "佰维存储") return "存储景气和国产存储主线受益";
  if (company === "北京君正" || company === "国科微") return "存储设计受益美光长协和价格周期";
  if (company === "拓荆科技" || company === "中微公司" || company === "北方华创") return "存储扩产推动设备订单景气";
  if (company === "雅克科技" || company === "三祥新材") return "存储前驱体材料受益需求上行";
  if (company === "西安奕材" || company === "沪硅产业" || company === "立昂微") return "大硅片受益存储材料链景气";
  if (company === "莲花控股") return "纽菲斯ABF膜切入玻璃基板等新场景";
  if (company === "纽菲斯") return "ABF膜9-11层技术突破，国产替代推进";
  if (company === "京东方" || company === "力诺药包" || company === "国机精工") return "玻璃基板/金刚石散热新方向被新增关注";
  if (company === "汇成股份") return "HITS先进封装和存储封测双线扩张";
  if (company === "上峰材料") return "与汇成共同投资鑫丰，受益先进封装外延";
  if (company === "天承科技") return "玻璃基板电镀/沉铜材料断档领先";
  if (company === "建滔集团" || company === "建滔积层板") return "PCB业务估值和业绩双升，产能被客户锁定";
  if (cclNames.has(company)) return "受益CCL价格上涨";
  if (company === "铜冠铜箔") return "H3/H4铜箔龙一，PCB铜箔利润和市值重估";
  if (company === "海亮股份") return "H3/H4铜箔弹性标的，潜在市值空间更大";
  if (company === "方邦股份") return "BT载板铜箔放量，产能利润弹性被上修";
  if (company === "联瑞新材") return "硅微粉需求和填充比例提升，份额逻辑强化";
  if (company === "中钨高新") return "钨矿和PCB棒材/钻针龙头，资源注入带来弹性";
  if (company === "厦门钨业") return "钨矿与PCB棒材国产替代主力，高纯钨粉受益";
  if (company === "江钨装备") return "鼎泰钨棒材核心供应商，AMT与矿山注入受益";
  if (company === "翔鹭钨业") return "高纯钨粉通过SK海力士认证，PCB棒材弹性提升";
  if (company === "中船特气") return "六氟化钨产能领先，承接日系供应缺口";
  if (company === "昊华科技" || company === "中巨芯" || company === "和远气体") return "六氟化钨国产替代梯队，受益日系供给收缩";
  if (company === "远东股份") return "AIDC光纤订单和扩产打开更高价值量";
  if (company === "英维克") return "进入MGX机柜集管、CDU和快速接头生态";
  if (company === "比亚迪电子") return "出现在MGX整机、冷板、电源插框和母线排环节";
  if (company === "立讯精密") return "进入Rack Manifold、快速接头和液冷母线排环节";
  if (company === "领益智造") return "Readore进入液冷集管、快接和冷板环节";
  if (company === "飞龙股份") return "电子泵竞争格局较优，受益G链液冷放量";
  if (company === "思泉新材") return "国内CSP Tier1液冷链条受益";
  if (company === "金富科技") return "不锈钢波纹管+Manifold代工链，Q2最快看到业绩";
  if (company === "五洋自控" && text.includes("Switch tray")) return "与NV联合开发Switch tray液冷系统，Tier1升级预期";
  if (company === "江南新材" || company === "五洋自控" || company === "捷邦科技") return "NV第三方代工链液冷机会";
  if (company === "恒铭达") return "进入MGX Rack机柜和机箱机壳生态";
  if (company === "麦格米特" || company === "欧陆通") return "进入800V电源与Power Shelf生态";
  if (company === "长飞光纤" || company === "亨通光电" || company === "中天科技") return "光纤光缆量价齐升，北美AIDC需求抬升";
  if (company === "工大高科") return "云天半导体TGV玻璃基板注入预期强化";
  if (company === "云天半导体") return "TGV玻璃基板与板级先进封装平台受关注";
  if (company === "沃格光电" || company === "凯盛科技") return "玻璃基板产业化主题映射";
  if (company === "长川科技") return "SoC/GPU/存储测试机共振，目标2500-3000亿";
  if (company === "宏柏新材") return "9N四氯化硅、电子级TEOS和纳米硅三线重估";
  if (company === "洁美科技") return "MLCC离型膜客户全覆盖，量价结构三升";
  if (company === "迅捷兴") return "RCC小批量订单落地，1.6T光模块验证推进";
  if (company === "东阳光") return "并购秦淮数据切入算力租赁，积层箔和液冷增量";
  if (company === "秦淮数据") return "超大规模IDC资产注入预期";
  if (company === "强一股份" || company === "联讯仪器" || company === "华峰测控" || company === "精智达" || company === "精测电子") {
    return "半导体设备景气扩散，测试/检测环节弹性";
  }
  if (company === "富创精密" || company === "臻宝科技" || company === "江丰电子" || company === "珂玛科技" || company === "新莱应材" || company === "正帆科技") {
    return "设备扩产拉动零部件紧缺与涨价";
  }
  if (company === "申菱环境" || company === "高澜股份" || company === "同飞股份" || company === "曙光数创") {
    return "液冷CDU、冷源侧和整体方案放量";
  }
  if (company === "川环科技") return "液冷管路放量";
  if (company === "飞荣达") return "冷板/散热模组及导热材料配套";
  if (company === "银轮股份") return "谷歌CDU散热器供应商，Q3订单兑现预期";
  if (company === "三花智控" || company === "溯联股份" || company === "腾龙股份" || company === "祥鑫科技") {
    return "汽车零部件液冷链条受益";
  }
  if (company === "长电科技") return "78亿高端先进封测工厂，AI后道封装重要性提升";
  if (company === "昀冢科技") return "15亿高性能MLCC扩产，国产替代原厂定位强化";
  if (company === "利和兴") return "散单涨价和高容扩产，MLCC利润弹性释放";
  if (company === "美光科技" || company === "兆易创新" || company === "普冉股份") return "存储价格和NAND瓶颈验证窗口";
  if (company === "摩尔线程") return "S5000万卡集群落地，互联网客户突破预期";
  if (company === "高斯贝尔") return "碳氢高频覆铜板和PPO板材卡位AI通信";
  if (company === "联茂") return "高频高速CCL配套供应链";
  if (company === "行动教育") return "高股息叠加企业培训需求修复";
  if (company === "东方教育") return "高股息叠加职业教育招生改善";
  if (company === "中稀有色") return "氧化镝与重稀土价格弹性被重点讨论";
  if (company === "中国稀土" || company === "北方稀土" || company === "盛和资源" || company === "华宏科技") return "稀土供需重塑和定价权提升";
  if (company === "东方钽业") return "钽铌资源和薄膜铌酸锂材料弹性";
  if (company === "天通股份" || company === "稀美资源") return "铌酸锂/钽铌材料链弹性";
  if (company === "中际旭创" || company === "新易盛") return "压价传闻扰动，不改800G/1.6T高景气";
  if (company === "智谱") return "性价比模型方向被点名，缓和AI Capex担忧";
  if (company === "三星电子" || company === "SK海力士") return "韩国杠杆ETF被动卖出放大波动，存储基本面仍强";
  if (company === "德福科技") return "生益HVLP4需求或达200t/月，超此前预期";
  if (company === "凌玮科技") return "硅微粉Q3涨价与封装材料国产替代预期";
  if (company === "圣泉集团" || company === "东材科技") return "树脂涨价和PCB上游通胀受益";
  if (company === "呈和科技" || company === "世名科技" || company === "中化国际") return "树脂材料链弹性标的，跟随PCB上游通胀";
  if (company === "宏和科技") return "电子布缺货与新一轮涨价预期";
  if (company === "深南电路" || company === "兴森科技") return "BT/ABF载板涨价和下游需求共振";
  if (company === "天承科技" || company === "泰金新能") return "PCB上游配套材料跟随景气扩散";
  if (company === "杰美特" || company === "新锐股份") return "PCB钻针耗材需求提升";
  if (company === "芯碁微装") return "AI PCB制程升级映射";
  if (company === "石英股份" || company === "帝尔激光" || company === "光华科技" || company === "华海诚科") return "AI新材料链条调整后关注度提升";
  if (company === "国际复材" || company === "中材科技" || company === "宏和科技" || company === "中国巨石") {
    return "电子布缺口和涨价，低介电/普通布需求抬升";
  }
  if (text.includes("国产算力")) return "国产算力供需失衡，涨价与订单逻辑强化";
  if (text.includes("光模块") || text.includes("MPO") || text.includes("光纤")) return "光模块/光纤链量价齐升，订单和价格弹性抬升";
  const broadSummary = broadThemeSummary(signal);
  if (broadSummary) return broadSummary;
  return shortText(signalSummaryText(signal), 48);
}

function sectorDigest(name, matchedSignals) {
  return `${matchedSignals.length} 条精选`;
}

function detailForIndustry(name) {
  const staticDetail = sectorDetails[name];
  if (staticDetail && staticDetail.date === selectedDate) return staticDetail;

  const matchedSignals = signalsForIndustry(name);
  if (!matchedSignals.length) return null;

  const score = Math.round(Math.max(...matchedSignals.map((signal) => signal.importance || 0)) * 10);
  const topUpside = Math.max(...matchedSignals.map((signal) => signal.upside || 0), 0);
  return {
    score,
    revision: topUpside ? `+${topUpside}%` : "-",
    meta: sectorDigest(name, matchedSignals),
    date: selectedDate,
    changes: matchedSignals.map((signal) => ({
      title: signal.title,
      summary: signal.summary,
      rawSignal: signal,
      companies: companiesForSignal(signal)
        .map((company) => ({
          name: company,
          role: signal.source,
          highlight: companyUpdateSummary(company, signal),
          joke: true,
        })),
    })),
  };
}

function renderIndustryMap() {
  el("industryMap").innerHTML = sectors
    .map((sector) => {
      const avg = Math.round(sector.children.reduce((sum, item) => sum + modeScore(item[1]), 0) / sector.children.length);
      return `
        <article class="sector" style="--sector-color:${sector.color}">
          <div class="sector-head">
            <div class="sector-title">${sector.name}</div>
            <div class="sector-meta">${avg} / 100 · ${sector.children.reduce((sum, item) => sum + item[2], 0)} 条高价值信号</div>
          </div>
          <div class="sub-list">
            ${sector.children
              .map(([name, score, count]) => {
                const displayScore = modeScore(score);
                const detail = detailForIndustry(name);
                const hasDetailForDate = Boolean(detail);
                const status = industryCardStatus(name, detail);
                return `
                  <button class="sub-item ${hasDetailForDate ? "has-detail" : ""}" data-industry="${name}" type="button">
                    <div class="sub-line">
                      <span>${name}</span>
                      <span class="sub-score">${displayScore}</span>
                    </div>
                    <div class="bar"><span style="--w:${displayScore}%"></span></div>
                    <div class="sub-meta-row">
                      <span class="${status.hasToday ? "today-edge-label" : ""}">${status.left} · ${score >= 80 ? "重点" : score >= 60 ? "观察" : "弱跟踪"}</span>
                      <span class="${status.hasToday ? "edge-action" : "edge-muted"}">${status.right}</span>
                    </div>
                  </button>`;
              })
              .join("")}
          </div>
        </article>`;
    })
    .join("");

  document.querySelectorAll("[data-industry]").forEach((item) => {
    item.addEventListener("click", () => {
      selectedSector = item.dataset.industry;
      const detail = detailForIndustry(selectedSector);
      if (detail) openSectorModal(selectedSector);
      renderAll();
    });
  });
}

function renderMetrics(filteredSignals) {
  const avgImportance = average(filteredSignals.map((item) => item.importance));
  const avgConfidence = average(filteredSignals.map((item) => item.confidence));
  const topUpside = Math.max(...filteredSignals.map((item) => item.upside), 0);
  el("metricsGrid").innerHTML = [
    ["精选信号", filteredSignals.length, "上传时间过滤后"],
    ["平均重要性", avgImportance.toFixed(1), "满分 10"],
    ["平均置信度", avgConfidence.toFixed(1), "满分 10"],
    ["最高上修", `${topUpside}%`, "目标市值假设变化"],
  ]
    .map(
      ([label, value, note]) => `
      <div class="metric">
        <div class="metric-label">${label}</div>
        <div class="metric-value">${value}</div>
        <div class="metric-note">${note}</div>
      </div>`
    )
    .join("");
}

function getFilteredSignals() {
  const query = el("globalSearch").value.trim().toLowerCase();
  return signals.filter((signal) => {
    const haystack = [signal.title, signal.sector, signal.source, signal.summary, ...signal.tags].join(" ").toLowerCase();
    const sectorHit =
      selectedSector === "全部" ||
      signal.sector === selectedSector ||
      signal.tags.includes(selectedSector) ||
      sectors.find((sector) => sector.name === selectedSector)?.children.some(([name]) => signal.tags.includes(name));
    const queryHit = !query || haystack.includes(query);
    return signal.date === selectedDate && sectorHit && queryHit;
  });
}

function renderSignals() {
  const sortBy = el("signalSort").value;
  const filtered = getFilteredSignals().sort((a, b) => b[sortBy] - a[sortBy]);
  renderMetrics(filtered);
  el("signalList").innerHTML =
    filtered
      .map(
        (signal, index) => `
        <article class="signal-card ${signal.upside >= 45 ? "revision-alert" : ""}" data-signal-index="${index}" tabindex="0" role="button" aria-label="查看${signal.title}详情">
          <div class="signal-top">
            <div>
              <div class="signal-title">${signal.title}</div>
              <div class="signal-meta">${signal.source} · ${signal.sector}</div>
            </div>
            <div class="score-pill">${signal.importance.toFixed(1)}</div>
          </div>
          <p class="signal-summary">${escapeHtml(signalSummaryText(signal))}</p>
          <div class="signal-foot">
            ${renderSignalFootChips(signal)}
          </div>
        </article>`
      )
      .join("") || `<div class="signal-card"><div class="signal-title">当前筛选下暂无信号</div></div>`;

  document.querySelectorAll("[data-signal-index]").forEach((card) => {
    card.addEventListener("click", () => openSignalModal(filtered[Number(card.dataset.signalIndex)]));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSignalModal(filtered[Number(card.dataset.signalIndex)]);
      }
    });
  });
}

function renderSignalFootChips(signal) {
  const companyNames = companiesForSignal(signal);
  const companySet = new Set(companyNames);
  const nonCompanyTags = signal.tags.filter((tag) => !companySet.has(tag));
  return [
    `<span class="mini-chip good">置信 ${signal.confidence.toFixed(1)}</span>`,
    `<span class="mini-chip up">目标上修 ${signal.upside}%</span>`,
    ...companyNames.map((company) => `<span class="mini-chip company-signal-tag">${company}</span>`),
    ...nonCompanyTags.map((tag) => `<span class="mini-chip">${tag}</span>`),
  ].join("");
}

function signalCompanyCards(signal) {
  return companiesForSignal(signal).map((company) => ({
    name: company,
    role: signal.source,
    highlight: companyUpdateSummary(company, signal),
    joke: Boolean(companyUpdateSummary(company, signal)),
  }));
}

function signalMetricPills(signal) {
  const pills = [];
  if (Number.isFinite(signal.confidence)) pills.push(`<span class="mini-chip good">置信 ${signal.confidence.toFixed(1)}</span>`);
  if (Number.isFinite(signal.upside) && signal.upside > 0) pills.push(`<span class="mini-chip up">目标上修 ${signal.upside}%</span>`);
  return pills.join("");
}

function detailMetricPills(detail) {
  if (!detail?.revision || detail.revision === "-") return "";
  return `<span class="mini-chip up">目标上修 ${detail.revision.replace(/^\+/, "")}</span>`;
}

function renderCalculatorOptions() {
  const names = Array.from(new Set(sellSideCalculators.map((item) => item.company))).sort((a, b) => a.localeCompare(b, "zh-CN"));
  el("calcCompany").innerHTML = [
    `<option value="全部">全部个股</option>`,
    ...names.map((name) => `<option value="${name}">${name}</option>`),
  ].join("");
}

function renderCalculatorView() {
  const selectedCompany = el("calcCompany").value || "全部";
  const rows = sellSideCalculators
    .filter((item) => selectedCompany === "全部" || item.company === selectedCompany)
    .sort((a, b) => b.date.localeCompare(a.date));
  const latest = rows.find((item) => item.date === selectedDate) || rows[0];
  const history = latest ? rows.filter((item) => item !== latest) : rows;

  if (!rows.length) {
    el("calculatorView").innerHTML = `<div class="empty-state">暂无该个股的卖方/私信目标市值计算器。</div>`;
    return;
  }

  el("calculatorView").innerHTML = `
    ${latest ? renderLatestCalculator(latest) : `<div class="empty-state">暂无最新计算器。</div>`}
    <div class="revision-box calculator-history">
      <div class="revision-title">过往计算器</div>
      ${
        history.length
          ? history.map(renderCalculatorHistoryItem).join("")
          : `<div class="empty-state small">暂无过往计算器。</div>`
      }
    </div>
  `;
}

function renderLatestCalculator(item) {
  if (item.target == null) {
    return `
      <article class="sellside-calc-card empty-calc">
        <div class="calc-card-top">
          <div>
            <div class="calc-card-label">${item.date} · ${item.source}</div>
            <h3>${item.company}</h3>
          </div>
          <span class="confidence-pill">${item.confidence}</span>
        </div>
        <p>${item.title}</p>
        <div class="empty-state small">该段子有公司边际更新，但没有明确目标市值测算。</div>
        ${renderAssumptions(item.assumptions)}
      </article>
    `;
  }
  return `
    <article class="sellside-calc-card">
      <div class="calc-card-top">
        <div>
          <div class="calc-card-label">${item.date} · ${item.source}</div>
          <h3>${item.company}</h3>
        </div>
        <span class="confidence-pill">${item.confidence}</span>
      </div>
      <p>${item.title}</p>
      <div class="sellside-target">
        <div>
          <span>当前市值</span>
          <strong>${item.currentCap == null ? "暂缺" : `${item.currentCap}亿`}</strong>
        </div>
        <div>
          <span>目标市值</span>
          <strong>${item.target}亿</strong>
        </div>
        <div class="target-upside">
          <span>空间</span>
          <strong>${item.upside == null ? "待补" : `+${item.upside}%`}</strong>
        </div>
        <div class="target-revision">
          <span>较旧目标</span>
          <strong>${item.revision == null ? "待补" : `+${item.revision}%`}</strong>
        </div>
      </div>
      <div class="old-target-line">旧目标：${item.oldTarget == null ? "暂无" : `${item.oldTarget}亿`} → 新目标：${item.target}亿</div>
      ${renderAssumptions(item.assumptions)}
    </article>
  `;
}

function renderCalculatorHistoryItem(item) {
  const coreLogic = item.assumptions?.[0] || item.title || "暂无核心逻辑";
  return `
    <button class="calc-history-item" type="button" data-select-calculator="${item.company}">
      <div>
        <strong>${item.company}</strong>
        <span>${item.date} · ${item.source}</span>
        <span class="calc-history-logic">核心逻辑：${coreLogic}</span>
      </div>
      <div>${item.target == null ? "暂无目标" : `${item.oldTarget == null ? "-" : `${item.oldTarget}亿`} → ${item.target}亿`}</div>
      <div class="lift">${item.revision == null ? "-" : `+${item.revision}%`}</div>
    </button>
  `;
}

function renderAssumptions(assumptions) {
  return `
    <div class="assumption-list">
      ${assumptions.map((item) => `<div>${item}</div>`).join("")}
    </div>
  `;
}

function renderCompanyChip(company) {
  return `
    <button class="company-chip ${company.highlight ? "company-highlight" : ""}" type="button" data-company-name="${company.name}">
      <div class="company-name">${company.name}</div>
      <div class="company-role">${company.role}</div>
      ${
        company.highlight
          ? `<div class="company-note">${company.joke ? "<span>段子边际更新</span>" : ""}${company.highlight}</div>`
          : ""
      }
    </button>
  `;
}

function companyHistoryRows(companyName) {
  const rows = [];
  for (const [sectorName, detail] of Object.entries(sectorDetails)) {
    for (const change of detail.changes) {
      for (const company of change.companies) {
        if (company.name !== companyName) continue;
        rows.push({
          sectorName,
          date: detail.date,
          meta: detail.meta,
          changeTitle: change.title,
          changeSummary: change.summary,
          role: company.role,
          highlight: company.highlight,
          joke: company.joke
        });
      }
    }
  }
  return rows.sort((a, b) => b.date.localeCompare(a.date));
}

function renderCompanyCalculatorList(companyName) {
  const rows = sellSideCalculators
    .filter((item) => item.company === companyName)
    .sort((a, b) => b.date.localeCompare(a.date));
  if (!rows.length) return `<div class="empty-state small">暂无该公司的计算器。</div>`;
  return rows.map((item) => `
    <button class="company-calc-row" type="button" data-select-calculator="${item.company}">
      <div>
        <strong>${item.title}</strong>
        <span>${item.date} · ${item.source}</span>
      </div>
      <div>${item.target == null ? "暂无目标" : `${item.oldTarget == null ? "-" : `${item.oldTarget}亿`} → ${item.target}亿`}</div>
      <div class="lift">${item.revision == null ? "-" : `+${item.revision}%`}</div>
    </button>
  `).join("");
}

function updateModalBackButton() {
  const backButton = el("modalBack");
  if (!backButton) return;
  backButton.hidden = !modalStack.length;
}

function resetModalStack() {
  modalStack.length = 0;
  updateModalBackButton();
}

function goBackModal() {
  const previous = modalStack.pop();
  if (!previous) return;
  if (previous.type === "sector") openSectorModal(previous.name, true);
  if (previous.type === "signal") openSignalModal(previous.signal, true);
}

function openCompanyModal(companyName) {
  if (currentModalState && currentModalState.type !== "company") modalStack.push(currentModalState);
  const history = companyHistoryRows(companyName);
  el("modalTitle").textContent = companyName;
  el("modalMeta").textContent = `公司历史变化 · ${history.length} 条`;
  el("modalScore").innerHTML = "";
  el("modalBody").innerHTML = `
    <article class="change-block signal-detail-block full-width-block">
      <div class="change-content">
        <h3>历史边际变化</h3>
        ${
          history.length
            ? history.map((row) => `
              <div class="company-history-row">
                <div class="company-history-date">${row.date}</div>
                <div class="company-history-meta">${row.sectorName} · ${row.role}</div>
                <h4>${row.changeTitle}</h4>
                <p>${row.highlight || row.changeSummary}</p>
                ${row.joke && row.highlight ? `<div class="company-note compact"><span>段子边际更新</span>${row.highlight}</div>` : ""}
              </div>
            `).join("")
            : `<div class="empty-state small">暂无历史边际变化。</div>`
        }
      </div>
    </article>
    <article class="change-block full-width-block">
      <div class="change-content">
        <h3>目标市值计算器</h3>
        <div class="company-calc-list">${renderCompanyCalculatorList(companyName)}</div>
      </div>
    </article>
  `;
  currentModalState = { type: "company", companyName };
  updateModalBackButton();
  el("detailModal").hidden = false;
}

function selectCalculatorCompany(companyName) {
  const select = el("calcCompany");
  if (![...select.options].some((option) => option.value === companyName)) return;
  select.value = companyName;
  renderCalculatorView();
  document.querySelector(".calculator-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openSignalModal(signal, keepStack = false) {
  if (!signal) return;
  if (!keepStack) resetModalStack();
  const relatedKey = signal.tags.find((tag) => sectorDetails[tag]);
  const related = relatedKey ? sectorDetails[relatedKey] : null;
  el("modalTitle").textContent = signal.title;
  el("modalMeta").textContent = `${signal.date} · ${signal.source} · ${signal.sector}`;
  el("modalScore").innerHTML = `<span>重要性 ${signal.importance.toFixed(1)}</span><strong>上修 ${signal.upside}%</strong>`;
  el("modalBody").innerHTML = `
    <article class="change-block signal-detail-block">
      <div class="change-date-badge is-current">${modalDateBadge(signal.date)}</div>
      <div class="change-content">
        <div class="change-card-head">
          <div>
            <div class="change-section-label">核心边际变化</div>
            <h3 class="signal-detail-title">${escapeHtml(signalSourceTitle(signal) || signal.title)}</h3>
          </div>
          <div class="change-card-metrics">${signalMetricPills(signal)}</div>
        </div>
        <button class="raw-summary-block signal-raw-summary" type="button" data-raw-current-signal>
          ${escapeHtml(signalSummaryText(signal))}
        </button>
        <div class="company-grid current-signal-company-grid">
          ${signalCompanyCards(signal).map(renderCompanyChip).join("")}
        </div>
      </div>
    </article>
    ${
      related
        ? related.changes
            .map(
              (change, index) => `
              <article class="change-block">
                <div class="change-date-badge">${modalDateBadge(related.date)}</div>
                <div class="change-content">
                  <div class="change-card-head">
                    <h3>${change.title}</h3>
                    <div class="change-card-metrics">${detailMetricPills(related)}</div>
                  </div>
                  <p>${change.summary}</p>
                  <div class="company-grid">
                    ${change.companies
                      .map(renderCompanyChip)
                      .join("")}
                  </div>
                </div>
              </article>`
            )
            .join("")
        : ""
    }
  `;
  currentModalState = { type: "signal", signal };
  updateModalBackButton();
  el("detailModal").hidden = false;
  document.querySelector("[data-raw-current-signal]")?.addEventListener("click", (event) => {
    event.stopPropagation();
    openRawTextModal(signal);
  });
}

function openRawTextModal(signal) {
  if (!signal) return;
  el("rawModalTitle").textContent = signalSourceTitle(signal) || signal.title || "段子底稿";
  el("rawModalMeta").textContent = [signal.date, signal.source]
    .filter(Boolean)
    .join(" · ");
  el("rawModalBody").textContent = rawBodyText(signal) || "暂无原文";
  el("rawTextModal").hidden = false;
}

function closeRawModal() {
  el("rawTextModal").hidden = true;
}

function openSectorModal(name, keepStack = false) {
  const detail = detailForIndustry(name);
  if (!detail) return;
  if (!keepStack) resetModalStack();
  el("modalTitle").textContent = name;
  el("modalMeta").textContent = `${detail.date} · ${detail.meta}`;
  el("modalScore").innerHTML = `<span>${detail.score}</span><strong>${detail.revision}</strong>`;
  el("modalBody").innerHTML = detail.changes
    .map(
      (change, index) => `
      <article class="change-block">
        <div class="change-index">${index + 1}</div>
        <div class="change-content">
          <button class="raw-summary-block" type="button" data-sector-raw-index="${index}">
            ${escapeHtml(change.rawSignal ? signalSummaryText(change.rawSignal) : signalSummaryText(change))}
          </button>
          <div class="company-grid">
            ${change.companies
              .map(renderCompanyChip)
              .join("")}
          </div>
        </div>
      </article>`
    )
    .join("");
  currentModalState = { type: "sector", name };
  updateModalBackButton();
  el("detailModal").hidden = false;
  document.querySelectorAll("[data-sector-raw-index]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const change = detail.changes[Number(button.dataset.sectorRawIndex)];
      openRawTextModal(change?.rawSignal || { title: change?.title, summary: change?.summary, rawText: change?.summary, date: detail.date });
    });
  });
}

function closeModal() {
  el("detailModal").hidden = true;
  currentModalState = null;
  resetModalStack();
}

function renderAll() {
  renderDateFilter();
  renderNav();
  renderIndustryMap();
  renderSignals();
  renderCalculatorView();
}

function average(values) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

function formatDateLabel(date) {
  const [, month, day] = date.split("-");
  return `${Number(month)}月${Number(day)}日`;
}

function modalDateBadge(date) {
  return date ? formatDateLabel(date) : "当日";
}

document.addEventListener("DOMContentLoaded", () => {
  renderCalculatorOptions();
  renderAll();

  el("dateFilter").addEventListener("change", () => {
    selectedDate = el("dateFilter").value;
    renderAll();
  });
  el("globalSearch").addEventListener("input", renderSignals);
  el("signalSort").addEventListener("change", renderSignals);
  el("resetFilters").addEventListener("click", () => {
    selectedSector = "全部";
    selectedDate = latestDate();
    el("globalSearch").value = "";
    renderAll();
  });
  document.querySelectorAll("#heatMode button").forEach((button) => {
    button.addEventListener("click", () => {
      heatMode = button.dataset.mode;
      document.querySelectorAll("#heatMode button").forEach((item) => item.classList.toggle("active", item === button));
      renderIndustryMap();
    });
  });
  el("calcCompany").addEventListener("change", renderCalculatorView);
  document.addEventListener("click", (event) => {
    const companyButton = event.target.closest("[data-company-name]");
    if (companyButton) {
      event.preventDefault();
      openCompanyModal(companyButton.dataset.companyName);
      return;
    }

    const calculatorButton = event.target.closest("[data-select-calculator]");
    if (calculatorButton) {
      event.preventDefault();
      const companyName = calculatorButton.dataset.selectCalculator;
      closeModal();
      selectCalculatorCompany(companyName);
    }
  });
  el("modalClose").addEventListener("click", closeModal);
  el("modalBack").addEventListener("click", goBackModal);
  el("rawModalClose").addEventListener("click", closeRawModal);
  el("detailModal").addEventListener("click", (event) => {
    if (event.target === el("detailModal")) closeModal();
  });
  el("rawTextModal").addEventListener("click", (event) => {
    if (event.target === el("rawTextModal")) closeRawModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!el("rawTextModal").hidden) {
      closeRawModal();
      return;
    }
    closeModal();
  });
});
