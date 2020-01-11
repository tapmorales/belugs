export default function getMedia() {
    let args = Array.from(arguments).filter(n => typeof n === "number");

    if (!args.length) return 0;
    let media =
        args.reduce((current, s) => {
            return current + s;
        }) / args.length;
    return media;
}
