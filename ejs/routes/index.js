// const router = require('koa-router')()

// router.get('/', async (ctx, next) => {
//   await ctx.render('index', {
//     title: 'Hello Koa 2!'
//   })
// })

// router.get('/string', async (ctx, next) => {
//   ctx.body = 'koa2 string'
// })

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

// module.exports = router
const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

router.post('/city', async(ctx, next) => {
  var data = [{
          region: {
              name: '北京市',
              code: '11',
              state: [{
                  name: '北京',
                  code: '01',
                  city: [
                      { name: '东城区', code: '01' },
                      { name: '西城区', code: '02' },
                      { name: '崇文区', code: '03' },
                      { name: '宣武区', code: '04' },
                      { name: '朝阳区', code: '05' },
                      { name: '丰台区', code: '06' },
                      { name: '石景山区', code: '07' },
                      { name: '海淀区', code: '08' },
                      { name: '门头沟区', code: '09' },
                      { name: '房山区', code: '11' },
                      { name: '通州区', code: '12' },
                      { name: '顺义区', code: '13' },
                      { name: '昌平区', code: '14' },
                      { name: '大兴区', code: '15' },
                      { name: '怀柔区', code: '16' },
                      { name: '平谷区', code: '17' },
                      { name: '密云县', code: '28' },
                      { name: '延庆县', code: '29' }
                  ]
              }]
          }
      },
      {
          region: {
              name: '天津市',
              code: '12',
              state: [{
                  name: '天津',
                  code: '01',
                  city: [
                      { name: '和平区', code: '01' },
                      { name: '河东区', code: '02' },
                      { name: '河西区', code: '03' },
                      { name: '南开区', code: '04' },
                      { name: '河北区', code: '05' },
                      { name: '红桥区', code: '06' },
                      { name: '塘沽区', code: '07' },
                      { name: '汉沽区', code: '08' },
                      { name: '大港区', code: '09' },
                      { name: '东丽区', code: '10' },
                      { name: '西青区', code: '11' },
                      { name: '津南区', code: '12' },
                      { name: '北辰区', code: '13' },
                      { name: '武清区', code: '14' },
                      { name: '宝坻区', code: '15' },
                      { name: '宁河县', code: '21' },
                      { name: '静海县', code: '23' },
                      { name: '蓟县', code: '25' }
                  ]
              }]
          }
      },
      {
          region: {
              name: '河北省',
              code: '13',
              state: [{
                      name: '石家庄市',
                      code: '01',
                      city: [
                          { name: '长安区', code: '02' },
                          { name: '桥东区', code: '03' },
                          { name: '桥西区', code: '04' },
                          { name: '新华区', code: '05' },
                          { name: '井陉矿区', code: '07' },
                          { name: '裕华区', code: '08' },
                          { name: '井陉县', code: '21' },
                          { name: '正定县', code: '23' },
                          { name: '栾城县', code: '24' },
                          { name: '行唐县', code: '25' },
                          { name: '灵寿县', code: '26' },
                          { name: '高邑县', code: '27' },
                          { name: '深泽县', code: '28' },
                          { name: '赞皇县', code: '29' },
                          { name: '无极县', code: '30' },
                          { name: '平山县', code: '31' },
                          { name: '元氏县', code: '32' },
                          { name: '赵县', code: '33' },
                          { name: '辛集市', code: '81' },
                          { name: '藁城市', code: '82' },
                          { name: '晋州市', code: '83' },
                          { name: '新乐市', code: '84' },
                          { name: '鹿泉市', code: '85' }
                      ]
                  },
                  {
                      name: '唐山市',
                      code: '02',
                      city: [
                          { name: '路南区', code: '02' },
                          { name: '路北区', code: '03' },
                          { name: '古冶区', code: '04' },
                          { name: '开平区', code: '05' },
                          { name: '丰南区', code: '07' },
                          { name: '丰润区', code: '08' },
                          { name: '滦县', code: '23' },
                          { name: '滦南县', code: '24' },
                          { name: '乐亭县', code: '25' },
                          { name: '迁西县', code: '27' },
                          { name: '玉田县', code: '29' },
                          { name: '唐海县', code: '30' },
                          { name: '遵化市', code: '81' },
                          { name: '迁安市', code: '83' }
                      ]
                  },
                  {
                      name: '秦皇岛市',
                      code: '03',
                      city: [
                          { name: '海港区', code: '02' },
                          { name: '山海关区', code: '03' },
                          { name: '北戴河区', code: '04' },
                          { name: '青龙满族自治县', code: '21' },
                          { name: '昌黎县', code: '22' },
                          { name: '抚宁县', code: '23' },
                          { name: '卢龙县', code: '24' }
                      ]
                  },
                  {
                      name: '邯郸市',
                      code: '04',
                      city: [
                          { name: '邯山区', code: '02' },
                          { name: '丛台区', code: '03' },
                          { name: '复兴区', code: '04' },
                          { name: '峰峰矿区', code: '06' },
                          { name: '邯郸县', code: '21' },
                          { name: '临漳县', code: '23' },
                          { name: '成安县', code: '24' },
                          { name: '大名县', code: '25' },
                          { name: '涉县', code: '26' },
                          { name: '磁县', code: '27' },
                          { name: '肥乡县', code: '28' },
                          { name: '永年县', code: '29' },
                          { name: '邱县', code: '30' },
                          { name: '鸡泽县', code: '31' },
                          { name: '广平县', code: '32' },
                          { name: '馆陶县', code: '33' },
                          { name: '魏县', code: '34' },
                          { name: '曲周县', code: '35' },
                          { name: '武安市', code: '81' }
                      ]
                  },
                  {
                      name: '邢台市',
                      code: '05',
                      city: [
                          { name: '桥东区', code: '02' },
                          { name: '桥西区', code: '03' },
                          { name: '邢台县', code: '21' },
                          { name: '临城县', code: '22' },
                          { name: '内丘县', code: '23' },
                          { name: '柏乡县', code: '24' },
                          { name: '隆尧县', code: '25' },
                          { name: '任县', code: '26' },
                          { name: '南和县', code: '27' },
                          { name: '宁晋县', code: '28' },
                          { name: '巨鹿县', code: '29' },
                          { name: '新河县', code: '30' },
                          { name: '广宗县', code: '31' },
                          { name: '平乡县', code: '32' },
                          { name: '威县', code: '33' },
                          { name: '清河县', code: '34' },
                          { name: '临西县', code: '35' },
                          { name: '南宫市', code: '81' },
                          { name: '沙河市', code: '82' }
                      ]
                  },
                  {
                      name: '保定市',
                      code: '06',
                      city: [
                          { name: '新市区', code: '02' },
                          { name: '北市区', code: '03' },
                          { name: '南市区', code: '04' },
                          { name: '满城县', code: '21' },
                          { name: '清苑县', code: '22' },
                          { name: '涞水县', code: '23' },
                          { name: '阜平县', code: '24' },
                          { name: '徐水县', code: '25' },
                          { name: '定兴县', code: '26' },
                          { name: '唐县', code: '27' },
                          { name: '高阳县', code: '28' },
                          { name: '容城县', code: '29' },
                          { name: '涞源县', code: '30' },
                          { name: '望都县', code: '31' },
                          { name: '安新县', code: '32' },
                          { name: '易县', code: '33' },
                          { name: '曲阳县', code: '34' },
                          { name: '蠡县', code: '35' },
                          { name: '顺平县', code: '36' },
                          { name: '博野县', code: '37' },
                          { name: '雄县', code: '38' },
                          { name: '涿州市', code: '81' },
                          { name: '定州市', code: '82' },
                          { name: '安国市', code: '83' },
                          { name: '高碑店市', code: '84' }
                      ]
                  },
                  {
                      name: '张家口市',
                      code: '07',
                      city: [
                          { name: '桥东区', code: '02' },
                          { name: '桥西区', code: '03' },
                          { name: '宣化区', code: '05' },
                          { name: '下花园区', code: '06' },
                          { name: '宣化县', code: '21' },
                          { name: '张北县', code: '22' },
                          { name: '康保县', code: '23' },
                          { name: '沽源县', code: '24' },
                          { name: '尚义县', code: '25' },
                          { name: '蔚县', code: '26' },
                          { name: '阳原县', code: '27' },
                          { name: '怀安县', code: '28' },
                          { name: '万全县', code: '29' },
                          { name: '怀来县', code: '30' },
                          { name: '涿鹿县', code: '31' },
                          { name: '赤城县', code: '32' },
                          { name: '崇礼县', code: '33' }
                      ]
                  },
                  {
                      name: '承德市',
                      code: '08',
                      city: [
                          { name: '双桥区', code: '02' },
                          { name: '双滦区', code: '03' },
                          { name: '鹰手营子矿区', code: '04' },
                          { name: '承德县', code: '21' },
                          { name: '兴隆县', code: '22' },
                          { name: '平泉县', code: '23' },
                          { name: '滦平县', code: '24' },
                          { name: '隆化县', code: '25' },
                          { name: '丰宁满族自治县', code: '26' },
                          { name: '宽城满族自治县', code: '27' },
                          { name: '围场满族蒙古族自治县', code: '28' }
                      ]
                  },
                  {
                      name: '沧州市',
                      code: '09',
                      city: [
                          { name: '新华区', code: '02' },
                          { name: '运河区', code: '03' },
                          { name: '沧县', code: '21' },
                          { name: '青县', code: '22' },
                          { name: '东光县', code: '23' },
                          { name: '海兴县', code: '24' },
                          { name: '盐山县', code: '25' },
                          { name: '肃宁县', code: '26' },
                          { name: '南皮县', code: '27' },
                          { name: '吴桥县', code: '28' },
                          { name: '献县', code: '29' },
                          { name: '孟村回族自治县', code: '30' },
                          { name: '泊头市', code: '81' },
                          { name: '任丘市', code: '82' },
                          { name: '黄骅市', code: '83' },
                          { name: '河间市', code: '84' }
                      ]
                  },
                  {
                      name: '廊坊市',
                      code: '10',
                      city: [
                          { name: '安次区', code: '02' },
                          { name: '广阳区', code: '03' },
                          { name: '固安县', code: '22' },
                          { name: '永清县', code: '23' },
                          { name: '香河县', code: '24' },
                          { name: '大城县', code: '25' },
                          { name: '文安县', code: '26' },
                          { name: '大厂回族自治县', code: '28' },
                          { name: '霸州市', code: '81' },
                          { name: '三河市', code: '82' }
                      ]
                  },
                  {
                      name: '衡水市',
                      code: '11',
                      city: [
                          { name: '桃城区', code: '02' },
                          { name: '枣强县', code: '21' },
                          { name: '武邑县', code: '22' },
                          { name: '武强县', code: '23' },
                          { name: '饶阳县', code: '24' },
                          { name: '安平县', code: '25' },
                          { name: '故城县', code: '26' },
                          { name: '景县', code: '27' },
                          { name: '阜城县', code: '28' },
                          { name: '冀州市', code: '81' },
                          { name: '深州市', code: '82' }
                      ]
                  }
              ]
          }
      }
  ]
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
  if (ctx.request.body.level == "province") {
      ctx.body = data;
  }

  if (ctx.request.body.level == "city") {
      console.log(ctx.request.body.level)
      for (var i = 0; i < data.length; i++) {
          if (data[i].region.code == ctx.request.body.code) {
              ctx.body = data[i].region.state;
              break;
          }
      }
  }
  if (ctx.request.body.level == "county") {
      for (var i = 0; i < data.length; i++) {
          if (data[i].region.code == ctx.request.body.province) {
              for (var j = 0; j < data[i].region.state.length; j++) {
                  if (data[i].region.state[j].code == ctx.request.body.code) {
                      ctx.body = data[i].region.state[j].city;
                      break;
                  }
              }
              break;
          }
      }
  }
})

module.exports = router
