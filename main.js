
const ism = prompt("Ismingizni kiriting:");
const harf = prompt("Tekshirmoqchi bo'lgan harfni kiriting:");


if (ism.includes(harf)) {
    alert(`'${harf}' harfi ${ism} ismida mavjud.`);
} else {
    alert(`'${harf}' harfi ${ism} ismida mavjud emas.`);
}
