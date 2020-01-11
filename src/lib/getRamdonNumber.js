export default function getRamdonNumber(min, max, integer = true) {
    let r = Math.random() * (max - min + 1) + min;
    return integer ? parseInt(r) : parseFloat(r);
}
