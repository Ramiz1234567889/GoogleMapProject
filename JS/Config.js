// Render html to the html
function addHtml(PumbInfo) {
  return `<div class="marker-window">
            <div class=${PumbInfo.Status ? "online" : "offline"}>${
    PumbInfo.Status ? "متاح" : "غير متاح"
  }</div>
            <span class="title">اسم الطرمبة:</span><span> ${
              PumbInfo.Pname
            }</span><br/>
            <span class="title">اسم صاحب الطرمبة:</span><span> ${
              PumbInfo.AdminName
            }</span><br/>
            <span class="title">رقم الهاتف:</span><span> ${
              PumbInfo.Phone
            }</span><br/>
            <div id="getService" onclick="openPopup()" class="service-btn">للحجز</div>
            </div>`;
}
