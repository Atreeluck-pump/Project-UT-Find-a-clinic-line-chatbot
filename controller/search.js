const admin = require('firebase-admin')    
var wordcut = require('wordcut')
wordcut.init()

module.exports = async (req, res) => {  
    const search = req.body.search
    const clinicDetect = search.replace(/คลินิก/g,'');
    const clinicCut = wordcut.cut(clinicDetect)
    const querySearch = clinicCut.split('|')
    console.log(querySearch.length)

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
                }
            }
        });
    })

    res.render('search')
}
