// interfaz llamada interfaz  llamada ContactInfo  que defina un contacto: id, name y phoneNumber
interface ContactInfo {
  id: number;
  name: string;
  phoneNumber: string;
}
//  funcion ValidatePhoneNumber  debe validar el  numero de telefono de la interfaz contactInfo
function validatePhoneNumber(contactInfo: ContactInfo): boolean {
//  el numero de telefono debe tener 10 digitos y empezar con un 1
  return /^1\d{9}$/.test(contactInfo.phoneNumber);
}
