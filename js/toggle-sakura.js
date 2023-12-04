let sakuraEnabled = true;

function toggleSakura() {
  if(sakuraEnabled) {
    // 关闭樱花
    disableSakura();
    sakuraEnabled = false;
  } else {  
    // 打开樱花
    enableSakura();
    sakuraEnabled = true;
  }
}