export class StringUtils {
  public static isStringNonEmpty(value: string): boolean {
    if (value !== '' && value !== undefined && value != null) {
      return true;
    } else { return false; }
  }
}
