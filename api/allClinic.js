const admin = require('firebase-admin')    

module.exports = async (req, res) => {  
    var allClinic = []
    await admin.firestore().collection('allClinic').get()
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
                    },
                    diagnose :{
                        baby : doc.data().diagnose.baby,
                        bone : doc.data().diagnose.bone,
                        dentist : doc.data().diagnose.dentist,
                        earNeckNose : doc.data().diagnose.earNeckNose,
                        eye : doc.data().diagnose.eye,
                        general : doc.data().diagnose.general,
                        other : doc.data().diagnose.other,
                        skin : doc.data().diagnose.skin,
                    }
                }
                allClinic.push(json)
            });
        })
    
    res.json(allClinic)
    console.log(allClinic.length)
}
