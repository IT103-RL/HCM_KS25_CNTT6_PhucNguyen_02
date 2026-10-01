let currentReservationCode = "";
let isReservationValid = false;
let totalRevenue = 0, totalCheckouts = 0;

while (true) {
    let choice = prompt(
        "=== HỆ THỐNG LỄ TÂN KHÁCH SẠN SUNRISE HOTEL ===\n" +
        "1. Nhập và kiểm chuẩn mã đặt phòng\n" +
        "2. Tính tiền phòng lưu trú\n" +
        "3. Thẩm định mã thẻ khách may mắn\n" +
        "0. Thoát chương trình\n\n" +
        "Vui lòng chọn (0 - 3):"
    );
    choice = choice ? choice.trim() : null;
    if (choice === "0") {
        console.log(`Kết thúc ca. Doanh thu: ${totalRevenue} VNĐ | Trả phòng: ${totalCheckouts}`);
        break;
    }
    switch (choice) {
        case "1": {
            currentReservationCode = "";
            isReservationValid = false;
            let code = prompt("Nhập mã đặt phòng:");
            code = code ? code.trim().toUpperCase() : "";
            if (!code) console.log("Chưa nhập mã đặt phòng");
            else if (code.length < 6) console.log("Lỗi: Độ dài nhỏ hơn 6 ký tự");
            else if (!code.startsWith("HTL-")) console.log("Lỗi: Sai tiền tố \"HTL-\"");
            else if (code.includes(" ")) console.log("Lỗi: Chứa khoảng trắng ở giữa");
            else {
                currentReservationCode = code;
                isReservationValid = true;
                console.log(`Mã hợp lệ: ${code}`);
            }
            break;
        }
        case "2": {
            if (!isReservationValid) {
                console.log("Chưa có mã đặt phòng hợp lệ. Hãy chọn Case 1 trước!");
                break;
            }
            let nights = askInt("Nhập số đêm lưu trú:");
            if (nights === null) break;
            let price = askInt("Nhập giá phòng/đêm (VNĐ):");
            if (price === null) break;
            let baseCost = nights * price;
            let discount = Math.round(nights >= 4 ? baseCost * 0.1 : 0);
            let serviceFee = Math.round((baseCost - discount) * 0.08);
            let total = baseCost - discount + serviceFee;
            console.log(`\n--- HÓA ĐƠN ---
                        Mã: ${currentReservationCode}
                        Đêm: ${nights} | Giá: ${price} VNĐ
                        Chi phí CS: ${baseCost} VNĐ
                        Giảm giá: ${discount} VNĐ
                        Phí dịch vụ: ${serviceFee} VNĐ
                        TỔNG TT: ${total} VNĐ\n`);
            totalRevenue += total;
            totalCheckouts++;
            currentReservationCode = "";
            isReservationValid = false;
            break;
        }
        // case "3":
        //     break;





    }
}