export function calcAge(birthYear: number): number {
    return new Date().getFullYear() - birthYear;
}
