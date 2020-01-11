export default function getMedia() {
    let args = Array.from(arguments).filter(n => typeof n === "number");

    if (!args.length) return "0.00";
    let media =
        args.reduce((current, sum) => {
            return current + sum;
        }) / args.length;
    return media;
}
