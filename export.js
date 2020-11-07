const admin = require('firebase-admin')
var xl = require('excel4node');
var wb = new xl.Workbook();
var ws = wb.addWorksheet('Sheet 1');

module.exports = async (req, res) => {

    ws.cell(1, 1).string('ชื่อคลินิก');
    ws.cell(1, 2).string('เลขที่ใบอนุญาต');
    ws.cell(1, 3).string('ประเภท');
    ws.cell(1, 4).string('ที่อยู่');
    ws.cell(1, 5).string('แพทย์');
    ws.cell(1, 6).string('เบอร์โทร');
    ws.cell(1, 7).string('เฟซบุ๊ค');
    ws.cell(1, 8).string('ลิ้งค์');
    ws.cell(1, 9).string('เบอร์');
    ws.cell(1, 10).string('สถานะเพจ');
    ws.cell(1, 11).string('รายละเอียดเพจ');
    ws.cell(1, 12).string('เด็ก');
    ws.cell(1, 13).string('กระดูก');
    ws.cell(1, 14).string('ฟัน');
    ws.cell(1, 15).string('หู คอ จมูก');
    ws.cell(1, 16).string('ตา');
    ws.cell(1, 17).string('ทั่วไป');
    ws.cell(1, 18).string('ผิวหนัง');
    ws.cell(1, 19).string('อื่นๆ');
    
    var i = 1;
    await admin.firestore().collection('allClinic').get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                i++
                ws.cell(i, 1).string(doc.data().name);
                ws.cell(i, 2).string(doc.data().information.เลขที่ใบอนุญาต);
                ws.cell(i, 3).string(doc.data().information.category);
                ws.cell(i, 4).string(doc.data().information.address);
                ws.cell(i, 5).string(doc.data().information.owner);
                ws.cell(i, 6).string(doc.data().information.tel);
                ws.cell(i, 7).string(doc.data().socialdata.facebookpage);
                ws.cell(i, 8).string(doc.data().socialdata.link);
                ws.cell(i, 9).string(doc.data().socialdata.tel);
                ws.cell(i, 10).string(doc.data().socialdata.statuspage);
                ws.cell(i, 11).string(doc.data().socialdata.about);
                ws.cell(i, 12).string(doc.data().diagnose.baby);
                ws.cell(i, 13).string(doc.data().diagnose.bone);
                ws.cell(i, 14).string(doc.data().diagnose.dentist);
                ws.cell(i, 15).string(doc.data().diagnose.earNeckNose);
                ws.cell(i, 16).string(doc.data().diagnose.eye);
                ws.cell(i, 17).string(doc.data().diagnose.general);
                ws.cell(i, 18).string(doc.data().diagnose.skin);
                ws.cell(i, 19).string(doc.data().diagnose.other);
            });
        })
    wb.write('myfirstexcel.xlsx');
    wb.write('ExcelFile.xlsx', res);
}
