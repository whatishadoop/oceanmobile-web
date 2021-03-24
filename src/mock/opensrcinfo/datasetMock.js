// 1.获取所有监控方案接口
const data01 = {
  errcode: '200',
  errmsg: '数据请求响应成功',
  data: {
    caseinfo: [
      {
        id: '4',
        name: '中新赛克11',
        start_time: '2021-03-23 16:40:12',
        latest_data_time: '2021-03-23 10:36:00'
      },
      {
        id: '1',
        name: '中新赛克',
        start_time: '2021-03-22 18:33:58',
        latest_data_time: '2021-03-23 10:36:00'
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
        important_events: [
          ''
        ],
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
        important_events: [
          ''
        ],
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
        important_events: [
          ''
        ],
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
        important_events: [
          ''
        ],
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
        important_events: [
          ''
        ],
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

// 7.根据公司id获取公司详细属性接口，用于图谱节点
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
  }
}
