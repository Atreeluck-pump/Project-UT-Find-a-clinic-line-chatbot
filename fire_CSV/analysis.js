var wordcut = require('wordcut')
wordcut.init()

function checkDiagnoseGeneral(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['ทั่วไป', 'โรคทั่วไป', 'ผู้ใหญ่', 'อายุรกรรม']
  var dis = ['ฟัน', 'ทันตกรรม', 'ทันตแพทย์', 'รากฟัน', 'ทำฟัน']
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }

  for (let i = 0; i < 500; i++) {
    for (let k = 0; k < dis.length; k++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == dis[k]) {
          text = 'no'
        }
        if (facebookpageSplit[i] == dis[k]) {
          text = 'no'
        }
        if (storeSplit[i] == dis[k]) {
          text = 'no'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == dis[k]) {
          text = 'no'
        }
        if (storeSplit[i] == dis[k]) {
          text = 'no'
        }
      }
    }
  }

  return text
}
function checkDiagnoseSkin(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['ผิวหน้า', 'ผิวพรรณ', 'สิว', 'งาม', 'สวย']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}
function checkDiagnoseDentist(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['ฟัน', 'ทันตกรรม', 'ทันตแพทย์', 'รากฟัน', 'ทำฟัน']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}

function checkDiagnoseEarNeckNose(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['หู', 'คอ', 'จมูก', 'โสต', 'ศอ', 'นาสิก', 'ได้ยิน']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}
function checkDiagnoseEye(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['ตา', 'ต้อ', 'จักษุ']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}
function checkDiagnoseBone(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['กระดูก', 'ข้อ', 'มือ', 'กายภาพ']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}
function checkDiagnoseBaby(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['เด็ก', 'ทารก', 'แม่', 'ผดุงครรภ์']
  var dis = ['ฟัน', 'ทันตกรรม', 'ทันตแพทย์', 'รากฟัน', 'ทำฟัน']
  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }

  for (let i = 0; i < 500; i++) {
    for (let k = 0; k < dis.length; k++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == dis[k]) {
          text = 'no'
        }
        if (facebookpageSplit[i] == dis[k]) {
          text = 'no'
        }
        if (storeSplit[i] == dis[k]) {
          text = 'no'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == dis[k]) {
          text = 'no'
        }
        if (storeSplit[i] == dis[k]) {
          text = 'no'
        }
      }
    }
  }

  return text
}
function checkDiagnoseOther(store, about, facebookpage, statuspage) {
  const storeCut = wordcut.cut(store)
  const aboutCut = wordcut.cut(about)
  const facebookpageCut = wordcut.cut(facebookpage)
  const storeSplit = storeCut.split('|')
  const aboutSplit = aboutCut.split('|')
  const facebookpageSplit = facebookpageCut.split('|')
  var text = 'no'
  var check = ['จิตเวช', 'พยาธิ', 'สมอง', 'เสพติด', 'ซึมเศร้า', 'ประสาท', 'กายภาพ', 'ปัสสาวะ', 'เลือด', 'แผนไทย', 'ไทย']

  for (let i = 0; i < 500; i++) {
    for (let j = 0; j < check.length; j++) {
      if (statuspage == 'เพจทางการ') {
        if (aboutSplit[i] == check[j]) {
          text = 'yes'
        }
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      } else if (statuspage == 'เพจไม่เป็นทางการ') {
        if (facebookpageSplit[i] == check[j]) {
          text = 'yes'
        }
        if (storeSplit[i] == check[j]) {
          text = 'yes'
        }
      }
    }
  }
  return text
}
module.exports = {
  'checkDiagnoseGeneral': checkDiagnoseGeneral,
  'checkDiagnoseSkin': checkDiagnoseSkin,
  'checkDiagnoseDentist': checkDiagnoseDentist,
  'checkDiagnoseOther': checkDiagnoseOther,
  'checkDiagnoseEarNeckNose': checkDiagnoseEarNeckNose,
  'checkDiagnoseEye': checkDiagnoseEye,
  'checkDiagnoseBone': checkDiagnoseBone,
  'checkDiagnoseBaby': checkDiagnoseBaby
}
