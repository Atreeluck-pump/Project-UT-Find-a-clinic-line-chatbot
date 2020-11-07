const admin = require('firebase-admin')    

module.exports = async (req, res) => {  
    var babyClinic = []
    var boneClinic = []
    var dentistClinic = []
    var earNeckNoseClinic = []
    var eyeClinic = []
    var generalClinic = []
    var otherClinic = []
    var skinClinic = []
    await admin.firestore().collection('babyClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                babyClinic.push(json)
            });
        })
    await admin.firestore().collection('boneClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                boneClinic.push(json)
            });
        })
    
    await admin.firestore().collection('dentistClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                dentistClinic.push(json)
            });
        })
    await admin.firestore().collection('earNeckNoseClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                earNeckNoseClinic.push(json)
            });
        })
    
    await admin.firestore().collection('eyeClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                eyeClinic.push(json)
            });
        })

    await admin.firestore().collection('generalClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                generalClinic.push(json)
            });
        })
    
    await admin.firestore().collection('otherClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                otherClinic.push(json)
            });
        })

    await admin.firestore().collection('skinClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                var json = {
                    clinic : doc.data().name,
                    information : {
                        address : doc.data().information.address,
                        category : doc.data().information.category,
                        owner : doc.data().information.owner,
                        tel : doc.data().information.tel,
                        เลขที่ใบอนุญาต : doc.data().information.เลขที่ใบอนุญาต,
                    },
                    socialdata :{
                        about : doc.data().socialdata.about,
                        active : doc.data().socialdata.active,
                        facebookpage : doc.data().socialdata.facebookpage,
                        link : doc.data().socialdata.link,
                        statuspage : doc.data().socialdata.statuspage,
                        tel : doc.data().socialdata.tel,
                    }
                }
                skinClinic.push(json)
            });
        })

    const result = {
        babyClinic: babyClinic,
        boneClinic: boneClinic,
        dentistClinic: dentistClinic,
        earNeckNoseClinic:earNeckNoseClinic,
        eyeClinic:eyeClinic,
        generalClinic:generalClinic,
        otherClinic:otherClinic,
        skinClinic:skinClinic
        }
    res.json(result)
    var sum = 0+babyClinic.length+boneClinic.length+dentistClinic.length+earNeckNoseClinic.length+eyeClinic.length+generalClinic.length+otherClinic.length+skinClinic.length
    console.log(babyClinic.length)
    console.log(boneClinic.length)
    console.log(dentistClinic.length)
    console.log(earNeckNoseClinic.length)
    console.log(eyeClinic.length)
    console.log(generalClinic.length)
    console.log(otherClinic.length)
    console.log(skinClinic.length)
    console.log("รวม "+sum)
}
