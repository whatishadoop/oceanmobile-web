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
        content: '任正非头图:新华网01华为大学的办学方针要从“培养制”转变为“选拔制”,干部员工有偿学习,自我提高恭喜大家成为华为大学第...',
        important_events: [
          ''
        ],
        match_key_words: [
          '任正非',
          '华为'
        ],
        website_name: '搜狗微信',
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
