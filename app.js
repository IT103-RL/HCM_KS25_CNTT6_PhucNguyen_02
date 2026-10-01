let currentReservationCode ="";
let isReservationValid = false;
let totalRevenue = 0;
let totalCheckouts = 0;

while (true) {
    let choice= prompt(
        "================================" +
        "HỆ THỐNG LỄ TÂN KHÁCH SẠN SUNRISE HOTEL" +
        "================================" +
        "1. Nhập và kiểm chuẩn mã đặt phòng" +
        "2. Tính tiền phòng lưu trú" +
        "3. Thẩm định mã thẻ khách may mắn" +
        "0. Thoát chương trình"
    );
    choice = choice ? choice.trim() : null;
    if (choice === "0") {
        console.log("Kết thúc ca. Doanh thu là: ${totalRevenue} VNĐ | Trả phòng: ${totalCheckouts}");
        break;
    }
    switch (choice) {
        case "1":
            currentReservationCode =""
            isReservationValid = false
            break;
        case "2":
            break;
        
        case "0":
            break;

    }












    
}








































