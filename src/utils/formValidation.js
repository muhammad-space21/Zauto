
// Form Validation
export default function FormValidation(inputs) {
  let error = {};
  if (!inputs.fullname) {
    error.fullname = 'Ф. И. О отсутствует!';
  } else if (inputs.fullname.length < 15) {
    error.fullname = 'Ф. И. О должно быть более 15 символов!';
  };

  if (!inputs.phone) {
    error.phone = 'Ф. И. О отсутствует!';
  }

  return error;
};