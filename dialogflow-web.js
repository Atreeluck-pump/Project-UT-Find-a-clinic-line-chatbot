// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient, Payload} = require("dialogflow-fulfillment");

const admin = require('firebase-admin');
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://find-a-clinic-a0b17.firebaseio.com'
});
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
   function bodyMassIndex(agent) {
      let weight = request.body.queryResult.parameters.weight;
      let height = request.body.queryResult.parameters.height / 100;
      let bmi = (weight / (height * height)).toFixed(2);
      let result = "none";

      if (bmi < 18.5) {
        result = "s";
      } else if (bmi >= 18.5 && bmi <= 22.9) {
        result = "m";
      } else if (bmi >= 23 && bmi <= 24.9) {
        result = "l";
      } else if (bmi >= 25 && bmi <= 29.9) {
        result = "xl";
      } else if (bmi > 30) {
        result = "xxl";
      }
      const payloadJson = {
        type: "sticker",
        packageId: "11538",
        stickerId: "51626513"
      };

      let payload = new Payload(`LINE`, payloadJson, { sendAsMessage: true });

      return admin.firestore().collection('bmi').doc(result).get().then(doc => {
        agent.add(payload);
        agent.add(doc.data().description);
      });
   }
  
  function clinicGeneral(agent) {
    let a =[];
	return admin.firestore().collection('clinicGeneral').orderBy("name").limit(5).get().then(snapshot => {
      snapshot.forEach(doc => {
        a.push(doc.data());
        //agent.add(doc.data().name);
        
      });
      let payloadJson = clinicDataFiveRow(a);
      let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
      agent.add(payload);
    });
  }
  function clinicBone(agent) {
    let a = [];
	return admin.firestore().collection('clinicBone').orderBy("name").limit(5).get().then(snapshot => {
      snapshot.forEach(doc => {
        a.push(doc.data());
        //agent.add(doc.data().name);
        //agent.add(doc.data().socialdata.about);
      });
      let payloadJson = clinicDataFiveRow(a);
      let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
      agent.add(payload);
    });
  }
  function clinicEye(agent) {
    let a = [];
	return admin.firestore().collection('clinicEye').orderBy("name").limit(5).get().then(snapshot => {
      snapshot.forEach(doc => {
        a.push(doc.data());
        //agent.add(doc.data().name);
        //agent.add(doc.data().socialdata.about);
      });
      let payloadJson = clinicDataFiveRow(a);
      let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
      agent.add(payload);
    });
  }
  function clinicEar(agent) {
    let a = [];
	return admin.firestore().collection('clinicEar').orderBy("name").limit(5).get().then(snapshot => {
      snapshot.forEach(doc => {
        a.push(doc.data());
        //agent.add(doc.data().name);
        //agent.add(doc.data().socialdata.about);
      });
      let payloadJson = clinicDataFiveRow(a);
      let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
      agent.add(payload);
    });
  }
  function clinicNose(agent) {
    let a = [];
	return admin.firestore().collection('clinicNose').orderBy("name").limit(5).get().then(snapshot => {
      snapshot.forEach(doc => {
        a.push(doc.data());
        //agent.add(doc.data().name);
        //agent.add(doc.data().socialdata.about);
      });
      let payloadJson = clinicDataFiveRow(a);
      let payload = new Payload('LINE', payloadJson, { sendAsMessage: true });
      agent.add(payload);
    });
  }
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('Symptom - General - yes', clinicGeneral);
  intentMap.set('Symptom - Bone - yes', clinicBone);
  intentMap.set('Symptom - Eye - yes', clinicEye);
  intentMap.set('Symptom - Ear - yes', clinicEar);
  intentMap.set('Symptom - Nose - yes', clinicNose);
  intentMap.set('BMI - custom - yes', bodyMassIndex);
  agent.handleRequest(intentMap);
});
function sticker(){
  return {
        type: "sticker",
        packageId: "11538",
        stickerId: "51626513"
   };
}
function clinicDataFiveRow(a){
  return {
    "type": "flex",
    "altText": "Flex Message",
    "contents": {
      "type": "carousel",
      "contents": [
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
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
                "text": a[0].name,
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": a[0].socialdata.about,
                    "flex": 0,
                    "size": "xs",
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
                  "label": "โทรติดต่อ",
                  "uri": "https://www.youtube.com/"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Facebook page",
                  "uri": "https://www.youtube.com/"
                }
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
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
                "text": a[1].name,
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": a[1].socialdata.about,
                    "flex": 0,
                    "size": "xs",
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
                  "label": "โทรติดต่อ",
                  "uri": "https://www.youtube.com/"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Facebook page",
                  "uri": "https://www.youtube.com/"
                }
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
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
                "text": a[2].name,
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": a[2].socialdata.about,
                    "flex": 0,
                    "size": "xs",
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
                  "label": "โทรติดต่อ",
                  "uri": "https://www.youtube.com/"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Facebook page",
                  "uri": "https://www.youtube.com/"
                }
              }
            ]
          }
        },
        {
          "type": "bubble",
          "hero": {
            "type": "image",
            "url": "https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_5_carousel.png",
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
                "text": a[3].name,
                "size": "md",
                "weight": "bold",
                "wrap": true
              },
              {
                "type": "box",
                "layout": "baseline",
                "contents": [
                  {
                    "type": "text",
                    "text": a[3].socialdata.about,
                    "flex": 0,
                    "size": "xs",
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
                  "label": "โทรติดต่อ",
                  "uri": "https://www.youtube.com/"
                }
              },
              {
                "type": "button",
                "action": {
                  "type": "uri",
                  "label": "Facebook page",
                  "uri": "https://www.youtube.com/"
                }
              }
            ]
          }
        },
        {
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
                  "uri": "https://linecorp.com"
                },
                "flex": 1,
                "gravity": "center"
              }
            ]
          }
        }
      ]
    }
  };
}
