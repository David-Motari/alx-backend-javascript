import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let pht;
  let usr;
  try {
    pht = await uploadPhoto();
    usr = await createUser();
  } catch (e) {
    pht = null;
    usr = null;
  }

  return ({ photo: pht, user: usr });
}
