export function isStringEmptyOrNull(str: string | null | undefined): boolean {
    return str === null || str === undefined || str.trim() === '';
}