export function arrayContains<T>(array: T[], value: T): boolean {
  return array.indexOf(value) > -1;
}
