export default function validateEmail(email: string) {
  return /^\w+@\w+(\.\w+)+$/i.test(email);
}