// 1.获取所有监控方案接口
const data01 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    caseinfo: [
      {
        id: '8164',
        name: '中新赛克111中新赛克111中新赛克111中新赛克111',
        company_id: '5'
      },
      {
        id: '8165',
        name: '中新赛克2',
        company_id: '5'
      },
      {
        id: '8165',
        name: '中新赛克3',
        company_id: '5'
      },
      {
        id: '8165',
        name: '中新赛克4',
        company_id: '5'
      },
      {
        id: '8165',
        name: '中新赛克5',
        company_id: '5'
      },
      {
        id: '8165',
        name: '中新赛克6',
        company_id: '5'
      }
    ]
  }
}

// 2.删除监控方案接口
const data02 = {
  errcode: '200',
  errmsg: '数据请求响应成功'
}

// 3.保存监控方案接口
const data03 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    'is_case_name_existed': 0
  }
}

// 4.根据条件查询舆情列表接口
const data04 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    case_id: '194',
    total: 80,
    filter_total: 79,
    rows: [
      {
        id: 266,
        text_sentiment: '正面',
        title: '任正非:需要盯着做事的干部,而不是会做人的干部!',
        sim_text_count: 0,
        content: '前些天，网传魅族将全面接入华为HMS Core服务。\\n\\n昨天，经过系统内测OTA后，魅族18系列正式确认接入。\\n\\n有网友在应用列表中发现了名称为“HMS Core”的应用。\\n\\n\\n\\n\\n\\nHMS Core是华为自研的服务框架，包括：应用服务（App Services）、图形（Graphics）、媒体（Media）、人工智能（AI）、智能终端（Smart Device）、安全（Security）、系统（System）等。\\n\\n\\n\\n\\n\\n2019年5月，因美国禁令，各大供应商相继断供华为，连谷歌都把华为从安卓系统授权许可的厂商列表中移除，谷歌套装无法安装。\\n\\n在经过多方斡旋，确认谷歌服务无法使用后，华为紧急上线了自家的服务框架，这就是HMS Core，以求能替代谷歌框架。\\n\\n\\n\\n\\n\\nHMS Core首发于华为Mate30系列，但令人遗憾的是，HMS Core的紧急加持并未让华为Mate30系列获得海外用户青睐，大家还是更相信谷歌服务，也用习惯了谷歌服务。\\n\\n\\n\\n所以自华为Mate30系列始，华为智能手机海外销量就呈现出了断崖式下滑，部分西欧市场甚至出现了-49%，近乎腰斩的情况。\\n\\n这就是谷歌框架缺席的负面影响，系统基础服务框架重要性不言而喻。\\n\\n\\n\\n\\n\\n其实，HMS Core 5.0发布后，华为就已允许用户私装HMS服务框架，这也是必然选择，毕竟华为旗下产品众多，除智能手机外还有智能穿戴、耳机、智能手表等。这些产品目前基本都升级到了HMS，需要HMS服务框架作为载体的。\\n\\n\\n\\n\\n\\n什么意思呢？意思是即便你用的是非华为手机，一旦你购买了华为耳机、手表等产品，在你下载产品控制APP安装时，系统也会自动弹出“需要华为移动服务”的提醒，没有HMS服务框架，这些APP是无法安装的。\\n\\n\\n\\n\\n\\n魅族把HMS Core服务框架默认到系统中，显然是个很明智的选择，毕竟谁也无法保证用户使用的耳机、智能手表等是何品牌，一旦是华为，那直接内置，能省掉用户不少时间，极大方便了用户。\\n\\n\\n\\n再则系统中内置HMS，并不会影响魅族手机正常功能的实现，唯一坏处可能就是耗电问题。\\n\\n\\n\\n\\n\\nHMS Core是基础服务框架，这意味着他们需要时常与服务器通信，如果用户不使用该功能或手中没有华为设备，那整机功耗肯定会提升。\\n\\n不过这个问题并非无解，魅族完全可以在系统层面默认关闭，以节省功耗。当用户下载相关需要这个框架的APP时，默认关闭的框架可以瞬间激活，就如同小米、一加等厂商在系统中内置谷歌服务框架（GMS）一样，功能默认关闭，一旦用户下载Google Play（应用商店），相关框架就会自动激活，无法再次下载。\\n\\n\\n\\n\\n\\n就算如此，估计很多人都没想到魅族会干脆粗暴的把HMS内置于Flyme系统中，两家毕竟是友商，是存在竞争关系的。\\n\\n\\n\\n不过大家也不要庆幸的太早，除魅族等二三线小厂外，OPPO、vivo、小米等大厂是不太可能会在系统中内置HMS的，他们都有自己的推送服务框架，就算没有，作为主流手机厂商也完全有技术和能力开发出自家的私有服务框架。\\n\\n\\n\\n\\n\\n魅族内置HMS Core服务框架，更像是给使用华为配件的用户准备的，这并不代表着魅族后续会进一步接入华为自研的鸿蒙系统，即便个人还是很期待国内厂商能跟进鸿蒙系统的，但大家也要清晰认识到这种可能性很低。\\n\\n最起码目前可能性很低，不过未来谁说得好呢。"',
        important_events: [],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml',
        publisher: '',
        date: '2021-03-23 07:23:40'
      },
      {
        id: 267,
        text_sentiment: '正面',
        title: '任正非:需要盯着做事的干部,而不是会做人的干部!',
        sim_text_count: 0,
        content: '任正非头图:新华网01华为大学的办学方针要从“培养制”转变为“选拔制”,干部员工有偿学习,自我提高恭喜大家成为华为大学第...',
        important_events: [],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml',
        publisher: '',
        date: '2021-03-23 07:23:40'
      },
      {
        id: 268,
        text_sentiment: '正面',
        title: '任正非:需要盯着做事的干部,而不是会做人的干部!',
        sim_text_count: 0,
        content: '任正非头图:新华网01华为大学的办学方针要从“培养制”转变为“选拔制”,干部员工有偿学习,自我提高恭喜大家成为华为大学第...',
        important_events: [],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml',
        publisher: '',
        date: '2021-03-23 07:23:40'
      },
      {
        id: 269,
        text_sentiment: '正面',
        title: '任正非:需要盯着做事的干部,而不是会做人的干部!',
        sim_text_count: 0,
        content: '任正非头图:新华网01华为大学的办学方针要从“培养制”转变为“选拔制”,干部员工有偿学习,自我提高恭喜大家成为华为大学第...',
        important_events: [],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml',
        publisher: '',
        date: '2021-03-23 07:23:40'
      },
      {
        id: 270,
        text_sentiment: '正面',
        title: '任正非:需要盯着做事的干部,而不是会做人的干部!',
        sim_text_count: 0,
        content: '任正非头图:新华网01华为大学的办学方针要从“培养制”转变为“选拔制”,干部员工有偿学习,自我提高恭喜大家成为华为大学第...',
        important_events: [],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
        url: 'https://news.sina.com.cn/c/2021-03-18/doc-ikknscsi7695212.shtml',
        publisher: '',
        date: '2021-03-23 07:23:40'
      }
    ]
  }
}

// 5.获取公司全名接口
const data05 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: [
    '深圳市中新赛克科技股份有限公司',
    '南京中新赛克科技有限责任公司',
    '南京中新赛克软件有限责任公司',
    '中新賽克（香港）有限公司',
    '江苏中新赛克工业互联网安全技术创新中心有限公司',
    '深圳市中新赛克科技股份有限公司南京分公司',
    '南京中新赛克科技有限责任公司北京分公司',
    '中科远拓科技有限公司',
    '南京中新赛克科技有限责任公司江宁分公司',
    '深圳市中新赛克网络有限公司',
    '中科远拓科技有限公司山西分公司',
    '中科远拓科技有限公司山东分公司',
    '甘肃中新赛克安全技术有限公司',
    '杭州赛客网络科技有限公司',
    '南京飞通网络科技有限公司',
    '南京锦添商业管理有限公司',
    '苏州迈科网络安全技术股份有限公司',
    '南京南审中新数据科技有限公司',
    '南京天数智弘科技有限公司',
    '苏州千视通视觉科技股份有限公司'
  ]
}

// 6.根据公司名称获取公司信息人员与机构接口
const data06 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    id: 5,
    shareholder_info: [
      '深圳市中新赛克科技股份有限公司'
    ],
    leading_member: [
      '凌东胜',
      '王明意',
      '李守宇',
      '伊恩江',
      '范峤峤',
      '陈峥'
    ],
    sub_companies: [
      '南京中新赛克科技有限责任公司北京分公司',
      '南京中新赛克科技有限责任公司江宁分公司'
    ]
  }
}

// 7.根据公司id获取公司详细属性接口，用于图谱节点查询
const data07 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    company_name: '南京中新赛克科技有限责任公司',
    id: 5,
    start_date: '2007-08-31 00: 00: 00 ',
    logo: 'http: //IP:PORT/osintelligence/dataset/getImage?company_id=5',
    status: '存续（在营、开业、在册）',
    listed_status: null,
    company_label: '存续#;#曾用名#;#高新技术企业#;#国家级专精特新小巨人企业',
    company_profile: null,
    legal_person: '凌东胜',
    credit_code: '913201146637848703',
    registration_number: '320114000004929',
    data_update_time: '2021-03-22 14: 33: 48',
    leading_member: [{
      KeyNo: 'pb2a3a6c018137569232f221b563f220',
      Name: '凌东胜',
      Job: '董事长 '
    },
    {
      KeyNo: 'pd8b164c2ca2a410caeb251d24f4a94a',
      Name: '王明意',
      Job: '董事兼总经理'
    }],
    shareholder_info: [{
      KeyNo: 'e66835d1241068be500d0243583a7a7a',
      StockName: '深圳市中新赛克科技股份有限公司',
      StockType: '企业法人',
      StockPercent: '100%',
      ShouldCapi: '30000',
      ShoudDate: '2018-01-10',
      InvestType: '',
      InvestName: null,
      RealCapi: null,
      CapiDate: null,
      TagsList: [
        '大股东',
        'A股|中新赛克 002912.SZ'
      ],
      FinalBenefitPercent: '100.00%',
      RelatedProduct: {
        Id: 'fa945a16-4b56-47d8-ad38-7f0ab7dff9ea',
        Name: '中新赛克',
        Round: 'IPO',
        FinancingCount: '3'
      },
      RelatedOrg: null
    }],
    sub_companies: [
      {
        CompanyId: '0b7d7c07a9bdc510e9efecf6f47ae2e5',
        RegNo: '91110108MA00478Q15',
        Name: '南京中新赛克科技有限责任公司北京分公司',
        BelongOrg: '北京市工商行政管理局海淀分局',
        CreditCode: null,
        OperName: null
      },
      {
        CompanyId: '3f7cd4769d2a45b74aa25b9253d26806',
        RegNo: '913201153393485248',
        Name: '南京中新赛克科技有限责任公司江宁分公司',
        BelongOrg: '南京市江宁区市场监督管理局',
        CreditCode: null,
        OperName: null
      }]
  }
}

// 8.根据caseid获取监控方案接口详情
const data08 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    name: '南京中新赛克科技有限公司监控方案',
    monitorwords: {
      company_name: '测试',
      company_id: '0',
      staffs: ['凌东胜1', '王明意1'],
      sub_companies: ['南京中新赛克有限责任公司北京分公司1', '南京中新赛克有限责任北京分公司1'],
      competitor_info: [{ 'id': '111444', 'name': '华为1' }],
      industry_info: [{ 'id': '121', 'name': '大数据11' }],
      technologies: ['java11', 'c++11']
    },
    excludewords: {
      words: ['排除词1']
    },
    alarmmode: {
      words: ['冻结1', '处罚1'],
      mediawords: ['新浪微博1'],
      authors: ['李嘉诚11']
    }
  }
}

// 9.查询企业详情信息接口
const data09 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    imageUrl: 'http://218.94.82.249:8089/osintelligence/dataset/getImage?company_id=5',
    company_name: '南京中新赛克科技有限责任公司',
    legal_person: '凌东胜',
    create_date: '2020-09-19',
    company_profile: '中新赛克，原名中兴特种，原系深圳市中兴通讯股份有限公司控股子公司，在南京设有研发中心，占地20余亩的研发基地将于2010年底交付并投入使用。\r\n中新赛克，专注于通信领域的安全细分市场，在经历了3-5年的飞速发展后，中新赛克已经成为国内网络安全市场最重要的力量之一，并在国际市场异军突起，目前已在亚洲、非洲、拉美等地区市场的实现关键布局。\r\n2005年3月，中兴特种正式开始运作。\r\n2005年4月，推出T40G、T64G、T160G分流专用设备，相关软件获深圳市科技和信息局颁发“软件产品登记证书”。\r\n2005年8月，公司被深圳市科技和信息局认定为深圳市“软件企业”。\r\n2006年6月，T240G推向市场。\r\n2006年9月，正式签署第一个海外合同。\r\n2006年10月，通过ISO9000认证。\r\n2007年7月，公司被深圳市科技和信息局认定为深圳市“高新技术企业”。\r\n2007年8月，宽带增值业务产品完成新市场的突破，签订国际市场大单。\r\n2008年9月，推出串并功能合一的分流设备4×10G单板。\r\n2008年，公司订货额超过1个亿。\r\n2009年3月，公司通过CMM3级正式评估。\r\n2009年7月，公司明确了在网络安全领域纵深发展的战略\r\n2009年8月，公司研发基地在吉山软件园奠基\r\n2009年底，完成国际市场在亚、非、拉美的全面布局\r\n2012年底，公司更名为南京中新赛克科技有限责任公司\r\n几年的励精图治，公司形成了以市场为导向、以产品研发为核心、以售后服务为保障、以管理为依托的各职能协同作战的组织体系框架；不断地战胜挑战、攻克难题、一次次地被委以重任，使公司在较短的时间里锤炼出了一支过百人的具有自主研发能力和极强创新能力的高素质研发队伍，他们中85%以上来自国家重点院校，硕士学历超过一半；百人的研发团队中校园招聘毕业生占50%，他们是公司最年轻的、最朝气蓬勃的、最具有战斗力和创造力的核心力量。\r\n热忱相邀，共创未来',
    data_update_time: '2021-03-22 14:33:48',
    business_graph: {
      node_array: [
        {
          id: 1,
          shape: 'circle',
          label: '公司名称公司名称公司名称'
        },
        { id: 2, shape: 'circle', label: '公司名称' }
      ],
      edge_array: [
        { from: 1, to: 2, label: '关系' }
      ]
    }
  }
}

// 10.查询竞争公司商业资讯信息接口
const data10 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    total: 1219,
    rows: [
      {
        id: 5501,
        title: '大数据日报（20191012）：亚马逊将打击假冒商品并支持监管人脸识别技术，LinkedIn利用AI自动生成照片文字描述',
        content: '亚马逊在周四发表的一篇长达1300字的博客文章中阐述了它在11个敏感问题上的立场。亚马逊表示其面部识别技术Rekognition会被滥用，并且应该迅速置于政府的监管框架之下。该技术可用于帮助寻找失踪儿童并确定儿童性交易的受害者。对于假冒产品，亚马逊敦促更严格的联邦法律对不良行为者进行处罚，同时强调要花费超过4亿美元来减少网站上的假冒产品数量。（新浪科技\n\n亚马逊技',
        website_name: '数据分析网',
        publisher: '大数据精选',
        date: '2019-10-12 00:00:00',
        url: 'https://www.afenxi.com/76650.html'
      },
      {
        id: 5505,
        title: '大数据日报（20191009）：美国将贸易黑名单扩大到中国多家AI初创公司，多伦多大学推出能模仿虫子爬行的软机器人',
        content: '美国将贸易黑名单扩大到包括多家中国顶级 AI 初创公司\n\n美国商务部今天宣布，将中国公安部门 20 单位与 8 家公司列入贸易黑名单，海康威视、大华科技、科大讯飞、旷视科技、商汤科技、美亚柏科、依图科技、颐信科技等 8 家中国高科技企业进入美国商务部所谓的「实体清单」。其中，海康威视高级副总裁、董秘黄方红回应称，强烈反对美国商务部把公司纳入实体清单，这个决定没有事实根据，呼吁美国政府本着公平、公正、无歧视的原则，重新进行审视，将海康威视移出实体清单。（venturebeat）\n\n',
        website_name: '数据分析网',
        publisher: '大数据精选',
        date: '2019-10-09 00:00:00',
        url: 'https://www.afenxi.com/76475.html'
      },
      {
        id: 5507,
        title: '大数据日报（20191008）：日经收购新加坡AI公司DC Frontiers，谷歌大脑的SummAE AI能够生成段落摘要',
        content: '来自谷歌大脑的研究团队推出了一个名为 SummAE 的抽象摘要系统，该系统基本上不受监督，能够从少量的训练数据到看不见的文字示例进行概括。研究人员声称，虽然该系统无法概括出仅由五个句子组成的段落，但仍在基线上进行了「显着」改进。',
        website_name: '数据分析网',
        publisher: '大数据精选',
        date: '2019-10-08 00:00:00',
        url: 'https://www.afenxi.com/76427.html'
      },
      {
        id: 5509,
        title: '大数据日报（20190927）：阿里云发布新一代AIoT智能设备操作系统 ，谷歌AI小组两项癌症病例研究登上自然杂志',
        content: '杭州数梦工场科技有限公司（简称「数梦工场」）宣布完成 B 轮融资，金额达 6 亿元人民币，公司估值达 15 亿美元。此轮融资由浙江省国企改革发展基金和浙商创投联合主投，融资资金将用于产品研发、人才引进和市场拓展等方向。数梦工场创立于 2015 年 3 月，总部位于杭州云栖小镇，在全国三十一个省市设有分支机构，在北京、杭州、南京、成都、广州、长沙成立技术创新中心。',
        website_name: '数据分析网',
        publisher: '大数据精选',
        date: '2019-09-27 00:00:00',
        url: 'https://www.afenxi.com/76370.html'
      },
      {
        id: 5510,
        title: '阿里云与Facebook达成合作，机器学习平台支持PyTorch',
        content: '市面上涌现出越来越多优秀的深度学习框架，而如何在云端快速获取、运用好深度学习框架，无疑又是未来的一大趋势。\n\nFacebook副总裁Bill jia认为，基于阿里云庞大的开发者生态，此次合作将进一步扩大PyTorch开源社区在国内研究人员及工程师社区的影响力，给用户带来更多技术支持，第一时间体验享受计算机视觉、自然语言处理和强化学习等领域源源不断的开发库与工具。',
        website_name: '数据分析网',
        publisher: 'Afenxi朋友们',
        date: '2019-09-26 00:00:00',
        url: 'https://www.afenxi.com/76021.html'
      },
      {
        id: 5511,
        title: 'AI企业服务公司循环智能完成A轮融资，真格基金领投',
        content: '对于 AI 企业服务有独到和深入的理解。\n\n循环智能联合创始人陈麒聪补充道：“作为一家拥有世界级 AI 人才的 AI 企业服务公司，我们更清楚AI 学习的秘密是不惧迭代更正错误，因此我们的团队也像 AI 一样学习。循环智能内部追求极致的开放与迭代，这样的文化使得优秀的年轻科学家和工程师与资深的高管能够互相吸引并在互相帮助下快速迭代。”',
        website_name: '数据分析网',
        publisher: 'Afenxi朋友们',
        date: '2019-09-26 00:00:00',
        url: 'https://www.afenxi.com/75854.html'
      },
      {
        id: 5879,
        title: '大数据与AI下的人力资源管理重构',
        content: '知识创造未来的同时，未来也在改变知识本身。\n\n本文来自微信公众号“CHO首席人才官”（ID：chomedia），作者 兰青秀。\n\n1“后工业社会”时代的互联网属性进化\n\n“后工业社会”是美国著名学者和思想家丹尼尔·贝尔提出的，其典型特点是',
        website_name: '数据分析网',
        publisher: '小胖',
        date: '2018-05-18 00:00:00',
        url: 'https://www.afenxi.com/52745.html'
      }
    ]
  }
}

export default {
  // 1.获取所有监控方案接口
  getData01: () => {
    return data01
  },
  // 2.删除监控方案接口
  getData02: () => {
    return data02
  },
  // 3.保存监控方案接口
  getData03: () => {
    return data03
  },
  // 4.根据条件查询舆情列表接口
  getData04: () => {
    return data04
  },
  // 5.获取公司全名接口
  getData05: () => {
    return data05
  },
  // 6.根据公司名称获取公司信息人员与机构接口
  getData06: () => {
    return data06
  },
  // 7.根据公司id获取公司详细属性接口，用于图谱节点
  getData07: () => {
    return data07
  },
  // 8.根据caseid获取监控方案详情
  getData08: () => {
    return data08
  },
  // 9.根据caseid获取企业详情
  getData09: () => {
    return data09
  },
  // 10.根据caseid获取查询竞争公司商业资讯信息接口
  getData10: () => {
    return data10
  }
}
