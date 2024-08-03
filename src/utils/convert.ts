export default {
  isBinaryStringUsingSet(str: string) {
    // Cria um set de caracteres da String
    const charSet = new Set(str);
    // Checa se o char só contém '0' e '1'
    for (const char of charSet) {
        if (char !== '0' && char !== '1') {
            return false;
        }
    }
    return true;
  },

  isDecimal (value: string): boolean {
    return !isNaN(parseInt(value)) && isFinite(Number(value))
  },

  toBinary (value: string): string {
    const isValid = this.isDecimal(value)
    if (isValid) {
      return Number(value).toString(2)
    }
    return 'Por favor, insira um numero decimal valido.'
  },

  toDecimal (value: string): string {
   const isValid = this.isBinaryStringUsingSet(value)
   if (isValid) {
    return parseInt(value, 2).toString()
   }
   return 'Por favor, insira um numero binário valido.'
  }
}