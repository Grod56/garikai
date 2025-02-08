export function removeMarkup(markedUpText: string,): string {
    const regex: RegExp = /(<([^>]+)>)/gi;
    return markedUpText.replace(regex, "");
}