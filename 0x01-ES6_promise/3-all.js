import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((objct) => console.log(`${objct[0].body} ${objct[1].firstName} ${objct[1].lastName}`))
    .catch(() => console.log('Signup system offline'));
}
