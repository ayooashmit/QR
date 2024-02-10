function generateQR() {
    var qrData = document.getElementById("qrData").value;
    
    if (!qrData) {
        alert("Please enter data for QR code generation.");
        return;
    }
    
    var qrCodeContainer = document.getElementById("qrCode");
    qrCodeContainer.innerHTML = "";
    
    var qrCode = new QRCode(qrCodeContainer, {
        text: qrData,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
    
    var downloadLink = document.getElementById("downloadLink");
    downloadLink.href = qrCodeContainer.childNodes[0].toDataURL("image/png");
    downloadLink.style.display = "inline";
}
