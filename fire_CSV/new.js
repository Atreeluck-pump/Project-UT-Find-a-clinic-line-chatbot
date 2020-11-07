// import firestore
const admin = require('firebase-admin')
const csv = require('csvtojson')
const { checkDiagnoseGeneral, checkDiagnoseSkin, checkDiagnoseDentist, checkDiagnoseHeart, checkDiagnoseEarNeckNose, checkDiagnoseEye, checkDiagnoseBone ,checkDiagnoseBaby} = require('./analysis')

module.exports = async (request, response) => {

// import csvtojson
const csvFilePath = await './fire_CSV/clinicCSV.csv'

await csv().fromFile(csvFilePath).then((jsonObj) => {
    for (let i = 0; i < jsonObj.length; i++) {
    //for (let i = 0; i <1; i++) {
        if(jsonObj[i].Facebookpage){
            let db = admin.firestore()
            var store = checkDataInput(jsonObj[i].ชื่อสถานพยาบาล)
            var about = checkDataInput(jsonObj[i].Aboutfrompage)
            var facebookpage = checkDataInput(jsonObj[i].Urlfacebookpage)
            var statuspage = checkDataInput(jsonObj[i].สถานะ)
            if(checkDiagnoseGeneral(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('generalClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            
            if(checkDiagnoseSkin(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('skinClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: checkDataInput(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseDentist(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('dentistClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseHeart(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('heartClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseEarNeckNose(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('earNeckNoseClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseEye(store, about, facebookpage,statuspage,statuspage) =='yes'){
                let docRef = db.collection('eyeClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseBone(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('boneClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }
            if(checkDiagnoseBaby(store, about, facebookpage,statuspage) =='yes'){
                let docRef = db.collection('babyClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
                let setAda = docRef.set({
                    name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                    information: {
                        เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                        owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                        address: checkDataInput(jsonObj[i].ที่อยู่),
                        tel: checkDataInput(jsonObj[i].โทรศัพท์),
                        category: checkDataInput(jsonObj[i].ประเภท)
                    },
                    socialdata: {
                        facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                        link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                        about: checkDataInput(jsonObj[i].Aboutfrompage),
                        tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                        active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                        statuspage: checkDataInput(jsonObj[i].สถานะ),
                        profile: checkUrlInput(jsonObj[i].UrlProfile)
                    },
                })
            }

            //up all clinic
            let docRef = db.collection('allClinic').doc(`${jsonObj[i].ชื่อสถานพยาบาล}`)
            let setAda = docRef.set({
                name:   checkDataInput(jsonObj[i].ชื่อสถานพยาบาล),
                information: {
                เลขที่ใบอนุญาต: checkDataInput(jsonObj[i].เลขที่ใบอนุญาต),
                owner: checkDataInput(jsonObj[i].ผู้ประกอบกิจการ),
                address: checkDataInput(jsonObj[i].ที่อยู่),
                tel: checkDataInput(jsonObj[i].โทรศัพท์),
                category: checkDataInput(jsonObj[i].ประเภท)
                },
                socialdata: {
                facebookpage: checkDataInput(jsonObj[i].Facebookpage),
                link: checkUrlInput(jsonObj[i].Urlfacebookpage),
                about: checkDataInput(jsonObj[i].Aboutfrompage),
                tel: checkDataInput(jsonObj[i].เบอร์โทรศัพท์),
                active: convertTime(jsonObj[i].เวลาเช็คอินล่าสุด),
                statuspage: checkDataInput(jsonObj[i].สถานะ),
                profile: checkUrlInput(jsonObj[i].UrlProfile)
                },
                diagnose: {
                general: checkDiagnoseGeneral(store, about, facebookpage,statuspage),
                skin: checkDiagnoseSkin(store, about, facebookpage,statuspage),
                dentist: checkDiagnoseDentist(store, about, facebookpage,statuspage),
                heart: checkDiagnoseHeart(store, about, facebookpage,statuspage),
                earNeckNose: checkDiagnoseEarNeckNose(store, about, facebookpage,statuspage),
                eye: checkDiagnoseEye(store, about, facebookpage,statuspage),
                bone: checkDiagnoseBone(store, about, facebookpage,statuspage),
                baby: checkDiagnoseBaby(store, about, facebookpage,statuspage)
                }
            })
        }
      
    }
  })
  console.log("update susscess")
  response.send("update susscess")
}
  function checkDataInput(text){
    if(text == ''){
        return '-'
    }else{
        return text
    }
  }

  function checkUrlInput(text){
    if(text == ''){
        return 'https://-'
    }else{
        return text
    }
  }
  function convertTime(text){
      
    if(text == ''){
        return 0
    }else{
        const vv = text.split('/')
        const pp = vv[1]+"/"+vv[0]+"/"+vv[2]
        var timeStamp = new Date(pp).getTime()
        return timeStamp
    }
  }
