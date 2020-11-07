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
    await admin.firestore().collection('babyClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                babyClinic.push(json)
            });
        })
    await admin.firestore().collection('boneClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                boneClinic.push(json)
            });
        })
    
    await admin.firestore().collection('dentistClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                dentistClinic.push(json)
            });
        })
    await admin.firestore().collection('earNeckNoseClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                } 
                earNeckNoseClinic.push(json)
            });
        })
    
    await admin.firestore().collection('eyeClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                eyeClinic.push(json)
            });
        })

    await admin.firestore().collection('generalClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                generalClinic.push(json)
            });
        })
    
    await admin.firestore().collection('otherClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
                    }
                }
                otherClinic.push(json)
            });
        })

    await admin.firestore().collection('skinClinic').orderBy("socialdata.active", "desc").get()
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
                        profile : doc.data().socialdata.profile
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
    res.render('index',result)
}