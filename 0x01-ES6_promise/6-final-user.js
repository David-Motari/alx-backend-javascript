import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, filaName) {
  return [{ status: 'fulfilled', value: await signUpUser(firstName, lastName).then((objct) => objct) }, { status: 'rejected', value: await uploadPhoto(filaName).catch((error) => error.toString()) }];
}
