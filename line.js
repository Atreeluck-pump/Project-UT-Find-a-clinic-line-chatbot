const admin = require('firebase-admin')

module.exports = async (request, response) => {
  const { WebhookClient, Payload } = require('dialogflow-fulfillment')
  const agent = new WebhookClient({ request: request, response: response })
  process.env.DEBUG = 'dialogflow:debug'

  function welcome() {
    agent.add('Welcome to my agent!')
  }

  function bodyMassIndex(agent) {
    let weight = request.body.queryResult.parameters.weight
    let height = request.body.queryResult.parameters.height / 100
    let bmi = (weight / (height * height))
    let result = 'หนูไม่เข้าใจ'
    if (bmi < 18.5) {
      result = 'ผอมไปมั้ยล่ะ กินเยอะๆหน่อย'
    } else if (bmi >= 18.5 && bmi <= 22.9) {
      result = 'หุ่นดีจุง'
    } else if (bmi >= 23 && bmi <= 24.9) {
      result = 'เริ่มจะท้วมแล้วน๊า'
    } else if (bmi >= 25 && bmi <= 29.9) {
      result = 'อ้วนแล้วอ่ะ ออกกำลังกายหน่อยดิ'
    } else if (bmi < 30) {
      result = 'คุณอ้วนเกินไปละ ไปหาหมอมั้ย พาไป'
    }
    agent.add(result)
  }
  async function babyClinic(agent) {
    let a = []
    await admin.firestore().collection("babyClinic").orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกเด็กที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');
      })
  }
  async function boneClinic(agent) {
    let a = [];
    await admin.firestore().collection('boneClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกศัลยกรรมกระดูกที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }
  async function dentistClinic(agent) {
    let a = [];
    await admin.firestore().collection('dentistClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('5 คลินิกทันตกรรมที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }
  async function earNeckNoseClinic(agent) {
    let a = [];
    await admin.firestore().collection('earNeckNoseClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกหู คอ จมูก ที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }
  async function eyeClinic(agent) {
    let a = [];
    await admin.firestore().collection("eyeClinic").orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
          //console.log(doc.data())
          //console.log("--------")
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกตาที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
    //console.log(a[0].socialdata.active)
  }
  async function generalClinic(agent) {
    let a = [];
    await admin.firestore().collection('generalClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกโรคทั่วไปที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }
  async function otherClinic(agent) {
    let a = [];
    await admin.firestore().collection('otherClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกอื่นที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }
  async function skinClinic(agent) {
    let a = [];
    await admin.firestore().collection('skinClinic').orderBy("socialdata.active", "desc").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          a.push(doc.data());
        });
        let payloadJson = clinicDataFiveRow(a);
        let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
        agent.add('คลินิกผิวหนังที่แนะนำค่ะ');
        agent.add(payload);
        agent.add('ค้นหาเพิ่มเติมได้ที่เว็บไซต์นะคะ');

      })
  }

  let intentMap = new Map()
  intentMap.set('Default Welcome Intent', welcome)
  intentMap.set('BMI - custom - yes', bodyMassIndex)
  intentMap.set('Symptom - Baby - yes', babyClinic);
  intentMap.set('Symptom - Bone - yes', boneClinic);
  intentMap.set('Symptom - Dentist - yes', dentistClinic);
  intentMap.set('Symptom - EarNeckNose - yes', earNeckNoseClinic);
  intentMap.set('Symptom - Eye - yes', eyeClinic);
  intentMap.set('Symptom - General - yes', generalClinic);
  intentMap.set('Symptom - Other - yes', otherClinic);
  intentMap.set('Symptom - Skin - yes', skinClinic);
  agent.handleRequest(intentMap)
}

function clinicDataFiveRow(a, b) {
  var data = []

  for (let i = 0; i < a.length; i++) {
    if(i==9){
      break
    }
    if (a[i].socialdata.statuspage != "เพจไม่เป็นทางการ") {
      var b = {
        "type": "bubble",
        "direction": "ltr",
        "hero": {
          "type": "image",
          "url": a[i].socialdata.profile,
          "size": "full",
          "aspectRatio": "20:13",
          "aspectMode": "cover"
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "text",
              "text": a[i].name,
              "size": "sm",
              "align": "start",
              "weight": "bold",
              "wrap": true
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "icon",
                  "url": "https://us-central1-find-a-clinic-a0b17.cloudfunctions.net/app/images/icon/hospital.png",
                  "margin": "xs",
                  "aspectRatio": "2:1"
                },
                {
                  "type": "text",
                  "text": a[i].socialdata.about,
                  "size": "xs",
                  "weight": "regular",
                  "color": "#999999",
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "แพทย์",
                  "size": "xs",
                  "color": "#AAAAAA",
                  "wrap": true
                },
                {
                  "type": "text",
                  "text": a[i].information.owner,
                  "size": "xs",
                  "weight": "regular",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "เบอร์",
                  "size": "xs",
                  "color": "#AAAAAA",
                  "wrap": true
                },
                {
                  "type": "text",
                  "text": a[i].information.tel,
                  "size": "xs",
                  "weight": "regular",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "เบอร์",
                  "size": "xs",
                  "color": "#AAAAAA",
                  "wrap": true
                },
                {
                  "type": "text",
                  "text": a[i].socialdata.tel,
                  "size": "xs",
                  "weight": "regular",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            },
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "ที่ตั้ง",
                  "size": "xs",
                  "color": "#AAAAAA",
                  "wrap": true
                },
                {
                  "type": "text",
                  "text": a[i].information.address,
                  "size": "xs",
                  "weight": "regular",
                  "color": "#666666",
                  "wrap": true
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "uri",
                "label": "Facebook page",
                "uri": a[i].socialdata.link,
              },
              "color": "#1E90FF",
              "style": "primary"
            }
          ]
        }
      }
      data.push(b)
      // console.log(a[i].socialdata.active)
      // console.log(a[i].socialdata.statuspage)
    }
    
  }
  var end = {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "sm",
      "contents": [
        {
          "type": "button",
          "action": {
            "type": "uri",
            "label": "See more",
            "uri": "line://app/1595407589-0q9ZW8jR"
          },
          "gravity": "center"
        }
      ]
    }
  }
  data.push(end)
  var result = {
    "type": "flex",
    "altText": "รายชื่อคลินิก",
    "contents": {
      "type": "carousel",
      "contents": data
    }
  }
  return result
}