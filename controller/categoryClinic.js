const admin = require('firebase-admin')

module.exports = async (req, res) => {
    const category = req.params.category
    const type = req.query.type
    const categoryClinic = categoryWord(category)
    var data = []
    if (type) {
        await admin.firestore().collection(category).orderBy("socialdata.active", "desc").get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().socialdata.statuspage == type) {
                        var json = {
                            clinic: doc.data().name,
                            information: {
                                address: doc.data().information.address,
                                category: doc.data().information.category,
                                owner: doc.data().information.owner,
                                tel: doc.data().information.tel,
                                เลขที่ใบอนุญาต: doc.data().information.เลขที่ใบอนุญาต,
                            },
                            socialdata: {
                                about: doc.data().socialdata.about,
                                active: doc.data().socialdata.active,
                                facebookpage: doc.data().socialdata.facebookpage,
                                link: doc.data().socialdata.link,
                                statuspage: doc.data().socialdata.statuspage,
                                tel: doc.data().socialdata.tel,
                            }
                        }
                        data.push(json)
                    }

                });
            })
    } else {
        await admin.firestore().collection(category).orderBy("socialdata.active", "desc").get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    var json = {
                        clinic: doc.data().name,
                        information: {
                            address: doc.data().information.address,
                            category: doc.data().information.category,
                            owner: doc.data().information.owner,
                            tel: doc.data().information.tel,
                            เลขที่ใบอนุญาต: doc.data().information.เลขที่ใบอนุญาต,
                        },
                        socialdata: {
                            about: doc.data().socialdata.about,
                            active: doc.data().socialdata.active,
                            facebookpage: doc.data().socialdata.facebookpage,
                            link: doc.data().socialdata.link,
                            statuspage: doc.data().socialdata.statuspage,
                            tel: doc.data().socialdata.tel,
                        }
                    }
                    data.push(json)
                });
            })
    }


    const result = {
        category1: category,
        category: categoryClinic,
        data: data
    }
    res.render('categoryClinic', result)
    //console.log(type)
}

function categoryWord(category) {
    if (category == 'boneClinic') {
        return 'คลินิกศัลยกรรมกระดูก'
    }
    if (category == 'boneClinic') {
        return 'คลินิกกระดูก'
    }
    if (category == 'dentistClinic') {
        return 'คลินิกทันตกรรม'
    }
    if (category == 'earNeckNoseClinic') {
        return 'คลินิกหู คอ จมูก'
    }
    if (category == 'eyeClinic') {
        return 'คลินิกตา'
    }
    if (category == 'generalClinic') {
        return 'คลินิกโรคทั่วไป'
    }
    if (category == 'otherClinic') {
        return 'คลินิกอื่น ๆ'
    }
    if (category == 'neckClinic') {
        return 'คลินิกคอ'
    }
    if (category == 'noseClinic') {
        return 'คลินิกจมูก'
    }
    if (category == 'skinClinic') {
        return 'คลินิกผิวหนัง'
    }
}