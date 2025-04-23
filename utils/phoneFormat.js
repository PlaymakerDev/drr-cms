export const phoneFormat = (inputValue) => {
  // const digits = e.target.value.replace(/\D/g, '');
  const digits = inputValue.replace(/\D/g, '');

  // Format the phone number
  let formatted = '';

  if (digits.startsWith('02')) {
    // For numbers starting with 02
    if (digits.length <= 2) {
      formatted = digits;
    } else if (digits.length <= 5) {
      formatted = `${digits.slice(0, 2)}-${digits.slice(2)}`;
    } else if (digits.length <= 9) {
      formatted = `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5, 9)}`;
    } else {
      formatted = `${digits.slice(0, 2)}-${digits.slice(2, 5)}-${digits.slice(5, 9)}/${digits.slice(9)}`;
    }
  } else {
    // For other numbers
    if (digits.length <= 3) {
      formatted = digits;
    } else if (digits.length <= 6) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else if (digits.length <= 10) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    } else {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}/${digits.slice(10)}`;
    }
  }

  return formatted
}